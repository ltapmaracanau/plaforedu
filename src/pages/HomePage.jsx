import { useEffect, useState } from "react";
import "./homepage.css";
import Int1 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_Docente.png";
import Int2 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_InicServPublico.png";
import Int3 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_Gerencial.png";
import Int4 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_PrepAposenta.png";
import Int5 from "../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_TecAdmEdu.png";

import iniciacaoIcon from "../assets/itinerarios/iconIniciacao.svg";
import aposentadoriaIcon from "../assets/itinerarios/iconAposentadoria.svg";
import docenteIcon from "../assets/itinerarios/iconEducacao.svg";
import administrativoIcon from "../assets/itinerarios/iconAdministrativo.svg";
import gerencialIcon from "../assets/itinerarios/iconGerencial.svg";

import icon1 from "../assets/HomepageIcon1.svg";
import icon2 from "../assets/HomepageIcon2.svg";
import icon3 from "../assets/HomepageIcon3.svg";

import { useStoreActions, useStoreState } from "easy-peasy";
import { Link, useNavigate } from "react-router-dom";
import infografico from "../assets/about/PLAFOR_Categorias-Competencias_Infografico_v7.png";
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
  Modal,
  Skeleton,
  Descriptions,
  notification,
} from "antd";
import HomepageItineario from "../components/HomepageItineario";
import services from "../services";

const { useBreakpoint } = Grid;
const { Title, Text } = Typography;

export default function HomePage() {
  const screens = useBreakpoint();
  let navigate = useNavigate();

  const recentCourses = services.admService.getLastViewedCourses();
  const [modalVisible, setModalVisible] = useState(false);

  const statistics = useStoreState((state) => state.adm.statistics);
  //const loadingStatistics = useStoreState((state) => state.adm.loadingStatistics);
  const getStatistics = useStoreActions((actions) => actions.adm.getStatistics);
  const randomTrails = useStoreState((state) => state.adm.randomTrails);
  const getRandomTrails = useStoreActions(
    (actions) => actions.adm.getRandomTrails
  );
  const uniqueCourse = useStoreState((state) => state.courses.uniqueCourse);
  const setFilter = useStoreActions((actions) => actions.courses.setFilter);
  const filterDefault = useStoreState((state) => state.courses.filterDefault);
  const loadingUniqueCourse = useStoreState(
    (state) => state.courses.loadingUniqueCourse
  );
  const getUniqueCourse = useStoreActions(
    (actions) => actions.courses.getUniqueCourse
  );

  return (
    <>
      <Row className="containerTitle" align={"middle"}>
        <Col
          style={{
            maxWidth: "681px",
            margin: screens.xs ? "0 20px" : "0 auto",
            display: "grid",
            gap: screens.xs ? "24px" : "48px",
          }}
        >
          <Title
            style={{
              fontFamily: "Roboto",
              fontSize: screens.xs ? "2rem" : "3.5625rem",
              fontWeight: 500,
              lineHeight: screens.xs ? "40px" : "64px",
              letterSpacing: "-0.25px",
              color: "var(--titulos)",
              marginBottom: "0",
            }}
          >
            Aprenda novas habilidades e amplie seus horizontes
          </Title>
          <Text
            style={{ fontSize: screens.xs ? "1.125rem" : null }}
            className="subTitulo"
          >
            Capacitações para aprimorar a atuação de servidores da Rede Federal
            de Educação Profissional, Científica e Tecnológica.
          </Text>
          <div>
            <button
              className="botao botaoPrincipal"
              style={{
                display: "block",
                margin: "0 auto",
                marginBottom: screens.xs ? "16px" : "24px",
              }}
              onClick={() => {
                setFilter({
                  ...filterDefault,
                });
                navigate("/cursos");
              }}
            >
              ACESSAR CURSOS
            </button>
            <Link
              to={"/about"}
              className="botaoLink"
              style={{
                color: "#4B4B4B",
                fontFamily: "Roboto",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Saiba mais <ArrowRightOutlined />
            </Link>
          </div>
        </Col>
      </Row>

      <div
        style={{
          maxWidth: "1160px",
          width: "100%",
          margin: "0 auto",
          padding: screens.xl ? "0" : "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: screens.xs ? "60px" : "120px",
        }}
      >
        {recentCourses.length > 0 && (
          <div
            style={{
              display: "grid",
              justifyContent: "center",
            }}
          >
            <h2
              className="titulo"
              style={{
                marginBottom: "20px",
              }}
            >
              Cursos acessados recentemente por você:
            </h2>
            <ul
              style={{
                padding: "0",
                display: "flex",
                gap: "20px",
                flexWrap: screens.xl ? "nowrap" : "wrap",
                justifyContent: "center",
              }}
            >
              {recentCourses.map((curso) => (
                <li
                  className="cardRecente"
                  style={{ maxWidth: screens.xl ? null : "350px" }}
                  key={curso.titulo}
                  onClick={async () => {
                    setModalVisible(true);
                    try {
                      await getUniqueCourse({ id: curso.id });
                    } catch (error) {
                      notification.error({
                        message: "Erro",
                        description: error.message,
                      });
                      setModalVisible(false);
                    }
                  }}
                >
                  <h3 className="subtitulo">{curso.titulo}</h3>
                  <p className="label">{curso.institution}</p>
                </li>
              ))}
            </ul>
            <Modal
              open={modalVisible}
              onOk={() => setModalVisible(false)}
              key={`modalCurso`}
              onCancel={() => setModalVisible(false)}
              title={uniqueCourse?.name}
              centered={true}
              footer={[
                <Button
                  type="primary"
                  key={"buttonOk"}
                  onClick={() => {
                    setModalVisible(false);
                  }}
                >
                  Ok
                </Button>,
              ]}
            >
              {loadingUniqueCourse ? (
                <Skeleton active />
              ) : (
                <Descriptions column={1} bordered layout="vertical">
                  <Descriptions.Item label="Descrição">
                    {uniqueCourse?.description}
                  </Descriptions.Item>
                  <Descriptions.Item label="Carga Horária">
                    {uniqueCourse?.hours}
                  </Descriptions.Item>
                  <Descriptions.Item label="Instituições Certificadoras">
                    {uniqueCourse?.institutions?.map((inst) => (
                      <Card key={inst.institutionId} bordered>
                        {inst.name}
                        <br />
                        <strong>Link: </strong>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          key={`link${inst.id}`}
                          href={inst.link}
                        >
                          {inst.link}
                        </a>
                      </Card>
                    ))}
                  </Descriptions.Item>
                  <Descriptions.Item label="Cursos equivalentes">
                    <List
                      locale={{
                        emptyText: <>Sem equivalentes</>,
                      }}
                      bordered
                      dataSource={uniqueCourse?.equivalents?.filter(
                        (course) => !course.filedAt
                      )}
                      renderItem={(item) => (
                        <List.Item
                          actions={[
                            <Button
                              key={item.id}
                              onClick={() => {
                                getUniqueCourse({ id: item.id });
                              }}
                            >
                              Visualizar
                            </Button>,
                          ]}
                          key={item.id}
                        >
                          {item.name}
                        </List.Item>
                      )}
                    />
                  </Descriptions.Item>
                  <Descriptions.Item label="Acessibilidades">
                    {uniqueCourse?.accessibilities
                      ?.map((ac) => ac.name)
                      .join(" | ")}
                  </Descriptions.Item>
                  <Descriptions.Item label="Taxonomia revisada de Bloom">
                    {uniqueCourse?.taxonomies?.map((tx) => tx.name).join(" | ")}
                  </Descriptions.Item>
                  <Descriptions.Item label="Subtemas">
                    {uniqueCourse?.subThemes
                      ?.filter((sub) => !sub.filedAt)
                      .map((sub) => sub.name)
                      .join(" | ")}
                  </Descriptions.Item>
                </Descriptions>
              )}
            </Modal>
          </div>
        )}
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexDirection: screens.md ? "row" : "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              maxWidth: "460px",
            }}
          >
            <h2 className="titulo">
              Cursos voltados para o seu perfil profissional
            </h2>
            <Text className="texto">
              A PlaforEDU reúne diversos cursos online abertos (Cursos Mooc)
              ofertados por diversas instituições de ensino.
            </Text>
            <button
              className="botao botaoSecundario"
              onClick={() => {
                navigate("/about");
              }}
            >
              COMO FUNCIONA
            </button>
          </div>
          <iframe
            style={{
              borderRadius: "20px",
              borderStyle: "none",
              border: "5px solid #FFF",
              width: "100%",
              maxWidth: screens.md ? "650px" : "460px",
              minHeight: screens.md ? "390px" : "300px",
              filter:
                "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2)) drop-shadow(0px 20px 30px rgba(44, 86, 162, 0.1))",
            }}
            title={"Äpresentação SETEC"}
            src={"https://www.youtube.com/embed/s4hchxxjuRo"}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1 className="titulo" style={{ marginBottom: "16px" }}>
            Qual o seu perfil profissional?
          </h1>
          <Text className="subTitulo">
            A PlaforEDU apresenta os perfis de servidores da RFEPCT em cinco
            Itinerários Formativos
          </Text>
          <Row
            style={{
              marginTop: screens.xs ? "24px" : "40px",
            }}
            gutter={screens.xs ? [20, 20] : [40, 40]}
            align={"middle"}
            justify={"space-evenly"}
          >
            <HomepageItineario
              imgItinerario={screens.xs ? iniciacaoIcon : Int2}
              nameItinerario={"Iniciação"}
              itinerario={"Iniciação ao Serviço Público"}
              colorItinerario={"var(--iniciacao)"}
              tabindex="1"
            />
            <HomepageItineario
              imgItinerario={screens.xs ? administrativoIcon : Int5}
              nameItinerario={"Educação"}
              itinerario={"Técnico Administrativo em Educação"}
              colorItinerario={"var(--administrativo)"}
              tabindex="2"
            />
            <HomepageItineario
              imgItinerario={screens.xs ? docenteIcon : Int1}
              nameItinerario={"Docente"}
              itinerario={"Docente"}
              colorItinerario={"var(--docente)"}
              tabindex="3"
            />
            <HomepageItineario
              imgItinerario={screens.xs ? gerencialIcon : Int3}
              nameItinerario={"Gerencial"}
              itinerario={"Gerencial"}
              colorItinerario={"var(--gerencial)"}
              tabindex="4"
            />
            <HomepageItineario
              imgItinerario={screens.xs ? aposentadoriaIcon : Int4}
              nameItinerario={"Preparação"}
              itinerario={"Preparação para a Aposentadoria"}
              colorItinerario={"var(--aposentadoria)"}
              tabindex="5"
            />
          </Row>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "var(--bg-azul)",
          margin: screens.xs ? "60px 0" : "120px 0",
          padding: "80px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "1160px",
            margin: screens.xl ? "0 auto" : "0 20px",
            flexWrap: screens.md ? "nowrap" : "wrap",
            justifyContent: "center",
            textAlign: "center",
            gap: "40px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "300px",
            }}
          >
            <img
              style={{
                display: "block",
                margin: "0 auto",
                paddingBottom: screens.xs ? "12px" : "32px",
              }}
              src={icon1}
              alt="Ícone preço"
            />
            <p
              className="subTitulo"
              style={{
                color: "#FDFDFD",
              }}
            >
              Todos os cursos na PlaforEDU são gratuitos
            </p>
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "300px",
            }}
            direction="vertical"
          >
            <img
              style={{
                display: "block",
                margin: "0 auto",
                paddingBottom: screens.xs ? "12px" : "32px",
              }}
              src={icon2}
              alt="Ícone Perfil"
            />
            <p
              className="subTitulo"
              style={{
                color: "#FDFDFD",
              }}
            >
              Organizados para melhor atender seu perfil profissional
            </p>
          </div>
          <div style={{ maxWidth: "300px", width: "100%" }}>
            <img
              style={{
                display: "block",
                margin: "0 auto",
                paddingBottom: screens.xs ? "12px" : "32px",
              }}
              src={icon3}
              alt="Ícone certificado"
            />
            <p
              className="subTitulo"
              style={{
                color: "#FDFDFD",
              }}
            >
              Certificado emitido pela instituição de ensino ofertante
            </p>
          </div>
        </div>
      </div>

      <Row
        style={{
          display: "flex",
          maxWidth: "1160px",
          flexWrap: screens.md ? "nowrap" : "wrap",
          width: "100%",
          justifyContent: screens.xl ? "space-between" : "center",
          margin: "0 auto",
          padding: screens.xl ? "0" : "0 20px",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Col
          style={{
            maxWidth: "560px",
          }}
        >
          <h2
            className="titulo"
            style={{
              marginBottom: "20px",
            }}
          >
            Aprenda uma nova competência através das nossas trilhas
          </h2>
          <Text className="texto">
            Plataforma Digital de Formação onde os servidores podem encontrar
            capacitações com a finalidade de potencializar sua atuação na
            Educação Profissional e Tecnológica, no âmbito da Rede Federal de
            Educação Profissional, Científica e Tecnológica.
          </Text>
        </Col>

        {randomTrails.length > 0 && (
          <Col
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "baseline",
              gap: "32px",
              minWidth: screens.xs ? "100%" : "330px",
            }}
          >
            {randomTrails.map((trail) => (
              <div className="cardTrilha" key={trail.id}>
                <div
                  style={{
                    margin: "28px",
                    maxWidth: "280px",
                  }}
                >
                  <Title level={5}>{trail.name}</Title>
                  <Link
                    style={{
                      textDecoration: "underline",
                      color: "black",
                    }}
                    to={"/cursos"}
                    onClick={() => {
                      setFilter({
                        ...filterDefault,
                        query: trail.name,
                      });
                    }}
                  >
                    Ver cursos <DownOutlined />
                  </Link>
                </div>
                <div
                  className="acessarTrilha"
                  onClick={() => {
                    setFilter({
                      ...filterDefault,
                      query: trail.name,
                    });
                    navigate("/cursos");
                  }}
                >
                  <RightOutlined />
                </div>
              </div>
            ))}
          </Col>
        )}
      </Row>

      {statistics?.courses && (
        <div
          style={{
            width: "100%",
            backgroundColor: "#F5F5F5",
            // padding: screens.xl ? '60px 0px' : '60px 20px',
            padding: "60px 0",
            margin: screens.xs ? "60px 0" : "120px 0",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: screens.xs ? "column" : "row",
              alignItems: "center",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <div>
              <Title
                // level={1}
                style={{
                  fontFamily: "Roboto",
                  fontSize: "4.5rem",
                  fontWeight: "bold",
                  letterSpacing: "-0.25",
                  lineHeight: "4rem",
                  color: "var(--titulos)",
                  margin: 0,
                }}
              >
                {statistics.courses}
              </Title>
              <p
                className="titulo"
                style={{ color: "var(--texto-corpo)", margin: 0 }}
              >
                Cursos
              </p>
            </div>
            <span
              // level={3}
              className="titulo"
              style={{
                color: "var(--texto-baixo-contraste)",
                margin: "24px",
              }}
            >
              ofertados por
            </span>
            <div>
              <Title
                level={1}
                style={{
                  fontFamily: "Roboto",
                  fontSize: "4.5rem",
                  fontWeight: "bold",
                  letterSpacing: "-0.25",
                  lineHeight: "4rem",
                  color: "var(--titulos)",
                  margin: 0,
                }}
              >
                {statistics.institutions}
              </Title>
              <span
                className="titulo"
                // level={3}
                style={{ color: "var(--texto-corpo)", margin: 0 }}
              >
                Instituições
              </span>
            </div>
          </div>
        </div>
      )}

      <Row
        // justify={'space-between'}
        align="middle"
        style={{
          maxWidth: "1160px",
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
          flexWrap: screens.md ? "nowrap" : "wrap",
          justifyContent: screens.md ? "space-between" : "center",
          padding: screens.xl ? "0" : "0 20px",
          margin: "0 auto",
          marginBottom: screens.xs ? "60px" : "120px",
          gap: "24px",
        }}
      >
        <Col
          style={{
            display: "flex",
            textAlign: screens.md ? "end" : "left",
          }}
        >
          <Space
            direction="vertical"
            style={{
              maxWidth: "560px",
            }}
            size={24}
          >
            <h1 className="titulo">Mandala das Competências</h1>
            <Text className="texto">
              As competências são a mobilização de conhecimentos, habilidades e
              atitudes para solucionar problemas e lidar com situações
              cotidianas profissionais
            </Text>
            <button
              className="botao botaoPrincipal"
              onClick={() => {
                navigate("/about");
              }}
            >
              Entenda Melhor
            </button>
          </Space>
        </Col>
        <Image
          style={{ width: "100%", maxWidth: "480px" }}
          src={infografico}
          preview={{ src: infografico_fundo_branco }}
          alt="Infográfico de competências"
        />
      </Row>

      <div
        style={{
          boxSizing: "border-box",
          padding: "60px 20px",
          backgroundColor: "var(--bg-azul)",
        }}
      >
        <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
          <h1
            className="subTitulo"
            style={{
              marginBottom: "20px",
              color: "var(--azul-claro)",
            }}
          >
            Gostaria de entrar em contato com a gente?
          </h1>
          <Link
            to="/faleconosco"
            className="texto"
            style={{ textDecoration: "underline", color: "#FDFDFD" }}
          >
            Preencher formulário de contato
          </Link>
        </div>
      </div>
    </>
  );
}
