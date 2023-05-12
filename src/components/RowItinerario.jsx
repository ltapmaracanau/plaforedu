import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import Img0 from '../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_v5_Completa.png';
import Img1 from '../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_v5_InicServPublico_CLICADO.png';
import Img2 from '../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_v5_TecAdmEdu_CLICADO.png';
import Img3 from '../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_v5_Docente_CLICADO.png';
import Img4 from '../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_v5_Gerencial_CLICADO.png';
import Img5 from '../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_v5_PrepAposenta_CLICADO.png';

import itinerarioDocente from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_Docente.png';
import itinerarioGerencial from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_Gerencial.png';
import itinerarioServPublico from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_InicServPublico.png';
import itinerarioPrepAposenta from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_PrepAposenta.png';
import itinerarioTecAdmEdu from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_TecAdmEdu.png';

import logoSvg from '../assets/PLAFOR.svg';

import ImageMapper from 'react-image-mapper';

import { Row, Col, Typography, Card, Grid } from 'antd';
import Title from 'antd/lib/typography/Title';

const { Text } = Typography;
const { useBreakpoint } = Grid;

export default function RowItinerario() {
  const itinerario = useStoreState((state) => state.courses.filter.itinerario);

  const filter = useStoreState((state) => state.courses.filter);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);
  const setFilter = useStoreActions((actions) => actions.courses.setFilter);
  const itinerarioData = useStoreState((state) =>
    state.itineraries.itinerarios.find((obj) => obj.id === itinerario),
  );

  const idsItinerarios = {
    0: undefined,
    1: 'Iniciação',
    2: 'Educação',
    3: 'Docente',
    4: 'Gerencial',
    5: 'Aposentadoria',
  };

  const screens = useBreakpoint();

  const maps = {
    mapGeral: {
      name: '0',
      areas: [
        {
          name: '1',
          shape: 'circle',
          coords: [125, 45, 40],
          href: '',
        },
        {
          name: '2',
          shape: 'circle',
          coords: [203, 100, 40],
          href: '',
        },
        {
          name: '3',
          shape: 'circle',
          coords: [170, 190, 40],
          href: '',
        },
        {
          name: '4',
          shape: 'circle',
          coords: [75, 190, 40],
          href: '',
        },
        {
          name: '5',
          shape: 'circle',
          coords: [45, 100, 40],
          href: '',
        },
      ],
    },
    mapInicServPublico: {
      name: '1',
      areas: [
        {
          name: '0',
          shape: 'circle',
          coords: [110, 110, 40],
          href: '',
        },
        {
          name: '2',
          shape: 'circle',
          coords: [183, 122, 40],
          href: '',
        },
        {
          name: '3',
          shape: 'circle',
          coords: [155, 205, 40],
          href: '',
        },
        {
          name: '4',
          shape: 'circle',
          coords: [67, 205, 40],
          href: '',
        },
        {
          name: '5',
          shape: 'circle',
          coords: [40, 124, 40],
          href: '',
        },
      ],
    },
    mapTecAdmEduc: {
      name: '2',
      areas: [
        {
          name: '0',
          shape: 'circle',
          coords: [125, 125, 40],
          href: '',
        },
        {
          name: '3',
          shape: 'circle',
          coords: [150, 170, 40],
          href: '',
        },
        {
          name: '4',
          shape: 'circle',
          coords: [66, 175, 40],
          href: '',
        },
        {
          name: '5',
          shape: 'circle',
          coords: [40, 90, 40],
          href: '',
        },
        {
          name: '1',
          shape: 'circle',
          coords: [110, 45, 40],
          href: '',
        },
      ],
    },
    mapDocente: {
      name: '3',
      areas: [
        {
          name: '0',
          shape: 'circle',
          coords: [125, 125, 40],
          href: '',
        },
        {
          name: '1',
          shape: 'circle',
          coords: [110, 40, 40],
          href: '',
        },
        {
          name: '2',
          shape: 'circle',
          coords: [185, 90, 40],
          href: '',
        },
        {
          name: '4',
          shape: 'circle',
          coords: [67, 172, 40],
          href: '',
        },
        {
          name: '5',
          shape: 'circle',
          coords: [40, 90, 40],
          href: '',
        },
      ],
    },
    mapLideranca: {
      name: '4',
      areas: [
        {
          name: '0',
          shape: 'circle',
          coords: [120, 120, 40],
          href: '',
        },
        {
          name: '2',
          shape: 'circle',
          coords: [211, 90, 40],
          href: '',
        },
        {
          name: '3',
          shape: 'circle',
          coords: [180, 168, 40],
          href: '',
        },
        {
          name: '5',
          shape: 'circle',
          coords: [66, 93, 40],
          href: '',
        },
        {
          name: '1',
          shape: 'circle',
          coords: [139, 35, 40],
          href: '',
        },
      ],
    },
    mapAposentadoria: {
      name: '5',
      areas: [
        {
          name: '0',
          shape: 'circle',
          coords: [125, 125, 40],
          href: '',
        },
        {
          name: '1',
          shape: 'circle',
          coords: [140, 45, 40],
          href: '',
        },
        {
          name: '2',
          shape: 'circle',
          coords: [212, 92, 40],
          href: '',
        },
        {
          name: '3',
          shape: 'circle',
          coords: [183, 172, 40],
          href: '',
        },
        {
          name: '4',
          shape: 'circle',
          coords: [98, 172, 40],
          href: '',
        },
      ],
    },
  };

  const onClick = (area) => {
    const stringClicado = idsItinerarios[area.name];

    setFilter({
      ...filter,
      itinerario: stringClicado
        ? itinerarios.find((item) =>
            item.name.toLowerCase().includes(stringClicado.toLowerCase()),
          ).id
        : 0,
    });
  };

  const onClick2 = (area) => {
    const stringClicado = idsItinerarios[area.target.name];
    console.log(area.target.name);
    console.log(stringClicado);

    setFilter({
      ...filter,
      itinerario: stringClicado
        ? itinerarios.find((item) =>
            item.name.toLowerCase().includes(stringClicado.toLowerCase()),
          ).id
        : 0,
    });
  };

  const linha = {
    0: (
      <ImageMapper
        src={Img0}
        width={220}
        map={maps.mapGeral}
        onClick={onClick}
        strokeColor="rgba(0, 0, 0, 0)"
        fillColor="rgba(0,0,0,0)"
      />
    ),
    '00911570-d01c-4cb3-81e2-721999eab901': (
      <ImageMapper
        src={Img1}
        width={220}
        map={maps.mapInicServPublico}
        onClick={onClick}
        strokeColor="rgba(0, 0, 0, 0)"
        fillColor="rgba(0,0,0,0)"
      />
    ),
    '357d300e-95a4-4de9-a653-140841e2090a': (
      <ImageMapper
        src={Img2}
        width={250}
        map={maps.mapTecAdmEduc}
        onClick={onClick}
        strokeColor="rgba(0, 0, 0, 0)"
        fillColor="rgba(0,0,0,0)"
      />
    ),
    '6f20336b-5519-423a-a708-db9114190e63': (
      <ImageMapper
        src={Img3}
        width={250}
        map={maps.mapDocente}
        onClick={onClick}
        strokeColor="rgba(0, 0, 0, 0)"
        fillColor="rgba(0,0,0,0)"
      />
    ),
    '35218055-9fa5-4bc3-a4e1-04c07a9c2872': (
      <ImageMapper
        src={Img4}
        width={240}
        map={maps.mapLideranca}
        onClick={onClick}
        strokeColor="rgba(0, 0, 0, 0)"
        fillColor="rgba(0,0,0,0)"
      />
    ),
    '55876032-32c1-432a-a020-9f70c73e7d6b': (
      <ImageMapper
        src={Img5}
        width={250}
        map={maps.mapAposentadoria}
        onClick={onClick}
        strokeColor="rgba(0, 0, 0, 0)"
        fillColor="rgba(0,0,0,0)"
      />
    ),
  };

  const linha2 = {
    0: <img src={logoSvg} />,
    '00911570-d01c-4cb3-81e2-721999eab901': <img src={itinerarioServPublico} />,
    '357d300e-95a4-4de9-a653-140841e2090a': <img src={itinerarioTecAdmEdu} />,
    '6f20336b-5519-423a-a708-db9114190e63': <img src={itinerarioDocente} />,
    '35218055-9fa5-4bc3-a4e1-04c07a9c2872': <img src={itinerarioGerencial} />,
    '55876032-32c1-432a-a020-9f70c73e7d6b': (
      <img src={itinerarioPrepAposenta} />
    ),
  };

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <div
        wrap={!screens.lg}
        style={{
          background:
            'linear-gradient(88.74deg, #2D56A1 11.86%, #34A5DE 94.24%)',
          padding: '20px 60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '900px',
            margin: '32px auto',
          }}
        >
          <Col style={{ marginRight: 24 }}>
            {/* {linha[itinerario] ? linha[itinerario] : linha[0]} */}
            {linha2[itinerario] ? linha2[itinerario] : linha2[0]}
          </Col>

          <Col style={{ color: '#FFF' }}>
            <Title
              level={4}
              style={{
                fontFamily: 'Roboto',
                fontWeight: '700',
                marginBottom: '10px',
                color: '#FFF',
              }}
            >
              {itinerarioData ? itinerarioData.name : 'PlaforEDU'}
            </Title>
            <Text style={{ fontFamily: 'Roboto', color: '#FFF' }}>
              {itinerarioData
                ? itinerarioData.description
                : 'A PlaforEDU tem como objetivo proporcionar um espaço onde os servidores podem encontrar capacitações com a finalidade de potencializar sua atuação na Educação Profissional e Tecnológica, no âmbito da Rede Federal de Educação Profissional, Científica e Tecnológica (RFEPCT).'}
            </Text>
          </Col>
        </div>
      </div>
      {/* bg gradiente final */}

      {/* <div>{linha2[itinerario] ? linha2[itinerario] : linha2[0]}</div> */}
      <div
        style={{
          maxWidth: '800px',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          minHeight: '30px',
          margin: '0 auto',
        }}
      >
        <div onClick={onClick2}>
          <img
            style={{ width: '100%', borderBottomLeftRadius: '10px' }}
            src={itinerarioGerencial}
            name="4"
            alt=""
          />
        </div>
        <div onClick={onClick2}>
          <img
            style={{ width: '100%' }}
            src={itinerarioPrepAposenta}
            name="5"
            alt=""
          />
        </div>
        <div onClick={onClick2}>
          <img
            style={{ width: '100%' }}
            src={itinerarioServPublico}
            name="1"
            alt=""
          />
        </div>
        <div onClick={onClick2}>
          <img
            style={{ width: '100%' }}
            src={itinerarioTecAdmEdu}
            name="2"
            alt=""
          />
        </div>
        <div onClick={onClick2}>
          <img
            style={{ width: '100%', borderBottomRightRadius: '10px' }}
            src={itinerarioDocente}
            name="3"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
