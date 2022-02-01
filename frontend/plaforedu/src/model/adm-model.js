import { action } from "easy-peasy"

const admModel = {

    tipoVisualizacao: false, // false: grafo, true: lista

    filterCollapsed : false, // true: filter escondido, false: filter visível
    
    setFilterCollapsed : action((state, _) => {
        state.filterCollapsed = !state.filterCollapsed
    }),

    onChangeTipoVisualizacao: action((state, payload) => {
        state.tipoVisualizacao = payload
    }),
    
}

export default admModel