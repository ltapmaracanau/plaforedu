import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  Input,
  Layout,
  List,
  Modal,
  Switch,
  Tag,
  Tooltip,
} from "antd";
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
  const getUsers = useStoreActions((actions) => actions.users.getUsers);

  const loading = useStoreState((state) => state.users.loading);
  const users = useStoreState((state) => state.users.users);

  const [registerVisible, setRegisterVisible] = useState(false);
  const [editandoUsuario, setEditandoUsuario] = useState({});
  const [editVisible, setEditVisible] = useState(false);

  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <div style={{ width: "100%" }}>
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
                  allowClear
                  onSearch={(e) => {
                    setTextSearch(e);
                    getUsers({ query: e, showFiled: showFiled });
                  }}
                  style={{
                    marginRight: "10px",
                  }}
                  placeholder={"Buscar usuários"}
                />
                <Tooltip title={"Exibir Arquivados"}>
                  <Switch
                    defaultChecked={showFiled}
                    checked={showFiled}
                    style={{
                      marginRight: "10px",
                    }}
                    onClick={(checked) => {
                      setShowFiled(checked);
                      getUsers({ query: textSearch, showFiled: checked });
                    }}
                  />
                </Tooltip>
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
            open={registerVisible}
            destroyOnClose={true}
            onCancel={() => {
              getUsers({ query: textSearch, showFiled: showFiled });
              setRegisterVisible(false);
            }}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getUsers({ query: textSearch, showFiled: showFiled });
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
                getUsers({ query: textSearch, showFiled: showFiled });
              }}
            />
          </Modal>
          <Modal
            title={"Editar usuário"}
            open={editVisible}
            destroyOnClose={true}
            onCancel={() => {
              getUsers({ query: textSearch, showFiled: showFiled });
              setEditVisible(false);
            }}
            width={"1000px"}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getUsers({ query: textSearch, showFiled: showFiled });
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
                getUsers({ query: textSearch, showFiled: showFiled });
              }}
            />
          </Modal>
        </div>
      </div>
    </>
  );
}
