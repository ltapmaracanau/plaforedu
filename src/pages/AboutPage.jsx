import React from 'react';
import HeaderHome from '../components/header/HeaderHome';
import mandala from '../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_v5_Completa.png';
import retangulo from '../assets/about/Rectangle.png';
import infografico from '../assets/about/PLAFOR_Categorias-Competencias_Infografico_v6.png';
import { useNavigate } from 'react-router-dom';

import { Row, Col, Card, Typography, Image, Grid } from 'antd';
import { useStoreActions, useStoreState } from 'easy-peasy';

import iniciacao from '../assets/itinerarios/icon-iniciacao.svg';

const { Text, Title, Link } = Typography;
const { useBreakpoint } = Grid;

import styles from './AboutPage.module.css';

export default function AboutPage() {
  const screens = useBreakpoint();
  const navigate = useNavigate();

  const filterDefault = useStoreState((state) => state.courses.filterDefault);
  const setFilter = useStoreActions((actions) => actions.courses.setFilter);
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

  return (
    <>
      <HeaderHome />
      <div>
        <Row
          align="middle"
          wrap={!screens.lg}
          style={
            screens.lg
              ? {
                  backgroundColor: '#fff',
                  padding: '40px 50px 0px 50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
              : {
                  backgroundColor: '#fff',
                  padding: '40px 10px 0px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
          }
        >
          <h1 className={styles.titulo}>O que é a PlaforEDU</h1>

          <Row>
            <iframe
              style={{
                borderRadius: '20px',
                border: '5px solid #FFF',
                filter:
                  'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2)) drop-shadow(0px 20px 30px rgba(44, 86, 162, 0.1))',
              }}
              title="Apresentação PlaforEDU"
              src="https://www.youtube.com/embed/XJS8nvbW754"
              height={screens.md ? '449' : '250'}
              width={screens.md ? '740' : '300'}
            />
          </Row>
        </Row>

        <Row
          style={{
            margin: '120px 0',
            padding: '64px 10px',
            background: 'var(--bg-menos-claro)',
          }}
        >
          <p
            className={styles.texto}
            style={{
              maxWidth: '690px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            A PlaforEDU tem como objetivo proporcionar um espaço onde os
            servidores podem encontrar capacitações com a finalidade de
            potencializar sua atuação na Educação Profissional e Tecnológica, no
            âmbito da Rede Federal de Educação Profissional, Científica e
            Tecnológica (RFEPCT).
          </p>
        </Row>

        <Row
          align="middle"
          wrap={!screens.lg}
          style={
            screens.lg
              ? {
                  backgroundColor: '#fff',
                  maxWidth: '1160px',
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr',
                  margin: '0 auto',
                  justifyContent: 'space-between',
                  gap: '40px',
                }
              : {
                  gap: '10px',
                  justifyContent: 'center',
                }
          }
        >
          <Col
            style={screens.lg ? { padding: '40px' } : { padding: '0 20px' }}
            id="apresentacao"
          >
            <h1 className={styles.titulo}>Como tudo é organizado</h1>
            <p className={styles.texto}>
              A PlaforEDU reúne diversos cursos online abertos (Cursos Mooc)
              ofertados por diversas instituições de ensino, entre outras, da
              RFEPCT, que dão suporte ao desenvolvimento das competências
              recomendadas para um setor público de alto desempenho por meio de
              Itinerários Formativos. Na PlaforEDU você pode buscar as
              competências associadas ao seu perfil profissional, a partir de
              uma busca simples, e ter acesso a todos os cursos relacionados
              àquelas competências.
            </p>
          </Col>
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image
              src={mandala}
              preview={false}
              width={!screens.xs ? 375 : 250}
            />
          </Col>
        </Row>

        <div
          style={{
            background: 'var(--bg-azul)',
            padding: '60px 0',
            margin: '120px 0',
          }}
        >
          <h1
            className={styles.titulo}
            style={{
              color: 'var(--bg-site)',
              textAlign: 'center',
            }}
          >
            5 Itinerários formativos
          </h1>
          <p
            className={styles.texto}
            style={{
              display: 'block',
              color: 'var(--bg-site)',
              textAlign: 'center',
            }}
          >
            São destinados à diferentes perfis de servidores da RFEPCT, sendo
            eles:
          </p>
          <div
            className={styles.cardsContainer}
            style={
              screens.xs
                ? {
                    flexFlow: 'column',
                    padding: '0px 20px',
                    gap: '20px',
                    justifyContent: 'left',
                  }
                : null
            }
          >
            <div className={styles.cardItinerarios}>
              <img src={iniciacao} alt="" />
              <p
                className={styles.texto}
                style={{
                  color: '#FFF',
                  margin: '0px', //estava com uma margem-bottom de 20px
                }}
              >
                Iniciação ao Serviço Público
              </p>
            </div>

            <div className={styles.cardItinerarios}>
              <img src={iniciacao} alt="" />
              <p
                className={styles.texto}
                style={{
                  color: '#FFF',
                  margin: '0px', //estava com uma margem-bottom de 20px
                }}
              >
                Técnico-Administrativo em Educação
              </p>
            </div>
            <div className={styles.cardItinerarios}>
              <img src={iniciacao} alt="" />
              <p
                className={styles.texto}
                style={{
                  color: '#FFF',
                  margin: '0px', //estava com uma margem-bottom de 20px
                }}
              >
                Docente
              </p>
            </div>
            <div className={styles.cardItinerarios}>
              <img src={iniciacao} alt="" />
              <p
                className={styles.texto}
                style={{
                  color: '#FFF',
                  margin: '0px', //estava com uma margem-bottom de 20px
                }}
              >
                Gerencial
              </p>
            </div>
            <div className={styles.cardItinerarios}>
              <img src={iniciacao} alt="" />
              <p
                className={styles.texto}
                style={{
                  color: '#FFF',
                  margin: '0px', //estava com uma margem-bottom de 20px
                }}
              >
                Preparação para aposentadoria
              </p>
            </div>
          </div>

          <div>
            <p
              className={styles.subTitulo}
              style={{
                color: 'var(--bg-site)',
                display: 'block',
                textAlign: 'center',
              }}
            >
              Explicamos melhor cada um abaixo
            </p>
          </div>
        </div>

        <Row
          align="middle"
          wrap={!screens.lg}
          id="iniciacao"
          style={
            screens.lg
              ? {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 50px',
                  display: 'flex',
                  justifyContent: 'center',
                }
              : {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 10px',
                  display: 'flex',
                  justifyContent: 'center',
                }
          }
        >
          <Col style={{ padding: '40px' }}>
            <Link>
              <Title
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '24px',
                  color: '#2C55A1',
                  marginBottom: '30px',
                }}
                onClick={() => {
                  onClickItinerario('Iniciação');
                }}
              >
                Iniciação ao serviço público
              </Title>
            </Link>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
              }}
            >
              Este Itinerário Formativo pretende integrar o servidor
              recém-empossado ao ambiente institucional ao qual terá exercício,
              preparando-o para o desempenho de atividades vinculadas ao
              ambiente organizacional em que atuará e ao cargo que ocupa na
              instituição.
            </Text>
          </Col>
          <Col>
            <iframe
              title="Iniciação ao Serviço Público"
              src="https://www.youtube.com/embed/FCSD3x-a8KA"
              height={screens.md ? '310' : '250'}
              width={screens.md ? '534' : '300'}
            />
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '5px',
              }}
              onClick={() => {
                onClickItinerario('Iniciação');
              }}
            >
              <Link>Clique aqui para ir para o itinerário.</Link>
            </Text>
          </Col>
        </Row>
        <Row
          id="tae"
          align="middle"
          wrap={!screens.lg}
          style={
            screens.lg
              ? {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 50px',
                  display: 'flex',
                  justifyContent: 'center',
                }
              : {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 10px',
                  display: 'flex',
                  justifyContent: 'center',
                }
          }
        >
          <Col style={{ padding: '40px' }}>
            <Link>
              <Title
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '24px',
                  color: '#2C55A1',
                  marginBottom: '30px',
                }}
                onClick={() => {
                  onClickItinerario('Educação');
                }}
              >
                Técnico-Administrativo em Educação
              </Title>
            </Link>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
              }}
            >
              Este Itinerário formativo visa capacitar profissionais alinhados
              com as políticas institucionais. Nesse sentido, o itinerário
              apresentará inicialmente aos Técnicos-Administrativos em Educação
              o Plano de Carreira, suas atribuições e responsabilidades para o
              desempenho do cargo ao qual foi nomeado. Os outros cursos do
              itinerário pretendem qualificar os servidores nas diversas áreas
              de atuação - educacional e administrativa.
            </Text>
          </Col>
          <Col
            style={{
              justifyContent: 'center',
            }}
          >
            <iframe
              title="Técnico-Administrativo em Educação"
              src="https://www.youtube.com/embed/dalwDRu-KMA"
              height={screens.md ? '310' : '250'}
              width={screens.md ? '534' : '300'}
            />
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '5px',
              }}
              onClick={() => {
                onClickItinerario('Educação');
              }}
            >
              <Link>Clique aqui para ir para o itinerário.</Link>
            </Text>
          </Col>
        </Row>
        <Row
          id="docente"
          align="middle"
          wrap={!screens.lg}
          style={
            screens.lg
              ? {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 50px',
                  display: 'flex',
                  justifyContent: 'center',
                }
              : {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 10px',
                  display: 'flex',
                  justifyContent: 'center',
                }
          }
        >
          <Col style={{ padding: '40px' }}>
            <Link>
              <Title
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '24px',
                  color: '#2C55A1',
                  marginBottom: '30px',
                }}
                onClick={() => {
                  onClickItinerario('Docente');
                }}
              >
                Docente
              </Title>
            </Link>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
              }}
            >
              Este itinerário é um processo formativo interativo e reflexivo,
              proporcionando ao docente a resolução dos problemas enfrentados
              nas práticas educativas em um contexto pedagógico. A metodologia
              adotada é dinâmica, proporcionando a construção de novos saberes
              por intermédio das trilhas vinculadas à teoria e às práticas
              docentes.
            </Text>
          </Col>
          <Col>
            <iframe
              title="Docente"
              src="https://www.youtube.com/embed/QB0Gf_wwGn8"
              height={screens.md ? '310' : '250'}
              width={screens.md ? '534' : '300'}
            />
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '5px',
              }}
              onClick={() => {
                onClickItinerario('Docente');
              }}
            >
              <Link>Clique aqui para ir para o itinerário.</Link>
            </Text>
          </Col>
        </Row>
        <Row
          id="gerencial"
          align="middle"
          wrap={!screens.lg}
          style={
            screens.lg
              ? {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 50px',
                  display: 'flex',
                  justifyContent: 'center',
                }
              : {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 10px',
                  display: 'flex',
                  justifyContent: 'center',
                }
          }
        >
          <Col style={{ padding: '40px' }}>
            <Link>
              <Title
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '24px',
                  color: '#2C55A1',
                  marginBottom: '30px',
                }}
                onClick={() => {
                  onClickItinerario('Gerencial');
                }}
              >
                Gerencial
              </Title>
            </Link>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
              }}
            >
              O itinerário formativo gerencial pode ser percorrido por
              servidores técnicos-administrativos ou docentes que estejam em
              cargos/funções de gestão ou que desejem se capacitar para tal, com
              metodologias modernas, abarcando temáticas tradicionais e
              contemporâneas.
            </Text>
          </Col>
          <Col>
            <iframe
              title="Gerencial"
              src="https://www.youtube.com/embed/SHo-7vJLWn8"
              height={screens.md ? '310' : '250'}
              width={screens.md ? '534' : '300'}
            />
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '5px',
              }}
              onClick={() => {
                onClickItinerario('Gerencial');
              }}
            >
              <Link>Clique aqui para ir para o itinerário.</Link>
            </Text>
          </Col>
        </Row>
        <Row
          id="aposentadoria"
          align="middle"
          wrap={!screens.lg}
          style={
            screens.lg
              ? {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 50px',
                  display: 'flex',
                  justifyContent: 'center',
                }
              : {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 10px',
                  display: 'flex',
                  justifyContent: 'center',
                }
          }
        >
          <Col style={{ padding: '40px' }}>
            <Link>
              <Title
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '24px',
                  color: '#2C55A1',
                  marginBottom: '30px',
                }}
                onClick={() => {
                  onClickItinerario('Aposentadoria');
                }}
              >
                Aposentadoria
              </Title>
            </Link>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
              }}
            >
              A aposentadoria já é realidade na Rede Federal EPCT, o itinerário
              que se apresenta traz o enfoque para um novo encarreiramento.
              <br />
              O itinerário foi elaborado a partir de 3 pilares:
              <br />
              <br />
              <b>Formação no contexto psicológico:</b> preparando-se para esta
              nova realidade, em que as demandas de trabalho e rotina anteriores
              não existirão mais.
              <br />
              <br />
              <b>Atividades futuras:</b> o aposentado deve pensar no seu perfil,
              fazer análise de suas características pessoais, habilidades e
              preferências para descobrir o que irá fazer depois. Pode se
              associar a ONGs, empreender etc.
              <br />
              <br />
              <b>Financeiro:</b> se este aspecto não estiver bem equacionado,
              dificilmente o aposentado conseguirá realizar as outras coisas. É
              fundamental o planejamento financeiro, saber o quanto vai gastar
              do momento do desligamento para frente e fazer uma análise de
              expectativa de vida.
            </Text>
          </Col>
          <Col>
            <iframe
              title="Aposentadoria"
              src="https://www.youtube.com/embed/mCFeSDFQWzk"
              height={screens.md ? '310' : '250'}
              width={screens.md ? '534' : '300'}
            />
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '5px',
              }}
              onClick={() => {
                onClickItinerario('Aposentadoria');
              }}
            >
              <Link>Clique aqui para ir para o itinerário.</Link>
            </Text>
          </Col>
        </Row>
        <Row
          id="itinerarios"
          align="middle"
          wrap={!screens.lg}
          style={
            screens.lg
              ? {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 50px',
                  display: 'flex',
                  justifyContent: 'center',
                }
              : {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 10px',
                  display: 'flex',
                  justifyContent: 'center',
                }
          }
        >
          <Col style={{ padding: '40px' }}>
            <Title
              style={{
                fontFamily: 'Poppins',
                fontSize: '24px',
                color: '#2C55A1',
                marginBottom: '30px',
              }}
            >
              Itinerários Formativos
            </Title>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
              }}
            >
              A PlaforEDU reúne diversos cursos online abertos (Cursos Mooc)
              ofertados por diversas instituições de ensino, entre outras, da
              RFEPCT, que dão suporte ao desenvolvimento das competências
              recomendadas para um setor público de alto desempenho por meio de
              Itinerários Formativos. Na PlaforEDU você pode buscar as
              competências associadas ao seu perfil profissional, a partir de
              uma busca simples, e ter acesso a todos os cursos relacionados
              àquelas competências.
            </Text>
          </Col>
          <Col>
            <Image
              src={mandala}
              preview={false}
              width={!screens.xs ? 375 : 250}
            />
          </Col>
        </Row>
        <Row
          align="middle"
          wrap={!screens.lg}
          style={
            screens.lg
              ? {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 50px',
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
              : {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 10px',
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
          }
        >
          <Col order={screens.lg ? 0 : 1}>
            <Image
              src={retangulo}
              preview={false}
              width={!screens.xs ? 350 : 250}
            />
          </Col>
          <Col style={{ padding: '40px' }} order={screens.lg ? 1 : 0}>
            <Title
              style={{
                fontFamily: 'Poppins',
                fontSize: '24px',
                color: '#2C55A1',
                marginBottom: '30px',
              }}
            >
              Trilhas Formativas
            </Title>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
              }}
            >
              São percursos formativos propostos a partir do encadeamento de
              cursos ordenados, com o objetivo de desenvolver competências por
              meio da capacitação e qualificação profissional.
            </Text>
          </Col>
        </Row>
        <Row
          align="middle"
          style={
            screens.lg
              ? {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 50px',
                  display: 'flex',
                  justifyContent: 'center',
                }
              : {
                  backgroundColor: '#fff',
                  marginBottom: '5px',
                  padding: '40px 10px',
                  display: 'flex',
                  justifyContent: 'center',
                }
          }
          id="mandala"
        >
          <Col span={24} style={{ padding: '40px' }}>
            <Title
              style={{
                fontFamily: 'Poppins',
                fontSize: '24px',
                color: '#2C55A1',
                marginBottom: '30px',
              }}
            >
              Mandala de Competências
            </Title>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
              }}
            >
              As competências são a mobilização de conhecimentos, habilidades e
              atitudes para solucionar problemas e lidar com situações
              cotidianas profissionais. Essas competências estão associadas e
              agrupadas por categorias, sendo elas: Envolvimento profissional,
              Recursos digitais, Ensino e aprendizagem, Avaliação, Capacitação
              dos aprendentes, Programação da competência digital dos
              aprendentes, Gestão de resultados, Gestão de relacionamentos,
              Gestão de mudanças, Orientação a resultados, Processos de
              melhoria, Transversais. Abaixo é apresentado o infográfico com a
              Mandala de Competências organizada pelas competências associadas
              em categorias.
            </Text>
          </Col>
          <Col
            span={24}
            style={
              screens.lg ? { padding: '40px 80px' } : { padding: '20px 40px' }
            }
          >
            <Image preview={false} src={infografico} width={'100%'} />
          </Col>
        </Row>
      </div>
    </>
  );
}
