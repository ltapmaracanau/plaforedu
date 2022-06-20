import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import { Button, Card, Layout, List, Modal } from "antd";
import RegisterInstitution from "./RegisterInstitution";

const { Content } = Layout;

export default function InstitutionList() {
  const getInstituicoes = useStoreActions(
    (actions) => actions.adm.getInstituicoes
  );

  const [registerVisible, setRegisterVisible] = useState(false);

  const loading = useStoreState((state) => state.adm.loading);
  const instituicoes = useStoreState((state) => state.adm.instituicoes);

  const [editandoInstituicao, setEditandoInstituicao] = useState({});

  useEffect(() => {
    (async () => {
      await getInstituicoes();
    })();
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
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                  setEditandoInstituicao({});
                  setRegisterVisible(true);
                }}
              >
                Adicionar
              </Button>
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
            title={"Cadastrar Instituição"}
            visible={registerVisible}
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
            <RegisterInstitution instituicao={editandoInstituicao} />
          </Modal>
        </Content>
      </Layout>
    </>
  );
}
