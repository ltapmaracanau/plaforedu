import { useEffect, useState, useMemo } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Card, Space, Table, Select, Modal, Descriptions, Button } from "antd";
import { FileSyncOutlined } from "@ant-design/icons";
import HistoricoItens from "./HistoricoItens";
import services from "../../services";

export default function SystemLog() {
  const getLastCoursesTrailsChanges = useStoreActions(
    (actions) => actions.adm.getLastCoursesTrailsChanges
  );
  const lastDataChanges = useStoreState(
    (state) => state.adm.lastDataChanges
  );
  const loadingLastChanges = useStoreState(
    (state) => state.adm.loadingLastChanges
  );

  const categoriaOptions = useMemo(() => {
    return [
      { value: "COURSES", label: "Cursos" },
      { value: "FORMATIVE_TRAILS", label: "Trilhas Formativas" },
    ];
  }, []);

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
  ]

  const statusOptions = useMemo(() => {
    return [
      {
        value: "CREATION",
        label: "Criado",
      },
      {
        value: "UPDATE",
        label: "Atualizado",
      },
      {
        value: "FILING",
        label: "Arquivado",
      },
      {
        value: "ACTIVATION",
        label: "Ativado",
      },
      {
        value: "DELETION",
        label: "Deletado",
      },
      {
        value: "TURN_PENDING",
        label: "Tornado Pendente",
      },
    ];
  }, [])

  const [pageNumber, setPageNumber] = useState(1);
  const [categoria, setCategoria] = useState(categoriaOptions[0].value);
  const [status, setStatus] = useState(statusOptions[0].value);
  const [usuario, setUsuario] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeClickRow, setActiveClickRow] = useState(true);
  const [itemHistorico, setItemHistorico] = useState(null);

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
    getLastCoursesTrailsChanges();
  }, [getLastCoursesTrailsChanges]);

  const labelAction = useMemo(() => {
    return {
      CREATION: "Criado",
      ACTIVATION: "Ativado",
      UPDATE: "Atualizado",
      FILING: "Arquivado",
      DELETION: "Deletado",
      TURN_PENDING: "Tornado Pendente"
    }
  }, [])

  const dataFormatada = (data) => {
    const date = new Date(data);
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    return formattedDate;
  }

  const lastDataChangesFiltered = useMemo(() => {
    const data = []

    if (lastDataChanges.data != null) {
      lastDataChanges.data.map((item) => {
        data.push({
          id: item.id,
          name: item.course.name,
          action: labelAction[item.action],
          date: dataFormatada(item.date),
          userName: item.user.name,
          itemId: item.course != null ? item.courseId : item.trailId
        })
      })
    }
    return data;
  }, [labelAction, lastDataChanges.data])

  const modalTitle = useMemo(() => {
    if (!loadingLastChanges) {
      return "Detalhes do curso"
    }
  }, [loadingLastChanges]);

  const descriptionItems = useMemo(() => {
    if (!loadingLastChanges && selectedItem) {
      return [
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
          key: "hours",
          label: "Horas",
          children: selectedItem.hours,
        },
        {
          key: "status",
          label: "Status",
          children: selectedItem.status,
        },
      ]
    }
  }, [loadingLastChanges, selectedItem]);

  return itemHistorico != null ? (
    <HistoricoItens
      itemHistorico={itemHistorico}
      back={() => {
        setActiveClickRow(true);
        setItemHistorico(null);
        getLastCoursesTrailsChanges({page: pageNumber, type: categoria});
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
                  style={{ width: "12em" }}
                  options={categoriaOptions}
                  defaultValue={categoriaOptions[0].value}
                  value={categoria}
                  onChange={(value) => {
                    setCategoria(value)
                    getLastCoursesTrailsChanges({page: pageNumber, type: value})
                  }}
                  placeholder="Categoria"
                  allowClear={true}
                />
                <Select
                  style={{ width: "11em" }}
                  options={statusOptions}
                  defaultValue={statusOptions[0].value}
                  value={status}
                  onChange={
                    (value) => {
                      setStatus(value)
                      getLastCoursesTrailsChanges({page: pageNumber, type: categoria})
                    }}
                  placeholder="Status"
                  allowClear={true}
                />
                <Select
                  style={{ width: "15em" }}
                  options={usuarioOptions}
                  value={usuario}
                  onChange={(value) => setUsuario(value)}
                  showSearch={true}
                  placeholder={"Usuário"}
                  allowClear={true}
                />
              </Space>
            }
          >
            <Table
              loading={loadingLastChanges}
              pagination={{
                pageSize: 30,
                total: lastDataChanges.count,
                showSizeChanger: false,
                current: pageNumber,
                defaultCurrent: 1,
                hideOnSinglePage: true,
                onChange: (page) => {
                  setPageNumber(page)
                  getLastCoursesTrailsChanges({ page: page, type: categoria })
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
                      if (record.courseId != null) {
                        item = await services.courseService.getUniqueCourse({id: record.courseId})
                      } else {
                        item = await services.courseService.getUniqueCourse({id: record.trailId})
                      }
                      setSelectedItem(item);
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
        title={modalTitle}
        open={!!selectedItem && activeClickRow}
        onCancel={() => setSelectedItem(null)}
        footer={null}
      >
        {selectedItem && activeClickRow && (
          <Descriptions
            column={1}
            bordered={true}
            layout="horizontal"
            items={descriptionItems}
          />
        )}
      </Modal>
    </>
  );
}
