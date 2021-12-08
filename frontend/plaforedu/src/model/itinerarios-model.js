import { action } from "easy-peasy"


const itinerariosModel = {

    dados_gerais: {
        id: null,
        titulo: '',  // NOME DO ITINERARIO
        publico: '',
        descricao: '',
    },

    grafo_publicado: {
        nodes: [], // Aqui vai ficar os ids da trilhas do intinerario
        elementos: [],
        edges: []
    },

    edicao: {

        idCounter: 4,

        cytoscapeStyle: [
            {
                selector: 'node',
                style: {
    
                    'label': 'data(label)',
                    'shape': 'round-diamond',
                    'width': '40px',
                    'height': '40px',
                    'border-width' : '2px',
                    'border-color' : '#ffb600',
                    'color': '#ffb600',
                    'background-fit': 'contain',
                    'background-clip': 'none',
                    'background-color': '#ffb600',
                    'text-halign': 'right',
                    'text-valign':'center',
                    'text-margin-x': '10px',
                }
            }, 
            {
                selector: 'edge',
                style: {
                    'background-color': '#ffb600',
                    'text-background-color': 'yellow',
                    'width': '3px',
                    'target-arrow-shape': 'triangle',
                    'control-point-step-size': '140px'
                }
            }
        ],

        componentStyle : {
            width: '100%',
            height: '500px',
            backgroundColor:'#fff'
        },

        elements: [
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
        ],
    },

    // Trilhas

    addTrilha: action((state, payload) => {
        payload.id = state.edicao.idCounter
        state.idCounter += 1
        state.edicao.elements.push(payload)
    }),


    // Trilhos

    addTrilho: action((state, payload) => {
        payload.id = state.edicao.idCounter
        state.idCounter += 1
        state.edicao.elements.push(payload)
    }),

    // Cursos




    // Materiais


}


export default itinerariosModel