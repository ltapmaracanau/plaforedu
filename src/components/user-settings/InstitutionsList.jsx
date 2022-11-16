import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import { Button, Card, Input, Layout, List, Modal } from "antd";
import InstitutionRegister from "./InstitutionRegister";

const { Content } = Layout;
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

  useEffect(() => {
    getInstituicoes();
  }, [getInstituicoes]);

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
                  onSearch={(e) => {
                    getInstituicoes({ query: e });
                  }}
                  style={{
                    marginRight: "30px",
                  }}
                  placeholder={"Buscar instituições"}
                />
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
                      description={item.name}
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
              getInstituicoes();
              setRegisterVisible(false);
            }}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getInstituicoes();
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
                getInstituicoes();
              }}
            />
          </Modal>
        </Content>
      </Layout>
    </>
  );
}
