import React from "react";

import { Link, useNavigate } from "react-router-dom";

import LogoPlafor from "../../assets/LOGOPLAFORHEADER.svg";

import { useStoreActions, useStoreState } from "easy-peasy";
import {
  DownOutlined,
  MenuOutlined,
  LogoutOutlined,
  UserAddOutlined,
  UserOutlined,
  KeyOutlined,
} from "@ant-design/icons";

import { Row, Col, Menu, Grid, Image, Button, Avatar, Space } from "antd";

const { useBreakpoint } = Grid;

const { SubMenu } = Menu;

export default function HeaderHome() {
  const screens = useBreakpoint();
  let navigate = useNavigate();

  const setFilter = useStoreActions((actions) => actions.cursos.setFilter);
  const filterDefault = useStoreState((state) => state.cursos.filterDefault);
  const isAuthenticated = useStoreState((state) => state.adm.isAuthenticated);
  const logout = useStoreActions((actions) => actions.adm.logout);
  const user = useStoreState((actions) => actions.adm.user);

  const onClickItinerario = (itinerario) => {
    setFilter({
      ...filterDefault,
      itinerario: itinerario,
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
            <Menu.Item key={31} onClick={() => onClickItinerario(1)}>
              <Link to={"/cursos"}>Iniciação ao Serviço Público</Link>
            </Menu.Item>
            <Menu.Item key={32} onClick={() => onClickItinerario(2)}>
              <Link to={"/cursos"}>Técnico-Administrativo em Educação</Link>
            </Menu.Item>
            <Menu.Item key={33} onClick={() => onClickItinerario(3)}>
              <Link to={"/cursos"}>Docente</Link>
            </Menu.Item>
            <Menu.Item key={34} onClick={() => onClickItinerario(4)}>
              <Link to={"/cursos"}>Gerencial</Link>
            </Menu.Item>
            <Menu.Item key={35} onClick={() => onClickItinerario(5)}>
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
              {user.roles.includes("ADMINISTRADOR") ? (
                <Menu.Item
                  key={62}
                  onClick={() => {
                    navigate("/register");
                  }}
                  icon={
                    <Space>
                      Registrar Usuário <UserAddOutlined />
                    </Space>
                  }
                />
              ) : null}
              <Menu.Item
                key={63}
                onClick={() => {
                  navigate("/update-password");
                }}
                icon={
                  <Space>
                    Alterar Senha <KeyOutlined />
                  </Space>
                }
              />
              <Menu.Item
                key={61}
                onClick={() => {
                  logout();
                  navigate("/");
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
