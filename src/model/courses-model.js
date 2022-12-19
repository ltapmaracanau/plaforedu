import { action, computed, thunk } from "easy-peasy";

// Fundos escala 2 classificação por categorias
import fundoCurso1 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 01.png";
import fundoCategoria1 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 01.png";
import fundoCompetencia1 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 01.png";

import fundoCurso2 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 02.png";
import fundoCategoria2 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 02.png";
import fundoCompetencia2 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 02.png";

import fundoCurso3 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 03.png";
import fundoCategoria3 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 03.png";
import fundoCompetencia3 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 03.png";

import fundoCurso4 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 04.png";
import fundoCategoria4 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 04.png";
import fundoCompetencia4 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 04.png";

import fundoCurso5 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 05.png";
import fundoCategoria5 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 05.png";
import fundoCompetencia5 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 05.png";

import fundoCurso6 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 06.png";
import fundoCategoria6 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 06.png";
import fundoCompetencia6 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 06.png";

import fundoCurso7 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 07.png";
import fundoCategoria7 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 07.png";
import fundoCompetencia7 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 07.png";

import fundoCurso8 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 08.png";
import fundoCategoria8 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 08.png";
import fundoCompetencia8 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 08.png";

import fundoCurso9 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 09.png";
import fundoCategoria9 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 09.png";
import fundoCompetencia9 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 09.png";

import fundoCurso10 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 10.png";
import fundoCategoria10 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 10.png";
import fundoCompetencia10 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 10.png";

import fundoCurso11 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 11.png";
import fundoCategoria11 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 11.png";
import fundoCompetencia11 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 11.png";

import fundoCurso12 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 12.png";
import fundoCategoria12 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 12.png";
import fundoCompetencia12 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 12.png";

// Fundos escala 1 classificação por itinerarios
import fundoEscala1Curso1 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Curso Cor-01.png";
import fundoEscala1Categoria1 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Categoria Cor-01.png";
import fundoEscala1Competencia1 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Competencia Cor-01.png";

import fundoEscala1Curso2 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Curso Cor-02.png";
import fundoEscala1Categoria2 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Categoria Cor-02.png";
import fundoEscala1Competencia2 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Competencia Cor-02.png";

import fundoEscala1Curso3 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Curso Cor-03.png";
import fundoEscala1Categoria3 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Categoria Cor-03.png";
import fundoEscala1Competencia3 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Competencia Cor-03.png";

import fundoEscala1Curso4 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Curso Cor-04.png";
import fundoEscala1Categoria4 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Categoria Cor-04.png";
import fundoEscala1Competencia4 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Competencia Cor-04.png";

import fundoEscala1Curso5 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Curso Cor-05.png";
import fundoEscala1Categoria5 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Categoria Cor-05.png";
import fundoEscala1Competencia5 from "../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Competencia Cor-05.png";

import services from "../services";

import {
  cursosDefault,
  categoriasDeCompetenciasDefault,
  competenciasDefault,
  temasDefault,
} from "../services/mockData";

const fundosCategoria = {
  categoria: {
    1: fundoEscala1Categoria3,
    2: fundoCategoria1,
    3: fundoCategoria2,
    4: fundoCategoria3,
    5: fundoCategoria4,
    6: fundoCategoria5,
    7: fundoCategoria6,
    8: fundoCategoria7,
    9: fundoCategoria8,
    10: fundoCategoria9,
    11: fundoCategoria10,
    12: fundoCategoria11,
    13: fundoCategoria12,
    14: fundoCategoria12,
    15: fundoCategoria12,
    16: fundoCategoria12,
    17: fundoCategoria12,
  },
  curso: {
    1: fundoEscala1Curso3,
    2: fundoCurso1,
    3: fundoCurso2,
    4: fundoCurso3,
    5: fundoCurso4,
    6: fundoCurso5,
    7: fundoCurso6,
    8: fundoCurso7,
    9: fundoCurso8,
    10: fundoCurso9,
    11: fundoCurso10,
    12: fundoCurso11,
    13: fundoCurso12,
    14: fundoCurso12,
    15: fundoCurso12,
    16: fundoCurso12,
    17: fundoCurso12,
  },
  competencia: {
    1: fundoEscala1Competencia3,
    2: fundoCompetencia1,
    3: fundoCompetencia2,
    4: fundoCompetencia3,
    5: fundoCompetencia4,
    6: fundoCompetencia5,
    7: fundoCompetencia6,
    8: fundoCompetencia7,
    9: fundoCompetencia8,
    10: fundoCompetencia9,
    11: fundoCompetencia10,
    12: fundoCompetencia11,
    13: fundoCompetencia12,
    14: fundoCompetencia12,
    15: fundoCompetencia12,
    16: fundoCompetencia12,
    17: fundoCompetencia12,
  },
};

const fundosItinerario = {
  categoria: {
    1: fundoEscala1Categoria1,
    2: fundoEscala1Categoria2,
    3: fundoEscala1Categoria3,
    4: fundoEscala1Categoria4,
    5: fundoEscala1Categoria5,
  },
  curso: {
    1: fundoEscala1Curso1,
    2: fundoEscala1Curso2,
    3: fundoEscala1Curso3,
    4: fundoEscala1Curso4,
    5: fundoEscala1Curso5,
  },
  competencia: {
    1: fundoEscala1Competencia1,
    2: fundoEscala1Competencia2,
    3: fundoEscala1Competencia3,
    4: fundoEscala1Competencia4,
    5: fundoEscala1Competencia5,
  },
};

const colorsCategorias = {
  1: "#990099",
  2: "#CC6666",
  3: "#f98506",
  4: "#ffbe00",
  5: "#9dc63d",
  6: "#00ba00",
  7: "#009688",
  8: "#1c67b0",
  9: "#5b0fa0",
  10: "#a52099",
  11: "#f154ca",
  12: "#997ff7",
  13: "#1db7ed",
  14: "#1db7ed",
  15: "#1db7ed",
  16: "#1db7ed",
  17: "#1db7ed",
};

const colorsItinerarios = {
  1: "#0099CC",
  2: "#FF9900",
  3: "#990099",
  4: "#66CC33",
  5: "#9999FF",
};

const initialFilterDefault = {
  buscaInterna: "",
  cargaHoraria: [0, 200],
  tipoClassificacao: true, // false: por cursos, true: por trilhas
  categoriasDeCompetencias: [],
  competencias: [],
  temas: [],
  subtemas: [],
  instCertificadora: [],
  esquemaDeCores: "categoria",
  itinerario: 0,
};

const cursosFilterFuctionDefault = (filtro) => {
  let novosCursos = [];
  let novasTrilhas = [];
  if (filtro.tipoClassificacao) {
    // false: por cursos, true: por trilhas
    competenciasDefault.forEach((competencia) => {
      // filtrar por categoria
      let categoriaDaCompetencia = categoriasDeCompetenciasDefault.find(
        (categoria) => categoria.competencias.includes(competencia.id)
      );
      let contemCategoria = filtro.categoriasDeCompetencias.includes(
        categoriaDaCompetencia.id
      );
      let categoriasVazio = filtro.categoriasDeCompetencias.length === 0;

      // filtrar por competencia
      let contemCompetencia = filtro.competencias.includes(competencia.id);
      let competenciasVazio = filtro.competencias.length === 0;

      let competenciaTrue = contemCompetencia || competenciasVazio;
      let categoriaTrue = contemCategoria || categoriasVazio;

      // Verifica se a competência possui trilha
      let contemTrilha = competencia.cursos !== undefined;
      let contemTrilhaNoItinerario = false;

      // Verifica se contém trilha no itinerário selecionado
      if (contemTrilha) {
        contemTrilhaNoItinerario =
          competencia.cursos[filtro.itinerario].length !== 0;
      }

      // Verifica se a competência é a não especificada
      // Se for não deverá ser mostrada
      let competenciaNaoEspecificada = competencia.id === 1;

      // Verificar busca interna na competência
      let buscaInternaVazia =
        filtro.buscaInterna === "" || filtro.buscaInterna === undefined;
      let buscaInterna = false;
      let buscaInternaCurso = false;
      if (!buscaInternaVazia) {
        buscaInterna =
          competencia.titulo
            .toLowerCase()
            .indexOf(filtro.buscaInterna.toLowerCase()) !== -1;
        if (contemTrilha) {
          buscaInternaCurso = competencia.cursos[filtro.itinerario].some(
            (idCurso) => {
              const curso = cursosDefault.find((curso) => curso.id === idCurso);
              return (
                curso.title
                  .toLowerCase()
                  .indexOf(filtro.buscaInterna.toLowerCase()) !== -1
              );
            }
          );
        }
      }

      let busca = buscaInterna || buscaInternaVazia || buscaInternaCurso;

      if (
        competenciaTrue &&
        categoriaTrue &&
        contemTrilhaNoItinerario &&
        !competenciaNaoEspecificada &&
        busca
      ) {
        // console.log(competencia);
        novasTrilhas.push(competencia);
      }
    });
  } else {
    cursosDefault.forEach((curso) => {
      let temasDoCurso = temasDefault.filter((tema) =>
        tema.subtemas.some((subtema) => curso.filter.subtemas.includes(subtema))
      );
      let contemTema = temasDoCurso.some((tema) =>
        filtro.temas.includes(tema.id)
      );
      let temasVazio = filtro.temas.length === 0;

      let contemSubtema = curso.filter.subtemas.some((idSubtema) =>
        filtro.subtemas.includes(idSubtema)
      );
      let subtemasVazio = filtro.subtemas.length === 0;

      let categoriasDoCurso = categoriasDeCompetenciasDefault.filter(
        (categoria) =>
          categoria.competencias.some((competencia) =>
            curso.filter.competencias.includes(competencia)
          )
      );
      let contemCategoria = categoriasDoCurso.some((categoria) =>
        filtro.categoriasDeCompetencias.includes(categoria.id)
      );
      let categoriasVazio = filtro.categoriasDeCompetencias.length === 0;

      let contemCompetencia = curso.filter.competencias.some((idCompetencia) =>
        filtro.competencias.includes(idCompetencia)
      );
      let competenciasVazio = filtro.competencias.length === 0;

      let contemInstituicao = filtro.instCertificadora.some(
        (inst) => curso.instCert === inst
      );
      let instituicoesVazio = filtro.instCertificadora.length === 0;

      let buscaInterna = curso.title
        .toLowerCase()
        .startsWith(filtro.buscaInterna.toLowerCase());
      let buscaInternaVazia =
        filtro.buscaInterna === "" || filtro.buscaInterna === undefined;

      let contemItinerario = curso.itinerario === filtro.itinerario;
      let itinerarioGeral = filtro.itinerario === 0;

      let contemCargaHoraria =
        filtro.cargaHoraria[0] <= curso.cargaHoraria &&
        curso.cargaHoraria <= filtro.cargaHoraria[1];

      let temas = contemTema || temasVazio;
      let subtemas = contemSubtema || subtemasVazio;
      let categorias = contemCategoria || categoriasVazio;
      let competencias = contemCompetencia || competenciasVazio;
      let instituicoes = contemInstituicao || instituicoesVazio;
      let busca = buscaInterna || buscaInternaVazia;
      let itinerario = contemItinerario || itinerarioGeral;

      if (
        temas &&
        subtemas &&
        categorias &&
        competencias &&
        instituicoes &&
        busca &&
        contemCargaHoraria &&
        itinerario
      ) {
        novosCursos.push(curso.id);
      }
    });
  }
  return { novosCursos, novasTrilhas };
};

const reformuladorDeElementosCytoscape = (cursosFiltrados, filtro) => {
  // todos os cursos
  let categoriasAdicionadas = [];
  let competenciasAdicionadas = [];
  let elementos = [];
  let contadorEdge = 1;
  if (filtro.tipoClassificacao) {
    // False: por competências   True: por trilhas
    cursosFiltrados.novasTrilhas.forEach((competencia) => {
      let categoriaDaCompetencia = categoriasDeCompetenciasDefault.find(
        (categoria) => categoria.competencias.includes(competencia.id)
      );
      if (competencia.cursos) {
        // Verifico se existem trilhas de cursos definidas para aquela competência
        // Só adiciono a competência se ela apresentar cursos do itinerário atual
        if (competencia.cursos[filtro.itinerario].length !== 0) {
          // Aqui vou adicionar a categoria da competência ao grafo
          elementos.push({
            group: "nodes",
            data: {
              id:
                "categoria" +
                categoriaDaCompetencia.id +
                "competencia" +
                competencia.id,
              label: categoriaDaCompetencia.nome,
              color: colorsCategorias[categoriaDaCompetencia.id],
              competencias: categoriaDaCompetencia.competencias,
              image: fundosCategoria.categoria[categoriaDaCompetencia.id],
            },
            grabbable: true,
            classes: ["categoria"],
          });
          // Aqui vou adicionar a competência ao grafo
          elementos.push({
            group: "nodes",
            data: {
              id: "competencia" + competencia.id,
              label: competencia.titulo,
              color: colorsCategorias[categoriaDaCompetencia.id],
              image: fundosCategoria.competencia[categoriaDaCompetencia.id],
            },
            grabbable: true,
            classes: ["competencia"],
          });
          // Aqui eu coloco a Edge entre a competência recém adicionada e a categoria da mesma.
          elementos.push({
            group: "edges",
            data: {
              id: "edge" + contadorEdge,
              source:
                "categoria" +
                categoriaDaCompetencia.id +
                "competencia" +
                competencia.id,
              target: "competencia" + competencia.id,
            },
          });
          contadorEdge += 1;
          // Agora aqui eu coloco todos os cursos da competência no itinerário do filtro
          let ultimoCurso = "competencia" + competencia.id;
          competencia.cursos[filtro.itinerario].forEach((idCurso) => {
            let curso = cursosDefault.find((curso) => curso.id === idCurso);
            elementos.push({
              group: "nodes",
              data: {
                id: "curso" + curso.id + "competencia" + competencia.id,
                label: curso.title,
                image: fundosCategoria.curso[categoriaDaCompetencia.id],
                itinerario: curso.itinerario,
                color: colorsCategorias[categoriaDaCompetencia.id],
                cargaHoraria: curso.cargaHoraria,
                instCert: curso.instCert,
                possuiAcessibilidade: curso.possuiAcessibilidade,
                competencias: curso.filter.competencias,
                subtemas: curso.filter.subtemas,
              },
              grabbable: true,
              classes: ["curso"],
            });
            elementos.push({
              group: "edges",
              data: {
                id: "edge" + contadorEdge,
                source: ultimoCurso,
                target: "curso" + curso.id + "competencia" + competencia.id,
              },
            });
            ultimoCurso = "curso" + curso.id + "competencia" + competencia.id;
            contadorEdge += 1;
          });
        }
      }
    });
  } else {
    cursosFiltrados.novosCursos.forEach((idCurso) => {
      const curso = cursosDefault.find((curso) => curso.id === idCurso);
      const competencias = curso.filter.competencias;
      const catData = categoriasDeCompetenciasDefault.filter((categoria) =>
        categoria.competencias.some((competencia) =>
          curso.filter.competencias.includes(competencia)
        )
      );
      // console.log('Curso: ', curso.id);
      // console.log(catData);
      if (curso.id === 9) {
        //console.log('Curso', curso.id)
        //console.log(competencias);
        //console.log(catData);
      }
      elementos.push({
        group: "nodes",
        data: {
          id: "curso" + curso.id,
          label: curso.title,
          image:
            filtro.esquemaDeCores === "categoria"
              ? fundosCategoria.curso[catData[0].id]
              : fundosItinerario.curso[curso.itinerario],
          itinerario: curso.itinerario,
          color:
            filtro.esquemaDeCores === "categoria"
              ? colorsCategorias[catData[0].id]
              : colorsItinerarios[curso.itinerario],
          cargaHoraria: curso.cargaHoraria,
          instCert: curso.instCert,
          possuiAcessibilidade: curso.possuiAcessibilidade,
          competencias: curso.filter.competencias,
          temas: curso.filter.temas,
          subtemas: curso.filter.subtemas,
        },
        grabbable: true,
        classes: ["curso"],
      });
      // Adicionando Competencia
      competencias.forEach((idCompetencia) => {
        if (!competenciasAdicionadas.includes(idCompetencia)) {
          let competencia = competenciasDefault.find(
            (competencia) => competencia.id === idCompetencia
          );
          let categoriaPertencente = categoriasDeCompetenciasDefault.find(
            (categoria) => categoria.competencias.includes(idCompetencia)
          );
          elementos.push({
            group: "nodes",
            data: {
              id: "competencia" + competencia.id,
              label: competencia.titulo,
              color:
                filtro.esquemaDeCores === "categoria"
                  ? colorsCategorias[catData[0].id]
                  : colorsItinerarios[curso.itinerario],
              image:
                filtro.esquemaDeCores === "categoria"
                  ? fundosCategoria.competencia[catData[0].id]
                  : fundosItinerario.competencia[curso.itinerario],
            },
            grabbable: true,
            classes: ["competencia"],
          });
          competenciasAdicionadas.push(competencia.id);
          elementos.push({
            group: "edges",
            data: {
              id:
                "edgecategoria" +
                categoriaPertencente.id +
                "competencia" +
                idCompetencia,
              source: "categoria" + categoriaPertencente.id,
              target: "competencia" + idCompetencia,
            },
          });
        }
      });
      competencias.forEach((idCompetencia) => {
        elementos.push({
          group: "edges",
          data: {
            id: "edgecurso" + curso.id + "competencia" + idCompetencia,
            source: "competencia" + idCompetencia,
            target: "curso" + curso.id,
          },
        });
      });
      // Adicionando Categoria
      catData.forEach((categoria) => {
        if (!categoriasAdicionadas.includes(categoria.id)) {
          elementos.push({
            group: "nodes",
            data: {
              id: "categoria" + categoria.id,
              label: categoria.nome,
              color:
                filtro.esquemaDeCores === "categoria"
                  ? colorsCategorias[categoria.id]
                  : colorsItinerarios[curso.itinerario],
              competencias: categoria.competencias,
              image:
                filtro.esquemaDeCores === "categoria"
                  ? fundosCategoria.categoria[categoria.id]
                  : fundosItinerario.categoria[curso.itinerario],
            },
            grabbable: true,
            classes: ["categoria"],
          });
        }
      });
    });
  }

  return elementos;
};

const coursesModel = {
  loading: false,
  registering: false,

  count: 0,
  page: 1,

  cursos: [],
  cursosSecondary: cursosDefault,

  cursosFiltrados: computed((state) =>
    cursosFilterFuctionDefault(state.filter)
  ),

  elements: computed((state) =>
    reformuladorDeElementosCytoscape(state.cursosFiltrados, state.filter)
  ),

  filterDefault: initialFilterDefault,

  filter: initialFilterDefault,

  setFilter: action((state, payload) => {
    state.filter = { ...state.filter, ...payload };
  }),

  getCursos: thunk(
    async (actions, payload = { query: "", showFiled: false, page: null }) => {
      const { query = "", showFiled = false, page = null } = payload;
      actions.setLoading(true);
      const cursos = await services.courseService.getCursos({
        query: query,
        showFiled: showFiled,
        page: page,
      });
      if (cursos?.data?.length >= 0) {
        actions.setCursos(cursos.data);
        actions.setCount(cursos.count);
      }
      actions.setLoading(false);
    }
  ),

  registerNewCourse: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const newCourse = await services.courseService.registerCourse({
      ...payload,
    });
    actions.setRegistering(false);
    return newCourse;
  }),

  updateCourse: thunk(async (actions, payload) => {
    const {
      id,
      name,
      description,
      hours,
      link,
      institutions,
      accessibilities,
      itineraries,
      competencies,
      subThemes,
      filed = undefined,
    } = payload;
    actions.setRegistering(true);
    try {
      await services.courseService.updateCourse({
        id,
        name,
        description,
        hours,
        link,
      });
      await services.courseService.updateCourseInstitutions({
        id,
        institutions,
      });
      await services.courseService.updateCourseAccessibilities({
        id,
        accessibilities,
      });
      await services.courseService.updateCourseItineraries({
        id,
        itineraries,
      });
      await services.courseService.updateCourseCompetencies({
        id,
        competencies,
      });
      await services.courseService.updateCourseSubThemes({ id, subThemes });
      if (filed !== undefined) {
        if (filed) {
          await services.courseService.archiveCourse({ id });
        } else {
          await services.courseService.unarchiveCourse({ id });
        }
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setRegistering: action((state, payload) => {
    state.registering = payload;
  }),

  setCursos: action((state, payload) => {
    state.cursos = payload;
  }),

  setCount: action((state, payload) => {
    state.count = payload;
  }),

  setPage: action((state, payload) => {
    state.page = payload;
  }),
};

export default coursesModel;
