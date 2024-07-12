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
  LineChartOutlined,
  ToolOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Sider } = Layout;

export default function SettingsPage() {
  const navigate = useNavigate();
  const isAdm = useStoreState((state) => state.adm.isAdm);
  const isCoord = useStoreState((state) => state.adm.isCoord);
  const isConsultor = useStoreState((state) => state.adm.isConsultor);
  const isActive = useStoreState((state) => state.adm.isActive);
  const isAnalistaDados = useStoreState((state) => state.adm.isAnalistaDados);
  const isServidor = useStoreState((state) => state.adm.isServidor);
  const isJornalista = useStoreState((state) => state.adm.isJornalista);

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
      disabled: !isActive || !(isAdm || isCoord || isServidor),
    },
    {
      label: "Cadastros",
      key: "registers",
      disabled:
        !isActive ||
        !(isAdm || isCoord || isAnalistaDados || isConsultor || isJornalista),
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
          disabled: !(isAdm || isCoord || isConsultor || isAnalistaDados),
        },
        {
          key: "/settings/pendings",
          icon: <ToolOutlined />,
          label: "Cursos Sob Análise",
          disabled: !(isAdm || isCoord || isConsultor),
        },
        {
          key: "/settings/institutions",
          icon: <BankOutlined />,
          label: "Instituições",
          disabled: !(isAdm || isCoord || isAnalistaDados),
        },
        {
          key: "/settings/categ-comp",
          icon: <DatabaseOutlined />,
          label: "Categorias De Competências",
          disabled: !(isAdm || isCoord || isAnalistaDados),
        },
        {
          key: "/settings/competences",
          icon: <FlagOutlined />,
          label: "Competências",
          disabled: !(isAdm || isCoord || isAnalistaDados),
        },
        {
          key: "/settings/themes",
          icon: <ReadOutlined />,
          label: "Temas",
          disabled: !(isAdm || isCoord || isAnalistaDados),
        },
        {
          key: "/settings/subthemes",
          icon: <ScheduleOutlined />,
          label: "Subtemas",
          disabled: !(isAdm || isCoord || isAnalistaDados),
        },
        {
          key: "/settings/formative-trails",
          icon: <NodeIndexOutlined />,
          label: "Trilhas Formativas",
          disabled: !(isAdm || isCoord || isAnalistaDados),
        },
        {
          key: "/settings/documents",
          icon: <FileSearchOutlined />,
          label: "Documentos",
          disabled: !(isAdm || isCoord || isAnalistaDados || isJornalista),
        },
      ],
    },
    {
      key: "logs",
      icon: <LineChartOutlined />,
      disabled: !isActive || !(isAdm || isCoord),
      label: "Relatórios",
      children: [
        {
          key: "/settings/logs",
          icon: <FileSearchOutlined />,
          label: "Relatório De Buscas",
          disabled: !isAdm,
        },
        {
          key: "/settings/log-courses-trails",
          icon: <FileSearchOutlined />,
          label: "Log do Sistema",
          disabled: !isAdm,
        },
      ],
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
          defaultSelectedKeys={items[0].key}
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
          padding: "20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
