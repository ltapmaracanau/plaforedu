import { action } from "easy-peasy";

/*

+++++++++++++++++   MODELO DE DADOS (TRILHOS)

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
    trilhas: [''],
    dados_arquivo: {
        data de criação: '',
        última modificação: '',
        última publicação: '',
        visibilidade: '',
        versão: '',
        download: '',
        visualizações: '',
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

++++++++++++++++++ MODELO DE NODES (ESSE NO CASO É O CURSO)

{
    data: {
        id: 1,
        label: '1',
        descricao: 'descrição do node 1',
        link: 'https://www.gov.br/pt-br',
        tipo: 'Video',
        objetivos: 'Objetivo 1' 
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


const trilhosModel = {

    trilhos: [],

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
        trilhas: [''],
        dados_arquivo: {
            dataDeCriação: '',
            últimaModificação: '',
            últimaPublicação: '',
            visibilidade: '',
            versão: '',
            download: '',
            visualizações: '',
        },
        grafo_publicado: {
            nodes: [], // ids dos cursos
            arcos: []
        },
        grafo_edicao: {
            nodes: [],
            arcos: []
        }
    },

}


export default trilhosModel