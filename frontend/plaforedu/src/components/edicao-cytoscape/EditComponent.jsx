import React, {useRef, useEffect} from 'react'
import { useStoreState } from 'easy-peasy';

import { 
    PlusCircleTwoTone,
    DeleteOutlined,
    UndoOutlined,
    RedoOutlined,
} from '@ant-design/icons';

import CytoscapeComponent from 'react-cytoscapejs'

import {
    Col,
    Row,
    Empty,
    Button,
} from 'antd';

const EmptyCard = () => (
    <Col flex='auto' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </Col>
)

export default function EditComponent() {


    const cyRef = useRef(null)
    /* 
    const addNodeToGraph = useStoreActions(
        actions => actions.itinerarios.addNode
    )
    */
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
        <Col flex='auto'>
            <Row gutter={[3, 0]} style={{margin: '0 0', backgroundColor: 'white', borderBottom: 'solid #E7E7E7 1px', padding: 3}}>
                <Col>
                    <Button type='default' onClick={addNo}><PlusCircleTwoTone/></Button>
                </Col>
                <Col>
                    <Button type='default' onClick={() => {console.log(' TODO Deletar algum node')}}><DeleteOutlined /></Button>
                </Col>
                <Col>
                    <Button type='default' onClick={() => {console.log(' TODO Undo')}}><UndoOutlined /> Desfazer</Button>
                </Col>
                <Col>
                    <Button type='default' onClick={() => {console.log(' TODO Redo')}}><RedoOutlined /> Refazer</Button>
                </Col>
            </Row>
            <Row>
                <CytoscapeComponent
                    elements={elements}
                    minZoom={0.5}
                    maxZoom={2}
                    cy={(cy) => { cyRef.current = cy}}
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
                    stylesheet = {cytoscapeStyle}
                />
            </Row>
        </Col>
    )
}
