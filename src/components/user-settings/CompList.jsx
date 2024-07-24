import { useCallback, useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  List,
  Modal,
  Input,
  Tag,
  Space,
  Tooltip,
  Switch,
  notification,
} from "antd";
import CompRegister from "./CompRegister";

const { Search } = Input;

export default function CompList() {
  const getCompAction = useStoreActions(
    (actions) => actions.competencies.getComp
  );
  const isAdm = useStoreState((state) => state.adm.isAdm);
  const isCoord = useStoreState((state) => state.adm.isCoord);

  const [registerVisible, setRegisterVisible] = useState(false);
  const [modalText, setModalText] = useState("Cadastrar Competência");
  const [editingComp, setEditingComp] = useState(null);
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const [loadingCompetencies, setLoadingCompetencies] = useState(true);
  const [competencies, setCompetencies] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const getComp = useCallback(
    async ({ query, showFiled, page }) => {
      setLoadingCompetencies(true);
      try {
        const { data, count } = await getCompAction({
          query,
          showFiled,
          page,
        });
        setCompetencies(data);
        setCount(count);
      } catch (error) {
        notification.error({
          message: "Erro ao carregar competências",
          description: error.message,
        });
      } finally {
        setLoadingCompetencies(false);
      }
    },
    [getCompAction]
  );

  useEffect(() => {
    getComp({
      query: "",
      showFiled: false,
      page: 1,
    });
  }, [getComp]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div style={{ width: "100%" }}>
        <Card
          title={"Competências"}
          styles={{
            header: {
              fontSize: 20,
            },
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
                  getComp({
                    query: e,
                    showFiled: showFiled,
                  });
                }}
                style={{
                  marginRight: "10px",
                }}
                placeholder={"Buscar competências"}
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
                    getComp({
                      query: textSearch,
                      showFiled: checked,
                      page: 1,
                    });
                  }}
                />
              </Tooltip>
              <Tooltip
                title={!isAdm && !isCoord ? "Usuário sem permissão" : null}
              >
                <Button
                  disabled={!(isAdm || isCoord)}
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    setEditingComp(null);
                    setModalText("Cadastrar Competência");
                    setRegisterVisible(true);
                  }}
                >
                  Adicionar
                </Button>
              </Tooltip>
            </div>
          }
        >
          <List
            loading={loadingCompetencies}
            dataSource={competencies}
            pagination={{
              pageSize: 30,
              showSizeChanger: false,
              current: page,
              total: count,
              defaultCurrent: 1,
              onChange: (page) => {
                setPage(page);
                getComp({
                  query: textSearch,
                  showFiled: showFiled,
                  page: page,
                });
              },
            }}
            style={{ width: "100%" }}
            renderItem={(item) => {
              return (
                <List.Item
                  key={item.id}
                  actions={[
                    <Tooltip
                      key={item.id}
                      title={
                        !isAdm && !isCoord ? "Usuário sem permissão" : null
                      }
                    >
                      <Button
                        disabled={!(isAdm || isCoord)}
                        onClick={() => {
                          setEditingComp(item);
                          setModalText("Editar Competência");
                          setRegisterVisible(true);
                        }}
                        icon={<EditOutlined />}
                      >
                        Editar
                      </Button>
                    </Tooltip>,
                  ]}
                >
                  <List.Item.Meta
                    style={{ fontFamily: "Roboto" }}
                    title={item.name}
                    description={
                      <Space direction="vertical">
                        {item.filedAt && <Tag color="orange">ARQUIVADO</Tag>}
                        {item.description}
                        <span>
                          {item.categories.map((categoria) => (
                            <Tag color="blue" key={categoria.id}>
                              {categoria.name}
                            </Tag>
                          ))}
                        </span>
                      </Space>
                    }
                  />
                </List.Item>
              );
            }}
          />
        </Card>
        <Modal
          title={modalText}
          open={registerVisible}
          destroyOnClose={true}
          onCancel={() => {
            getComp({
              query: textSearch,
              showFiled: showFiled,
            });
            setEditingComp(null);
            setModalText("Cadastrar Competência");
            setRegisterVisible(false);
          }}
          footer={[
            <Button
              type="primary"
              key={"back"}
              onClick={() => {
                getComp({
                  query: textSearch,
                  showFiled: showFiled,
                  page: page,
                });
                setEditingComp(null);
                setModalText("Cadastrar Competência");
                setRegisterVisible(false);
              }}
            >
              Cancelar
            </Button>,
          ]}
        >
          <CompRegister
            comp={editingComp}
            actionVisible={() => {
              setRegisterVisible(false);
              getComp({
                query: textSearch,
                showFiled: showFiled,
                page: page,
              });
            }}
          />
        </Modal>
      </div>
    </div>
  );
}
