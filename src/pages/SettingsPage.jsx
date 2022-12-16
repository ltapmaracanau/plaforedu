import React, { useState } from "react";
import { useStoreState } from "easy-peasy";

import HeaderHome from "../components/header/HeaderHome";
import CompList from "../components/user-settings/CompList";
import MyProfile from "../components/user-settings/MyProfile";
import TemasList from "../components/user-settings/TemasList";
import UsersList from "../components/user-settings/UsersList";
import CoursesList from "../components/user-settings/CoursesList";
import SubtemasList from "../components/user-settings/SubtemasList";
import CategCompList from "../components/user-settings/CategCompList";
import UpdatePassword from "../components/user-settings/UpdatePassword";
import InstitutionList from "../components/user-settings/InstitutionsList";

import {
  UserOutlined,
  DiffOutlined,
  TeamOutlined,
  KeyOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
import FormativeTrailsList from "../components/user-settings/FormativeTrailsList";

const { Sider } = Layout;

export default function SettingsPage() {
  const isAdm = useStoreState((state) => state.adm.isAdm);

  const contentArray = [
    <MyProfile key={"my-profile"} />,
    <UpdatePassword key={"my-password"} />,
    <UsersList key={"users-list"} />,
    <CoursesList key={"courses-list"} />,
    <InstitutionList key={"institution-list"} />,
    <CategCompList key={"categ-comp-list"} />,
    <CompList key={"comp-list"} />,
    <TemasList key={"temas-list"} />,
    <SubtemasList key={"subtemas-list"} />,
    <FormativeTrailsList key={"trails-list"} />,
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
              icon={<UserOutlined />}
              key={"0"}
              onClick={() => {
                setIndex(0);
              }}
            >
              Meu Perfil
            </Menu.Item>
            <Menu.Item
              style={{ fontFamily: "Roboto" }}
              key={"1"}
              icon={<KeyOutlined />}
              onClick={() => {
                setIndex(1);
              }}
            >
              Alterar Senha
            </Menu.Item>
            {isAdm ? (
              <Menu.SubMenu
                style={{ fontFamily: "Roboto" }}
                icon={<DiffOutlined />}
                key={"2"}
                title={"Cadastros"}
              >
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"21"}
                  icon={<TeamOutlined />}
                  onClick={() => {
                    setIndex(2);
                  }}
                >
                  Usuários
                </Menu.Item>
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"22"}
                  onClick={() => {
                    setIndex(3);
                  }}
                >
                  Cursos
                </Menu.Item>
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"23"}
                  onClick={() => {
                    setIndex(4);
                  }}
                >
                  Instituições
                </Menu.Item>
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"24"}
                  onClick={() => {
                    setIndex(5);
                  }}
                >
                  Categorias de competências
                </Menu.Item>
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"25"}
                  onClick={() => {
                    setIndex(6);
                  }}
                >
                  Competências
                </Menu.Item>
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"26"}
                  onClick={() => {
                    setIndex(7);
                  }}
                >
                  Temas
                </Menu.Item>
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"27"}
                  onClick={() => {
                    setIndex(8);
                  }}
                >
                  Subtemas
                </Menu.Item>
                <Menu.Item
                  style={{ fontFamily: "Roboto" }}
                  key={"28"}
                  onClick={() => {
                    setIndex(9);
                  }}
                >
                  Trilhas Formativas
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
