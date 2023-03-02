import React from "react";
import brasil from "../../assets/br.svg";

import { DashOutlined } from "@ant-design/icons";

import { Row, Col, Image, Grid, Typography, Dropdown, Menu } from "antd";

const { useBreakpoint } = Grid;
const { Text } = Typography;

export default function HeaderGov() {
  const screens = useBreakpoint();

  const items = [
    {
      label: (
        <a target={"_blank"} rel="noreferrer" href="https://www.gov.br/pt-br">
          <Text style={{ fontSize: "80%", fontWeight: "bold" }}>
            Simplifique!
          </Text>
        </a>
      ),
      key: 0,
    },
    {
      label: (
        <a target={"_blank"} rel="noreferrer" href="https://www.gov.br/pt-br">
          <Text style={{ fontSize: "80%", fontWeight: "bold" }}>Participe</Text>
        </a>
      ),
      key: 1,
    },
    {
      label: (
        <a target={"_blank"} rel="noreferrer" href="https://www.gov.br/pt-br">
          <Text style={{ fontSize: "80%", fontWeight: "bold" }}>
            Acesso à informação
          </Text>
        </a>
      ),
      key: 2,
    },
    {
      label: (
        <a target={"_blank"} rel="noreferrer" href="https://www.gov.br/pt-br">
          <Text style={{ fontSize: "80%", fontWeight: "bold" }}>
            Legislação
          </Text>
        </a>
      ),
      key: 3,
    },
    {
      label: (
        <a target={"_blank"} rel="noreferrer" href="https://www.gov.br/pt-br">
          <Text style={{ fontSize: "80%", fontWeight: "bold" }}>Canais</Text>
        </a>
      ),
      key: 4,
    },
  ];

  const menu = <Menu items={items} />;

  return (
    <Row
      align="top"
      style={{
        height: "40px",
        display: "flex",
        alignItems: "center",
        padding: "0 10%",
        backgroundColor: "#f8f8f8",
      }}
      wrap={false}
    >
      <Col
        flex={"90px"}
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          borderLeft: "2px solid #e7e7e7",
          borderRight: "2px solid #e7e7e7",
          justifyContent: "center",
          padding: "0 8px",
        }}
      >
        <a
          href="https://www.gov.br"
          alt="O portal do Brasil"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            height="24px"
            width="24px"
            src={brasil}
            alt="Brasil"
            preview={false}
          />
          <Text
            style={{
              fontSize: "80%",
              fontWeight: "bold",
              marginLeft: "4px",
            }}
          >
            BRASIL
          </Text>
        </a>
      </Col>
      <Col
        flex={"auto"}
        hidden={screens.xs ? true : false}
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <a
          className="linkHeader"
          target={"_blank"}
          rel="noreferrer"
          href="https://www.gov.br/pt-br"
        >
          <Text style={{ fontSize: "80%", fontWeight: "bold" }}>
            Simplifique!
          </Text>
        </a>
        <a
          className="linkHeader"
          target={"_blank"}
          rel="noreferrer"
          href="https://www.gov.br/pt-br"
        >
          <Text style={{ fontSize: "80%", fontWeight: "bold" }}>Participe</Text>
        </a>
        <a
          className="linkHeader"
          target={"_blank"}
          rel="noreferrer"
          href="https://www.gov.br/pt-br"
        >
          <Text style={{ fontSize: "80%", fontWeight: "bold" }}>
            Acesso à informação
          </Text>
        </a>
        <a
          className="linkHeader"
          target={"_blank"}
          rel="noreferrer"
          href="https://www.gov.br/pt-br"
        >
          <Text style={{ fontSize: "80%", fontWeight: "bold" }}>
            Legislação
          </Text>
        </a>
        <a
          className="linkHeader"
          target={"_blank"}
          rel="noreferrer"
          href="https://www.gov.br/pt-br"
          style={{
            borderRight: "solid 2px #e7e7e7",
          }}
        >
          <Text style={{ fontSize: "80%", fontWeight: "bold" }}>Canais</Text>
        </a>
      </Col>
      <Col
        flex={"auto"}
        hidden={screens.xs ? false : true}
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Dropdown menu={menu} trigger={["click"]}>
          <DashOutlined />
        </Dropdown>
      </Col>
    </Row>
  );
}
