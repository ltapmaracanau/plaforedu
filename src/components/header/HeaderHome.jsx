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
} from "antd";

const { useBreakpoint } = Grid;

const { SubMenu } = Menu;

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
        <Menu
          mode="horizontal"
          selectable={false}
          overflowedIndicator={<MenuOutlined style={{ fontSize: "20px" }} />}
          style={{ justifyContent: "right" }}
        >
          <Menu.Item key={1}>
            <Link to={"/"}>HOME</Link>
          </Menu.Item>
          <Menu.Item key={2}>
            <Link to={"/about"}>SOBRE</Link>
          </Menu.Item>
          {/* <SubMenu icon={<DownOutlined />} key={2} title='SOBRE' >
            <Menu.Item key={21}><Link to={'/about'}>Sobre</Link></Menu.Item>
            <Menu.Item key={22}>Termos e Licenças</Menu.Item>
            <Menu.Item key={23}>Manuais e Guias</Menu.Item>
            <Menu.Item key={24}>Orientações</Menu.Item>
          </SubMenu> */}
          <SubMenu
            icon={screens.md ? <DownOutlined /> : null}
            key={3}
            title="RECURSOS"
          >
            <Menu.Item key={31} onClick={() => onClickItinerario("Iniciação")}>
              <Link to={"/cursos"}>Iniciação ao Serviço Público</Link>
            </Menu.Item>
            <Menu.Item key={32} onClick={() => onClickItinerario("Educação")}>
              <Link to={"/cursos"}>Técnico-Administrativo em Educação</Link>
            </Menu.Item>
            <Menu.Item key={33} onClick={() => onClickItinerario("Docente")}>
              <Link to={"/cursos"}>Docente</Link>
            </Menu.Item>
            <Menu.Item key={34} onClick={() => onClickItinerario("Gerencial")}>
              <Link to={"/cursos"}>Gerencial</Link>
            </Menu.Item>
            <Menu.Item key={35} onClick={() => onClickItinerario("Preparação")}>
              <Link to={"/cursos"}>Preparação para a aposentadoria</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key={4}>
            <Link to={"/faleconosco"}>FALE CONOSCO</Link>
          </Menu.Item>
          <Menu.Item key={5}>
            <Link to={"/faq"}>FAQ</Link>
          </Menu.Item>
          {isAuthenticated ? (
            <SubMenu
              key={6}
              icon={<Avatar size="default" icon={<UserOutlined />} />}
            >
              <Menu.Item
                key={61}
                onClick={() => {
                  navigate("/settings");
                }}
                icon={
                  <Space>
                    Configurações <SettingOutlined />
                  </Space>
                }
              />
              <Menu.Item
                key={62}
                onClick={() => {
                  logout();
                  notification.success({
                    message: "Logout concluído com sucesso!",
                  });
                  navigate("/login");
                }}
                icon={
                  <Space>
                    Sair <LogoutOutlined />
                  </Space>
                }
              />
            </SubMenu>
          ) : (
            <Menu.Item key={6}>
              <Link to={"/login"}>
                <Button shape="round">LOGIN</Button>
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </Col>
    </Row>
  );
}
