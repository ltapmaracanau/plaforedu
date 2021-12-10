import { action } from "easy-peasy"

const trilhasModel = {

    idCount: 0,

    trilhas: [],

    model_default: {
        dados_gerais: {
            titulo: '',
            descricao: '',
            competencias: '',
            habilidades: '',
            proprietario: '',
            autores: [],
            publico: ['Gestor', 'Docente', 'TAE']
        },
    
        itinerarios: [],
    
        dados_arquivo: {
            data_de_criação: '',
            última_modificação: '',
            visibilidade: '',
            versão: 23,
            visualizações: 23,
        },
    
        grafo_publicado: {
            trilhos: [1, 2], // aqui vai ficar os ids dos trilhos
            elementos: [
                { 
                    data: { 
                        id: 1,
                        label: '1',
                        descricao: 'descrição do node 1',
                        link: 'https://www.gov.br/pt-br',
                        tipo: 'Video',
                    },
                    position: { x: 0, y: -100 }
                },
                { 
                    data: { 
                        id: 2, 
                        label: '2',
                        descricao: 'descrição do node 2', 
                        link: 'https://www.gov.br/pt-br', 
                        tipo: 'Video', 
                    }, 
                    position: { x: 0, y: 100 } 
                },
                { 
                    data: { 
                        id: 3, 
                        source: 1,
                        target: 2, 
                        label: 'Edge 1', 
                        tipo: 'linha' 
                    }
                }
            ]
        },
    
        grafo_edicao: {
            trilhos: [],
            elementos: []
        },
    }, 


    addTrilha: action((state, payload) => {
        state.trilhas.push(payload);
    }),

    removeTrilha: action((state, payload) => {
        state.trilhas.filter((e) => e.id != payload)
    })



}


export default trilhasModel