import React, { useRef, useEffect, useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy';
import cytoscape from 'cytoscape'
import fundoCurso from '../../assets/icones/PLAFOREDU_Site_Icones_Docente_Curso.png'
import fundoCategoria from '../../assets/icones/PLAFOREDU_Site_Icones_EduEmpreend_Categoria.png'
import fundoCompetencia from '../../assets/icones/PLAFOREDU_Site_Icones_InicServPublico_Competencia.png'

import CytoscapeComponent from 'react-cytoscapejs'
import expandCollapse from 'cytoscape-expand-collapse'

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PlusOutlined,
    MinusOutlined
} from '@ant-design/icons';

import {
    Col,
    Modal,
    Descriptions,
    Button,
    Row,
    Slider,
} from 'antd'

var options = {
    layoutBy: null, // to rearrange after expand/collapse. It's just layout options or whole layout function. Choose your side!
    // recommended usage: use cose-bilkent layout with randomize: false to preserve mental map upon expand/collapse
    fisheye: true, // whether to perform fisheye view after expand/collapse you can specify a function too
    animate: true, // whether to animate on drawing changes you can specify a function too
    animationDuration: 1000, // when animate is true, the duration in milliseconds of the animation
    ready: function () { }, // callback when expand/collapse initialized
    undoable: true, // and if undoRedoExtension exists,

    cueEnabled: true, // Whether cues are enabled
    expandCollapseCuePosition: 'top-left', // default cue position is top left you can specify a function per node too
    expandCollapseCueSize: 12, // size of expand-collapse cue
    expandCollapseCueLineSize: 8, // size of lines used for drawing plus-minus icons
    expandCueImage: undefined, // image of expand icon if undefined draw regular expand cue
    collapseCueImage: undefined, // image of collapse icon if undefined draw regular collapse cue
    expandCollapseCueSensitivity: 1, // sensitivity of expand-collapse cues
    edgeTypeInfo: "edgeType", // the name of the field that has the edge type, retrieved from edge.data(), can be a function, if reading the field returns undefined the collapsed edge type will be "unknown"
    groupEdgesOfSameTypeOnCollapse: false, // if true, the edges to be collapsed will be grouped according to their types, and the created collapsed edges will have same type as their group. if false the collapased edge will have "unknown" type.
    allowNestedEdgeCollapse: true, // when you want to collapse a compound edge (edge which contains other edges) and normal edge, should it collapse without expanding the compound first
    zIndex: 999 // z-index value of the canvas in which cue ımages are drawn
};

export default function CytoscapeVisualization() {

    const cyRef = useRef(null)

    const filterCollapsed = useStoreState(state => state.adm.filterCollapsed)
    const setFilterCollapsed = useStoreActions(actions => actions.adm.setFilterCollapsed)
    const elements = useStoreState(state => state.cursos.elements);
    const cursos = useStoreState(state => state.cursos.cursos)
    const listInst = useStoreState(state => state.cursos.instituicoes)
    const [courseOnModal, setCourseOnModal] = useState(cursos[0])
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        const cy = cyRef.current;
        console.log(cy);
        cy.on("click", 'node', function (event) {
            const element = event.target._private.data
            if (element.id.includes('curso')) {
                setCourseOnModal(cursos.find((curso) => curso.id.toString() === element.id.replace(/curso/gi, '')))
                setModalVisible(true)
            }
        });

    }, [cursos]);

    const handleOk = () => {
        setModalVisible(false)
    }

    /* const teste = () => {
        console.log(cyRef.current);
    } */


    return (
        <Col flex='auto' style={{ height: '600px' }}>
            <Row style={{ maxHeight: '42px' }}>
                <Col>
                    <Button
                        style={{ margin: '5px 10px' }}
                        onClick={() => { setFilterCollapsed() }}
                        icon={filterCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    />
                </Col>
                {/* <Col>
                    <Button
                        style={{ margin: '5px 10px' }}
                        onClick={() => { teste() }}
                    >
                        teste
                    </Button>
                </Col> */}
                <Col style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <MinusOutlined />
                    <Slider
                        step={0.1}
                        min={0.1}
                        max={2}
                        tooltipVisible={false}
                        style={{ width: '80px', margin: '0 15px' }}
                        onChange={(value) => cyRef.current.zoom(value)}
                    />
                    <PlusOutlined />
                </Col>
            </Row>
            <CytoscapeComponent
                elements={elements}
                minZoom={0.1}
                maxZoom={2}
                zoom={0.1}
                zoomingEnabled={true}
                userZoomingEnabled={false}
                cy={(cy) => { cyRef.current = cy }}
                style={{
                    width: '100%',
                    height: '558px',
                    backgroundColor: '#fff'
                }}
                layout={{
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
                }}
                stylesheet={[
                    {
                        selector: '.curso',
                        style: {
                            'background-image': fundoCurso,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#000',
                            'background-fit': 'contain',
                            'background-clip': 'none',
                            'background-color': '#0081b3',
                            'text-halign': 'right',
                            'text-valign': 'center',
                            'text-margin-x': '10px',
                            'text-transform': 'uppercase',
                            'text-wrap': 'wrap',
                            'text-max-width': '80px',
                            'font-weight': 'bold'

                        }
                    },
                    {
                        selector: '.categoria',
                        style: {
                            'background-image': fundoCategoria,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#000',
                            'background-fit': 'contain',
                            'background-clip': 'none',
                            'background-color': '#0081b3',
                            'text-halign': 'right',
                            'text-valign': 'center',
                            'text-margin-x': '10px',
                            'text-transform': 'uppercase',
                            'text-wrap': 'wrap',
                            'text-max-width': '80px',
                            'font-weight': 'bold'
                        }
                    },
                    {
                        selector: '.competencia',
                        style: {
                            'background-image': fundoCompetencia,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#000',
                            'background-fit': 'contain',
                            'background-clip': 'none',
                            'background-color': '#0081b3',
                            'text-halign': 'right',
                            'text-valign': 'center',
                            'text-margin-x': '10px',
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
                    }]}
            />
            <Modal
                visible={modalVisible}
                onOk={handleOk}
                onCancel={handleOk}
                title={courseOnModal.title}
                centered={true}
                footer={[
                    <Button type='primary' key={courseOnModal.id} onClick={handleOk}>Ok</Button>
                ]}
            >
                <Descriptions column={1} bordered>
                    <Descriptions.Item label='Descrição'>
                        {courseOnModal.descricao}
                    </Descriptions.Item>
                    <Descriptions.Item label='Carga Horária'>
                        {courseOnModal.cargaHoraria}
                    </Descriptions.Item>
                    <Descriptions.Item label='Instituição Certificadora'>
                        {listInst.filter(instituicao => courseOnModal.instCert.includes(instituicao.id)).map(instituicao => instituicao.titulo).join(', ')}
                    </Descriptions.Item>
                    <Descriptions.Item label='Possui Acessibilidade'>
                        {courseOnModal.possuiAcessibilidade}
                    </Descriptions.Item>
                    <Descriptions.Item label='Link'>
                        <a target="_blank" rel="noreferrer" href={courseOnModal.link}>{courseOnModal.link}</a>
                    </Descriptions.Item>
                    <Descriptions.Item label='Obsevações'>
                        {courseOnModal.obs}
                    </Descriptions.Item>
                </Descriptions>
            </Modal>
        </Col>
    )
}
