import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Typography, Grid } from 'antd';
import { useStoreActions, useStoreState } from 'easy-peasy';

const { useBreakpoint } = Grid;
const { Title } = Typography;

export default function HomepageItineario({
  nameItinerario,
  imgItinerario,
  itinerario,
  colorItinerario,
}) {
  const screens = useBreakpoint();

  const setFilter = useStoreActions((actions) => actions.courses.setFilter);
  const filterDefault = useStoreState((state) => state.courses.filterDefault);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);

  const onClickItinerario = (itinerario) => {
    const itinerarioClicado = itinerarios.find((item) =>
      item.name.toLowerCase().includes(itinerario.toLowerCase()),
    );
    setFilter({
      ...filterDefault,
      itinerario: itinerarioClicado.id,
      esquemaDeCores: 'categoria',
    });
  };

  const [isHover, setIsHover] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const cardStyle = {
    width: screens.xs ? '300px' : '200px',
    height: screens.xs ? '60px' : '300px',
    backgroundColor: '#fff',
    display: 'grid',
    gridTemplateRows: screens.xs ? null : '2fr 1fr',
    gridTemplateColumns: screens.xs ? '1fr 2fr' : null,
    borderRadius: '10px',
    boxShadow: isHover
      ? '0px 4px 4px rgba(0, 0, 0, 0.2), 0px 20px 30px rgba(44, 86, 162, 0.1)'
      : '0px 4px 4px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  return (
    <Col style={{}}>
      <Link
        onClick={() => {
          onClickItinerario(nameItinerario);
        }}
        to="/cursos"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={cardStyle}
      >
        <div
          style={{
            backgroundImage: `url(${imgItinerario})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: `${colorItinerario}`,
          }}
        ></div>
        <Title
          style={{
            alignSelf: 'center',
            fontFamily: 'Roboto',
            textAlign: screens.xs ? 'left' : 'center',
            color: '#4B4B4B',
            margin: screens.xs ? '4px 16px' : '24px 16px',
          }}
          level={5}
        >
          {itinerario}
        </Title>
      </Link>
    </Col>
  );
}
