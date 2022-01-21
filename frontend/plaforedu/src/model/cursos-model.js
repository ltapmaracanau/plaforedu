import { action, actionOn } from "easy-peasy"

const trilhosModel = {

    idCount: 0,

    instituicoes: [
        {
            id: 1,
            titulo: 'IFCE'
        },
        {
            id: 2,
            titulo: 'UFC'
        },
        {
            id: 3,
            titulo: 'UFRN'
        },
        {
            id: 4,
            titulo: 'MEC'
        },
        {
            id: 5,
            titulo: 'UECE'
        },
        {
            id: 6,
            titulo: 'UFRJ'
        },
        {
            id: 7,
            titulo: 'USP'
        },
    ],

    cursos: [
        {
            id: 1,
            title: 'Título do Curso',
            descricao: 'Tema: matemática; Subtema: álgebra',
            cargaHoraria: '20h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [1],
                subtemas: [1],
            }
        },
        {
            id: 2,
            title: 'Título do Curso',
            descricao: 'Tema : matemática; Subtema: Análise',
            cargaHoraria: '130h',
            instCert: [1, 2],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [1],
                subtemas: [2],
            }
        },
        {
            id: 3,
            title: 'Título do Curso',
            descricao: 'Tema : Probabilidade e estatística; Subtema: Geometria e Topologia',
            cargaHoraria: '30h',
            instCert: [2],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [2],
                subtemas: [3],
            }
        },
        {
            id: 4,
            title: 'Curso Tal',
            descricao: 'Descrição do curso',
            cargaHoraria: '50h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [1, 2],
                subtemas: [1, 2, 3],
            }
        },
        {
            id: 5,
            title: 'Título do Curso',
            descricao: 'Descrição do curso',
            cargaHoraria: '60h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [],
                subtemas: [],
            }
        },
        {
            id: 6,
            title: 'Curso gerencial',
            descricao: 'Descrição do curso',
            cargaHoraria: '10h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [],
                subtemas: [],
            }
        },
        {
            id: 7,
            title: 'Javascript do básico ao Avançado',
            descricao: 'Descrição do curso',
            cargaHoraria: '20h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [],
                subtemas: [],
            }
        },
        {
            id: 8,
            title: 'Título do Curso',
            descricao: 'Descrição do curso',
            cargaHoraria: '30h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [],
                subtemas: [],
            }
        },
        {
            id: 9,
            title: 'Título do Curso',
            descricao: 'Descrição do curso',
            cargaHoraria: '40h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [],
                subtemas: [],
            }
        },
        {
            id: 10,
            title: 'Título do Curso',
            descricao: 'Descrição do curso',
            cargaHoraria: '180h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [],
                subtemas: [],
            }
        },
        {
            id: 11,
            title: 'Título do Curso',
            descricao: 'Descrição do curso',
            cargaHoraria: '120h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [],
                subtemas: [],
            }
        },
        {
            id: 12,
            title: 'Título do Curso',
            descricao: 'Descrição do curso',
            cargaHoraria: '90h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [],
                subtemas: [],
            }
        },
        {
            id: 13,
            title: 'Título do Curso',
            descricao: 'Descrição do curso',
            cargaHoraria: '60h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [],
                subtemas: [],
            }
        },
        {
            id: 14,
            title: 'Título do Curso',
            descricao: 'Descrição do curso',
            cargaHoraria: '20h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [],
                subtemas: [],
            }
        },
        {
            id: 15,
            title: 'Título do Curso',
            descricao: 'Descrição do curso',
            cargaHoraria: '80h',
            instCert: [1],
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
            filter: {
                categoriasDeCompetencias: [],
                competencias: [],
                temas: [],
                subtemas: [],
            }
        },
    ],
    
    cursosFiltrados: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    
    onChangeCursosFiltrados: action((state, payload) => {
        state.cursosFiltrados = payload
    }),

    filter: {
        buscaInterna: '',
        cargaHoraria: [0, 200],
        categoriasDeCompetencias: [],
        competencias: [],
        temas: [],
        subtemas: [],
        instCertificadora: [],
    },

    changeFilter: action((state, payload) => {
        state.filter.buscaInterna = payload.buscaInterna
        state.filter.categoriasDeCompetencias = payload.categoriasDeCompetencias
        state.filter.competencias = payload.competencias
        state.filter.temas = payload.temas
        state.filter.cargaHoraria = payload.cargaHoraria
        state.filter.instCertificadora = payload.instCertificadora
        state.filter.subtemas = payload.subtemas
    }),

    onChangeFilter: actionOn(
        // targetResolver:
        actions => actions.changeFilter,
        // handler:
        (state, target) => {
            let filtro = target.payload
            let novosCursos = []
            console.log(filtro.subtemas.length);
            state.cursos.forEach(curso => {
                let contemTema = curso.filter.temas.some(idTema => filtro.temas.includes(idTema))
                let temasVazio = filtro.temas.length === 0
                
                let contemSubtema = curso.filter.subtemas.some(idSubtema => filtro.subtemas.includes(idSubtema))
                let subtemasVazio = filtro.subtemas.length === 0

                let contemCategoria = curso.filter.categoriasDeCompetencias.some(idCategoria => filtro.subtemas.includes(idCategoria))
                let categoriasVazio = filtro.categoriasDeCompetencias.length === 0

                let contemCompetencia = curso.filter.subtemas.some(idCompetencia => filtro.subtemas.includes(idCompetencia))
                let competenciasVazio = filtro.competencias.length === 0
                
                let contemInstituicao = curso.instCert.some(idInst => filtro.instCertificadora.includes(idInst))
                let instituicoesVazio = filtro.instCertificadora.length === 0

                let buscaInterna = curso.title.toLowerCase().startsWith(filtro.buscaInterna.toLowerCase())
                let buscaInternaVazia = filtro.buscaInterna === '' || filtro.buscaInterna === undefined

                let temas = contemTema || temasVazio
                let subtemas = contemSubtema || subtemasVazio 
                let categorias = contemCategoria || categoriasVazio 
                let competencias = contemCompetencia || competenciasVazio 
                let instituicoes = contemInstituicao || instituicoesVazio 
                let busca = buscaInterna || buscaInternaVazia 

                if ( temas && subtemas && categorias && competencias && instituicoes && busca) {
                    novosCursos.push(curso.id)
                }

            })

            state.cursosFiltrados = novosCursos
        }
    ),

}

export default trilhosModel