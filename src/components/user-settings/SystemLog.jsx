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

  const usuarioOptions = [
    {
      value: "a",
      label: "Usuário a",
    },
    {
      value: "b",
      label: "Usuário b",
    },
    {
      value: "c",
      label: "Usuário c",
    },
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
  const [usuario, setUsuario] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeClickRow, setActiveClickRow] = useState(true);
  const [itemHistorico, setItemHistorico] = useState(null);
  const [initialDate, setInitialDate] = useState(null);
  const [finalDate, setFinalDate] = useState(null);

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

  console.log(lastDataChanges);
  useEffect(() => {
    getLastCoursesTrailsChanges();
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

    if (lastDataChanges.data !== null) {
      lastDataChanges.data.map((item) => {
        data.push({
          id: item.id,
          name: item.courseId != null ? item.course.name : item.trail.name,
          action: labelAction[item.action],
          date: dataFormatada(item.date),
          userName: item.user.name,
          itemId: item.courseId != null ? item.courseId : item.trailId,
        });
      });
    }
    return data;
  }, [labelAction, lastDataChanges.data]);

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

  return itemHistorico != null ? (
    <HistoricoItens
      itemHistorico={itemHistorico}
      categoria={categoria}
      categoriaOptions={categoriaOptions}
      back={() => {
        setActiveClickRow(true);
        setItemHistorico(null);
        getLastCoursesTrailsChanges({ page: pageNumber, type: categoria });
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
            title={"Log do sistema"}
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
                    });
                  }}
                  placeholder="Categoria"
                  allowClear={true}
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
                    });
                  }}
                  placeholder="Status"
                  allowClear={true}
                />
                <Select
                  style={{ width: "10em" }}
                  options={usuarioOptions}
                  value={usuario}
                  onChange={(value) => setUsuario(value)}
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
                      console.log(value);
                      console.log(option);
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
                  getLastCoursesTrailsChanges({ page: page, type: categoria });
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
                      let item;
                      if (categoria === categoriaOptions[0].value) {
                        item = await services.courseService.getUniqueCourse({
                          id: record.itemId,
                        });
                      } else {
                      }
                      setSelectedItem(item.data);
                    }
                  },
                  style: { cursor: "pointer" },
                };
              }}
            />
          </Card>
        </div>
      </div>

      <Modal
        title={
          categoria === categoriaOptions[0].value
            ? "Detalhes do curso"
            : "Detalhes da Trilha"
        }
        open={!!selectedItem && activeClickRow}
        onOk={() => {
          setSelectedItem(null);
        }}
        onCancel={() => setSelectedItem(null)}
        key={`modalDescriptionItem`}
        destroyOnClose={true}
        footer={[
          <Button
            type="primary"
            key={"buttonOk"}
            onClick={() => {
              setSelectedItem(null);
            }}
          >
            Ok
          </Button>,
        ]}
      >
        {selectedItem && activeClickRow && (
          <Descriptions
            column={1}
            bordered={true}
            layout="vertical"
            items={descriptionItems}
          />
        )}
      </Modal>
    </>
  );
}
