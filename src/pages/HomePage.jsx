import { useMemo, useState } from "react";
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

import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

import { DownOutlined, UpOutlined } from "@ant-design/icons";

import services from "../services";
import { Row, Col, Grid, Button, Divider, Dropdown } from "antd";
import HomepageItineario from "../components/HomepageItineario";
import Finder from "../components/Finder";

const { useBreakpoint } = Grid;

export default function HomePage() {
  const screens = useBreakpoint();

  const statistics = useStoreState((state) => state.adm.statistics);
  const randomTrails = useStoreState((state) => state.adm.randomTrails);

  const [selectedTrailId, setSelectedTrailId] = useState(null);
  const [positionedTrailId, setPositionedTrailId] = useState(null);

  const getUniqueCourse = useStoreActions(
    (actions) => actions.courses.getUniqueCourse
  );

  const recentCourses = useMemo(
    async () => await services.admService.getLastViewedCourses(),
    []
  );

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
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "50px",
          background: "var(--bg-menos-claro)",
        }}
      >
        <Row
          className="divTrilhasRecomendadas"
          align={"middle"}
          justify={"center"}
        >
          <Col
            style={{
              // margin: "113px 0px",
              width: "560px",
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
              // marginLeft: "115px",
              // width: "362px",
              // height: "459px",
              display: "flex",
              flexDirection: "column",
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
                    <p>{trilha.name}</p>
                    <Dropdown
                      menu={{
                        items: trilha.courses.map((course) => {
                          return {
                            key: course.id,
                            label: course.name,
                          };
                        }),
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
                      setPositionedTrailId(trilha.id);
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor =
                        "var(--azul-super-claro)";
                      setPositionedTrailId(null);
                    }}
                    icon={
                      positionedTrailId && positionedTrailId === trilha.id ? (
                        <img src={rightWhite} alt="Seta azul para a direita" />
                      ) : (
                        <img src={rightBlue} alt="Seta branca para a direita" />
                      )
                    }
                  />
                </div>
              );
            })}
          </Col>
        </Row>
      </div>

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
