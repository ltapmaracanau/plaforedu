import { useEffect, useState, useMemo, useCallback } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import {
  Card,
  Space,
  Table,
  Select,
  Modal,
  Descriptions,
  Button,
  List,
  DatePicker,
  ConfigProvider,
} from "antd";
import { FileSyncOutlined } from "@ant-design/icons";
import HistoricoItens from "./HistoricoItens";
import services from "../../services";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import locale from "antd/locale/pt_BR";
import CourseModalVisualization from "../CourseModalVisualization";

dayjs.locale("pt-br");

export default function SystemLog() {
  const { RangePicker } = DatePicker;

  const getLastCoursesTrailsChanges = useStoreActions(
    (actions) => actions.adm.getLastCoursesTrailsChanges
  );
  const lastDataChanges = useStoreState((state) => state.adm.lastDataChanges);
  const loadingLastChanges = useStoreState(
    (state) => state.adm.loadingLastChanges
  );

  const categoriaOptions = [
    { value: "COURSE", label: "Cursos" },
    { value: "FORMATIVE_TRAIL", label: "Trilhas" },
    { value: "DOCUMENTS", label: "Documentos" },
  ];

  const actionOptions = useMemo(() => {
    return [
      {
        value: "CREATION",
        label: "Criação",
      },
      {
        value: "UPDATE",
        label: "Atualização",
      },
      {
        value: "FILING",
        label: "Arquivamento",
      },
      {
        value: "ACTIVATION",
        label: "Ativação",
      },
      {
        value: "DELETION",
        label: "Remoção",
      },
      {
        value: "TURN_PENDING",
        label: "Torn. Pendente",
      },
    ];
  }, []);

  const labelAction = useMemo(() => {
    return {
      CREATION: "Criação",
      ACTIVATION: "Ativação",
      UPDATE: "Atualização",
      FILING: "Arquivamento",
      DELETION: "Remoção",
      TURN_PENDING: "Tornado Pendente",
    };
  }, []);

  const [pageNumber, setPageNumber] = useState(1);
  const [categoria, setCategoria] = useState(categoriaOptions[0].value);
  const [action, setAction] = useState(actionOptions[0].value);
  const [users, setUsers] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeClickRow, setActiveClickRow] = useState(true);
  const [itemHistorico, setItemHistorico] = useState(null);
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [visible, setVisible] = useState(false);

  const columnsTable = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "nameColumn",
    },
    {
      title: "Ação",
      dataIndex: "action",
      key: "actionColumn",
    },
    {
      title: "Data da ação",
      dataIndex: "date",
      key: "actionDateColumn",
    },
    {
      title: "Usuário",
      dataIndex: "userName",
      key: "userColumn",
    },
    {
      key: "seeHistory",
      render: (text) => (
        <Space size="middle">
          <Button
            key={text.id}
            onMouseEnter={() => {
              setActiveClickRow(false);
            }}
            onMouseLeave={() => {
              setActiveClickRow(true);
            }}
            onClick={() => {
              setItemHistorico(text);
            }}
            icon={<FileSyncOutlined />}
          >
            Histórico
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getLastCoursesTrailsChanges({
      page: pageNumber,
      type: categoria,
      action: action,
      users: users,
      initialDate: initialDate,
      finalDate: finalDate,
    });
  }, [getLastCoursesTrailsChanges]);

  const dataFormatada = (data) => {
    if (data != null) {
      const date = new Date(data);
      const formattedDate = date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      return formattedDate;
    }
    return null;
  };

  const lastDataChangesFiltered = useMemo(() => {
    const data = [];

    if (lastDataChanges.data != null) {
      lastDataChanges.data.map((item) => {
        data.push({
          id: item.id,
          name: item.entity.name,
          action: labelAction[item.action],
          date: dataFormatada(item.date),
          userName: item.user.name,
          userId: item.userId,
          itemId: item.entity.id,
        });
      });
    }
    return data;
  }, [labelAction, lastDataChanges.data]);

  const usuarioOptions = useMemo(() => {
    const userIds = [];
    const usuarios = [];
    const usOptions = [];

    lastDataChangesFiltered.map((entity) => {
      if (!userIds.includes(entity.userId)) {
        usuarios.push(entity.userName);
        userIds.push(entity.userId);
      }
    });

    userIds.map((userId, index) => {
      usOptions.push({
        label: usuarios[index],
        value: userId,
      });
    });
    return usOptions;
  }, [lastDataChangesFiltered]);

  const coursesSelectedItems = useCallback(() => {
    return selectedItem.cursos.map((curso) => {
      if (curso.status === "ACTIVE")
        return <li key={curso.name}>{curso.name}</li>;
    });
  }, [selectedItem]);

  const descriptionItems = useMemo(() => {
    if (!loadingLastChanges && selectedItem) {
      return categoria === categoriaOptions[0].value
        ? [
            {
              key: "name",
              label: "Nome",
              children: selectedItem.name,
            },
            {
              key: "description",
              label: "Descrição",
              children: selectedItem.description,
            },
            {
              key: "",
              label: "Carga horária",
              children: selectedItem.hours,
            },
            {
              key: "instituitions",
              label: "Instituições Certificadoras",
              children: selectedItem.institutions?.map((inst) => (
                <Card key={inst.institutionId} bordered>
                  {inst.name}
                  <br />
                  <strong>Link: </strong>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    key={`link${inst.id}`}
                    href={inst.link}
                  >
                    {inst.link}
                  </a>
                </Card>
              )),
            },
            {
              key: "equivalentCourses",
              label: "Cursos equivalentes",
              children: (
                <List
                  locale={{
                    emptyText: <>Sem equivalentes</>,
                  }}
                  bordered
                  dataSource={selectedItem.equivalents?.filter(
                    (course) => !course.filedAt
                  )}
                  renderItem={(item) => (
                    <List.Item
                      actions={[
                        <Button
                          key={item.id}
                          onClick={() => {
                            getUniqueCourse({ id: item.id });
                          }}
                        >
                          Visualizar
                        </Button>,
                      ]}
                      key={item.id}
                    >
                      {item.name}
                    </List.Item>
                  )}
                />
              ),
            },
            {
              key: "accessibilities",
              label: "Acessibilidades",
              children: selectedItem.accessibilities
                ?.map((ac) => ac.name)
                .join(" | "),
            },
            {
              key: "taxonomy",
              label: "Taxonomia revisada de Bloom",
              children: selectedItem.taxonomies
                ?.map((tx) => tx.name)
                .join(" | "),
            },
            {
              key: "subthemes",
              label: "Subtemas",
              children: selectedItem.subThemes
                ?.filter((sub) => !sub.filedAt)
                .map((sub) => sub.name)
                .join(" | "),
            },
          ]
        : [
            {
              key: "name",
              label: "Nome",
              children: selectedItem.name,
            },
            {
              key: "courses",
              label: "Cursos",
              children: coursesSelectedItems(),
            },
            {
              key: "createdAt",
              label: "Criado em",
              children: dataFormatada(selectedItem.createdAt),
            },
            {
              key: "createdBy",
              label: "Criado por",
              children: selectedItem.user.name,
            },
            {
              key: "updatedAt",
              label: "Atualizado em",
              children: selectedItem.updatedAt,
            },
            {
              key: "updatedBy",
              label: "Atualizado por",
              children: selectedItem.updatedBy,
            },
            {
              key: "filledAt",
              label: "Arquivado em",
              children: dataFormatada(selectedItem.filledAt),
            },
            {
              key: "filledBy",
              label: "Arquivado por",
              children: selectedItem.filedBy,
            },
          ];
    }
  }, [loadingLastChanges, selectedItem]);

  const closeCourseModal = useCallback(() => {
    setVisible(false);
  }, []);

  return itemHistorico != null ? (
    <HistoricoItens
      itemHistorico={itemHistorico}
      categoria={categoria}
      categoriaOptions={categoriaOptions}
      back={() => {
        setActiveClickRow(true);
        setItemHistorico(null);
        getLastCoursesTrailsChanges({
          page: pageNumber,
          type: categoria,
          action: action,
          users: users,
          initialDate: initialDate,
          finalDate: finalDate,
        });
      }}
    />
  ) : (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <div style={{ width: "100%" }}>
          <Card
            title={"Log do Sistema"}
            styles={{
              header: {
                fontSize: 20,
                padding: "10px",
              },
              body: {
                padding: "0px",
              },
            }}
            extra={
              <Space
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Select
                  style={{ width: "7em" }}
                  options={categoriaOptions}
                  defaultValue={categoriaOptions[0].value}
                  value={categoria}
                  onChange={(value) => {
                    setCategoria(value);
                    getLastCoursesTrailsChanges({
                      page: pageNumber,
                      type: value,
                      action: action,
                      users: users,
                      initialDate: initialDate,
                      finalDate: finalDate,
                    });
                  }}
                  placeholder="Categoria"
                  allowClear={false}
                />
                <Select
                  style={{ width: "10em" }}
                  options={actionOptions}
                  defaultValue={actionOptions[0].value}
                  value={action}
                  onChange={(value) => {
                    setAction(value);
                    getLastCoursesTrailsChanges({
                      page: pageNumber,
                      type: categoria,
                      action: value,
                      users: users,
                      initialDate: initialDate,
                      finalDate: finalDate,
                    });
                  }}
                  placeholder="Status"
                  allowClear={true}
                />
                <Select
                  style={{ width: "10em" }}
                  options={usuarioOptions}
                  value={users}
                  onChange={(value) => {
                    setUsers(value);
                    getLastCoursesTrailsChanges({
                      page: pageNumber,
                      type: categoria,
                      action: action,
                      users: value,
                      initialDate: initialDate,
                      finalDate: finalDate,
                    });
                  }}
                  showSearch={true}
                  placeholder={"Usuário"}
                  allowClear={true}
                  mode="multiple"
                />
                <ConfigProvider locale={locale}>
                  <RangePicker
                    placeholder={["Início", "Fim"]}
                    size={"small"}
                    onChange={(value, option) => {
                      setInitialDate(option[0]);
                      setFinalDate(option[1]);
                      getLastCoursesTrailsChanges({
                        page: pageNumber,
                        type: categoria,
                        action: action,
                        users: users,
                        initialDate: option[0],
                        finalDate: option[1],
                      });
                    }}
                  />
                </ConfigProvider>
              </Space>
            }
          >
            <Table
              loading={loadingLastChanges}
              size={"large"}
              pagination={{
                pageSize: 30,
                total: lastDataChanges.count,
                showSizeChanger: false,
                current: pageNumber,
                defaultCurrent: 1,
                hideOnSinglePage: true,
                onChange: (page) => {
                  setPageNumber(page);
                  getLastCoursesTrailsChanges({
                    page: page,
                    type: categoria,
                    action: action,
                    users: users,
                    initialDate: initialDate,
                    finalDate: finalDate,
                  });
                },
              }}
              columns={columnsTable}
              dataSource={lastDataChangesFiltered}
              rowKey={(record) => {
                return record.id;
              }}
              onRow={(record) => {
                return {
                  onClick: async () => {
                    if (activeClickRow) {
                      setSelectedItem(record);
                      setVisible(true);
                    }
                  },
                  style: { cursor: "pointer" },
                };
              }}
            />
          </Card>
        </div>
      </div>

      <CourseModalVisualization
        id={selectedItem?.itemId}
        visible={visible}
        setVisible={closeCourseModal}
      />
    </>
  );
}
