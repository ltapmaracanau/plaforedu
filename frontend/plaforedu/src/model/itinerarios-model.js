import { action } from "easy-peasy";

const itinerariosModel = {

    layoutAtual: 'layoutCose',
    
    setLayoutAtual: action((state, payload) => {
        state.layoutAtual = payload
    }),

    itinerarios: [
        {
            dados_gerais: {
                id: 0,
                titulo: 'PlaforEDU',
                publico: '',
                descricao: 'O PlaforEdu é a plataforma utilizada pelo Plano de Formação Continuada dos Servidores da Rede Federal de Educação Profissional e Tecnológica (PLAFOR). A plataforma tem como objetivo proporcionar um espaço onde os servidores podem encontrar capacitações com a finalidade de potencializar a atuação da Educação Profissional no âmbito da Rede Federal de Educação Profissional, Científica e Tecnológica (RFEPCT).',
            },

            grafo_publicado: {
                trilhas: [],
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 1,
                titulo: 'Iniciação ao Serviço Público',
                publico: '',
                descricao: 'Este Itinerário Formativo pretende integrar o servidor recém-empossado ao ambiente institucional a qual terá exercício, preparando-o para o desempenho de atividades vinculadas ao ambiente organizacional em que atuará e ao cargo que ocupa na instituição.',
            },

            grafo_publicado: {
                trilhas: [],
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 2,
                titulo: 'Técnico-Administrativo em Educação', 
                publico: '',
                descricao: 'Este Itinerário formativo visa formar profissionais alinhados com as políticas institucionais, neste sentido, a trilha apresentará  inicialmente aos Técnicos-Administrativos em Educação o Plano de Carreira, suas atribuições e responsabilidades para o desempenho do cargo a qual foi nomeado. Os outros cursos da trilha pretendem qualificar os servidores nas diversas áreas de atuação - educacional e administrativa.',
            },

            grafo_publicado: {
                trilhas: [],
                elementos: [],    
            },
        },
        {
            dados_gerais: {
                id: 3,
                titulo: 'Docente',  // NOME DO ITINERARIO
                publico: '',
                descricao: 'Este itinerário é um processo formativo interativo e reflexivo, proporcionando ao docente a resolução dos problemas enfrentados nas práticas educativas em um contexto pedagógico. A metodologia adotada é dinâmica, proporcionando a construção de novos saberes através das trilhas vinculadas à teoria e às práticas docentes.',
            },

            grafo_publicado: {
                trilhas: [], // ids das trilhas
                elementos: [],
            },
        },
        {
            dados_gerais: {
                id: 4,
                titulo: 'Gerencial',
                publico: '',
                descricao: 'Descrição do Itinerário Gerencial',
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
    ], 

    layouts: {
        
        layoutCose: {
            name: 'cose',
            // Called on `layoutready`
            ready: function () { },
            // Called on `layoutstop`
            stop: function () { },
            // Whether to animate while running the layout
            // true : Animate continuously as the layout is running
            // false : Just show the end result
            // 'end' : Animate with the end result, from the initial positions to the end positions
            animate: false,
    
            // Easing of the animation for animate:'end'
            animationEasing: undefined,
    
            // The duration of the animation for animate:'end'
            animationDuration: undefined,
    
            // A function that determines whether the node should be animated
            // All nodes animated by default on animate enabled
            // Non-animated nodes are positioned immediately when the layout starts
            animateFilter: function (node, i) { return true; },
    
    
            // The layout animates only after this many milliseconds for animate:true
            // (prevents flashing on fast runs)
            animationThreshold: 250,
    
            // Number of iterations between consecutive screen positions update
            refresh: 20,
    
            // Whether to fit the network view after when done
            fit: true,
    
            // Padding on fit
            padding: 80,
    
            // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
            boundingBox: undefined,
    
            // Excludes the label when calculating node bounding boxes for the layout algorithm
            nodeDimensionsIncludeLabels: false,
    
            // Randomize the initial positions of the nodes (true) or use existing positions (false)
            randomize: false,
    
            // Extra spacing between components in non-compound graphs
            componentSpacing: 40,
    
            // Node repulsion (non overlapping) multiplier
            nodeRepulsion: function (node) { return 2048; },
    
            // Node repulsion (overlapping) multiplier
            nodeOverlap: 4,
    
            // Ideal edge (non nested) length
            idealEdgeLength: function (edge) { return 32; },
    
            // Divisor to compute edge forces
            edgeElasticity: function (edge) { return 32; },
    
            // Nesting factor (multiplier) to compute ideal edge length for nested edges
            nestingFactor: 1.2,
    
            // Gravity force (constant)
            gravity: 1,
    
            // Maximum number of iterations to perform
            numIter: 1000,
    
            // Initial temperature (maximum node displacement)
            initialTemp: 1000,
    
            // Cooling factor (how the temperature is reduced between consecutive iterations
            coolingFactor: 0.99,
    
            // Lower temperature threshold (below this point the layout will end)
            minTemp: 1.0
        },
    
        layoutBreadthFirst: {
            name: 'breadthfirst',
            fit: true, // whether to fit the viewport to the graph
            directed: true, // whether the tree is directed downwards (or edges can point in any direction if false)
            padding: 30, // padding on fit
            circle: false, // put depths in concentric circles if true, put depths top down if false
            grid: false, // whether to create an even grid into which the DAG is placed (circle:false only)
            spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
            boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
            avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
            nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
            roots: undefined, // the roots of the trees
            maximal: false, // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only)
            animate: false, // whether to transition the node positions
            animationDuration: 500, // duration of animation in ms if enabled
            animationEasing: undefined, // easing of animation if enabled,
            animateFilter: function (node, i) { return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
            ready: undefined, // callback on layoutready
            stop: undefined, // callback on layoutstop
            transform: function (node, position) { return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
        },
    
        layoutBreadthFirstCircle: {
            name: 'breadthfirst',
            fit: true, // whether to fit the viewport to the graph
            directed: true, // whether the tree is directed downwards (or edges can point in any direction if false)
            padding: 30, // padding on fit
            circle: true, // put depths in concentric circles if true, put depths top down if false
            grid: false, // whether to create an even grid into which the DAG is placed (circle:false only)
            spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
            boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
            avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
            nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
            roots: undefined, // the roots of the trees
            maximal: false, // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only)
            animate: false, // whether to transition the node positions
            animationDuration: 500, // duration of animation in ms if enabled
            animationEasing: undefined, // easing of animation if enabled,
            animateFilter: function (node, i) { return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
            ready: undefined, // callback on layoutready
            stop: undefined, // callback on layoutstop
            transform: function (node, position) { return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
        },

        layoutGrid: {
            name: 'grid',
          
            fit: true, // whether to fit the viewport to the graph
            padding: 30, // padding used on fit
            boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
            avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
            avoidOverlapPadding: 10, // extra spacing around nodes when avoidOverlap: true
            nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
            spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
            condense: false, // uses all available space on false, uses minimal space on true
            rows: undefined, // force num of rows in the grid
            cols: undefined, // force num of columns in the grid
            position: function( node ){}, // returns { row, col } for element
            sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
            animate: false, // whether to transition the node positions
            animationDuration: 500, // duration of animation in ms if enabled
            animationEasing: undefined, // easing of animation if enabled
            animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
            ready: undefined, // callback on layoutready
            stop: undefined, // callback on layoutstop
            transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts 
        },

        layoutCircular: {
            name: 'circle',
          
            fit: true, // whether to fit the viewport to the graph
            padding: 30, // the padding on fit
            boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
            avoidOverlap: true, // prevents node overlap, may overflow boundingBox and radius if not enough space
            nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
            spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
            radius: undefined, // the radius of the circle
            startAngle: 3 / 2 * Math.PI, // where nodes start in radians
            sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
            clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
            sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
            animate: false, // whether to transition the node positions
            animationDuration: 500, // duration of animation in ms if enabled
            animationEasing: undefined, // easing of animation if enabled
            animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
            ready: undefined, // callback on layoutready
            stop: undefined, // callback on layoutstop
            transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts 
        },

        layoutConcentric: {
            name: 'concentric',
          
            fit: true, // whether to fit the viewport to the graph
            padding: 30, // the padding on fit
            startAngle: 3 / 2 * Math.PI, // where nodes start in radians
            sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
            clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
            equidistant: false, // whether levels have an equal radial distance betwen them, may cause bounding box overflow
            minNodeSpacing: 10, // min spacing between outside of nodes (used for radius adjustment)
            boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
            avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
            nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
            height: undefined, // height of layout area (overrides container height)
            width: undefined, // width of layout area (overrides container width)
            spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
            concentric: function( node ){ // returns numeric value for each node, placing higher nodes in levels towards the centre
            return node.degree();
            },
            levelWidth: function( nodes ){ // the variation of concentric values in each level
            return nodes.maxDegree() / 4;
            },
            animate: false, // whether to transition the node positions
            animationDuration: 500, // duration of animation in ms if enabled
            animationEasing: undefined, // easing of animation if enabled
            animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
            ready: undefined, // callback on layoutready
            stop: undefined, // callback on layoutstop
            transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
        },

    },


}


export default itinerariosModel