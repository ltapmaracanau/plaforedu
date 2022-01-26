import { action } from "easy-peasy"

const itinerariosModel = {

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
                'width': '120px',
                'height': '120px',
                'padding': '20px',
                'border-width' : '0px',
                'border-color' : '#0081b3',
                'color': '#fff',
                'background-fit': 'contain',
                'background-clip': 'none',
                'background-color': '#0081b3',
                'text-halign': 'center',
                'text-valign':'center',
                'text-margin-x': '0px',
                'text-transform': 'uppercase',
                'text-wrap': 'wrap',
                'text-max-width': '80px',
                'font-weight': 'bold'

            }
        }, 
        {
            selector: 'edge',
            style: {
                'background-color': '#ffb600',
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
    
    

}


export default itinerariosModel