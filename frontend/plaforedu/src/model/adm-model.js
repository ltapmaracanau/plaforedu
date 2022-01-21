import { action } from "easy-peasy"

const admModel = {

    tipoVisualizacao: true, // false: grafo, true: lista
    
    onChangeTipoVisualizacao: action((state, payload) => {
        state.tipoVisualizacao = payload
    }),
    
}

export default admModel