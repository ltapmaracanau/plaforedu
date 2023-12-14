import { useStoreState } from "easy-peasy";

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

import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Sider } = Layout;

export default function SettingsPage() {
  const navigate = useNavigate();
  const isAdm = useStoreState((state) => state.adm.isAdm);
  const isCoord = useStoreState((state) => state.adm.isCoord);
  const isActive = useStoreState((state) => state.adm.isActive);
  const isAnalDados = useStoreState((state) => state.adm.isAnalDados);

  const items = [
    {
      label: "Meu Perfil",
      icon: <UserOutlined />,
      key: "/settings",
    },
    {
      label: "Alterar Senha",
      key: "/settings/update-password",
      icon: <KeyOutlined />,
    },
    {
      label: "Planos de Estudo",
      key: "/settings/study-plans",
      icon: <NodeIndexOutlined />,
    },
    {
      label: "Cadastros",
      key: "registers",
      disabled: !(isAdm || isCoord || isAnalDados || isActive),
      icon: <DiffOutlined />,
      children: [
        {
          key: "/settings/users",
          icon: <TeamOutlined />,
          label: "Usuários",
          disabled: !isAdm,
        },
        {
          key: "/settings/courses",
          icon: <BuildOutlined />,
          label: "Cursos",
        },
        {
          key: "/settings/institutions",
          icon: <BankOutlined />,
          label: "Instituições",
        },
        {
          key: "/settings/categ-comp",
          icon: <DatabaseOutlined />,
          label: "Categorias de competências",
        },
        {
          key: "/settings/competences",
          icon: <FlagOutlined />,
          label: "Competências",
        },
        {
          key: "/settings/themes",
          icon: <ReadOutlined />,
          label: "Temas",
        },
        {
          key: "/settings/subthemes",
          icon: <ScheduleOutlined />,
          label: "Subtemas",
        },
        {
          key: "/settings/formative-trails",
          icon: <NodeIndexOutlined />,
          label: "Trilhas Formativas",
        },
      ],
    },
    {
      key: "/settings/logs",
      icon: <FileSearchOutlined />,
      disabled: !(isAdm || isCoord || isActive),
      label: "Relatório de Buscas",
    },
  ];

  return (
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
          defaultChecked={"/"}
          onClick={(e) => {
            navigate(`${e.key}`);
          }}
          items={items}
        />
      </Sider>
      <div
        style={{
          width: "100%",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
