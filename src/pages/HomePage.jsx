import React from 'react';
import './homepage.css';
import HeaderHome from '../components/header/HeaderHome';
import Finder from '../components/Finder';
import Int1 from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_Docente.png';
import Int2 from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_InicServPublico.png';
import Int3 from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_Gerencial.png';
import Int4 from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_PrepAposenta.png';
import Int5 from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_TecAdmEdu.png';

import icon1 from '../assets/HomepageIcon1.svg';
import icon2 from '../assets/HomepageIcon2.svg';
import icon3 from '../assets/HomepageIcon3.svg';

import { useStoreActions, useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import infografico from '../assets/about/PLAFOR_Categorias-Competencias_Infografico_v6.png';
import infografico_fundo_branco from '../assets/about/mandala_fundo_branco.png';

import {
  ArrowRightOutlined,
  DownOutlined,
  RightOutlined,
} from '@ant-design/icons';

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
} from 'antd';
import VideoPlayer from '../components/VideoPlayer';
import HomepageItineario from '../components/HomepageItineario';

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
      <Row className="containerTitle" align={'middle'}>
        <Col
          style={{
            maxWidth: '681px',
            margin: screens.xs ? '0 20px' : '0 auto',
            display: 'grid',
            gap: screens.xs ? '24px' : '48px',
          }}
          className="texts"
        >
          {/* <Space direction="vertical" size={'large'}> */}
          <Title
            style={{
              fontFamily: 'Roboto',
              fontSize: screens.xs ? '32px' : '57px',
              fontWeight: 500,
              lineHeight: screens.xs ? '40px' : '64px',
              letterSpacing: '-0.25px',
              color: 'var(--titulos)',
              marginBottom: '0',
            }}
          >
            Aprenda novas habilidades e amplie seus horizontes
          </Title>
          <Text
            style={{ fontSize: screens.xs ? '1.125rem' : null }}
            className="subTitulo"
          >
            Capacitações para aprimorar a atuação de servidores da Rede Federal
            de Educação Profissional, Científica e Tecnológica.
          </Text>
          <div>
            <button
              className="botaoTexto"
              style={{
                display: 'block',
                margin: '0 auto',
                marginBottom: screens.xs ? '16px' : '24px',
                background: 'var(--bg-azul)',
                color: 'white',
              }}
              onClick={() => {
                console.log('Acessar cursos!');
              }}
            >
              ACESSAR CURSOS
            </button>
            <Link
              style={{
                color: '#4B4B4B',
                fontFamily: 'Roboto',
                fontSize: '16px',
                textDecoration: 'none',
              }}
            >
              Saiba mais <ArrowRightOutlined />
            </Link>
          </div>
          {/* </Space> */}
        </Col>
      </Row>

      <div
        style={{
          maxWidth: '1160px',
          width: '100%',
          margin: '0 auto',
          padding: screens.xl ? '0' : '0 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '120px',
        }}
      >
        <div>
          <h1
            // level={screens.xs ? 4 : 3}
            className="titulo"
            style={{
              marginBottom: '20px',
            }}
          >
            Cursos acessados por você recentemente:
          </h1>
          <List
            style={{}}
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
                title: 'Educação Especial: histórico, políticas e práticas',
                description: 'PoCA - UFSCar',
              },
              {
                id: 2,
                title:
                  'Gerenciamento de Projetos e Portfólios de Projetos - Guia',
                description: 'IFRN',
              },
              {
                id: 3,
                title: 'Teletrabalho e Educação a Distância',
                description: 'PoCA - UFSCar',
              },
            ]}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <Card
                  bordered={true}
                  style={{
                    maxWidth: screens.xs ? '100%' : '360px',
                    cursor: 'pointer',
                    boxShadow:
                      '0px 4px 4px rgba(0, 0, 0, 0.2), 0px 20px 30px rgba(44, 86, 162, 0.1)',
                  }}
                >
                  <Title level={5}>{item.title}</Title>
                  {item.description}
                </Card>
              </List.Item>
            )}
          />
        </div>

        <div
          style={{
            marginBottom: '50px',
            display: 'flex',
            gap: '30px',
            flexDirection: screens.md ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '24px',
              maxWidth: '460px',
            }}
          >
            <h1 className="titulo">
              Cursos voltados para o seu perfil profissional
            </h1>
            <Text className="texto">
              A PlaforEDU reúne diversos cursos online abertos (Cursos Mooc)
              ofertados por diversas instituições de ensino.
            </Text>
            <button
              className="botaoTexto"
              style={{
                background: 'var(--azul-super-claro)',
                color: 'var(--bg-azul)',
              }}
            >
              COMO FUNCIONA
            </button>
          </div>
          <iframe
            style={{
              borderRadius: '20px',
              borderStyle: 'none',
              border: '5px solid #FFF',
              width: '100%',
              maxWidth: screens.md ? '650px' : '460px',
              minHeight: screens.md ? '390px' : '300px',
              // margin: screens.sm ? '0' : '0 auto',
              filter:
                'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2)) drop-shadow(0px 20px 30px rgba(44, 86, 162, 0.1))',
            }}
            title={'Äpresentação SETEC'}
            src={'https://www.youtube.com/embed/s4hchxxjuRo'}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1 className="titulo" style={{ marginBottom: '16px' }}>
            Qual o seu perfil profissional?
          </h1>
          <Text className="subTitulo">
            A PlaforEDU apresenta os perfis de servidores da RFEPCT em cinco
            Itinerários Formativos
          </Text>
          <Row
            style={{
              marginTop: '40px',
            }}
            gutter={[40, 40]}
            align={'middle'}
            justify={'space-evenly'}
          >
            <HomepageItineario
              imgItinerario={Int2}
              nameItinerario={'Iniciação'}
              itinerario={'Iniciação ao Serviço Público'}
            />
            <HomepageItineario
              imgItinerario={Int5}
              nameItinerario={'Educação'}
              itinerario={'Técnico Administrativo em Educação'}
            />
            <HomepageItineario
              imgItinerario={Int1}
              nameItinerario={'Docente'}
              itinerario={'Docente'}
            />
            <HomepageItineario
              imgItinerario={Int3}
              nameItinerario={'Gerencial'}
              itinerario={'Gerencial'}
            />
            <HomepageItineario
              imgItinerario={Int4}
              nameItinerario={'Preparação'}
              itinerario={'Preparação para a Aposentadoria'}
            />
          </Row>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'var(--bg-azul)',
          marginTop: '120px',
          marginBottom: '120px',
          padding: '80px 0px',
        }}
      >
        <div
          style={{
            display: 'flex',
            maxWidth: '1060px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center',
            // alignItems: 'stretch',
            textAlign: 'center',
            gap: '40px',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '300px',
            }}
          >
            <img
              style={{
                display: 'block',
                margin: '0 auto',
                paddingBottom: screens.xs ? '12px' : '32px',
              }}
              src={icon1}
            />
            <p
              className="subTitulo"
              style={{
                color: '#FDFDFD',
              }}
            >
              Todos os cursos na PlaforEDU são gratuitos
            </p>
          </div>
          <div
            style={{
              width: '100%',
              maxWidth: '300px',
            }}
            direction="vertical"
          >
            <img
              style={{
                display: 'block',
                margin: '0 auto',
                paddingBottom: screens.xs ? '12px' : '32px',
              }}
              src={icon2}
            />
            <p
              className="subTitulo"
              style={{
                color: '#FDFDFD',
              }}
            >
              Organizados para melhor atender seu perfil profissional
            </p>
          </div>
          <div style={{ maxWidth: '300px', width: '100%' }}>
            <img
              style={{
                display: 'block',
                margin: '0 auto',
                paddingBottom: screens.xs ? '12px' : '32px',
              }}
              src={icon3}
            />
            <p
              className="subTitulo"
              style={{
                color: '#FDFDFD',
              }}
            >
              Certificado emitido pela instituição de ensino ofertante
            </p>
          </div>
        </div>
      </div>

      <Row
        // justify={'space-between'}
        style={{
          display: 'flex',
          maxWidth: '1160px',
          width: '100%',
          justifyContent: screens.xl ? 'space-between' : 'center',
          margin: '0 auto',
          padding: screens.xl ? '0' : '0 20px',
          alignItems: 'center',
          gap: '24px',
        }}
        // gutter={[40, 40]}
      >
        <Col
          style={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            maxWidth: '560px',
          }}
        >
          <h1
            className="titulo"
            style={{
              marginBottom: '20px',
            }}
          >
            Aprenda uma nova competência através das nossas trilhas
          </h1>
          <Text className="texto" style={{}}>
            Plataforma Digital de Formação onde os servidores podem encontrar
            capacitações com a finalidade de potencializar sua atuação na
            Educação Profissional e Tecnológica, no âmbito da Rede Federal de
            Educação Profissional, Científica e Tecnológica.
          </Text>
        </Col>

        <Col
          style={{
            display: 'grid',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'baseline',
            gap: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'space-beetwen',
              boxShadow:
                '0px 4px 4px rgba(0, 0, 0, 0.2), 0px 20px 30px rgba(44, 86, 162, 0.1)',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                // height: '100%',
                margin: '28px',
                maxWidth: '280px',
              }}
            >
              <Title level={5}>Criação e Modificação</Title>
              <Link
                style={{
                  textDecoration: 'underline',
                  color: 'black',
                }}
              >
                Ver cursos <DownOutlined />
              </Link>
            </div>
            <div
              style={{
                backgroundColor: 'var(--azul-super-claro)',
                color: 'var(--bg-azul)',
                position: 'relative',
                right: 0,
                width: '70px',
                minWidth: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
              }}
            >
              <RightOutlined />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              boxShadow:
                '0px 4px 4px rgba(0, 0, 0, 0.2), 0px 20px 30px rgba(44, 86, 162, 0.1)',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                // height: '100%',
                margin: '28px',
                maxWidth: '280px',
              }}
            >
              <Title level={5}>Criação e Modificação</Title>
              <Link
                style={{
                  textDecoration: 'underline',
                  color: 'black',
                }}
              >
                Ver cursos <DownOutlined />
              </Link>
            </div>
            <div
              style={{
                backgroundColor: 'var(--azul-super-claro)',
                color: 'var(--bg-azul)',
                position: 'relative',
                right: 0,
                width: '70px',
                minWidth: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
              }}
            >
              <RightOutlined />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'space-between',
              boxShadow:
                '0px 4px 4px rgba(0, 0, 0, 0.2), 0px 20px 30px rgba(44, 86, 162, 0.1)',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                // height: '100%',
                margin: '28px',
                maxWidth: '280px',
              }}
            >
              <Title level={5}>
                Criação e Modificação Modificação Modificação
              </Title>
              <Link
                style={{
                  textDecoration: 'underline',
                  color: 'black',
                }}
              >
                Ver cursos <DownOutlined />
              </Link>
            </div>
            <div
              style={{
                backgroundColor: 'var(--azul-super-claro)',
                color: 'var(--bg-azul)',
                position: 'relative',
                right: 0,
                width: '70px',
                minWidth: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
              }}
            >
              <RightOutlined />
            </div>
          </div>
        </Col>
      </Row>

      {info?.courses && (
        <div
          style={{
            width: '100%',
            backgroundColor: '#F5F5F5',
            // padding: screens.xl ? '60px 0px' : '60px 20px',
            padding: '60px 0',
            margin: '120px 0',
          }}
        >
          <div
            style={{
              maxWidth: '800px',
              display: 'flex',
              justifyContent: 'space-evenly',
              flexDirection: screens.xs ? 'column' : 'row',
              alignItems: 'center',
              textAlign: 'center',
              margin: '0 auto',
            }}
          >
            <div>
              <Title
                // level={1}
                style={{
                  fontFamily: 'Roboto',
                  fontSize: '4.5rem',
                  fontWeight: 'bold',
                  letterSpacing: '-0.25',
                  lineHeight: '4rem',
                  color: 'var(--titulos)',
                  margin: 0,
                }}
              >
                {info.courses}
              </Title>
              <p
                className="titulo"
                style={{ color: 'var(--texto-corpo)', margin: 0 }}
              >
                Cursos
              </p>
            </div>
            <span
              // level={3}
              className="titulo"
              style={{
                color: 'var(--texto-baixo-contraste)',
                margin: '24px',
              }}
            >
              ofertados por
            </span>
            <div>
              <Title
                level={1}
                style={{
                  fontFamily: 'Roboto',
                  fontSize: '4.5rem',
                  fontWeight: 'bold',
                  letterSpacing: '-0.25',
                  lineHeight: '4rem',
                  color: 'var(--titulos)',
                  margin: 0,
                }}
              >
                {info.institutions}
              </Title>
              <span
                className="titulo"
                // level={3}
                style={{ color: 'var(--texto-corpo)', margin: 0 }}
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
          maxWidth: '1160px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row-reverse',
          flexWrap: screens.md ? 'nowrap' : 'wrap',
          justifyContent: screens.md ? 'space-between' : 'center',
          padding: screens.xl ? '0' : '0 20px',
          // margin: '50px 0px',
          margin: '0 auto',
          marginBottom: '120px',
          gap: '24px',
        }}
      >
        <Col
          // flex={12}
          style={{
            display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            textAlign: screens.md ? 'end' : 'left',
            // margin: '50px',
          }}
        >
          <Space
            direction="vertical"
            style={{
              maxWidth: '560px',
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
              style={{ background: 'var(--bg-azul)', color: 'white' }}
              className="botaoTexto"
              // type="primary"
            >
              Entenda Melhor
            </button>
          </Space>
        </Col>
        <Image
          style={{ width: '100%', maxWidth: '480px' }}
          src={infografico}
          preview={{ src: infografico_fundo_branco }}
        />
      </Row>

      <Row
        style={{
          padding: '60px 0px',
          backgroundColor: 'var(--bg-azul)',
        }}
      >
        <Col offset={2} span={18}>
          <h1
            className="subTitulo"
            // level={4}
            style={{
              // marginTop: '20px',
              marginBottom: '20px',
              color: 'var(--azul-claro)',
            }}
          >
            Gostaria de entrar em contato com a gente?
          </h1>
          <Link
            className="texto"
            style={{ textDecoration: 'underline', color: '#FDFDFD' }}
          >
            Preencher formulário de contato
          </Link>
        </Col>
      </Row>
    </>
  );
}
