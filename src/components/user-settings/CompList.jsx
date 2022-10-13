import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { PlusOutlined } from "@ant-design/icons";

import { Button, Card, Layout, List, Modal, Input, Tag } from "antd";
import CompRegister from "./CompRegister";

const { Content } = Layout;
const { Search } = Input;

export default function CompList() {
  const getComp = useStoreActions((actions) => actions.adm.getComp);

  const [registerVisible, setRegisterVisible] = useState(false);

  const loading = useStoreState((state) => state.adm.loading);
  const competencias = useStoreState((state) => state.adm.competencias);

  useEffect(() => {
    getComp();
  }, [getComp]);

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
            title={"Competências"}
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
                    getComp({ query: e });
                  }}
                  style={{
                    marginRight: "30px",
                  }}
                  placeholder={"Buscar competências"}
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
              dataSource={competencias}
              style={{ width: "100%" }}
              renderItem={(item) => {
                return (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      style={{ fontFamily: "Roboto" }}
                      title={item.name}
                      description={
                        <span>
                          {item.CategoriesCompetencies.map((categoria) => (
                            <Tag
                              color="blue"
                              key={categoria.competenciesCategory.id}
                            >
                              {categoria.competenciesCategory.name}
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
            title={"Cadastrar Competência"}
            open={registerVisible}
            destroyOnClose={true}
            onCancel={() => {
              getComp();
              setRegisterVisible(false);
            }}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getComp();
                  setRegisterVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <CompRegister
              actionVisible={() => {
                setRegisterVisible(false);
                getComp();
              }}
            />
          </Modal>
        </Content>
      </Layout>
    </>
  );
}
