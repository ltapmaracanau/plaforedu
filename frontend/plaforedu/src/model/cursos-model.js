import { action, unstable_effectOn } from "easy-peasy"


// Fundos escala 2 classificação por categorias
import fundoCurso1 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 01.png'
import fundoCategoria1 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 01.png'
import fundoCompetencia1 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 01.png'

import fundoCurso2 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 02.png'
import fundoCategoria2 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 02.png'
import fundoCompetencia2 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 02.png'

import fundoCurso3 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 03.png'
import fundoCategoria3 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 03.png'
import fundoCompetencia3 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 03.png'

import fundoCurso4 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 04.png'
import fundoCategoria4 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 04.png'
import fundoCompetencia4 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 04.png'

import fundoCurso5 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 05.png'
import fundoCategoria5 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 05.png'
import fundoCompetencia5 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 05.png'

import fundoCurso6 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 06.png'
import fundoCategoria6 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 06.png'
import fundoCompetencia6 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 06.png'

import fundoCurso7 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 07.png'
import fundoCategoria7 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 07.png'
import fundoCompetencia7 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 07.png'

import fundoCurso8 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 08.png'
import fundoCategoria8 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 08.png'
import fundoCompetencia8 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 08.png'

import fundoCurso9 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 09.png'
import fundoCategoria9 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 09.png'
import fundoCompetencia9 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 09.png'

import fundoCurso10 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 10.png'
import fundoCategoria10 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 10.png'
import fundoCompetencia10 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 10.png'

import fundoCurso11 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 11.png'
import fundoCategoria11 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 11.png'
import fundoCompetencia11 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 11.png'

import fundoCurso12 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 12.png'
import fundoCategoria12 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 12.png'
import fundoCompetencia12 from '../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 12.png'


// Fundos escala 1 classificação por itinerarios
import fundoEscala1Curso1 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Curso Cor-01.png'
import fundoEscala1Categoria1 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Categoria Cor-01.png'
import fundoEscala1Competencia1 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Competencia Cor-01.png'

import fundoEscala1Curso2 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Curso Cor-02.png'
import fundoEscala1Categoria2 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Categoria Cor-02.png'
import fundoEscala1Competencia2 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Competencia Cor-02.png'

import fundoEscala1Curso3 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Curso Cor-03.png'
import fundoEscala1Categoria3 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Categoria Cor-03.png'
import fundoEscala1Competencia3 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Competencia Cor-03.png'

import fundoEscala1Curso4 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Curso Cor-04.png'
import fundoEscala1Categoria4 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Categoria Cor-04.png'
import fundoEscala1Competencia4 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Competencia Cor-04.png'

import fundoEscala1Curso5 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Curso Cor-05.png'
import fundoEscala1Categoria5 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Categoria Cor-05.png'
import fundoEscala1Competencia5 from '../assets/icones/PLAFOREDU_Icones-Filtros_Escala-1_Competencia Cor-05.png'

import {cursosDefault, instituicoesDefault, competenciasDefault, categoriasDeCompetenciasDefault, temasDefault, subtemasDefault} from '../services/dataService.js'

const fundosCategoria = {
    categoria: {
        1: fundoCategoria1,
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
    },
    curso: {
        1: fundoCurso1,
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
    },
    competencia: {
        1: fundoCompetencia1,
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
    },
}

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
}

const colorsCategorias = {
    1:  '#ea190f',
    2:  '#ea190f',
    3:  '#f98506',
    4:  '#ffbe00',
    5:  '#9dc63d',
    6:  '#00ba00',
    7:  '#009688',
    8:  '#1c67b0',
    9:  '#5b0fa0',
    10: '#a52099',
    11: '#f154ca',
    12: '#997ff7',
    13: '#1db7ed',
}

const colorsItinerarios = {
    1:  '#39A8E0',
    2:  '#F89406',
    3:  '#E74C3C',
    4:  '#009688',
    5:  '#9966FF',
}

const initialFilterDefault = {
    buscaInterna: '',
    cargaHoraria: [0, 200],
    categoriasDeCompetencias: [],
    competencias: [],
    temas: [],
    subtemas: [],
    instCertificadora: [],
    esquemaDeCores: 'categoria',
    itinerario: 0,
}

const cursosFilterFuctionDefault = (filtro) => {
    let novosCursos = []
    cursosDefault.forEach(curso => {
        let contemTema = curso.filter.temas.some(idTema => filtro.temas.includes(idTema))
        let temasVazio = filtro.temas.length === 0
        
        let contemSubtema = curso.filter.subtemas.some(idSubtema => filtro.subtemas.includes(idSubtema))
        let subtemasVazio = filtro.subtemas.length === 0

        let categoriasDoCurso = categoriasDeCompetenciasDefault.filter(categoria => categoria.competencias.some(competencia => curso.filter.competencias.includes(competencia)))
        let contemCategoria = categoriasDoCurso.some(categoria => filtro.categoriasDeCompetencias.includes(categoria.id))
        let categoriasVazio = filtro.categoriasDeCompetencias.length === 0

        let contemCompetencia = curso.filter.competencias.some(idCompetencia => filtro.competencias.includes(idCompetencia))
        let competenciasVazio = filtro.competencias.length === 0
        
        let contemInstituicao = filtro.instCertificadora.some(inst => curso.instCert === inst)
        let instituicoesVazio = filtro.instCertificadora.length === 0
        
        let buscaInterna = curso.title.toLowerCase().startsWith(filtro.buscaInterna.toLowerCase())
        let buscaInternaVazia = filtro.buscaInterna === '' || filtro.buscaInterna === undefined
        
        let contemItinerario = curso.itinerario === filtro.itinerario
        let itinerarioGeral = filtro.itinerario === 0
        
        let contemCargaHoraria = filtro.cargaHoraria[0] <= curso.cargaHoraria && curso.cargaHoraria <= filtro.cargaHoraria[1]

        let temas = contemTema || temasVazio
        let subtemas = contemSubtema || subtemasVazio 
        let categorias = contemCategoria || categoriasVazio 
        let competencias = contemCompetencia || competenciasVazio 
        let instituicoes = contemInstituicao || instituicoesVazio 
        let busca = buscaInterna || buscaInternaVazia 
        let itinerario = contemItinerario || itinerarioGeral

        if ( temas && subtemas && categorias && competencias && instituicoes && busca && contemCargaHoraria && itinerario) {
            novosCursos.push(curso.id)
        }
    })
    return(novosCursos)
}

const cursosFiltradosDefault = cursosFilterFuctionDefault(initialFilterDefault)


const reformuladorDeElementosCytoscape = (novosCursos, esqCores) => {
    // todos os cursos
    let categoriasAdicionadas = []
    let competenciasAdicionadas = []
    let elementos = []
    novosCursos.forEach((idCurso) => {
        const curso = cursosDefault.find((curso) => curso.id === idCurso)
        const competencias = curso.filter.competencias
        const catData = categoriasDeCompetenciasDefault.filter(categoria => categoria.competencias.some(competencia => curso.filter.competencias.includes(competencia)))
        // console.log('Curso: ', curso.id);
        // console.log(catData);
        if (curso.id === 9) {
            //console.log('Curso', curso.id)
            //console.log(competencias);
            //console.log(catData);
        }
        elementos.push({
            group: 'nodes',
            data: {
                id: 'curso'+curso.id,
                label: curso.title,
                image: esqCores === 'categoria' ? fundosCategoria.curso[catData[0].id] : fundosItinerario.curso[curso.itinerario],
                itinerario: curso.itinerario,
                color: esqCores === 'categoria' ? colorsCategorias[catData[0].id] : colorsItinerarios[curso.itinerario],
                cargaHoraria: curso.cargaHoraria,
                instCert: curso.instCert,
                possuiAcessibilidade: curso.possuiAcessibilidade,
                competencias: curso.filter.competencias,
                temas: curso.filter.temas,
                subtemas: curso.filter.subtemas
            },
            grabbable: true,
            classes: ['curso']
        })
        // Adicionando Competencia
        competencias.forEach(idCompetencia => {
            if (!competenciasAdicionadas.includes(idCompetencia)) {
                let competencia = competenciasDefault.find(competencia => competencia.id === idCompetencia)
                let categoriaPertencente = categoriasDeCompetenciasDefault.find(categoria => categoria.competencias.includes(idCompetencia))
                elementos.push({
                    group: 'nodes',
                    data: {
                        id: 'competencia'+competencia.id,
                        label: competencia.titulo,
                        color: esqCores === 'categoria' ? colorsCategorias[catData[0].id] : colorsItinerarios[curso.itinerario],
                        image: esqCores === 'categoria' ? fundosCategoria.competencia[catData[0].id] : fundosItinerario.competencia[curso.itinerario],
                    },
                    grabbable: true,
                    classes: ['competencia']
                })
                competenciasAdicionadas.push(competencia.id)
                elementos.push({
                    group: 'edges',
                    data: {
                        id: 'edgecategoria'+categoriaPertencente.id+'competencia'+idCompetencia,
                        source: 'categoria'+categoriaPertencente.id,
                        target: 'competencia'+idCompetencia
                    }
                })
            }
        })
        competencias.forEach((idCompetencia) => {
            elementos.push({
                group: 'edges',
                data: {
                    id: 'edgecurso'+curso.id+'competencia'+idCompetencia,
                    source: 'competencia'+idCompetencia,
                    target: 'curso'+curso.id
                }
            })
        })
        // Adicionando Categoria
        catData.forEach((categoria) => {
            if (!categoriasAdicionadas.includes(categoria.id)) {
                elementos.push({
                    group: 'nodes',
                    data: {
                        id: 'categoria'+categoria.id,
                        label: categoria.nome,
                        color: esqCores === 'categoria' ? colorsCategorias[categoria.id] : colorsItinerarios[curso.itinerario],
                        competencias: categoria.competencias,
                        image: esqCores === 'categoria' ? fundosCategoria.categoria[categoria.id] : fundosItinerario.categoria[curso.itinerario],
                    },
                    grabbable: true,
                    classes: ['categoria']
                })
            }
        })
    })

    return(elementos)
}

const trilhosModel = {

    cursos:  cursosDefault,
    
    instituicoes: instituicoesDefault,
    
    categoriasDeCompetencias: categoriasDeCompetenciasDefault,
    
    competencias: competenciasDefault,
    
    temas: temasDefault,
    
    subtemas: subtemasDefault,
    
    cursosFiltrados: cursosFiltradosDefault,
    
    filterDefault: initialFilterDefault,

    filter: initialFilterDefault,
    
    setFilter: action((state, payload) => {
        state.filter = {...state.filter, ...payload}
    }),
    
    filterFunction: action((state, payload) => {
        let filtro = payload
        let novosCursos = cursosFilterFuctionDefault(filtro)
        state.cursosFiltrados = novosCursos
        state.elements = reformuladorDeElementosCytoscape(novosCursos, state.filter.esquemaDeCores)
    
    }),
    
    onChangeFilter: unstable_effectOn(
        // targetResolver:
        [state => state.filter],
        // handler:
        (actions, change) => {
            actions.filterFunction(change.current[0])
        }
    ),

    setCursosFiltrados: action((state, payload) => {
        state.cursosFiltrados = payload
    }),

    setItinerario: action((state, payload) => {
        state.filter.itinerario = payload
    }),

    setColorSchema: action((state, payload) => {
        state.filter.esquemaDeCores = payload
    }),
    
    elements: reformuladorDeElementosCytoscape(cursosFiltradosDefault, initialFilterDefault.esquemaDeCores),
}
    
    export default trilhosModel