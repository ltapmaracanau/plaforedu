import { action, actionOn } from "easy-peasy"

const admModel = {

    tipoVisualizacao: false, // false: grafo, true: lista
    
    filter: {
        buscaInterna: '',
        cargaHoraria: [0, 200],
        categorias: [],
        temas: [],
        subtemas: [],
        instCertificadora: [],
    },

    onChangeTipoVisualizacao: action((state, payload) => {
        state.tipoVisualizacao = payload
    }),
    
    changeFilter: action((state, payload) => {
        state.filter.buscaInterna = payload.buscaInterna
        state.filter.categorias = payload.categorias
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
            console.log('oi, to aqui');
            /* state.auditLog.push(`Added a todo: ${target.payload}`); */
        }
    )

}


export default admModel