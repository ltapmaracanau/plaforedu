import { useCallback, useMemo, useState } from "react";
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

import rightBlue from "../assets/RightBlue.svg";
import rightWhite from "../assets/RightWhite.svg";

import { useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

import { DownOutlined, UpOutlined } from "@ant-design/icons";

import {
  Row,
  Col,
  Grid,
  Button,
  Divider,
  Dropdown,
  Descriptions,
  Modal,
  Typography,
} from "antd";
import HomepageItineario from "../components/HomepageItineario";
import Finder from "../components/Finder";
import CourseModalVisualization from "../components/CourseModalVisualization";

const { Title } = Typography;
const { useBreakpoint } = Grid;

export default function HomePage() {
  const screens = useBreakpoint();

  const statistics = useStoreState((state) => state.adm.statistics);
  const randomTrails = useStoreState((state) => state.adm.randomTrails);

  const [selectedTrailId, setSelectedTrailId] = useState(null);
  const [positionedTrail, setPositionedTrail] = useState(null);
  const [modalTrail, setModalTrail] = useState(null);

  const [idSelectedCourse, setIdSelectedCourse] = useState(null);
  const [modalSelectedCourseVisible, setModalSelectedCouseVisible] =
    useState(false);

  const coursesSelectedTrail = useCallback(() => {
    return modalTrail.courses.map((curso) => {
      if (curso.status === "ACTIVE")
        return <li key={curso.name}>{curso.name}</li>;
    });
  }, [modalTrail]);

  const modalTrailItems = useMemo(() => {
    if (modalTrail !== null) {
      return [
        {
          key: "name",
          label: "Nome",
          children: modalTrail.name,
        },
        {
          key: "description",
          label: "Descrição",
          children: modalTrail.description,
        },
        {
          key: "courses",
          label: "Cursos",
          children: <ul>{coursesSelectedTrail()}</ul>,
        },
      ];
    }
    return null;
  }, [modalTrail, coursesSelectedTrail]);

  return (
    <>
      <Finder />

      <Divider
        style={{
          fontFamily: "Roboto",
          fontSize: "1.3rem",
        }}
        orientation={screens.xs ? "center" : "left"}
      >
        Itinerários Formativos
      </Divider>

      <Row
        style={{
          marginTop: screens.xs ? "24px" : "40px",
          marginBottom: screens.xs ? "24px" : "40px",
          gap: "20px",
        }}
        // gutter={screens.xs ? [20, 20] : [40, 40]}
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "50px",
          background: "var(--bg-menos-claro)",
        }}
        className="divTrilhasRecomendadas"
      >
        <Row align={"middle"} justify={"center"} gutter={[50, 30]}>
          <Col
            style={{
              // margin: "113px 0px",
              maxWidth: "700px",
            }}
          >
            <h1>Trilhas recomendadas</h1>
            <h2>
              Aprenda uma nova competência<br></br>
              através das nossas trilhas
            </h2>
            <p>
              Plataforma digital de Formação onde os servidores podem encontrar
              capacitações com a filnalidade de potencializar sua atuação na
              Educação Profissional e Tecnológica, no âmbito da Rede Federal de
              Educação Profissional, Científica e Tecnológica.
            </p>
          </Col>

          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "space-around",
            }}
          >
            {randomTrails.map((trilha) => {
              return (
                <div
                  className="containerCardTrilhasRecomendadas"
                  key={trilha.id}
                >
                  <div className="cardTrilhasRecomendadas">
                    <Title
                      style={{
                        marginBottom: "15px",
                      }}
                      level={4}
                      ellipsis={{
                        rows: 1,
                        expandable: false,
                        tooltip: true,
                      }}
                    >
                      {trilha.name}
                    </Title>
                    <div>
                      <Dropdown
                        menu={{
                          items: trilha.courses.map((course) => {
                            return {
                              key: course.id,
                              label: course.name,
                            };
                          }),
                          onClick: (e) => {
                            setIdSelectedCourse(e.key);
                            setModalSelectedCouseVisible(true);
                          },
                        }}
                        trigger={["click"]}
                        onOpenChange={(open) => {
                          if (!open) {
                            setSelectedTrailId(null);
                          }
                        }}
                      >
                        <p
                          id="verCursos"
                          onClick={() => {
                            if (
                              selectedTrailId &&
                              selectedTrailId === trilha.id
                            ) {
                              setSelectedTrailId(null);
                              return;
                            }
                            setSelectedTrailId(trilha.id);
                          }}
                        >
                          Ver cursos{" "}
                          {selectedTrailId === trilha.id ? (
                            <UpOutlined />
                          ) : (
                            <DownOutlined />
                          )}
                        </p>
                      </Dropdown>
                    </div>
                  </div>

                  <Button
                    style={{
                      backgroundColor: "var(--azul-super-claro)",
                      width: "70px",
                      height: "117px",
                      borderRadius: "0px 10px 10px 0px",
                      boxShadow: "1px 7px 7px rgba(90, 90, 90, 0.226)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#2c55a1";
                      setPositionedTrail(trilha);
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor =
                        "var(--azul-super-claro)";
                      setPositionedTrail(null);
                    }}
                    icon={
                      positionedTrail && positionedTrail.id === trilha.id ? (
                        <img src={rightWhite} alt="Seta azul para a direita" />
                      ) : (
                        <img src={rightBlue} alt="Seta branca para a direita" />
                      )
                    }
                    onClick={() => {
                      setModalTrail(trilha);
                    }}
                  />
                </div>
              );
            })}
          </Col>
        </Row>
      </div>

      <Modal
        title={"Detalhes da Trilha"}
        open={!!modalTrail}
        onOk={() => {
          setModalTrail(null);
        }}
        onCancel={() => setModalTrail(null)}
        key={`modalDescriptionItem`}
        destroyOnClose={true}
        footer={[
          <Button
            type="primary"
            key={"buttonOk"}
            onClick={() => {
              setModalTrail(null);
            }}
          >
            Ok
          </Button>,
        ]}
      >
        {modalTrail && (
          <Descriptions
            column={1}
            bordered={true}
            layout="vertical"
            items={modalTrailItems}
          />
        )}
      </Modal>

      <CourseModalVisualization
        id={idSelectedCourse}
        visible={modalSelectedCourseVisible}
        setVisible={setModalSelectedCouseVisible}
      />

      <div
        style={{
          display: "flex",
          maxWidth: "1129px",
          margin: screens.xl ? "50px auto" : "50px 50px",
          flexWrap: screens.md ? "nowrap" : "wrap",
          justifyContent: "center",
          textAlign: "center",
          gap: "150px",
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
          <p>Todos os cursos na PlaforEDU são gratuitos</p>
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
          <p>Organizados para melhor atender seu perfil profissional</p>
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
          <p>Certificado emitido pela instituição de ensino ofertante</p>
        </div>
      </div>

      <div
        className="divQuantCursos"
        style={{
          flexDirection: screens.xs ? "column" : "row",
        }}
      >
        <p>
          <span>{statistics.courses}</span> <br />
          Cursos
        </p>
        <p id="ofertados">ofertados por</p>
        <p>
          <span>{statistics.institutions}</span> <br />
          Instituições
        </p>
      </div>

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
            to="/suporte"
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
