import React from "react";

import ministerio from "../../assets/marca.png";

import { Layout, Typography, Row, Col, Grid, Image } from "antd";

const { Text } = Typography;
const { useBreakpoint } = Grid;
const { Footer } = Layout;

export default function FooterGov() {
  const screens = useBreakpoint();

  return (
    <footer style={{ backgroundColor: "#404040", color: "white" }}>
      <Row
        align={"middle"}
        wrap={!screens.md}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Col
          order={screens.md ? 0 : 1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: "white", fontSize: "16px", textAlign: "center" }}
          >
            Copyright © 2022 PlaforEDU. Todos os direitos reservados.
          </Text>
        </Col>
        <Col
          order={screens.md ? 1 : 0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            height="57px"
            src={ministerio}
            alt="Ministério da Educação"
            preview={false}
          />
        </Col>
      </Row>
    </footer>
  );
}
