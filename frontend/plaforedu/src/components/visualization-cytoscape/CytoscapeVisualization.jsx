import React, { useRef, useEffect, useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy';
// Import dos fundos dos cursos
import fundoCurso1 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 01.png'
import fundoCategoria1 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 01.png'
import fundoCompetencia1 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 01.png'

import fundoCurso2 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 02.png'
import fundoCategoria2 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 02.png'
import fundoCompetencia2 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 02.png'

import fundoCurso3 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 03.png'
import fundoCategoria3 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 03.png'
import fundoCompetencia3 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 03.png'

import fundoCurso4 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 04.png'
import fundoCategoria4 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 04.png'
import fundoCompetencia4 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 04.png'

import fundoCurso5 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 05.png'
import fundoCategoria5 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 05.png'
import fundoCompetencia5 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 05.png'

import fundoCurso6 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 06.png'
import fundoCategoria6 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 06.png'
import fundoCompetencia6 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 06.png'

import fundoCurso7 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 07.png'
import fundoCategoria7 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 07.png'
import fundoCompetencia7 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 07.png'

import fundoCurso8 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 08.png'
import fundoCategoria8 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 08.png'
import fundoCompetencia8 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 08.png'

import fundoCurso9 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 09.png'
import fundoCategoria9 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 09.png'
import fundoCompetencia9 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 09.png'

import fundoCurso10 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 10.png'
import fundoCategoria10 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 10.png'
import fundoCompetencia10 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 10.png'

import fundoCurso11 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 11.png'
import fundoCategoria11 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 11.png'
import fundoCompetencia11 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 11.png'

import fundoCurso12 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Curso 12.png'
import fundoCategoria12 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Categoria 12.png'
import fundoCompetencia12 from '../../assets/icones/PLAFOREDU_IconesFiltros_v3_Competencia 12.png'



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
    Typography,
    Descriptions,
    Button,
    Card,
    Row,
    Slider,
    Select,
    Form,
} from 'antd'

const { Text } = Typography

export default function CytoscapeVisualization() {

    const cyRef = useRef(null)

    const filterCollapsed = useStoreState(state => state.adm.filterCollapsed)
    const setFilterCollapsed = useStoreActions(actions => actions.adm.setFilterCollapsed)
    const elements = useStoreState(state => state.cursos.elements);
    const cursos = useStoreState(state => state.cursos.cursos)
    const competencias = useStoreState(state => state.cursos.competencias)
    const listInst = useStoreState(state => state.cursos.instituicoes)
    const [courseOnModal, setCourseOnModal] = useState(cursos[0])
    const [modalCourseVisible, setModalCourseVisible] = useState(false)
    const [modalCompetenciaVisible, setModalCompetenciaVisible] = useState(false)
    const layouts = useStoreState(state => state.itinerarios.layouts)
    const [layoutAtual, setLayoutAtual] = useState(layouts.layoutCose);
    const [zoom, setZoom] = useState(1);

    const getInstituicao = (id_instituicao) => {
        const instituicao = listInst.find(({ id }) => id === id_instituicao);

        if (instituicao) {
            return instituicao.titulo;
        }

        return 'Instituição não encontrada';
    };

    const handleOk = () => {
        setModalCourseVisible(false)
        setModalCompetenciaVisible(false)
    }

    useEffect(() => {
        cyRef.current.layout(layoutAtual).run()
    }, [elements, layoutAtual]);


    return (
        <Col flex='auto'>
            <Form
                size='small'
                layout='horizontal'
            >
                <Row
                    align='middle'
                    style={{ backgroundColor: '#EBEBEB' }}
                >
                    <Col>
                        <Button
                            style={{ margin: '5px 10px', height: '35px', width: '35px' }}
                            onClick={() => { setFilterCollapsed() }}
                            icon={filterCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        />
                    </Col>
                    <Col>
                        <Card>
                            <Form.Item
                                label={'Zoom'}
                                style={{ marginBottom: '0' }}
                            >
                                <div
                                    style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
                                >
                                    <Button
                                        shape='circle'
                                        onClick={() => {
                                            console.log(cyRef.current);
                                            setZoom((zoomAtual) => {
                                                return (
                                                    zoomAtual > 0.01 ?
                                                        zoomAtual - 0.01 :
                                                        zoomAtual
                                                )
                                            })
                                        }}
                                        icon={<MinusOutlined />}
                                    />
                                    <Slider
                                        step={0.0001}
                                        min={0.01}
                                        max={1.00}
                                        value={zoom}
                                        tooltipVisible={false}
                                        style={{ width: '80px', margin: '0 15px' }}
                                        onChange={(value) => {
                                            setZoom(value)
                                        }}
                                    />
                                    <Button
                                        icon={<PlusOutlined />}
                                        shape='circle'
                                        onClick={() => {
                                            setZoom((zoomAtual) => {
                                                return (
                                                    zoomAtual < 1 ?
                                                        zoomAtual + 0.01 :
                                                        zoomAtual
                                                )
                                            })
                                        }}
                                    />
                                </div>
                            </Form.Item>
                        </Card>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', minWidth: '250px' }}>
                        <Card style={{ width: '100%' }}>
                            <Form.Item
                                label={'Visualização'}
                                style={{ marginBottom: '0' }}
                            >
                                <Select
                                    onChange={(value) => {
                                        setLayoutAtual(layouts[value])
                                    }}
                                    defaultValue={'layoutCose'}
                                    style={{ width: '100%' }}
                                >
                                    <Select.Option value={'layoutCose'}>Padrão</Select.Option>
                                    <Select.Option value={'layoutBreadthFirst'}>Dendograma</Select.Option>
                                    <Select.Option value={'layoutBreadthFirstCircle'}>Dendograma Circular</Select.Option>
                                    <Select.Option value={'layoutGrid'}>Grade</Select.Option>
                                    <Select.Option value={'layoutCircular'}>Circular</Select.Option>
                                    <Select.Option value={'layoutConcentric'}>Concêntrico</Select.Option>
                                </Select>
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>
            </Form>
            <CytoscapeComponent
                elements={elements}
                minZoom={0.01}
                maxZoom={1.00}
                zoom={zoom}
                zoomingEnabled={true}
                userZoomingEnabled={false}
                cy={(cy) => {
                    cyRef.current = cy
                    cy.on("click", 'node', function (event) {
                        const element = event.target._private.data
                        if (element.id.includes('curso')) {
                            setCourseOnModal(cursos.find((curso) => curso.id == element.id.replace(/curso/gi, '')))
                            setModalCourseVisible(true)
                        }
                        if (element.id.includes('competencia')) {
                            setCourseOnModal(competencias.find((competencia) => competencia.id == element.id.replace(/competencia/gi, '')))
                            setModalCompetenciaVisible(true)
                        }
                    });
                    cy.one("layoutready", function (event) {
                        setZoom(cy._private.zoom)
                    });
                }}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '555px',
                    backgroundColor: '#fff'
                }}
                layout={layouts.layoutCose}
                stylesheet={[
                    {
                        selector: '.curso0',
                        style: {
                            'background-image': fundoCurso1,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#ea190f',
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
                        selector: '.categoria0',
                        style: {
                            'background-image': fundoCategoria1,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#ea190f',
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
                        selector: '.competencia0',
                        style: {
                            'background-image': fundoCompetencia1,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#ea190f',
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
                        selector: '.curso1',
                        style: {
                            'background-image': fundoCurso1,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#ea190f',
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
                        selector: '.categoria1',
                        style: {
                            'background-image': fundoCategoria1,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#ea190f',
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
                        selector: '.competencia1',
                        style: {
                            'background-image': fundoCompetencia1,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#ea190f',
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
                        selector: '.curso2',
                        style: {
                            'background-image': fundoCurso2,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#f98506',
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
                        selector: '.categoria2',
                        style: {
                            'background-image': fundoCategoria2,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#f98506',
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
                        selector: '.competencia2',
                        style: {
                            'background-image': fundoCompetencia2,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#f98506',
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
                        selector: '.curso3',
                        style: {
                            'background-image': fundoCurso3,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#ffbe00',
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
                        selector: '.categoria3',
                        style: {
                            'background-image': fundoCategoria3,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#ffbe00',
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
                        selector: '.competencia3',
                        style: {
                            'background-image': fundoCompetencia3,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#ffbe00',
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
                        selector: '.curso4',
                        style: {
                            'background-image': fundoCurso4,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#9dc63d',
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
                        selector: '.categoria4',
                        style: {
                            'background-image': fundoCategoria4,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#9dc63d',
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
                        selector: '.competencia4',
                        style: {
                            'background-image': fundoCompetencia4,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#9dc63d',
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
                        selector: '.curso5',
                        style: {
                            'background-image': fundoCurso5,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#09bc09',
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
                        selector: '.categoria5',
                        style: {
                            'background-image': fundoCategoria5,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#09bc09',
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
                        selector: '.competencia5',
                        style: {
                            'background-image': fundoCompetencia5,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#09bc09',
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
                        selector: '.curso6',
                        style: {
                            'background-image': fundoCurso6,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#009688',
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
                        selector: '.categoria6',
                        style: {
                            'background-image': fundoCategoria6,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#009688',
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
                        selector: '.competencia6',
                        style: {
                            'background-image': fundoCompetencia6,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#009688',
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
                        selector: '.curso7',
                        style: {
                            'background-image': fundoCurso7,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#1c67b0',
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
                        selector: '.categoria7',
                        style: {
                            'background-image': fundoCategoria7,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#1c67b0',
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
                        selector: '.competencia7',
                        style: {
                            'background-image': fundoCompetencia7,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#1c67b0',
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
                        selector: '.curso8',
                        style: {
                            'background-image': fundoCurso8,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#6219a4',
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
                        selector: '.categoria8',
                        style: {
                            'background-image': fundoCategoria8,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#6219a4',
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
                        selector: '.competencia8',
                        style: {
                            'background-image': fundoCompetencia8,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#6219a4',
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
                        selector: '.curso9',
                        style: {
                            'background-image': fundoCurso9,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#a52099',
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
                        selector: '.categoria9',
                        style: {
                            'background-image': fundoCategoria9,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#a52099',
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
                        selector: '.competencia9',
                        style: {
                            'background-image': fundoCompetencia9,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#a52099',
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
                        selector: '.curso10',
                        style: {
                            'background-image': fundoCurso10,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#f372d3',
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
                        selector: '.categoria10',
                        style: {
                            'background-image': fundoCategoria10,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#f372d3',
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
                        selector: '.competencia10',
                        style: {
                            'background-image': fundoCompetencia10,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#f372d3',
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
                        selector: '.curso11',
                        style: {
                            'background-image': fundoCurso11,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#997ff7',
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
                        selector: '.categoria11',
                        style: {
                            'background-image': fundoCategoria11,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#997ff7',
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
                        selector: '.competencia11',
                        style: {
                            'background-image': fundoCompetencia11,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#997ff7',
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
                        selector: '.curso12',
                        style: {
                            'background-image': fundoCurso12,
                            'label': 'data(label)',
                            'width': '100px',
                            'height': '100px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#1db7ed',
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
                        selector: '.categoria12',
                        style: {
                            'background-image': fundoCategoria12,
                            'label': 'data(label)',
                            'width': '150px',
                            'height': '150px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#1db7ed',
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
                        selector: '.competencia12',
                        style: {
                            'background-image': fundoCompetencia12,
                            'label': 'data(label)',
                            'width': '120px',
                            'height': '120px',
                            'padding': '20px',
                            'border-width': '0px',
                            'border-color': '#0081b3',
                            'color': '#1db7ed',
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
                    }
                ]}
            >
            </CytoscapeComponent>
            <div
                style={{
                    backgroundColor: '#f2f2f2',
                    position: 'absolute',
                    top: '400px',
                    right: '50px',
                    width: '180px',
                    padding: '10px',
                    alignItems: 'center',
                    borderRadius: '30px',
                    boxShadow: '0px 11px 15px 0px rgba(0,0,0,0.38)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        marginBottom: '10px',
                    }}
                >
                    <img alt='Curso' src={fundoCurso1} height={'25px'} style={{ marginRight: '10px' }} />
                    <Text style={{ fontFamily: 'Roboto' }}>Curso</Text>
                </div>
                <div
                    style={{
                        display: 'flex',
                        marginBottom: '10px',
                    }}
                >
                    <img alt='Competência' src={fundoCompetencia1} height={'25px'} style={{ marginRight: '10px' }} />
                    <Text style={{ fontFamily: 'Roboto' }}>Competência</Text>
                </div>
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <img alt='Categoria' src={fundoCategoria1} height={'25px'} style={{ marginRight: '10px' }} />
                    <Text style={{ fontFamily: 'Roboto' }}>Categoria de Competências</Text>
                </div>
            </div>
            <Modal // Modal de Curso
                visible={modalCourseVisible}
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
            <Modal // Modal de Categoria
                visible={modalCompetenciaVisible}
                onOk={handleOk}
                onCancel={handleOk}
                title={courseOnModal.titulo}
                centered={true}
                footer={[
                    <Button type='primary' key={courseOnModal.id} onClick={handleOk}>Ok</Button>
                ]}
            >
                <Descriptions column={1} bordered>
                    <Descriptions.Item label='Descrição'>
                        {courseOnModal.descricao}
                    </Descriptions.Item>
                </Descriptions>
            </Modal>
        </Col>
    )
}
