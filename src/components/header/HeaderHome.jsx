import React from "react";

import { Link } from "react-router-dom";

import LogoPlafor from "../../assets/LOGOPLAFORHEADER.svg";

import { useStoreActions, useStoreState } from "easy-peasy";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";

import { Row, Col, Menu, Grid, Image, Button } from "antd";
import Login from "../login";

const { useBreakpoint } = Grid;

const { SubMenu } = Menu;

export default function HeaderHome() {
  const screens = useBreakpoint();

  const setFilter = useStoreActions((actions) => actions.cursos.setFilter);
  const setLoginIsVisible = useStoreActions(
    (actions) => actions.adm.setLoginIsVisible
  );
  const filterDefault = useStoreState((state) => state.cursos.filterDefault);
  const loginIsVisible = useStoreState((state) => state.adm.loginIsVisible);

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
          <Menu.Item key={6} disabled={true}>
            <Button
              onClick={() => {
                setLoginIsVisible(!loginIsVisible);
              }}
              shape="round"
            >
              Login
            </Button>
          </Menu.Item>
        </Menu>
      </Col>
      <Login />
    </Row>
  );
}
