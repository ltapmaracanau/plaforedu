import { useCallback, useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import { Button, Card, Input, Tooltip, Switch, Space, Tag, Table } from "antd";
import FormativeTrailsRegister from "./FormativeTrailsRegister";

const { Search } = Input;
export default function FormativeTrailsList() {
  const getTrilhas = useStoreActions((actions) => actions.trilhas.getTrilhas);
  const getCompetencies = useStoreActions(
    (actions) => actions.competencies.getComp
  );
  const getInstitutions = useStoreActions(
    (actions) => actions.institutions.getInstituicoes
  );
  const [registerVisible, setRegisterVisible] = useState(false);

  const loadingTrilhas = useStoreState((state) => state.trilhas.loading);
  const loadingCursos = useStoreState((state) => state.courses.loading);
  const trilhas = useStoreState((state) => state.trilhas.trilhas);
  const count = useStoreState((state) => state.trilhas.count);

  const [editandoTrilha, setEditandoTrilha] = useState(null);
  const [modalText, setModalText] = useState("Cadastrar Trilha");
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getTrilhas({ page: pageNumber });
    getCompetencies({ showFiled: true });
    getInstitutions({ showFiled: true });
  }, [getCompetencies, getInstitutions, getTrilhas, pageNumber]);

  const [sort, setSort] = useState({
    createdAt: null,
    updatedAt: null,
  });

  const onChangeTable = useCallback(
    (pagination, _filters, sorter) => {
      let sortByCreatedAt = undefined;
      let sortByUpdatedAt = undefined;
      //console.log(sorter);
      if (Array.isArray(sorter)) {
        if (sorter[1].columnKey === "createdAt") {
          sortByCreatedAt = sorter[1].order;
          sortByUpdatedAt = undefined;
        } else {
          sortByCreatedAt = undefined;
          sortByUpdatedAt = sorter[1].order;
        }
        setSort({
          createdAt: sortByCreatedAt,
          updatedAt: sortByUpdatedAt,
        });
      } else {
        if (sorter.columnKey === "createdAt") {
          sortByCreatedAt = sorter.order;
          sortByUpdatedAt = undefined;
        } else {
          sortByCreatedAt = undefined;
          sortByUpdatedAt = sorter.order;
        }
        setSort({
          createdAt: sortByCreatedAt,
          updatedAt: sortByUpdatedAt,
        });
      }
      setPageNumber(pagination.current);
      getTrilhas({
        page: pagination.current,
        query: textSearch,
        showFiled: showFiled,
        sort: {
          createdAt: sortByCreatedAt,
          updatedAt: sortByUpdatedAt,
        },
      });
    },
    [getTrilhas, showFiled, textSearch]
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {registerVisible ? (
        <FormativeTrailsRegister
          trilha={editandoTrilha}
          title={modalText}
          actionVisible={() => {
            setRegisterVisible(false);
            getTrilhas({
              query: textSearch,
              showFiled: showFiled,
              page: pageNumber,
              sort: {
                createdAt: sort.createdAt,
                updatedAt: sort.updatedAt,
              },
            });
          }}
        />
      ) : (
        <Card
          title={"Trilhas Formativas"}
          styles={{
            header: {
              fontSize: 20,
              padding: "10px",
            },
            body: {
              padding: "0px",
              height: "100%",
            },
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
          extra={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "450px",
              }}
            >
              <Search
                allowClear
                defaultValue={textSearch}
                onSearch={(e) => {
                  setTextSearch(e);
                  setPageNumber(1);
                  getTrilhas({
                    query: e,
                    showFiled: showFiled,
                    page: 1,
                    sort: {
                      createdAt: sort.createdAt,
                      updatedAt: sort.updatedAt,
                    },
                  });
                }}
                style={{
                  marginRight: "30px",
                }}
                placeholder={"Buscar trilhas"}
              />
              <Tooltip title={"Exibir Arquivados"}>
                <Switch
                  defaultChecked={showFiled}
                  checked={showFiled}
                  style={{
                    marginRight: "10px",
                  }}
                  onClick={(checked) => {
                    setShowFiled(checked);
                    setPageNumber(1);
                    getTrilhas({
                      query: textSearch,
                      showFiled: checked,
                      page: 1,
                      sort: {
                        createdAt: sort.createdAt,
                        updatedAt: sort.updatedAt,
                      },
                    });
                  }}
                />
              </Tooltip>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                  setEditandoTrilha(null);
                  setModalText("Cadastrar Trilha");
                  setRegisterVisible(true);
                }}
              >
                Adicionar
              </Button>
            </div>
          }
        >
          <Table
            loading={loadingTrilhas || loadingCursos}
            dataSource={trilhas}
            style={{ width: "100%", height: "100%" }}
            pagination={{
              pageSize: 20,
              total: count,
              showSizeChanger: false,
              current: pageNumber,
              defaultCurrent: 1,
              hideOnSinglePage: false,
            }}
            size="small"
            rowKey="id"
            onChange={onChangeTable}
            columns={[
              {
                title: "Nome",
                dataIndex: "name",
                key: "name",
                render: (name, record) => (
                  <div>
                    {name}
                    {record.filedAt && (
                      <Tag color="blue" style={{ marginLeft: "10px" }}>
                        Arquivado
                      </Tag>
                    )}
                  </div>
                ),
              },
              {
                title: "Descrição",
                dataIndex: "description",
                key: "description",
              },
              {
                title: "Criado em",
                dataIndex: "createdAt",
                key: "createdAt",
                render: (createdAt) => {
                  return new Date(createdAt).toLocaleString("pt-BR", {
                    timeZone: "UTC",
                  });
                },
                sorter: {
                  multiple: 1,
                },
                sortDirections: ["descend"],
                sortOrder: sort.createdAt,
              },
              {
                title: "Atualizado em",
                dataIndex: "updatedAt",
                key: "updatedAt",
                render: (updatedAt) => {
                  return new Date(updatedAt).toLocaleString("pt-BR", {
                    timeZone: "UTC",
                  });
                },
                sorter: {
                  multiple: 2,
                },
                sortDirections: ["descend"],
                sortOrder: sort.updatedAt,
              },
              {
                dataIndex: "actions",
                key: "actions",
                render: (text, record) => {
                  return (
                    <Space direction="horizontal">
                      <Button
                        key={record.id}
                        onClick={() => {
                          setEditandoTrilha(record);
                          setModalText("Editar Trilha");
                          setRegisterVisible(true);
                        }}
                        icon={<EditOutlined />}
                      >
                        Editar
                      </Button>
                    </Space>
                  );
                },
              },
            ]}
          />
        </Card>
      )}
    </div>
  );
}
