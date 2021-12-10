import { action } from "easy-peasy"


const itinerariosModel = {

    idCount: 6,

    modelDefault: {
        dados_gerais: {
            id: null,
            titulo: '',  // NOME DO ITINERARIO
            publico: '',
            descricao: '',
        },
    
        grafo_publicado: {
            trilhas: [], // Aqui vai ficar os ids da trilhas do intinerario
            elementos: [],
        },
    }, 

    itinerarios: [
        {
            dados_gerais: {
                id: 1,
                titulo: 'Iniciação ao serviço público',  // NOME DO ITINERARIO
                publico: '',
                descricao: '',
            },

            grafo_publicado: {
                trilhas: [], // ids das trilhas
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 2,
                titulo: 'Técnico administrativo em educação',
                publico: '',
                descricao: '',
            },

            grafo_publicado: {
                trilhas: [],
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 3,
                titulo: 'Docente',
                publico: '',
                descricao: '',
            },

            grafo_publicado: {
                trilhas: [],
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 4,
                titulo: 'Gerencial (Liderança)',
                publico: '',
                descricao: '',
            },

            grafo_publicado: {
                trilhas: [], 
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 5,
                titulo: 'Preparação para a aposentadoria',
                publico: '',
                descricao: '',
            },

            grafo_publicado: {
                trilhas: [], 
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 6,
                titulo: 'Educação empreendedora e ACT SEBRAE', 
                publico: '',
                descricao: '',
            },

            grafo_publicado: {
                trilhas: [],
                elementos: [],    
            },
        },
    ],

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

    edicao: {

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
}


export default itinerariosModel