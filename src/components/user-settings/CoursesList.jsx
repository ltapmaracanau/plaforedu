import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import { Button, Card, Layout, List, Modal } from "antd";
import RegisterCourse from "./RegisterCourse";

const { Content } = Layout;

export default function CoursesList() {
  const getCursos = useStoreActions((actions) => actions.adm.getCursos);

  const [registerVisible, setRegisterVisible] = useState(false);

  const loading = useStoreState((state) => state.adm.loading);
  const cursos = useStoreState((state) => state.adm.cursos);

  const [editandoCurso, setEditandoCurso] = useState({});

  useEffect(() => {
    (async () => {
      await getCursos();
    })();
  }, [getCursos]);

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
            title={"Cursos"}
            extra={
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                  setEditandoCurso({});
                  setRegisterVisible(true);
                }}
              >
                Adicionar
              </Button>
            }
          >
            <List
              loading={loading}
              dataSource={cursos}
              style={{ width: "100%" }}
              renderItem={(item) => {
                return (
                  <List.Item
                    actions={[
                      <Button
                        onClick={() => {
                          setEditandoCurso(item);
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
                      title={item.name}
                      description={item.institution.name}
                    />
                  </List.Item>
                );
              }}
            />
          </Card>
          <Modal
            title={"Cadastrar Curso"}
            visible={registerVisible}
            destroyOnClose={true}
            onCancel={() => {
              getCursos();
              setRegisterVisible(false);
            }}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getCursos();
                  setEditandoCurso({});
                  setRegisterVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <RegisterCourse curso={editandoCurso} />
          </Modal>
        </Content>
      </Layout>
    </>
  );
}
