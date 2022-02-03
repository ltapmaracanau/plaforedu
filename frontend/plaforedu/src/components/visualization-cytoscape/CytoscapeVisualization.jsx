import React, { useRef, useEffect, useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy';
import fundoCurso from '../../assets/icones/PLAFOREDU_Site_Icones_Docente_Curso.png'
import fundoCategoria from '../../assets/icones/PLAFOREDU_Site_Icones_EduEmpreend_Categoria.png'
import fundoCompetencia from '../../assets/icones/PLAFOREDU_Site_Icones_InicServPublico_Competencia.png'

import CytoscapeComponent from 'react-cytoscapejs'

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
        cy.on("click", 'node', function (event) {
            const element = event.target._private.data
            if (element.id.includes('curso')) {
                setCourseOnModal(cursos.find((curso) => curso.id.toString() === element.id.replace(/curso/gi, '')))
                setModalVisible(true)
            }
        });

    }, [cursos]);

    const getInstituicao = (id_instituicao) => {
        const instituicao = listInst.find(({ id }) => id === id_instituicao);

        if (instituicao) {
            return instituicao.titulo;
        }

        return 'Instituição não encontrada';
    };

    const handleOk = () => {
        setModalVisible(false)
    }

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
                        style={{ width: '80px', margin: '0 5px' }}
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
                        {getInstituicao(courseOnModal.instCert)}
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
