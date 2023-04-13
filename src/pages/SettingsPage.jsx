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
  NodeIndexOutlined,
  DatabaseOutlined,
  ReadOutlined,
  BuildOutlined,
  FlagOutlined,
  BankOutlined,
  ScheduleOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Space } from "antd";
import FormativeTrailsList from "../components/user-settings/FormativeTrailsList";
import ListSearchLogs from "../components/user-settings/ListSearchLogs";

const { Sider } = Layout;

export default function SettingsPage() {
  const isAdm = useStoreState((state) => state.adm.isAdm);
  const isCoord = useStoreState((state) => state.adm.isCoord);
  const isActive = useStoreState((state) => state.adm.isActive);

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
    <ListSearchLogs key={"search-list"} />,
  ];

  const [index, setIndex] = useState(0);

  const items = [
    {
      label: (
        <div
          onClick={() => {
            setIndex(0);
          }}
        >
          Meu Perfil
        </div>
      ),
      icon: <UserOutlined />,
      key: 0,
    },
    {
      label: (
        <div
          onClick={() => {
            setIndex(1);
          }}
        >
          Alterar Senha
        </div>
      ),
      icon: <KeyOutlined />,
      key: 1,
    },
    {
      label: "Cadastros",
      key: 3,
      disabled: !(isAdm || isCoord || isActive),
      icon: <DiffOutlined />,
      children: [
        {
          key: 31,
          icon: <TeamOutlined />,
          label: (
            <div
              onClick={() => {
                setIndex(2);
              }}
            >
              Usuários
            </div>
          ),
          disabled: !isAdm,
        },
        {
          key: 32,
          icon: <BuildOutlined />,
          label: (
            <div
              onClick={() => {
                setIndex(3);
              }}
            >
              Cursos
            </div>
          ),
        },
        {
          key: 33,
          icon: <BankOutlined />,
          label: (
            <div
              onClick={() => {
                setIndex(4);
              }}
            >
              Instituições
            </div>
          ),
        },
        {
          key: 34,
          icon: <DatabaseOutlined />,
          label: (
            <div
              onClick={() => {
                setIndex(5);
              }}
            >
              Categorias de competências
            </div>
          ),
        },
        {
          key: 35,
          icon: <FlagOutlined />,
          label: (
            <div
              onClick={() => {
                setIndex(6);
              }}
            >
              Competências
            </div>
          ),
        },
        {
          key: 36,
          icon: <ReadOutlined />,
          label: (
            <div
              onClick={() => {
                setIndex(7);
              }}
            >
              Temas
            </div>
          ),
        },
        {
          key: 37,
          icon: <ScheduleOutlined />,
          label: (
            <div
              onClick={() => {
                setIndex(8);
              }}
            >
              Subtemas
            </div>
          ),
        },
        {
          key: 38,
          icon: <NodeIndexOutlined />,
          label: (
            <div
              onClick={() => {
                setIndex(9);
              }}
            >
              Trilhas Formativas
            </div>
          ),
        },
      ],
    },
    {
      key: 4,
      icon: <FileSearchOutlined />,
      disabled: !(isAdm || isCoord || isActive),
      label: (
        <div
          onClick={() => {
            setIndex(10);
          }}
        >
          Relatório de Buscas
        </div>
      ),
    },
  ];

  return (
    <>
      <HeaderHome />
      <div
        style={{
          flexGrow: 1,
          height: "100%",
          display: "flex",
        }}
      >
        <Sider width={"280px"}>
          <Menu
            mode="inline"
            style={{
              height: "100%",
              borderRight: 0,
              fontFamily: "Roboto",
            }}
            theme={"light"}
            defaultChecked={"0"}
            defaultSelectedKeys={["0"]}
            items={items}
          />
        </Sider>
        <div
          style={{
            width: "100%",
          }}
        >
          {contentArray[index]}
        </div>
      </div>
    </>
  );
}
