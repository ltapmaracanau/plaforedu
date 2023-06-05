import React from "react";

import { Link, useNavigate } from "react-router-dom";

import LogoPlafor from "../../assets/LOGOPLAFORHEADER.svg";

import { useStoreActions, useStoreState } from "easy-peasy";
import {
  DownOutlined,
  MenuOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import {
  Row,
  Col,
  Menu,
  Grid,
  Image,
  Button,
  Avatar,
  Space,
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
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);
  const logout = useStoreActions((actions) => actions.adm.logout);

  const onClickItinerario = (itinerario) => {
    const itinerarioClicado = itinerarios.find((item) =>
      item.name.toLowerCase().includes(itinerario.toLowerCase())
    );
    setFilter({
      ...filterDefault,
      itinerario: itinerarioClicado.id,
      esquemaDeCores: "categoria",
    });
  };

  const items = [
    {
      label: <Link to={"/"}>HOME</Link>,
      key: 1,
    },
    {
      label: <Link to={"/about"}>SOBRE</Link>,
      key: 2,
    },
    {
      label: <Link to={"/history"}>HISTÓRICO PLAFOR</Link>,
      key: 80,
    },
    {
      label: "RECURSOS",
      icon: screens.md ? <DownOutlined /> : null,
      key: 3,
      children: [
        {
          label: (
            <div onClick={() => onClickItinerario("Iniciação")}>
              <Link to={"/cursos"}>Iniciação ao Serviço Público</Link>
            </div>
          ),
          key: 31,
        },
        {
          label: (
            <div onClick={() => onClickItinerario("Educação")}>
              <Link to={"/cursos"}>Técnico-Administrativo em Educação</Link>
            </div>
          ),
          key: 32,
        },
        {
          label: (
            <div onClick={() => onClickItinerario("Docente")}>
              <Link to={"/cursos"}>Docente</Link>
            </div>
          ),
          key: 33,
        },
        {
          label: (
            <div onClick={() => onClickItinerario("Gerencial")}>
              <Link to={"/cursos"}>Gerencial</Link>
            </div>
          ),
          key: 34,
        },
        {
          label: (
            <div onClick={() => onClickItinerario("Preparação")}>
              <Link to={"/cursos"}>Preparação para a aposentadoria</Link>
            </div>
          ),
          key: 35,
        },
      ],
    },
    {
      label: <Link to={"/faleconosco"}>FALE CONOSCO</Link>,
      key: 4,
    },
    {
      label: <Link to={"/faq"}>FAQ</Link>,
      key: 5,
    },
    {
      label: isAuthenticated ? (
        <Avatar
          style={{ backgroundColor: "#fff" }}
          src="https://joesch.moe/api/v1/random?key=1"
          size="default"
        />
      ) : (
        <Link to={"/login"}>
          <Button shape="round">LOGIN</Button>
        </Link>
      ),
      key: 6,
      children: isAuthenticated
        ? [
            {
              key: 61,
              label: (
                <Space
                  onClick={() => {
                    navigate("/settings");
                  }}
                >
                  Configurações <SettingOutlined />
                </Space>
              ),
            },
            {
              key: 62,
              label: (
                <Space
                  onClick={() => {
                    logout();
                    notification.success({
                      message: "Logout concluído com sucesso!",
                    });
                    navigate("/login");
                  }}
                >
                  Sair <LogoutOutlined />
                </Space>
              ),
            },
          ]
        : [],
    },
  ];

  return (
    <Row
      wrap={false}
      align="middle"
      style={{
        height: "70px",
        backgroundImage: "linear-gradient(to right, #2C55A1, #35A8E0)",
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
                colorSubItemBg: "#1890ff",
                colorItemBg: "transparent",
                colorItemText: "#fff",
                colorItemTextHover: "#fff",
                colorItemBgSelectedHorizontal: "transparent",
                colorBgElevated: "#1890ff",
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
          />
        </ConfigProvider>
      </Col>
    </Row>
  );
}
