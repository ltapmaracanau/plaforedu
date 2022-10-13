import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { PlusOutlined } from "@ant-design/icons";

import { Button, Card, Layout, List, Modal, Input } from "antd";
import SubtemaRegister from "./SubtemaRegister";

const { Content } = Layout;
const { Search } = Input;

export default function SubtemasList() {
  const getSubthemes = useStoreActions((actions) => actions.adm.getSubthemes);

  const [registerVisible, setRegisterVisible] = useState(false);

  const loading = useStoreState((state) => state.adm.loading);
  const subthemes = useStoreState((state) => state.adm.subthemes);

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
            title={"Cadastrar Subtema"}
            open={registerVisible}
            destroyOnClose={true}
            onCancel={() => {
              getSubthemes();
              setRegisterVisible(false);
            }}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getSubthemes();
                  setRegisterVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <SubtemaRegister
              actionVisible={() => {
                setRegisterVisible(false);
                getSubthemes();
              }}
            />
          </Modal>
        </Content>
      </Layout>
    </>
  );
}
