import React from 'react';
import HeaderHome from '../components/header/HeaderHome';
import trilhaIlustracao from '../assets/about/ilustracao-trilha.svg';
import mandala from '../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_v5_Completa.png';
import retangulo from '../assets/about/Rectangle.png';
import infografico from '../assets/about/PLAFOR_Categorias-Competencias_Infografico_v6.png';
import infografico_fundo_branco from '../assets/about/mandala_fundo_branco.png';
import { useNavigate } from 'react-router-dom';

import { Row, Col, Typography, Image, Grid, Collapse } from 'antd';
import { useStoreActions, useStoreState } from 'easy-peasy';

import iniciacao from '../assets/itinerarios/iconIniciacao.svg';
import aposentadoria from '../assets/itinerarios/iconAposentadoria.svg';
import educacao from '../assets/itinerarios/iconEducacao.svg';
import administrativo from '../assets/itinerarios/iconAdministrativo.svg';
import gerencial from '../assets/itinerarios/iconGerencial.svg';
import setabaixo from '../assets/icon/setabaixo.svg';

const { Panel } = Collapse;
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
                  padding: '60px 50px 0px 50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '20px',
                }
              : {
                  padding: '60px 10px 0px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '12px',
                }
          }
        >
          <h1 className={styles.titulo}>O que é a PlaforEDU</h1>

          <iframe
            className={styles.videoItinerario}
            height={!screens.xs ? '433px' : null}
            style={{
              maxWidth: '760px',
              border: '5px solid #FFF',
              filter:
                'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2)) drop-shadow(0px 20px 30px rgba(44, 86, 162, 0.1))',
            }}
            title="Apresentação PlaforEDU"
            src="https://www.youtube.com/embed/XJS8nvbW754"
          />
        </Row>

        <Row
          style={{
            margin: `${!screens.xs ? '120px 0' : '60px 0'}`,
            padding: '60px 20px',
            background: 'var(--bg-menos-claro)',
          }}
        >
          <p
            className={styles.texto}
            style={{
              maxWidth: '690px',
              margin: '0 auto',
              textAlign: `${!screens.xs ? 'center' : 'left'}`,
            }}
          >
            A PlaforEDU tem como objetivo proporcionar um espaço onde os
            servidores podem encontrar capacitações com a finalidade de
            potencializar sua atuação na Educação Profissional e Tecnológica, no
            âmbito da Rede Federal de Educação Profissional, Científica e
            Tecnológica (RFEPCT).
          </p>
        </Row>

        {/* Como tudo é organizado */}
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
                  gap: '20px',
                  justifyContent: 'center',
                }
          }
        >
          <Col
            style={screens.lg ? { padding: '40px' } : { padding: '0 20px' }}
            id="apresentacao"
          >
            <h1 className={styles.titulo} style={{ marginBottom: '20px' }}>
              Como tudo é organizado
            </h1>
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
          <Col>
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
            margin: `${!screens.xs ? '120px 0' : '60px 0'}`,
          }}
        >
          <h1
            className={styles.titulo}
            style={{
              color: 'var(--bg-site)',
              textAlign: 'center',
              marginBottom: '20px',
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
                    padding: '20px 20px',
                    gap: '20px',
                    justifyContent: 'left',
                  }
                : null
            }
          >
            <a href="#iniciacao" className={styles.cardItinerarios}>
              <img src={iniciacao} alt="" />
              <p
                className={styles.texto}
                style={{
                  color: '#FFF',
                }}
              >
                Iniciação ao Serviço Público
              </p>
            </a>

            <a
              href="#tae"
              className={styles.cardItinerarios}
              style={{ background: 'var(--administrativo)' }}
            >
              <img src={administrativo} alt="" />
              <p
                className={styles.texto}
                style={{
                  color: '#FFF',
                }}
              >
                Técnico-Administrativo em Educação
              </p>
            </a>
            <a
              href="#docente"
              className={styles.cardItinerarios}
              style={{ background: 'var(--docente)' }}
            >
              <img src={educacao} alt="" />
              <p
                className={styles.texto}
                style={{
                  color: '#FFF',
                }}
              >
                Docente
              </p>
            </a>
            <a
              href="#gerencial"
              className={styles.cardItinerarios}
              style={{ background: 'var(--gerencial)' }}
            >
              <img src={gerencial} alt="" />
              <p
                className={styles.texto}
                style={{
                  color: '#FFF',
                }}
              >
                Gerencial
              </p>
            </a>
            <a
              href="#aposentadoria"
              className={styles.cardItinerarios}
              style={{ background: 'var(--aposentadoria)' }}
            >
              <img src={aposentadoria} alt="" />
              <p
                className={styles.texto}
                style={{
                  color: '#FFF',
                }}
              >
                Preparação para aposentadoria
              </p>
            </a>
          </div>
          <div style={{ display: 'grid', justifyContent: 'center' }}>
            <p
              className={styles.subTitulo}
              style={{
                color: 'var(--bg-site)',
                textAlign: 'center',
              }}
            >
              Explicamos melhor cada um abaixo
            </p>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={setabaixo}
                style={{ color: '#fff', marginTop: '24px' }}
              />
            </div>
          </div>
        </div>

        <div>
          <Row
            align="middle"
            wrap={!screens.lg}
            id="iniciacao"
            className={styles.itinerarioContainer}
            style={{ flexDirection: 'row-reverse' }}
          >
            <div
              style={
                !screens.lg
                  ? {
                      display: 'grid',
                      gap: '12px',
                      maxWidth: '560px',
                    }
                  : {
                      display: 'grid',
                      gap: '24px',
                      maxWidth: '560px',
                    }
              }
            >
              <h2 className={styles.titulo}>Iniciação ao serviço público</h2>
              <p className={styles.texto}>
                Este Itinerário Formativo pretende integrar o servidor
                recém-empossado ao ambiente institucional ao qual terá
                exercício, preparando-o para o desempenho de atividades
                vinculadas ao ambiente organizacional em que atuará e ao cargo
                que ocupa na instituição.
              </p>
              <div>
                <button
                  style={{
                    background: 'var(--azul-super-claro)',
                    color: 'var(--bg-azul)',
                  }}
                  className={styles.botaoItinerario}
                  onClick={() => {
                    onClickItinerario('Iniciação');
                  }}
                >
                  Acessar itinerário
                </button>
              </div>
            </div>
            <iframe
              className={styles.videoItinerario}
              title="Iniciação ao Serviço Público"
              src="https://www.youtube.com/embed/FCSD3x-a8KA"
            />
          </Row>
          <Row className={styles.linha}></Row>
          <Row
            align="middle"
            wrap={!screens.lg}
            id="tae"
            className={styles.itinerarioContainer}
            style={{}}
          >
            <div
              style={
                !screens.lg
                  ? {
                      display: 'grid',
                      gap: '12px',
                      maxWidth: '560px',
                    }
                  : {
                      display: 'grid',
                      gap: '24px',
                      maxWidth: '560px',
                    }
              }
            >
              <h2 className={styles.titulo}>
                Técnico-Administrativo em Educação
              </h2>
              <p className={styles.texto}>
                Este Itinerário formativo visa capacitar profissionais alinhados
                com as políticas institucionais. Nesse sentido, o itinerário
                apresentará inicialmente aos Técnicos-Administrativos em
                Educação o Plano de Carreira, suas atribuições e
                responsabilidades para o desempenho do cargo ao qual foi
                nomeado. Os outros cursos do itinerário pretendem qualificar os
                servidores nas diversas áreas de atuação - educacional e
                administrativa.
              </p>
              <div>
                <button
                  style={{
                    background: '#FEE6CE',
                    color: '#79543B',
                  }}
                  className={styles.botaoItinerario}
                  onClick={() => {
                    onClickItinerario('Educação');
                  }}
                >
                  Acessar itinerário
                </button>
              </div>
            </div>
            <iframe
              className={styles.videoItinerario}
              title="Técnico-Administrativo em Educação"
              src="https://www.youtube.com/embed/dalwDRu-KMA"
            />
          </Row>
          <Row className={styles.linha}></Row>
          <Row
            align="middle"
            wrap={!screens.lg}
            id="docente"
            className={styles.itinerarioContainer}
            style={{ flexDirection: 'row-reverse' }}
          >
            <div
              style={
                !screens.lg
                  ? {
                      display: 'grid',
                      gap: '12px',
                      maxWidth: '560px',
                    }
                  : {
                      display: 'grid',
                      gap: '24px',
                      maxWidth: '560px',
                    }
              }
            >
              <h2 className={styles.titulo}>Docente</h2>
              <p className={styles.texto}>
                Este itinerário é um processo formativo interativo e reflexivo,
                proporcionando ao docente a resolução dos problemas enfrentados
                nas práticas educativas em um contexto pedagógico. A metodologia
                adotada é dinâmica, proporcionando a construção de novos saberes
                por intermédio das trilhas vinculadas à teoria e às práticas
                docentes.
              </p>
              <div>
                <button
                  style={{
                    background: '#D3AFD3',
                    color: '#4F2150',
                  }}
                  className={styles.botaoItinerario}
                  onClick={() => {
                    onClickItinerario('Docente');
                  }}
                >
                  Acessar itinerário
                </button>
              </div>
            </div>
            <iframe
              className={styles.videoItinerario}
              title="Docente"
              src="https://www.youtube.com/embed/QB0Gf_wwGn8"
            />
          </Row>
          <Row className={styles.linha}></Row>
          <Row
            align="middle"
            wrap={!screens.lg}
            id="gerencial"
            className={styles.itinerarioContainer}
            style={{}}
          >
            <div
              style={
                !screens.lg
                  ? {
                      display: 'grid',
                      gap: '12px',
                      maxWidth: '560px',
                    }
                  : {
                      display: 'grid',
                      gap: '24px',
                      maxWidth: '560px',
                    }
              }
            >
              <h2 className={styles.titulo}>Gerencial</h2>
              <p className={styles.texto}>
                O itinerário formativo gerencial pode ser percorrido por
                servidores técnicos-administrativos ou docentes que estejam em
                cargos/funções de gestão ou que desejem se capacitar para tal,
                com metodologias modernas, abarcando temáticas tradicionais e
                contemporâneas.
              </p>
              <div>
                <button
                  style={{
                    background: '#E6FADF',
                    color: '#4A7040',
                  }}
                  className={styles.botaoItinerario}
                  onClick={() => {
                    onClickItinerario('Gerencial');
                  }}
                >
                  Acessar itinerário
                </button>
              </div>
            </div>
            <iframe
              className={styles.videoItinerario}
              title="Gerencial"
              src="https://www.youtube.com/embed/SHo-7vJLWn8"
            />
          </Row>
          <Row className={styles.linha}></Row>
          <Row
            align="middle"
            wrap={!screens.lg}
            id="aposentadoria"
            className={styles.itinerarioContainer}
            style={{ flexDirection: 'row-reverse' }}
          >
            <div
              style={
                !screens.lg
                  ? {
                      display: 'grid',
                      gap: '12px',
                      maxWidth: '560px',
                    }
                  : {
                      display: 'grid',
                      gap: '24px',
                      maxWidth: '560px',
                    }
              }
            >
              <h2 className={styles.titulo}>Aposentadoria</h2>
              <p className={styles.texto}>
                A aposentadoria já é realidade na Rede Federal EPCT, o
                itinerário que se apresenta traz o enfoque para um novo
                encarreiramento. O itinerário foi elaborado a partir de 3
                pilares:
              </p>
              <Collapse
                style={{
                  display: 'grid',
                  gap: '20px',
                  background: 'none',
                  border: 'none',
                }}
                expandIconPosition="end"
              >
                <Panel
                  className={`${styles.panel} ${styles.texto}`}
                  style={{}}
                  header="Formação no contexto psicológico"
                  key="1"
                >
                  <p className={styles.texto}>
                    Preparando-se para esta nova realidade, em que as demandas
                    de trabalho e rotina anteriores não existirão mais.
                  </p>
                </Panel>
                <Panel
                  className={`${styles.panel} ${styles.texto}`}
                  header="Atividades futuras"
                  key="2"
                >
                  <p className={styles.texto}>
                    O aposentado deve pensar no seu perfil, fazer análise de
                    suas características pessoais, habilidades e preferências
                    para descobrir o que irá fazer depois. Pode se associar a
                    ONGs, empreender etc.
                  </p>
                </Panel>
                <Panel
                  className={`${styles.panel} ${styles.texto}`}
                  header="Financeiro"
                  key="3"
                >
                  <p className={styles.texto}>
                    Se este aspecto não estiver bem equacionado, dificilmente o
                    aposentado conseguirá realizar as outras coisas. É
                    fundamental o planejamento financeiro, saber o quanto vai
                    gastar do momento do desligamento para frente e fazer uma
                    análise de expectativa de vida.
                  </p>
                </Panel>
              </Collapse>
              <div>
                <button
                  style={{
                    background: '#CECCFB',
                    color: '#2D267F',
                  }}
                  className={styles.botaoItinerario}
                  onClick={() => {
                    onClickItinerario('Aposentadoria');
                  }}
                >
                  Acessar itinerário
                </button>
              </div>
            </div>
            <iframe
              className={styles.videoItinerario}
              title="Aposentadoria"
              src="https://www.youtube.com/embed/mCFeSDFQWzk"
            />
          </Row>
        </div>

        <Row
          align="middle"
          style={{
            backgroundColor: 'var(--bg-azul)',
            height: `${screens.md ? '420px' : 'auto'}`,
            padding: '60px 20px',
            margin: `${!screens.xs ? '120px 0' : '60px 0'}`,
          }}
        >
          <Row
            className={styles.trilhaContainer}
            style={
              screens.md
                ? {
                    backgroundImage: `url(${trilhaIlustracao})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                  }
                : null
            }
          >
            <Col style={{ width: '100%' }} span={screens.md ? 16 : 24}>
              <h1
                className={styles.titulo}
                style={{
                  color: 'white',
                  marginBottom: '28px',
                }}
              >
                Trilhas Formativas
              </h1>
              <p className={styles.texto} style={{ color: 'white' }}>
                São percursos formativos propostos a partir do encadeamento de
                cursos ordenados, com o objetivo de desenvolver competências por
                meio da capacitação e qualificação profissional.
              </p>
            </Col>
          </Row>
        </Row>

        {/* MANDALA */}
        <Row
          className={styles.mandalaContainer}
          align="middle"
          style={{ marginBottom: `${!screens.xs ? '80px' : '40px'}` }}
          id="mandala"
        >
          <Col style={{ paddingBottom: `${!screens.xs ? '40px' : '20px'}` }}>
            <h1
              className={styles.titulo}
              style={{
                marginBottom: '20px',
              }}
            >
              Mandala de Competências
            </h1>
            <p className={styles.texto} style={{}}>
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
            </p>
          </Col>
          <Col
            style={
              screens.lg ? { padding: '40px 0px' } : { padding: '20px 0px' }
            }
          >
            <Image
              src={infografico}
              preview={
                screens.xs
                  ? {
                      src: infografico_fundo_branco,
                    }
                  : false
              }
              width={'100%'}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
