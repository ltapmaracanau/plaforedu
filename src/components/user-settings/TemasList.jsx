import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { PlusOutlined } from "@ant-design/icons";

import { Button, Card, Layout, List, Modal, Input } from "antd";
import TemasRegister from "./TemasRegister";

const { Content } = Layout;
const { Search } = Input;

export default function TemasList() {
  const getThemes = useStoreActions((actions) => actions.adm.getThemes);

  const [registerVisible, setRegisterVisible] = useState(false);

  const loading = useStoreState((state) => state.adm.loading);
  const themes = useStoreState((state) => state.adm.themes);

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
                  <List.Item key={item.id}>
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
            title={"Cadastrar Tema"}
            open={registerVisible}
            destroyOnClose={true}
            onCancel={() => {
              getThemes();
              setRegisterVisible(false);
            }}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getThemes();
                  setRegisterVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <TemasRegister
              actionVisible={() => {
                setRegisterVisible(false);
                getThemes();
              }}
            />
          </Modal>
        </Content>
      </Layout>
    </>
  );
}
