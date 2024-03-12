import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  Input,
  List,
  Modal,
  Space,
  Switch,
  Tag,
  Tooltip,
} from "antd";
import InstitutionRegister from "./InstitutionRegister";

const { Search } = Input;

export default function InstitutionList() {
  const getInstituicoes = useStoreActions(
    (actions) => actions.institutions.getInstituicoes
  );

  const [registerVisible, setRegisterVisible] = useState(false);

  const loading = useStoreState((state) => state.institutions.loading);
  const instituicoes = useStoreState(
    (state) => state.institutions.instituicoes
  );

  const [editandoInstituicao, setEditandoInstituicao] = useState(null);
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    getInstituicoes();
  }, [getInstituicoes]);

  return (
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
            headStyle={{
              fontSize: 20,
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
                    getInstituicoes({
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
                      getInstituicoes({
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
              dataSource={instituicoes}
              style={{ width: "100%" }}
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
              getInstituicoes({
                query: textSearch,
                showFiled: showFiled,
              });
              setRegisterVisible(false);
            }}
            styles={{ body: { backgroundColor: "#f8f8f8" } }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getInstituicoes({
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
                getInstituicoes({
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
