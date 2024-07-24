import { useCallback, useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import { Button, Card, Input, Tooltip, Switch, Space, Tag, Table } from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;
export default function FormativeTrailsList() {
  const navigate = useNavigate();

  const getTrailsAction = useStoreActions(
    (actions) => actions.trilhas.getTrilhas
  );

  const isAdm = useStoreState((state) => state.adm.isAdm);
  const isCoord = useStoreState((state) => state.adm.isCoord);

  const loadingTrilhas = useStoreState((state) => state.trilhas.loading);
  const loadingCursos = useStoreState((state) => state.courses.loading);

  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const [page, setPage] = useState(1);
  const [trilhas, setTrilhas] = useState([]);
  const [count, setCount] = useState(0);
  const [sort, setSort] = useState({
    createdAt: null,
    updatedAt: null,
  });

  const getTrilhas = useCallback(
    async ({ query, page, showFiled, sort: { createdAt, updatedAt } }) => {
      const { data, count } = await getTrailsAction({
        query,
        page,
        showFiled,
        sort: {
          createdAt,
          updatedAt,
        },
      });
      setTrilhas(data);
      setCount(count);
    },
    [getTrailsAction]
  );

  useEffect(() => {
    getTrilhas({
      page: 1,
      showFiled: false,
      query: "",
      sort: {
        createdAt: false,
        updatedAt: false,
      },
    });
  }, [getTrilhas]);

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
      setPage(pagination.current);
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
                setPage(1);
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
                  setPage(1);
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
            <Tooltip
              title={!isAdm && !isCoord ? "Usuário sem permissão" : null}
            >
              <Button
                disabled={!isAdm && !isCoord}
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                  navigate("edit");
                }}
              >
                Adicionar
              </Button>
            </Tooltip>
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
            current: page,
            defaultCurrent: 1,
            onChange: (page) => {
              setPage(page);
              getTrilhas({
                page: page,
                query: textSearch,
                showFiled: showFiled,
                sort: {
                  createdAt: sort.createdAt,
                  updatedAt: sort.updatedAt,
                },
              });
            },
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
                    <Tooltip
                      title={
                        !isAdm && !isCoord ? "Usuário sem permissão" : null
                      }
                    >
                      <Button
                        disabled={!isAdm && !isCoord}
                        key={record.id}
                        onClick={() => {
                          navigate(`edit/${record.id}`);
                        }}
                        icon={<EditOutlined />}
                      >
                        Editar
                      </Button>
                    </Tooltip>
                  </Space>
                );
              },
            },
          ]}
        />
      </Card>
    </div>
  );
}
