import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Typography } from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";

const { Title } = Typography;

export default function HomepageItineario({
  nameItinerario,
  imgItinerario,
  itinerario,
}) {
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
    <Col
      style={{
        width: "200px",
        height: "300px",
      }}
    >
      <Link
        onClick={() => {
          onClickItinerario(nameItinerario);
        }}
        to="/cursos"
      >
        <Card
          style={{
            width: "180px",
            backgroundColor: "#fff",
            height: "100%",
          }}
          cover={<img alt="example" src={imgItinerario} />}
          hoverable
        >
          <Title
            style={{
              fontFamily: "Roboto",
              textAlign: "center",
              color: "#4B4B4B",
            }}
            level={5}
          >
            {itinerario}
          </Title>
        </Card>
      </Link>
    </Col>
  );
}
