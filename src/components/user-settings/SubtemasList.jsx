import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";

import { Button, Card, Layout, List, Modal, Input, Tag } from "antd";
import SubtemaRegister from "./SubtemaRegister";

const { Content } = Layout;
const { Search } = Input;

export default function SubtemasList() {
  const getSubthemes = useStoreActions(
    (actions) => actions.themes.getSubthemes
  );

  const [registerVisible, setRegisterVisible] = useState(false);
  const [modalText, setModalText] = useState("Cadastrar Subtema");
  const [editandoSubtema, setEditandoSubtema] = useState({});

  const loading = useStoreState((state) => state.themes.loading);
  const subthemes = useStoreState((state) => state.themes.subthemes);

  useEffect(() => {
    getSubthemes();
  }, [getSubthemes]);

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
            title={"Subtemas"}
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
                    getSubthemes({ query: e });
                  }}
                  style={{
                    marginRight: "30px",
                  }}
                  placeholder={"Buscar subtemas"}
                />
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    setEditandoSubtema({});
                    setModalText("Cadastrar Subtema");
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
              dataSource={subthemes}
              style={{ width: "100%" }}
              renderItem={(item) => {
                return (
                  <List.Item
                    key={item.id}
                    actions={[
                      <Button
                        key={item.id}
                        onClick={() => {
                          setEditandoSubtema(item);
                          setModalText("Editar Subtema");
                          setRegisterVisible(true);
                        }}
                        icon={<EditOutlined />}
                      >
                        Editar
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      style={{ fontFamily: "Roboto" }}
                      title={item.name}
                      description={
                        <span>
                          {item.themes.map((theme) => (
                            <Tag color="blue" key={theme.id}>
                              {theme.name}
                            </Tag>
                          ))}
                        </span>
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
              getSubthemes();
              setEditandoSubtema({});
              setModalText("Cadastrar Subtema");
              setRegisterVisible(false);
            }}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getSubthemes();
                  setEditandoSubtema({});
                  setModalText("Cadastrar Subtema");
                  setRegisterVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <SubtemaRegister
              subtheme={editandoSubtema}
              actionVisible={() => {
                setRegisterVisible(false);
                setEditandoSubtema({});
                setModalText("Cadastrar Subtema");
                getSubthemes();
              }}
            />
          </Modal>
        </Content>
      </Layout>
    </>
  );
}
