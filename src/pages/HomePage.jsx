import React from "react";
import HeaderHome from "../components/header/HeaderHome";
import Finder from "../components/Finder";
import Int1 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_Docente.png";
import Int2 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_InicServPublico.png";
import Int3 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_Gerencial.png";
import Int4 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_PrepAposenta.png";
import Int5 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_TecAdmEdu.png";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

import {
  Layout,
  Row,
  Col,
  Card,
  Divider,
  Typography,
  ConfigProvider,
} from "antd";

const { Title } = Typography;

const { Content } = Layout;

export default function HomePage() {
  const setFilter = useStoreActions((actions) => actions.courses.setFilter);
  const filterDefault = useStoreState((state) => state.courses.filterDefault);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);

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
    <>
      <HeaderHome />
      <div>
        <Finder />
        <Divider orientation="left">Itinerários Formativos</Divider>
        <Row
          style={{
            display: "flex",
            alignItems: "top",
            justifyContent: "space-evenly",
            margin: "32px 0",
          }}
        >
          <Col
            flex={"200px"}
            style={{
              height: "300px",
            }}
          >
            <Link
              onClick={() => {
                onClickItinerario("Iniciação");
              }}
              to="/cursos"
            >
              <Card
                style={{
                  width: "180px",
                  backgroundColor: "#fff",
                }}
                cover={<img alt="example" src={Int2} />}
                hoverable
              >
                <Title
                  style={{
                    color: "#0059b3",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  level={5}
                >
                  Iniciação ao Serviço Público
                </Title>
              </Card>
            </Link>
          </Col>
          <Col
            flex={"200px"}
            style={{
              height: "300px",
            }}
          >
            <Link
              onClick={() => {
                onClickItinerario("Educação");
              }}
              to="/cursos"
            >
              <Card
                style={{
                  width: "180px",
                  backgroundColor: "#fff",
                }}
                cover={<img alt="example" src={Int5} />}
                hoverable
              >
                <Title
                  style={{
                    color: "#0059b3",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  level={5}
                >
                  Técnico-Administrativo em Educação
                </Title>
              </Card>
            </Link>
          </Col>
          <Col
            flex={"200px"}
            style={{
              height: "300px",
            }}
          >
            <Link
              onClick={() => {
                onClickItinerario("Docente");
              }}
              to="/cursos"
            >
              <Card
                style={{
                  width: "180px",
                  backgroundColor: "#fff",
                  height: "270px",
                }}
                cover={<img alt="example" src={Int1} />}
                hoverable
              >
                <Title
                  style={{
                    color: "#0059b3",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  level={5}
                >
                  Docente
                </Title>
              </Card>
            </Link>
          </Col>
          <Col
            flex={"200px"}
            style={{
              height: "300px",
            }}
          >
            <Link
              onClick={() => {
                onClickItinerario("Gerencial");
              }}
              to="/cursos"
            >
              <Card
                style={{
                  width: "180px",
                  backgroundColor: "#fff",
                  height: "270px",
                }}
                cover={<img alt="example" src={Int3} />}
                hoverable
              >
                <Title
                  style={{
                    color: "#0059b3",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  level={5}
                >
                  Gerencial
                </Title>
              </Card>
            </Link>
          </Col>
          <Col
            flex={"200px"}
            style={{
              height: "300px",
            }}
          >
            <Link
              onClick={() => {
                onClickItinerario("Preparação");
              }}
              to="/cursos"
            >
              <Card
                style={{
                  width: "180px",
                  backgroundColor: "#fff",
                }}
                cover={<img alt="example" src={Int4} />}
                hoverable
              >
                <Title
                  style={{
                    color: "#0059b3",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  level={5}
                >
                  Preparação para Aposentadoria
                </Title>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}
