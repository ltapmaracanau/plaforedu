import { useCallback, useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  Input,
  List,
  Modal,
  notification,
  Space,
  Switch,
  Tag,
  Tooltip,
} from "antd";
import InstitutionRegister from "./InstitutionRegister";

const { Search } = Input;

export default function InstitutionList() {
  const getInstituicoesAction = useStoreActions(
    (actions) => actions.institutions.getInstituicoes
  );

  const [registerVisible, setRegisterVisible] = useState(false);

  const [editandoInstituicao, setEditandoInstituicao] = useState(null);
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const getInstitutions = useCallback(
    async ({ query, showFiled, page }) => {
      setLoading(true);
      try {
        const response = await getInstituicoesAction({
          query,
          showFiled,
          page,
        });
        setInstitutions(response.data);
        setCount(response.count);
      } catch (error) {
        notification.error({
          message: "Erro ao buscar instituições",
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    },
    [getInstituicoesAction]
  );

  useEffect(() => {
    getInstitutions({
      query: textSearch,
      showFiled: showFiled,
      page,
    });
  }, [getInstitutions, textSearch, showFiled, page]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div style={{ width: "100%" }}>
          <Card
            styles={{
              header: {
                fontSize: 20,
              },
            }}
            title={"Instituições"}
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
                    getInstitutions({
                      query: e,
                      showFiled: showFiled,
                    });
                  }}
                  style={{
                    marginRight: "10px",
                  }}
                  placeholder={"Buscar instituições"}
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
                      getInstitutions({
                        query: textSearch,
                        showFiled: checked,
                      });
                    }}
                  />
                </Tooltip>
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    setEditandoInstituicao(null);
                    setRegisterVisible(true);
                  }}
                >
                  Adicionar
                </Button>
              </div>
            }
          >
            <List
              loading={loading}
              dataSource={institutions}
              style={{ width: "100%" }}
              pagination={{
                pageSize: 30,
                current: page,
                total: count,
                defaultCurrent: 1,
                onChange: (page) => {
                  setPage(page);
                  getInstitutions({
                    query: textSearch,
                    showFiled: showFiled,
                    page,
                  });
                },
              }}
              renderItem={(item) => {
                return (
                  <List.Item
                    actions={[
                      <Button
                        key={item.id}
                        onClick={() => {
                          setEditandoInstituicao(item);
                          setRegisterVisible(true);
                        }}
                        icon={<EditOutlined />}
                      >
                        Editar
                      </Button>,
                    ]}
                    key={item.id}
                  >
                    <List.Item.Meta
                      style={{ fontFamily: "Roboto" }}
                      title={item.abbreviation}
                      description={
                        <Space direction="vertical">
                          {item.name}
                          {item.filedAt && <Tag color="orange">ARQUIVADO</Tag>}
                          {item.uf && (
                            <Tooltip title={"Estado da instituição"}>
                              <Tag
                                style={{
                                  cursor: "pointer",
                                }}
                                color="blue"
                              >
                                {item.uf}
                              </Tag>
                            </Tooltip>
                          )}
                        </Space>
                      }
                    />
                  </List.Item>
                );
              }}
            />
          </Card>
          <Modal
            title={
              editandoInstituicao === null
                ? "Cadastrar Instituição"
                : "Editar Instituição"
            }
            open={registerVisible}
            destroyOnClose={true}
            onCancel={() => {
              getInstitutions({
                query: textSearch,
                showFiled: showFiled,
              });
              setRegisterVisible(false);
            }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getInstitutions({
                    query: textSearch,
                    showFiled: showFiled,
                  });
                  setRegisterVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <InstitutionRegister
              instituicao={editandoInstituicao}
              actionVisible={() => {
                setRegisterVisible(false);
                getInstitutions({
                  query: textSearch,
                  showFiled: showFiled,
                });
              }}
            />
          </Modal>
        </div>
      </div>
    </>
  );
}
