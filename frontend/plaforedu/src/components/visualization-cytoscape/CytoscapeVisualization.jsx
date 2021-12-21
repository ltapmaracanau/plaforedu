import React, { useRef, useEffect } from 'react'
import { useStoreState } from 'easy-peasy';

import {
    PlusCircleTwoTone,
    DeleteOutlined,
    UndoOutlined,
    RedoOutlined,
} from '@ant-design/icons';

import CytoscapeComponent from 'react-cytoscapejs'

import {
    Row,
    Col,
    Button,
} from 'antd'

export default function CytoscapeVisualization() {

    const cyRef = useRef(null)

    const cytoscapeStyle = useStoreState(state => state.itinerarios.edicao.cytoscapeStyle);
    const componentStyle = useStoreState(state => state.itinerarios.edicao.componentStyle);
    const elements = useStoreState(state => state.itinerarios.edicao.elements);

    useEffect(() => {
        const cy = cyRef.current;
        cy.on("click", function (event) {
            console.log('Clicou');
        });
        cy.on("click", 'edge', function (event) {
            console.log('clicou na edge');
        });
        cy.on("click", 'node', function (event) {
            console.log('Clicou no Node');
        });

    }, []);

    const addNo = () => {
        console.log('adicionar nó');
    }

    return (
        <Col flex='auto' style={{ height: '600px' }}>
            <CytoscapeComponent
                elements={elements}
                minZoom={0.5}
                maxZoom={2}
                cy={(cy) => { cyRef.current = cy }}
                style={componentStyle}
                layout={{
                    name: 'breadthfirst',
                    fit: true,
                    directed: true,
                    padding: 50,
                    animate: true,
                    animationDuration: 1000,
                    avoidOverlap: true,
                    nodeDimensionsIncludeLabels: false
                }}
                stylesheet={cytoscapeStyle}
            />
        </Col>
    )
}
