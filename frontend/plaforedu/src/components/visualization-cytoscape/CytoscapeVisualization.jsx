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
    const listInst = useStoreState(state => state.cursos.instituicoes)
    const [courseOnModal, setCourseOnModal] = useState(cursos[0])
    const [modalVisible, setModalVisible] = useState(false)
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
        setModalVisible(false)
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
                            setCourseOnModal(cursos.find((curso) => curso.id.toString() === element.id.replace(/curso/gi, '')))
                            setModalVisible(true)
                        }
                    });
                    cy.one("layoutready", function (event) {
                        console.log('mudou');
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
                    <img src={fundoCurso} height={'25px'} style={{ marginRight: '10px' }} />
                    <Text style={{ fontFamily: 'Roboto' }}>Curso</Text>
                </div>
                <div
                    style={{
                        display: 'flex',
                        marginBottom: '10px',
                    }}
                >
                    <img src={fundoCompetencia} height={'25px'} style={{ marginRight: '10px' }} />
                    <Text style={{ fontFamily: 'Roboto' }}>Competência</Text>
                </div>
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <img src={fundoCategoria} height={'25px'} style={{ marginRight: '10px' }} />
                    <Text style={{ fontFamily: 'Roboto' }}>Categoria de Competências</Text>
                </div>
            </div>
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
