import React from "react";
import "./homepage.css";
import HeaderHome from "../components/header/HeaderHome";
import Finder from "../components/Finder";
import Int1 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_Docente.png";
import Int2 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_InicServPublico.png";
import Int3 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_Gerencial.png";
import Int4 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_PrepAposenta.png";
import Int5 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_TecAdmEdu.png";

import icon1 from "../assets/HomepageIcon1.svg";
import icon2 from "../assets/HomepageIcon2.svg";
import icon3 from "../assets/HomepageIcon3.svg";

import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";
import infografico from "../assets/about/PLAFOR_Categorias-Competencias_Infografico_v6.png";
import infografico_fundo_branco from "../assets/about/mandala_fundo_branco.png";

import {
  ArrowRightOutlined,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons";

import {
  Row,
  Col,
  Typography,
  Grid,
  Button,
  Space,
  Card,
  List,
  Image,
} from "antd";
import VideoPlayer from "../components/VideoPlayer";
import HomepageItineario from "../components/HomepageItineario";

const { useBreakpoint } = Grid;
const { Title, Text } = Typography;

export default function HomePage() {
  const screens = useBreakpoint();

  const info = useStoreState((state) => state.adm.info);
  //const loadingInfo = useStoreState((state) => state.adm.loadingInfo);
  const getInfo = useStoreActions((actions) => actions.adm.getInfo);

  React.useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <>
      <HeaderHome />
      <Row className="containerTitle" align={"middle"}>
        <Col span={12} offset={6} className="texts">
          <Space direction="vertical" size={"large"}>
            <Title
              style={{
                fontFamily: "Roboto",
                fontSize: screens.xs ? "35px" : "55px",
                fontWeight: 550,
                color: "#303030",
              }}
            >
              Aprenda novas habilidades e amplie seus horizontes
            </Title>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: screens.xs ? "18px" : "22px",
                fontWeight: 500,
                color: "#4B4B4B",
              }}
            >
              Capacitações para aprimorar a atuação de servidores da Rede
              Federal de Educação Profissional, Científica e Tecnológica.
            </Text>
            <Button
              onClick={() => {
                console.log("Acessar cursos!");
              }}
              type="primary"
            >
              ACESSAR CURSOS
            </Button>
            <Link
              style={{
                color: "#4B4B4B",
                fontFamily: "Roboto",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Saiba mais <ArrowRightOutlined />
            </Link>
          </Space>
        </Col>
      </Row>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Title
                level={screens.xs ? 4 : 3}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "left",
                }}
              >
                Cursos acessados por você recentemente:
              </Title>
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 3,
                  lg: 3,
                  xl: 3,
                }}
                dataSource={[
                  {
                    id: 1,
                    title: "Educação Especial: histórico, políticas e práticas",
                    description: "PoCA - UFSCar",
                  },
                  {
                    id: 2,
                    title:
                      "Gerenciamento de Projetos e Portfólios de Projetos - Guia",
                    description: "IFRN",
                  },
                  {
                    id: 3,
                    title: "Teletrabalho e Educação a Distância",
                    description: "PoCA - UFSCar",
                  },
                ]}
                renderItem={(item) => (
                  <List.Item key={item.id}>
                    <Card
                      bordered={true}
                      style={{
                        //maxWidth: 400,
                        boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.15)",
                      }}
                    >
                      <Title level={5}>{item.title}</Title>
                      {item.description}
                    </Card>
                  </List.Item>
                )}
              />
            </div>
          </div>
          <div
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              display: "flex",
              gap: "30px",
              flexDirection: screens.lg ? "row" : "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <Space
                direction="vertical"
                style={{
                  maxWidth: "460px",
                  marginRight: screens.lg ? "20px" : "0px",
                  marginLeft: screens.lg ? "20px" : "0px",
                }}
              >
                <Title level={screens.xs ? 4 : 3}>
                  Cursos voltados para o seu perfil profissional
                </Title>
                <Text>
                  A PlaforEDU reúne diversos cursos online abertos (Cursos Mooc)
                  ofertados por diversas instituições de ensino.
                </Text>
                <Button
                  style={{
                    backgroundColor: "#E2FCFF",
                    marginTop: "20px",
                    marginBottom: "20px",
                    color: "#2F4C84",
                    fontWeight: 700,
                  }}
                  type="primary"
                >
                  COMO FUNCIONA
                </Button>
              </Space>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card
                style={{
                  boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.15)",
                }}
                bodyStyle={{
                  padding: "5px",
                }}
              >
                <VideoPlayer
                  title={"Äpresentação SETEC"}
                  src={"https://www.youtube.com/embed/s4hchxxjuRo"}
                  screens={screens}
                />
              </Card>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "30px",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Title level={screens.xs ? 4 : 3}>
              Qual o seu perfil profissional?
            </Title>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: "18px",
              }}
            >
              A PlaforEDU apresenta os perfis de servidores da RFEPCT em cinco
              Itinerários Formativos
            </Text>
            <Row
              style={{
                marginTop: "50px",
                marginBottom: "50px",
              }}
              gutter={[40, 40]}
              align={"middle"}
              justify={"space-evenly"}
            >
              <HomepageItineario
                imgItinerario={Int2}
                nameItinerario={"Iniciação"}
                itinerario={"Iniciação ao Serviço Público"}
              />
              <HomepageItineario
                imgItinerario={Int5}
                nameItinerario={"Educação"}
                itinerario={"Técnico Administrativo em Educação"}
              />
              <HomepageItineario
                imgItinerario={Int1}
                nameItinerario={"Docente"}
                itinerario={"Docente"}
              />
              <HomepageItineario
                imgItinerario={Int3}
                nameItinerario={"Gerencial"}
                itinerario={"Gerencial"}
              />
              <HomepageItineario
                imgItinerario={Int4}
                nameItinerario={"Preparação"}
                itinerario={"Preparação para a Aposentadoria"}
              />
            </Row>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#2F4C84",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          padding: "50px 0px",
          textAlign: "center",
        }}
      >
        <Space
          style={{
            maxWidth: "320px",
            margin: "30px",
          }}
          direction="vertical"
        >
          <img src={icon1} />
          <Text
            style={{
              fontSize: "20px",
              color: "#FDFDFD",
              fontWeight: 500,
              lineHeight: "28px",
            }}
          >
            Todos os cursos na PlaforEDU são gratuitos
          </Text>
        </Space>
        <Space
          style={{
            maxWidth: "320px",
            margin: "30px",
          }}
          direction="vertical"
        >
          <img src={icon2} />
          <Text
            style={{
              fontSize: "20px",
              color: "#FDFDFD",
              fontWeight: 500,
              lineHeight: "28PX",
            }}
          >
            Organizados para melhor atender seu perfil profissional
          </Text>
        </Space>
        <Space
          style={{
            maxWidth: "320px",
            margin: "30px",
          }}
          direction="vertical"
        >
          <img src={icon3} />
          <Text
            style={{
              fontSize: "20px",
              color: "#FDFDFD",
              fontWeight: 500,
              lineHeight: "28PX",
            }}
          >
            Certificado emitido pela instituição de ensino ofertante
          </Text>
        </Space>
      </div>
      <Row
        justify={"space-around"}
        style={{
          marginTop: "50px",
          marginBottom: "50px",
        }}
        gutter={[40, 40]}
        align={"middle"}
      >
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              maxWidth: "560px",
              margin: "30px",
            }}
          >
            <Title
              style={{
                marginTop: "20px",
                marginBottom: "20px",
              }}
              level={screens.xs ? 4 : 3}
            >
              Aprenda uma nova competência através das nossas trilhas
            </Title>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              Plataforma Digital de Formação onde os servidores podem encontrar
              capacitações com a finalidade de potencializar sua atuação na
              Educação Profissional e Tecnológica, no âmbito da Rede Federal de
              Educação Profissional, Científica e Tecnológica.
            </Text>
          </div>
        </Col>
        <Col>
          <div
            style={{
              maxWidth: "360px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.15)",
                borderRadius: "10px",
                overflow: "hidden",
                margin: "20px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  margin: "27px",
                  maxWidth: "200px",
                }}
              >
                <Title level={5}>Criação e Modificação</Title>
                <Link
                  style={{
                    textDecoration: "underline",
                    color: "black",
                  }}
                >
                  Ver cursos <DownOutlined />
                </Link>
              </div>
              <div
                style={{
                  backgroundColor: "#E2FCFF",
                  color: "#2C55A1",
                  position: "relative",
                  right: 0,
                  width: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "30px",
                }}
              >
                <RightOutlined />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.15)",
                borderRadius: "10px",
                overflow: "hidden",
                margin: "20px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  margin: "27px",
                  maxWidth: "200px",
                }}
              >
                <Title level={5}>Criação e Modificação</Title>
                <Link
                  style={{
                    textDecoration: "underline",
                    color: "black",
                  }}
                >
                  Ver cursos <DownOutlined />
                </Link>
              </div>
              <div
                style={{
                  backgroundColor: "#E2FCFF",
                  color: "#2C55A1",
                  position: "relative",
                  right: 0,
                  width: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "30px",
                }}
              >
                <RightOutlined />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.15)",
                borderRadius: "10px",
                overflow: "hidden",
                margin: "20px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  margin: "27px",
                  maxWidth: "200px",
                }}
              >
                <Title level={5}>Criação e Modificação</Title>
                <Link
                  style={{
                    textDecoration: "underline",
                    color: "black",
                  }}
                >
                  Ver cursos <DownOutlined />
                </Link>
              </div>
              <div
                style={{
                  backgroundColor: "#E2FCFF",
                  color: "#2C55A1",
                  position: "relative",
                  right: 0,
                  width: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "30px",
                }}
              >
                <RightOutlined />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {info?.courses && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: screens.xs ? "column" : "row",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#F5F5F5",
            padding: "50px 0px",
          }}
        >
          <div>
            <Title level={1} style={{ margin: 0 }}>
              {info.courses}
            </Title>
            <Title level={3} style={{ margin: 0 }}>
              Cursos
            </Title>
          </div>
          <Title
            level={3}
            style={{
              color: "#A8A8A8",
              margin: "20px",
            }}
          >
            ofertados por
          </Title>
          <div>
            <Title level={1} style={{ margin: 0 }}>
              {info.institutions}
            </Title>
            <Title level={3} style={{ margin: 0 }}>
              Instituições
            </Title>
          </div>
        </div>
      )}
      <Row
        justify={"space-around"}
        style={{
          margin: "50px 0px",
        }}
      >
        <Col
          flex={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={infografico}
            preview={{ src: infografico_fundo_branco }}
            width={screens.lg ? 300 : 200}
          />
        </Col>
        <Col
          flex={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: screens.md ? "end" : "left",
            margin: "50px",
          }}
        >
          <Space
            direction="vertical"
            style={{
              maxWidth: "560px",
            }}
          >
            <Title level={3}>Mandala das Competências</Title>
            <Text>
              As competências são a mobilização de conhecimentos, habilidades e
              atitudes para solucionar problemas e lidar com situações
              cotidianas profissionais
            </Text>
            <Button type="primary">Entenda Melhor</Button>
          </Space>
        </Col>
      </Row>
      <Row
        style={{
          padding: "50px 0px",
          backgroundColor: "#2F4C84",
        }}
      >
        <Col offset={2} span={18}>
          <Title
            level={4}
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              color: "#90EBFF",
            }}
          >
            Gostaria de entrar em contato com a gente?
          </Title>
          <Link style={{ textDecoration: "underline", color: "#FDFDFD" }}>
            Preencher formulário de contato
          </Link>
        </Col>
      </Row>
    </>
  );
}
