import { action } from "easy-peasy"

const admModel = {

    visualizationType: false, // false: list, true: cytoscape

    changeVisualizationType: action((state, payload) => {
        state.visualizationType = payload
    })

}


export default admModel