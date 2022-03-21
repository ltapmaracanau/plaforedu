import { action, computed } from "easy-peasy"


// Fundos escala 2 classificação por categorias
import fundoCurso1 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 01.png'
import fundoCategoria1 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 01.png'
import fundoCompetencia1 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 01.png'

import fundoCurso2 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 02.png'
import fundoCategoria2 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 02.png'
import fundoCompetencia2 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 02.png'

import fundoCurso3 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 03.png'
import fundoCategoria3 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 03.png'
import fundoCompetencia3 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 03.png'

import fundoCurso4 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 04.png'
import fundoCategoria4 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 04.png'
import fundoCompetencia4 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 04.png'

import fundoCurso5 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 05.png'
import fundoCategoria5 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 05.png'
import fundoCompetencia5 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 05.png'

import fundoCurso6 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 06.png'
import fundoCategoria6 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 06.png'
import fundoCompetencia6 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 06.png'

import fundoCurso7 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 07.png'
import fundoCategoria7 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 07.png'
import fundoCompetencia7 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 07.png'

import fundoCurso8 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 08.png'
import fundoCategoria8 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 08.png'
import fundoCompetencia8 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 08.png'

import fundoCurso9 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 09.png'
import fundoCategoria9 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 09.png'
import fundoCompetencia9 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 09.png'

import fundoCurso10 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 10.png'
import fundoCategoria10 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 10.png'
import fundoCompetencia10 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 10.png'

import fundoCurso11 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 11.png'
import fundoCategoria11 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 11.png'
import fundoCompetencia11 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 11.png'

import fundoCurso12 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Curso 12.png'
import fundoCategoria12 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Categoria 12.png'
import fundoCompetencia12 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-2_V2_Competencia 12.png'


// Fundos escala 1 classificação por itinerarios
import fundoEscala1Curso1 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Curso Cor-01.png'
import fundoEscala1Categoria1 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Categoria Cor-01.png'
import fundoEscala1Competencia1 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Competencia Cor-01.png'

import fundoEscala1Curso2 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Curso Cor-02.png'
import fundoEscala1Categoria2 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Categoria Cor-02.png'
import fundoEscala1Competencia2 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Competencia Cor-02.png'

import fundoEscala1Curso3 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Curso Cor-03.png'
import fundoEscala1Categoria3 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Categoria Cor-03.png'
import fundoEscala1Competencia3 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Competencia Cor-03.png'

import fundoEscala1Curso4 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Curso Cor-04.png'
import fundoEscala1Categoria4 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Categoria Cor-04.png'
import fundoEscala1Competencia4 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Competencia Cor-04.png'

import fundoEscala1Curso5 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Curso Cor-05.png'
import fundoEscala1Categoria5 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Categoria Cor-05.png'
import fundoEscala1Competencia5 from '../assets/icones/PLAFOREDU_Icones-Filtros_EscalaCores-1_V2_Competencia Cor-05.png'

import {cursosDefault, instituicoesDefault, competenciasDefault, categoriasDeCompetenciasDefault, temasDefault, subtemasDefault} from '../services/dataService.js'

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
    1:  '#990099',
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
    14: '#1db7ed',
    15: '#1db7ed',
    16: '#1db7ed',
    17: '#1db7ed',
}

const colorsItinerarios = {
    1:  '#0099CC',
    2:  '#FF9900',
    3:  '#990099',
    4:  '#66CC33',
    5:  '#9999FF',
}

const initialFilterDefault = {
    buscaInterna: '',
    cargaHoraria: [0, 200],
    tipoClassificacao: false, // False: por competências   True: por trilhas
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
        let temasDoCurso = temasDefault.filter(tema => tema.subtemas.some(subtema => curso.filter.subtemas.includes(subtema)))
        let contemTema = temasDoCurso.some(tema => filtro.temas.includes(tema.id))
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

const reformuladorDeElementosCytoscape = (novosCursos, esqCores, tipoClassificacao) => {
    // todos os cursos
    let categoriasAdicionadas = []
    let competenciasAdicionadas = []
    let elementos = []
    let contadorEdge = 1
    tipoClassificacao ? // False: por competências   True: por trilhas
    novosCursos.forEach(idCurso => {
        const curso = cursosDefault.find((curso) => curso.id === idCurso)
        const competencias = curso.filter.competencias
        competencias.forEach(idCompetencia => {
            const categoriaDaCompetencia = categoriasDeCompetenciasDefault.find(categoria => categoria.competencias.includes(idCompetencia))
            const competenciaData = competenciasDefault.find(competencia => competencia.id === idCompetencia)
            if (!competenciasAdicionadas.some(competencia => competencia.id === idCompetencia)) {
                // Aqui eu adiciono a categoria da competência do curso caso a competência ainda não exista no grafo.
                elementos.push({
                    group: 'nodes',
                    data: {
                        id: 'categoria'+categoriaDaCompetencia.id+'competencia'+idCompetencia,
                        label: categoriaDaCompetencia.nome,
                        color: colorsCategorias[categoriaDaCompetencia.id],
                        competencias: categoriaDaCompetencia.competencias,
                        image: fundosCategoria.categoria[categoriaDaCompetencia.id],
                    },
                    grabbable: true,
                    classes: ['categoria']
                })
                // Aqui eu adiciono a competência no grafo caso ela não exista.
                elementos.push({
                    group: 'nodes',
                    data: {
                        id: 'competencia'+idCompetencia,
                        label: competenciaData.titulo,
                        color: colorsCategorias[categoriaDaCompetencia.id],
                        image: fundosCategoria.competencia[categoriaDaCompetencia.id],
                    },
                    grabbable: true,
                    classes: ['competencia']
                })
                // Aqui eu coloco a Edge entre a competência recém adicionada e a categoria da mesma.
                elementos.push({
                    group: 'edges',
                    data: {
                        id: 'edge'+contadorEdge,
                        source: 'categoria'+categoriaDaCompetencia.id+'competencia'+idCompetencia,
                        target: 'competencia'+idCompetencia
                    }
                })
                contadorEdge += 1
                // Aqui eu adiciono o curso em questão.
                elementos.push({
                    group: 'nodes',
                    data: {
                        id: 'curso'+curso.id+'competencia'+idCompetencia,
                        label: curso.title,
                        image: fundosCategoria.curso[categoriaDaCompetencia.id],
                        itinerario: curso.itinerario,
                        color: colorsCategorias[categoriaDaCompetencia.id],
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
                // Aqui estou adicionando a Edge do curso a competência,
                // pois ela foi recém adicionada, e não tem último curso adicionado
                // para ligar a ele.
                elementos.push({
                    group: 'edges',
                    data: {
                        id: 'edge'+contadorEdge,
                        source: 'competencia'+idCompetencia,
                        target: 'curso'+curso.id+'competencia'+idCompetencia,
                    }
                })
                contadorEdge += 1
                // Aqui eu aadiciono a competência a lista de competências que já foram adicionadas,
                // para referenciá-la no futuro.
                competenciasAdicionadas.push({
                    id: idCompetencia,
                    lastElement: 'curso'+curso.id+'competencia'+idCompetencia
                })
            } else {
                const competenciaAdicionada = competenciasAdicionadas.find(competencia => competencia.id === idCompetencia)
                // Aqui eu adiciono o curso em questão.
                elementos.push({
                    group: 'nodes',
                    data: {
                        id: 'curso'+curso.id+'competencia'+idCompetencia,
                        label: curso.title,
                        image: fundosCategoria.curso[categoriaDaCompetencia.id],
                        itinerario: curso.itinerario,
                        color: colorsCategorias[categoriaDaCompetencia.id],
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
                /**
                 * Aqui adiciono a edge do curso ao último adicionado à competência
                 */
                elementos.push({
                    group: 'edges',
                    data: {
                        id: 'edge'+contadorEdge,
                        source: competenciaAdicionada.lastElement,
                        target: 'curso'+curso.id+'competencia'+idCompetencia,
                    }
                })
                contadorEdge += 1
                /**
                 * Aqui atualizo o último elemento da competência
                 */
                competenciasAdicionadas = competenciasAdicionadas.map(competencia => {
                    if (competencia.id === idCompetencia) {
                        return{
                            id: idCompetencia,
                            lastElement: 'curso'+curso.id+'competencia'+idCompetencia
                        }
                    } else {
                        return competencia
                    }
                })
            }

        })
    })
    :
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
    
    cursosFiltrados: computed(state => cursosFilterFuctionDefault(state.filter)),
    
    elements: computed(state => reformuladorDeElementosCytoscape(state.cursosFiltrados, state.filter.esquemaDeCores, state.filter.tipoClassificacao)),
    
    filterDefault: initialFilterDefault,

    filter: initialFilterDefault,
    
    setFilter: action((state, payload) => {
        state.filter = {...state.filter, ...payload}
    }),
    
    
}
    
    export default trilhosModel