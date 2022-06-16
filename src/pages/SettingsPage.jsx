import React, { useState } from "react";
import { useStoreState } from "easy-peasy";

import HeaderHome from "../components/header/HeaderHome";
import Register from "../components/user-settings/Register";
import RegisterCourse from "../components/user-settings/RegisterCourse";
import UpdatePassword from "../components/user-settings/UpdatePassword";
import RegisterInstitution from "../components/user-settings/RegisterInstitution";

import { Layout, Menu } from "antd";

const { Sider, Content } = Layout;

export default function SettingsPage() {
  const isAdm = useStoreState((state) => state.adm.isAdm);

  const contentArray = [
    <UpdatePassword />,
    <Register />,
    <RegisterCourse />,
    <RegisterInstitution />,
  ];

  const [index, setIndex] = useState(0);

  return (
    <Layout>
      <HeaderHome />
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            style={{
              height: "100%",
              borderRight: 0,
            }}
            theme={"dark"}
            defaultChecked={"0"}
            defaultSelectedKeys={["0"]}
          >
            <Menu.Item
              style={{ fontFamily: "Roboto" }}
              key={"0"}
              onClick={() => {
                setIndex(0);
              }}
            >
              Alterar Senha
            </Menu.Item>
            {isAdm ? (
              <Menu.SubMenu
                style={{ fontFamily: "Roboto" }}
                key={"1"}
                title={"Cadastros"}
              >
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"11"}
                  onClick={() => {
                    setIndex(1);
                  }}
                >
                  Cadastrar Usuário
                </Menu.Item>
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"12"}
                  onClick={() => {
                    setIndex(2);
                  }}
                >
                  Cadastrar Curso
                </Menu.Item>
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"13"}
                  onClick={() => {
                    setIndex(3);
                  }}
                >
                  Cadastrar Instituição
                </Menu.Item>
              </Menu.SubMenu>
            ) : null}
          </Menu>
        </Sider>
        <Content
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {contentArray[index]}
        </Content>
      </Layout>
    </Layout>
  );
}
