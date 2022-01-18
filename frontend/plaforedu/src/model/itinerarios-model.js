
const itinerariosModel = {

    idCount: 6,

    itinerarios: [
        {
            dados_gerais: {
                id: 0,
                titulo: 'Itinerarios Formativos',  // NOME DO ITINERARIO
                publico: '',
                descricao: 'Descrição dos Itinerarios',
            },

            grafo_publicado: {
                trilhas: [], // ids das trilhas
                elementos: [],
            },
        },
        {
            dados_gerais: {
                id: 1,
                titulo: 'Docente',  // NOME DO ITINERARIO
                publico: '',
                descricao: 'Descrição do Itinerário Docente',
            },

            grafo_publicado: {
                trilhas: [], // ids das trilhas
                elementos: [],
            },
        },
        {
            dados_gerais: {
                id: 2,
                titulo: 'Educação empreendedora',
                publico: '',
                descricao: 'Descrição do Itinerário Educação empreendedora',
            },

            grafo_publicado: {
                trilhas: [],
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 3,
                titulo: 'Iniciação ao Serviço Público',
                publico: '',
                descricao: 'Descrição do Itinerário Iniciação ao Serviço Público',
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
                descricao: 'Descrição do Itinerário Gerencial (Liderança)',
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
                descricao: 'Descrição do Itinerário Preparação para a aposentadoria',
            },

            grafo_publicado: {
                trilhas: [], 
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 6,
                titulo: 'Técnico Administrativo em Educação', 
                publico: '',
                descricao: 'Descrição do Itinerário Técnico Administrativo em Educação',
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