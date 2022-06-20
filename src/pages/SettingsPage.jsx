import React, { useState } from "react";
import { useStoreState } from "easy-peasy";

import HeaderHome from "../components/header/HeaderHome";
import RegisterUser from "../components/user-settings/RegisterUser";
import UpdatePassword from "../components/user-settings/UpdatePassword";
import InstitutionList from "../components/user-settings/InstitutionsList";
import CoursesList from "../components/user-settings/CoursesList";

import { Layout, Menu } from "antd";

const { Sider } = Layout;

export default function SettingsPage() {
  const isAdm = useStoreState((state) => state.adm.isAdm);

  const contentArray = [
    <UpdatePassword />,
    <RegisterUser />,
    <CoursesList />,
    <InstitutionList />,
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
                  Usuários
                </Menu.Item>
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"12"}
                  onClick={() => {
                    setIndex(2);
                  }}
                >
                  Cursos
                </Menu.Item>
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"13"}
                  onClick={() => {
                    setIndex(3);
                  }}
                >
                  Instituições
                </Menu.Item>
              </Menu.SubMenu>
            ) : null}
          </Menu>
        </Sider>
        {contentArray[index]}
      </Layout>
    </Layout>
  );
}
