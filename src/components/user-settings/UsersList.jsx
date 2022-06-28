import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import { Button, Card, Input, Layout, List, Modal, Tag } from "antd";
import RegisterUser from "./RegisterUser";
import EditUser from "./EditUser";

const { Content } = Layout;
const { Search } = Input;

export default function UsersList() {
  const getUsers = useStoreActions((actions) => actions.adm.getUsers);

  const [registerVisible, setRegisterVisible] = useState(false);

  const loading = useStoreState((state) => state.adm.loading);
  const users = useStoreState((state) => state.adm.users);

  const [editandoUsuario, setEditandoUsuario] = useState({});
  const [editVisible, setEditVisible] = useState(false);

  const colorStatus = (status) => {
    switch (status) {
      case "PENDING":
        return "#ffe000";
      case "ACTIVE":
        return "#87d068";
      case "FILED":
        return "#2db7f5";
      case "BLOCKED":
        return "#f50";
      default:
        return "#2db7f5";
    }
  };

  useEffect(() => {
    (async () => {
      await getUsers();
    })();
  }, [getUsers]);

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
            title={"Usuários"}
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
                    getUsers({ query: e });
                  }}
                  style={{
                    marginRight: "30px",
                  }}
                  placeholder={"Buscar usuários"}
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
              dataSource={users}
              style={{ width: "100%" }}
              renderItem={(item) => {
                return (
                  <List.Item
                    actions={[
                      <Tag color={colorStatus(item.status)}>{item.status}</Tag>,
                      <Button
                        onClick={() => {
                          setEditandoUsuario(item);
                          setEditVisible(true);
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
                      description={item.institution}
                    />
                  </List.Item>
                );
              }}
            />
          </Card>
          <Modal
            title={"Cadastrar Usuário"}
            visible={registerVisible}
            destroyOnClose={true}
            onCancel={() => {
              getUsers();
              setRegisterVisible(false);
            }}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getUsers();
                  setRegisterVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <RegisterUser />
          </Modal>
          <Modal
            title={"Editar usuário"}
            visible={editVisible}
            destroyOnClose={true}
            onCancel={() => {
              getUsers();
              setEditVisible(false);
            }}
            width={"1000px"}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getUsers();
                  setEditVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <EditUser id={editandoUsuario.id} />
          </Modal>
        </Content>
      </Layout>
    </>
  );
}
