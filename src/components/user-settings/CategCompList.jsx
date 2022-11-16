import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";

import { Button, Card, Layout, List, Modal, Input } from "antd";
import CatCompRegister from "./CatCompRegister";

const { Content } = Layout;
const { Search } = Input;

export default function CategCompList() {
  const getCatComp = useStoreActions(
    (actions) => actions.competencies.getCatComp
  );

  const [registerVisible, setRegisterVisible] = useState(false);
  const [modalText, setModalText] = useState("Cadastrar Categoria");
  const [editandoCatComp, setEditandoCatComp] = useState({});

  const loading = useStoreState((state) => state.competencies.loading);
  const catComp = useStoreState((state) => state.competencies.catComp);

  useEffect(() => {
    getCatComp();
  }, [getCatComp]);

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
            title={"Categorias de competências"}
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
                    getCatComp({ query: e });
                  }}
                  style={{
                    marginRight: "30px",
                  }}
                  placeholder={"Buscar categorias"}
                />
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    setEditandoCatComp({});
                    setModalText("Cadastrar Categoria");
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
              dataSource={catComp}
              style={{ width: "100%" }}
              renderItem={(item) => {
                return (
                  <List.Item
                    key={item.id}
                    actions={[
                      <Button
                        key={item.id}
                        onClick={() => {
                          setEditandoCatComp(item);
                          setModalText("Editar Categoria");
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
                      description={item.description}
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
              getCatComp();
              setEditandoCatComp({});
              setModalText("Cadastrar Categoria");
              setRegisterVisible(false);
            }}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getCatComp();
                  setEditandoCatComp({});
                  setModalText("Cadastrar Categoria");
                  setRegisterVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <CatCompRegister
              catComp={editandoCatComp}
              actionVisible={() => {
                setRegisterVisible(false);
                getCatComp();
              }}
            />
          </Modal>
        </Content>
      </Layout>
    </>
  );
}
