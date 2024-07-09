import { useState } from "react";
import questionVector from "../assets/icon/questions.svg";
import "./faq.css";

import { Link } from "react-router-dom";

import { Col, Grid, Input, Row } from "antd";
import { DownOutlined, SearchOutlined, UpOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

export default function FAQ() {
  const screens = useBreakpoint();

  const perguntas = [
    {
      id: 1,
      titulo: "O que é a PlaforEDU?",
      texto:
        "A PlaforEDU tem como objetivo proporcionar um espaço onde os servidores podem encontrar capacitações com a finalidade de potencializar sua atuação na Educação Profissional e Tecnológica, no âmbito da Rede Federal de Educação Profissional, Científica e Tecnológica (RFEPCT).",
    },
    {
      id: 2,
      titulo: "Como funciona a lógica de categorias e competências associadas?",
      texto:
        "A PlaforEDU reúne diversos cursos online abertos (Cursos Mooc) ofertados por diversas instituições de ensino, entre outras, da RFEPCT, que dão suporte ao desenvolvimento das competências recomendadas para um setor público de alto desempenho por meio de Itinerários Formativos. Na PlaforEDU você pode buscar as competências associadas ao seu perfil profissional, a partir de uma busca simples, e ter acesso a todos os cursos relacionados àquelas competências.",
    },
    {
      id: 3,
      titulo: "Quais os itinerários da PlaforEDU?",
      texto:
        "A PlaforEDU apresenta os perfis de servidores da RFEPCT em cinco Itinerários Formativos. São eles: Iniciação ao serviço público, Técnico-Administrativo em Educação, Docente, Gerencial e Aposentadoria",
    },
    {
      id: 4,
      titulo: "Qual a abordagem do itinerário “Iniciação ao serviço público”?",
      texto:
        "Este Itinerário Formativo pretende integrar o servidor recém-empossado ao ambiente institucional ao qual terá exercício, preparando-o para o desempenho de atividades vinculadas ao ambiente organizacional em que atuará e ao cargo que ocupa na instituição.",
    },
    {
      id: 5,
      titulo:
        "Qual a abordagem do itinerário “Técnico-Administrativo em Educação”?",
      texto:
        "Este Itinerário formativo visa capacitar profissionais alinhados com as políticas institucionais. Nesse sentido, o itinerário apresentará inicialmente aos Técnicos Administrativos em Educação o Plano de Carreira, suas atribuições e responsabilidades para o desempenho do cargo ao qual foi nomeado. Os outros cursos do itinerário pretendem qualificar os servidores nas diversas áreas de atuação - educacional e administrativa.",
    },
    {
      id: 6,
      titulo: "Qual a abordagem do itinerário “Docente”?",
      texto:
        "Este itinerário é um processo formativo interativo e reflexivo, proporcionando ao docente a resolução dos problemas enfrentados nas práticas educativas em um contexto pedagógico. A metodologia adotada é dinâmica, proporcionando a construção de novos saberes por intermédio das trilhas vinculadas à teoria e às práticas docentes.",
    },
    {
      id: 7,
      titulo: "Qual a abordagem do itinerário “Gerencial”?",
      texto:
        "O itinerário formativo gerencial pode ser percorrido por servidores técnico-administrativos ou docentes que estejam em cargos/funções de gestão ou que desejem se capacitar para tal, com metodologias modernas, abarcando temáticas tradicionais e contemporâneas.",
    },
    {
      id: 8,
      titulo: "Qual a abordagem do itinerário “Aposentadoria”?",
      texto:
        "A aposentadoria já é realidade na Rede Federal EPCT, o itinerário que se apresenta traz o enfoque para um novo encarreiramento. O itinerário foi elaborado a partir de 3 pilares: Formação no contexto psicológico preparando-se para esta nova realidade, em que as demandas de trabalho e rotina anteriores não existirão mais. Atividades futuras: o aposentado deve pensar no seu perfil, fazer análise de suas características pessoais, habilidades e preferências para descobrir o que irá fazer depois. Pode se associar a ONGs, empreender, etc. Financeiro: se este aspecto não estiver bem equacionado, dificilmente o aposentado conseguirá realizar as outras coisas. É fundamental o planejamento financeiro, saber o quanto vai gastar do momento do desligamento para frente e fazer uma análise de expectativa de vida.",
    },
    {
      id: 9,
      titulo: "O que é a mandala das competências?",
      texto:
        "As competências são a mobilização de conhecimentos, habilidades e atitudes para solucionar problemas e lidar com situações cotidianas profissionais. Essas competências estão associadas e agrupadas por categorias, sendo elas: Envolvimento profissional, Recursos digitais, Ensino e aprendizagem, Avaliação, Capacitação dos aprendentes, Programação da competência digital dos aprendentes, Gestão de resultados, Gestão de relacionamentos, Gestão de mudanças, Orientação a resultados, Processos de melhoria, Transversais. Abaixo é apresentado o infográfico com a Mandala de Competências organizada pelas competências associadas em categorias.",
    },
    {
      id: 10,
      titulo: "O que são Trilhas Formativas?",
      texto:
        "São percursos formativos propostos a partir do encadeamento de cursos ordenados, com o objetivo de desenvolver competências por meio da capacitação e qualificação profissional.",
    },
    {
      id: 11,
      titulo: "Como faço para me inscrever em um curso?",
      texto:
        "Na página inicial do PlaforEDU, clique no Itinerário Formativo que deseja cursar. No centro da tela, serão apresentados os percursos formativos sugeridos para cada competência a ser desenvolvida. Clique nos cursos que deseja cursar. Sugerimos iniciar pelo primeiro curso da Trilha Formativa escolhida. Ao clicar no curso escolhido, será aberto um pop-up, que trará as informações do curso: descrição, carga horária, instituição certificadora e link do curso. Sugerimos ao usuário habilitar a exibição dos pop-ups da página da PlaforEDU. Para acessar o curso, clique no link disponível no pop-up aberto. Ao clicar no link, você será direcionado para a página da instituição que oferta o curso. Siga as instruções de cadastro de cada instituição para ter acesso ao curso. Pronto! Você terá acesso a todos os materiais e atividades do curso. Bons estudos!",
    },
    {
      id: 12,
      titulo: "Em quantos cursos posso me inscrever?",
      texto:
        "Não há limites de inscrições em cursos disponíveis na PlaforEDU. Você poderá se inscrever em quantos cursos quiser, a qualquer tempo, inclusive simultaneamente, desde que tenha disponibilidade para cursá-los.",
    },
    {
      id: 13,
      titulo: "Os cursos ofertados na PlaforEDU são gratuitos?",
      texto:
        "Todos os cursos ofertados na PlaforEDU são gratuitos. Em geral, são abertos e não apresentam limites de vagas.",
    },
    {
      id: 14,
      titulo: "Todos os cursos darão certificados?",
      texto:
        "Todos os cursos dão direito a um certificado emitido pela instituição ofertante, desde que o estudante atenda aos requisitos mínimos determinados em cada curso. Não serão emitidos certificados impressos, apenas em formato digital.",
    },
    {
      id: 15,
      titulo:
        "Sou de outra instituição. Posso participar dos cursos da PlaforEDU?",
      texto:
        "Todos os cursos são abertos à participação do público em geral, seja servidor público federal ou não.",
    },
    {
      id: 16,
      titulo: "Os cursos terão a mediação de um tutor?",
      texto:
        "De modo geral, os cursos são autoinstrucionais, ou seja, não há mediação de tutor e as atividades possuem correção automatizada. Orientamos o aluno a consultar a descrição de cada curso na plataforma da instituição ofertante.",
    },
    {
      id: 17,
      titulo:
        "Como posso tirar dúvidas referente aos cursos em que me inscrevi?",
      texto:
        "Para tirar quaisquer dúvidas referentes aos conteúdos programáticos dos cursos, deve-se consultar as instituições ofertantes.",
    },
    {
      id: 18,
      titulo: "O curso terá encontros presenciais?",
      texto:
        "Não. Os cursos ofertados na PlaforEDU serão realizados na modalidade de educação a distância. Os materiais didáticos para leitura, como atividades educacionais, serão realizados pela plataforma da instituição ofertante.",
    },
    {
      id: 19,
      titulo: "Tenho horário fixo para acessar os cursos?",
      texto:
        "Não existem horários pré-definidos para acessar os cursos. Reforçamos a importância de se planejar o tempo disponível para acompanhar o curso em que você se inscreveu.",
    },
    {
      id: 20,
      titulo: "Quando irei iniciar o curso escolhido?",
      texto:
        "Todos os cursos disponíveis na PlaforEDU terão início imediato, assim que a inscrição for realizada. Para acompanhar os cursos nos quais se inscreveu, siga as instruções das instituições ofertantes.",
    },
    {
      id: 21,
      titulo:
        "Posso utilizar os cursos da PlaforEDU para usufruir da Licença Capacitação?",
      texto:
        "Os cursos disponíveis na PlaforEDU iniciam imediatamente após a realização da inscrição, não há previsão de agendamento de início de curso para fins de Licença Capacitação. Sugerimos que verifique junto a sua unidade de gestão de pessoas as devidas orientações. Ressaltamos que os cursos da PlaforEDU possuem carga horária geral, isto é, não dividida em módulos. Também informamos que os cursos são sem tutoria e que a PlaforEDU não disponibilizará os relatórios de acesso do usuário aos cursos.",
    },
    {
      id: 22,
      titulo:
        "Encontrei erros no site da PlaforEDU ou nos cursos ofertados? O que fazer?",
      texto:
        "A PlaforEDU disponibiliza um canal rápido de atendimento para orientá-lo, bem como para esclarecer dúvidas e acolher sugestões. Para isso, clique no ícone Fale Conosco, disponível no canto superior direito da página da PlaforEDU.",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [perguntasAMostrar, setPerguntasAMostrar] = useState(perguntas);

  const mudarTextoAMostrar = (textoBusca) => {
    if (textoBusca === "") return;

    let novasPerguntas = [];

    perguntas.map((pergunta) => {
      if (
        pergunta.titulo
          .toLowerCase()
          .search(textoBusca.toLowerCase().trim()) !== -1
      ) {
        novasPerguntas.push(pergunta);
      }
    });
    setPerguntasAMostrar(novasPerguntas);
  };

  return (
    <>
      <Row
        style={{
          display: "grid",
          gridTemplateColumns: screens.md ? "1fr 1fr" : null,
          margin: "0px auto 0px auto",
          width: "100%",
          boxSizing: "border-box",
          padding: screens.sm ? "80px 140px 44px 140px" : "40px",
          backgroundColor: "var(--bg-menos-claro)",
        }}
      >
        <Col>
          <img
            style={{
              display: screens.md ? "block" : "none",
              marginBottom: "28px",
            }}
            src={questionVector}
            alt="Imagem de uma interrogação"
          />
          <span>FAQ</span>
          <h1
            style={{
              fontSize: "57px",
              fontWeight: "500",
              color: "var(--titulos)",
              lineHeight: "1.12",
              letterSpacing: "-0.25px",
            }}
          >
            Dúvidas Frequentes
          </h1>
          <h2 className="subTitulo">Ainda precisa de ajuda?</h2>
          <Link className="linkContato" to={"/suporte"}>
            Entrar em contato
          </Link>
        </Col>

        <Col>
          <p
            className="textoBusca"
            style={{
              marginTop: screens.md ? "173px" : "20px",
            }}
          >
            Pesquise sua dúvida em nosso FAQ
          </p>
          <Input
            prefix={
              <SearchOutlined
                style={{
                  color: "#ADADAD",
                }}
              />
            }
            placeholder="Buscar"
            style={{
              maxWidth: "559px",
              height: "35px",
              borderRadius: "8px",
              boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
            }}
            onChange={(e) => {
              mudarTextoAMostrar(e.target.value);
            }}
          />
        </Col>
      </Row>

      <div
        style={{
          padding: screens.lg ? "54px 140px" : "54px 20px",
        }}
      >
        <Row align={"stretch"} justify={"center"} gutter={[16, 16]}>
          {perguntasAMostrar.map((pergunta) => {
            return (
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                xxl={8}
                key={pergunta.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="cardDuvida">
                  <div
                    className="pergunta"
                    onClick={() => {
                      if (selected === pergunta.id) {
                        setSelected(null);
                        return;
                      }
                      setSelected(pergunta.id);
                    }}
                  >
                    <h3 style={{ marginBottom: 0 }} className="subTitulo">
                      {pergunta.titulo}
                    </h3>
                    <span>
                      {selected === pergunta.id ? (
                        <UpOutlined
                          style={{
                            fontSize: "1.3em",
                            color: "#2C56A2",
                          }}
                        />
                      ) : (
                        <DownOutlined
                          style={{
                            fontSize: "1.3em",
                            color: "#2C56A2",
                          }}
                        />
                      )}
                    </span>
                  </div>
                  <div
                    className={
                      selected === pergunta.id ? "conteudo ativo" : "conteudo"
                    }
                  >
                    <p className="texto">{pergunta.texto}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
