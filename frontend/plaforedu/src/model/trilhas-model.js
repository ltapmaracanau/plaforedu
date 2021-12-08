import { action } from "easy-peasy"

/*

+++++++++++++++++   MODELO DE DADOS (TRILHAS)

{
    dados_gerais: {
        titulo: '',
        descricao: '',
        competencias: [''],
        habilidades: [''],
        proprietario: '',
        autores: [''],
        publico: ''
    },
    itinerarios: [''],
    dados_arquivo: {
        data de criação: '',
        última modificação: '',
        última publicação: '',
        visibilidade: '',
        versão: '',
        download: '',
        visualizações: '',
        compartilhamentos: ''
    },
    grafo_publicado: {
        nodes: [],
        arcos: []
    },
    grafo_edicao: {
        nodes: [],
        arcos: []
    }
}

++++++++++++++++++ MODELO DE NODES (ESSES NO CASO SÃO OS TRILHOS COM OS CURSOS)

{
    data: {
        AQUI SÃO AS INFORMAÇÕES GERAIS DE CADA TRILHO DA TRILHA KKKKKK 
    },
    position: { x: 0, y: 0 }
}

++++++++++++++++++ MODELO DE ARCOS

{ 
    data: { 
        id: 3, 
        source: 1,
        target: 2, 
        label: 'Edge 1', 
        tipo: 'linha' 
    }
}

*/

const trilhasModel = {

    trilhas: [],

    modelDefault: {
        dados_gerais: {
            titulo: '',
            descricao: '',
            competencias: [''],
            habilidades: [''],
            proprietario: '',
            autores: [''],
            publico: ''
        },
    
        itinerarios: [''],
    
        dados_arquivo: {
            dataDeCriação: '',
            últimaModificação: '',
            últimaPublicação: '',
            visibilidade: '',
            versão: '',
            download: '',
            visualizações: '',
            compartilhamentos: ''
        },
    
        grafo_publicado: {
            nodes: [], // aqui vai ficar os ids dos trilhos
            arcos: []
        },
    
        grafo_edicao: {
            nodes: [],
            arcos: []
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