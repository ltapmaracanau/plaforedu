import { action } from "easy-peasy";

const trilhosModel = {

    idCount: 0,

    trilhos: [],

    modelDefault: {        
        dados_gerais: {
            titulo: '',
            descricao: '',
            competencias: '',
            habilidades: '',
            proprietario: '',
            autores: [],
            publico: ['Gestor', 'Docente', 'TAE']
        },
        trilhas: [],
        dados_arquivo: {
            dataDeCriação: '',
            últimaModificação: '',
            visibilidade: ['Público', 'Restrito'],
            versão: 23,
            visualizações: 23,
        },
        grafo_publicado: {
            cursos: [], // ids dos cursos
            elementos: []
        },
        grafo_edicao: {
            cursos: [],
            elementos: []
        }
    },

}


export default trilhosModel