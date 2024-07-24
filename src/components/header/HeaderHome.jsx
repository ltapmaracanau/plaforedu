import { Link, useNavigate } from "react-router-dom";

import LogoPlafor from "../../assets/LOGOPLAFORHEADER.svg";
import PLAFORLOGO from "../../assets/PLAFOR_smart.png";

import { useStoreActions, useStoreState } from "easy-peasy";
import {
  DownOutlined,
  MenuOutlined,
  LogoutOutlined,
  LoginOutlined,
  SettingOutlined,
  NodeIndexOutlined,
} from "@ant-design/icons";

import {
  Row,
  Col,
  Menu,
  Grid,
  Image,
  Avatar,
  notification,
  ConfigProvider,
} from "antd";

const { useBreakpoint } = Grid;

export default function HeaderHome() {
  const screens = useBreakpoint();
  let navigate = useNavigate();

  const setFilter = useStoreActions((actions) => actions.courses.setFilter);
  const filterDefault = useStoreState((state) => state.courses.filterDefault);
  const isAuthenticated = useStoreState((state) => state.adm.isAuthenticated);
  const isActive = useStoreState((state) => state.adm.isActive);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);
  const logout = useStoreActions((actions) => actions.adm.logout);

  const onClickItinerario = (itinerario) => {
    const itinerarioClicado = itinerarios.find((item) =>
      item.name.toLowerCase().includes(itinerario.toLowerCase())
    );
    if (!itinerarioClicado) {
      notification.error({
        message: "Itinerário não encontrado!",
      });
      return;
    }
    setFilter({
      ...filterDefault,
      itinerario: itinerarioClicado.id,
      esquemaDeCores: "categoria",
    });
    navigate("/cursos");
  };

  const onClickMenu = ({ key }) => {
    if (key.startsWith("/")) {
      navigate(key);
    } else if (key === "recursos") {
      return;
    } else if (key === "logout") {
      logOut();
    } else if (key === "login") {
      navigate("/login");
      return;
    } else {
      onClickItinerario(key);
    }
  };

  const logOut = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      notification.error({
        message: "Erro ao fazer logout!",
      });
    }
  };

  const items = [
    {
      label: "HOME",
      key: "/",
    },
    {
      label: "SOBRE",
      key: "/about",
    },
    {
      label: "HISTÓRICO PLAFOR",
      key: "/history",
    },
    {
      label: "RECURSOS",
      icon: screens.md ? <DownOutlined /> : null,
      key: "recursos",
      children: [
        {
          label: "Iniciação ao Serviço Público",
          key: "Iniciação",
        },
        {
          label: "Técnico-Administrativo em Educação",
          key: "Educação",
        },
        {
          label: "Docente",
          key: "Docente",
        },
        {
          label: "Gerencial",
          key: "Gerencial",
        },
        {
          label: "Preparação para a aposentadoria",
          key: "Preparação",
        },
      ],
    },
    {
      label: "FALE CONOSCO",
      key: "/suporte",
    },
    {
      label: "FAQ",
      key: "/faq",
    },
    {
      label: isAuthenticated ? (
        <Avatar
          style={{ backgroundColor: "#fff" }}
          src={<img src={PLAFORLOGO} />}
          size="default"
        />
      ) : (
        <>INTRANET</>
      ),
      icon: isAuthenticated ? null : <LoginOutlined />,
      key: "login",
      children: isAuthenticated
        ? [
            {
              key: "/settings",
              label: "Configurações",
              icon: <SettingOutlined />,
            },
            {
              key: "/settings/study-plans",
              label: "Planos de Desenvolvimento",
              icon: <NodeIndexOutlined />,
              disabled: !isActive,
            },
            {
              key: "logout",
              label: "Sair",
              icon: <LogoutOutlined />,
            },
          ]
        : undefined,
    },
  ];

  return (
    <Row
      wrap={false}
      align="middle"
      style={{
        height: "70px",
        backgroundImage: "linear-gradient(to right, #2C55A1, #229EDC)",
      }}
    >
      <Col
        flex={"300px"}
        style={
          !screens.xs
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : {
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                paddingLeft: "10px",
              }
        }
      >
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            preview={false}
            height="55px"
            style={{ padding: "5px" }}
            src={LogoPlafor}
            alt="Logo PlaforEDU"
          />
        </Link>
      </Col>
      <Col
        flex="auto"
        style={
          !screens.xs
            ? { fontFamily: "Roboto", marginRight: "50px" }
            : { fontFamily: "Roboto" }
        }
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#fff",
            },
            components: {
              Menu: {
                subMenuItemBg: "#1890ff",
                itemBg: "transparent",
                itemColor: "#fff",
                itemHoverColor: "#fff",
                horizontalItemSelectedBg: "transparent",
                colorBgElevated: "#1890ff",
                colorPrimaryBorder: "#fff",
              },
            },
          }}
        >
          <Menu
            mode="horizontal"
            selectable={false}
            overflowedIndicator={<MenuOutlined style={{ fontSize: "20px" }} />}
            style={{ justifyContent: "right" }}
            items={items}
            onClick={onClickMenu}
          />
        </ConfigProvider>
      </Col>
    </Row>
  );
}
