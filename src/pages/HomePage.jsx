import Finder from "../components/Finder";
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

import HomepageItineario from "../components/HomepageItineario";

import { Row, Divider, Grid } from "antd";

const { useBreakpoint } = Grid;

export default function HomePage() {
  const screens = useBreakpoint();

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
    </>
  );
}
