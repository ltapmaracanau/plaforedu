import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";

import { Button, Card, Layout, List, Modal, Input } from "antd";
import TemasRegister from "./TemasRegister";

const { Content } = Layout;
const { Search } = Input;

export default function TemasList() {
  const getThemes = useStoreActions((actions) => actions.themes.getThemes);

  const [registerVisible, setRegisterVisible] = useState(false);
  const [modalText, setModalText] = useState("Cadastrar Tema");
  const [editandoTema, setEditandoTema] = useState({});

  const loading = useStoreState((state) => state.themes.loading);
  const themes = useStoreState((state) => state.themes.themes);

  useEffect(() => {
    getThemes();
  }, [getThemes]);

  return (
    <>
      <Layout
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <Content style={{ width: "100%" }}>
          <Card
            title={"Temas"}
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
                  onSearch={(e) => {
                    getThemes({ query: e });
                  }}
                  style={{
                    marginRight: "30px",
                  }}
                  placeholder={"Buscar temas"}
                />
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    setEditandoTema({});
                    setModalText("Cadastrar Tema");
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
              dataSource={themes}
              style={{ width: "100%" }}
              renderItem={(item) => {
                return (
                  <List.Item
                    key={item.id}
                    actions={[
                      <Button
                        onClick={() => {
                          setEditandoTema(item);
                          setModalText("Editar Tema");
                          setRegisterVisible(true);
                        }}
                        key={item.id}
                        icon={<EditOutlined />}
                      >
                        Editar
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      style={{ fontFamily: "Roboto" }}
                      title={item.name}
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
              getThemes();
              setEditandoTema({});
              setModalText("Cadastrar Tema");
              setRegisterVisible(false);
            }}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getThemes();
                  setEditandoTema({});
                  setModalText("Cadastrar Tema");
                  setRegisterVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <TemasRegister
              theme={editandoTema}
              actionVisible={() => {
                setRegisterVisible(false);
                getThemes();
                setEditandoTema({});
                setModalText("Cadastrar Tema");
              }}
            />
          </Modal>
        </Content>
      </Layout>
    </>
  );
}
