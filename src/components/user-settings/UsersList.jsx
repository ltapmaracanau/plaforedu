import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import { Button, Card, Input, Layout, List, Modal, Tag } from "antd";
import UserRegister from "./UserRegister";
import UserUpdate from "./UserUpdate";

const { Content } = Layout;
const { Search } = Input;

const userStatusRefactor = (status) => {
  const options = {
    PENDING: "PENDENTE",
    ACTIVE: "ATIVO",
    FILED: "ARQUIVADO",
    BLOCKED: "BLOQUEADO",
  };
  return options[status] || options.ACTIVE;
};

const colorStatus = (status) => {
  const options = {
    PENDING: "#ffe000",
    ACTIVE: "#87d068",
    FILED: "#2db7f5",
    BLOCKED: "#f50",
  };
  return options[status] || options.FILED;
};

export default function UsersList() {
  const getUsers = useStoreActions((actions) => actions.adm.getUsers);

  const loading = useStoreState((state) => state.adm.loading);
  const users = useStoreState((state) => state.adm.users);

  const [registerVisible, setRegisterVisible] = useState(false);
  const [editandoUsuario, setEditandoUsuario] = useState({});
  const [editVisible, setEditVisible] = useState(false);

  useEffect(() => {
    getUsers();
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
                      <Tag key={item.id} color={colorStatus(item.status)}>
                        {userStatusRefactor(item.status)}
                      </Tag>,
                      <Button
                        key={item.id}
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
            <UserRegister
              actionVisible={() => {
                setRegisterVisible(false);
                getUsers();
              }}
            />
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
            <UserUpdate
              id={editandoUsuario.id}
              actionVisible={() => {
                setEditVisible(false);
                getUsers();
              }}
            />
          </Modal>
        </Content>
      </Layout>
    </>
  );
}
