import { useState } from "react";

import ministerio from "../../assets/LOGO_2023_COM_MINISTERIO.png";

import { Typography, Row, Col, Grid, Image } from "antd";
import TermCookiesModal from "../privacyTerms/TermCookiesModal";
import TermPrivacyModal from "../privacyTerms/TermPrivacyModal";

const { Link, Text } = Typography;

const { useBreakpoint } = Grid;

export default function FooterGov() {
  const screens = useBreakpoint();

  const [termVisible, setTermVisible] = useState(false);
  const [termPrivacyVisible, setTermPrivacyVisible] = useState(false);

  return (
    <footer
      style={{
        flexGrow: 0,
        flexBasis: "auto",
        backgroundColor: "#404040",
        color: "white",
        backgroundImage: "linear-gradient(to right, #2C55A1, #35A8E0)",
        width: "100%",
      }}
    >
      <Row
        align={"middle"}
        wrap={!screens.md}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          minHeight: "50px",
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
            Copyright © 2024 PlaforEDU. Todos os direitos reservados. | Conheça
            nossa{" "}
            <Link
              onClick={() => {
                setTermPrivacyVisible(true);
              }}
              style={{
                color: "white",
                textDecoration: "underline",
              }}
            >
              Política de Privacidade
            </Link>
          </Text>
        </Col>
        <Col
          order={screens.md ? 1 : 0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <Image
            height={60}
            src={ministerio}
            alt="Ministério da Educação"
            preview={false}
          />
        </Col>
      </Row>
      <TermCookiesModal
        termVisible={termVisible}
        setTermVisible={setTermVisible}
      />
      <TermPrivacyModal
        termPrivacyVisible={termPrivacyVisible}
        setTermPrivacyVisible={setTermPrivacyVisible}
        setTermVisible={setTermVisible}
      />
    </footer>
  );
}
