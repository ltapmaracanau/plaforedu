import React, {useState, useEffect, useRef} from 'react'

import CytoscapeComponent from 'react-cytoscapejs'

import HeaderEditor from '../components/HeaderEditor';

import { 
    PlusCircleTwoTone,
    DeleteOutlined,
    UndoOutlined,
    RedoOutlined,
    CloseCircleFilled,
    SearchOutlined,
    CaretDownOutlined,
} from '@ant-design/icons';

import {
    Row,
    Col,
    Button,
    Form,
    Input,
    Card,
    Typography,
    message,
    Select,
    Layout, 
    Menu,
    Avatar
} from 'antd'

const {SubMenu} = Menu
const {
  Content,
} = Layout;

const {Text} = Typography

export default function EditPage() {

    const [idCounter, setIdCounter] = useState(4)

    const [elementoAtual, setElementoAtual] = useState(<Card>Esse é o elemento</Card>)

    const [fields, setFields] = useState([])

    const [elements, setElements] = useState([
        { 
            data: { 
                id: 1,
                icone: 'view_in_ar',
                outlabel: 'Node 1' ,
                label: '1',
                descricao: 'descrição do node 1',
                link: 'https://www.gov.br/pt-br',
                tipo: 'Video',
                objetivos: 'Objetivo 1' 
            },
            position: { x: 0, y: 0 }
        },
        { 
            data: { id: 2, 
                icone: 'view_in_ar', 
                outlabel: 'Node 2' , 
                label: '2',
                descricao: 'descrição do node 2', 
                link: 'https://www.gov.br/pt-br', 
                tipo: 'Video', 
                objetivos: 'Objetivo 1' 
            }, 
            position: { x: 100, y: 0 } 
        },
        { 
            data: { 
                id: 3, 
                source: 1,
                target: 2, 
                label: 'Edge 1', 
                tipo: 'linha' 
            }
        }
    ])

    const [itinerario, setItinerario] = useState({
        gerais : {
            nome: 'Intinerário 1',
            descricao: 'Descrição do itinerário',
            propretarios: 'ADM',
            autores: 'ADM',
            objetivos: 'Objetivos',
            tema: 'Tema 1',
            area: 'Área de conhecimento',
            eixo: 'Eixo 1',
            instCertificadora: 'MEC',
        },
        arquivo : {
            dataCriacao: '24/11/2021',
            ultimaModificacao: '24/11/2021',
            ultimaPublicacao: '24/11/2021',
            visibilidade: 'publico',
            versao: '1.0.0',
            download: '232',
            visualizacoes: 30,
            compartilhamentos: 12,
        },
    })

    const cyRef = useRef(null)

    const addNo = () => {
        setIdCounter((oldCounter) => oldCounter+1)
        setElements((oldElements) => {
            return([
                { data: { id: idCounter, label: `Nova Etapa`, descricao: `descrição da Etapa`, link: '', tipo: '', objetivos: '' }, position: { x: 500, y: 300 } },
                ...oldElements
            ])
        })
    }

    const exibirNode = (target, myElements) => {
        const id = target.id()
        setElementoAtual(null)
        myElements.forEach((e, index) => {
            if (e.data.id === id) {
                setElementoAtual(
                    <Card>
                        <Form
                            layout='vertical'
                            fields={fields}
                            onFieldsChange={( _ , allFields) => {
                                console.log(allFields);
                                setFields(allFields)

                                let elementToModify = {...e}
                                console.log(allFields);
                                allFields.forEach((field) => {
                                    elementToModify.data[field.name] = field.value
                                })
                                setElements((oldElements) => {
                                    oldElements[index] = {...elementToModify}
                                    return(oldElements)
                                })
                            }}
                        >
                            <Row gutter={[5, 5]}>
                                <Col span={24}>
                                    <Form.Item 
                                        name={'label'} // mesmo nome no objeto de elementos
                                        label={'Título'}
                                        initialValue={e.data.label}
                                        >
                                        <Input placeholder={'Título'} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item 
                                        name={'outlabel'} // mesmo nome no objeto de elementos
                                        label={'Out Label'}
                                        initialValue={e.data.outlabel}
                                        >
                                        <Input placeholder={'Out Label'} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item 
                                        name={'descricao'} // mesmo nome no objeto de elementos
                                        label={'Descrição'}
                                        initialValue={e.data.descricao}
                                        >
                                        <Input.TextArea placeholder={'Descrição'} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item 
                                        name={'icone'} // mesmo nome no objeto de elementos
                                        label={'Icone'}
                                        initialValue={e.data.icone}
                                        >
                                        <Input.TextArea placeholder={'Icone'} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item 
                                        name={'link'} // mesmo nome no objeto de elementos
                                        label={'Link'}
                                        initialValue={e.data.link}
                                        >
                                        <Input.TextArea placeholder={'Link'} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item 
                                        name={'tipo'} // mesmo nome no objeto de elementos
                                        label={'Tipo'}
                                        initialValue={e.data.tipo}
                                        >
                                        <Input.TextArea placeholder={'Tipo'} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item 
                                        name={'objetivos'} // mesmo nome no objeto de elementos
                                        label={'Objetivos'}
                                        initialValue={e.data.objetivos}
                                        >
                                        <Input.TextArea placeholder={'Objetivos'} />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                )
            }
        })
    }

    const exibirEdge = (target) => {
        const id = target.id()
        setElementoAtual(null)
        elements.forEach((e, index) => {
            if (e.data.id === id) {
                setElementoAtual(
                    <Card>
                        <Form
                            layout='vertical'
                            fields={fields}
                            onFieldsChange={( _ , allFields) => {
                                setFields(allFields)

                                let elementToModify = {...e}
                                allFields.forEach((field) => {
                                    elementToModify.data[field.name] = field.value
                                })
                                setElements((oldElements) => {
                                    oldElements[index] = {...elementToModify}
                                    return(oldElements)
                                })
                            }}
                        >
                            <Row gutter={[5, 5]}>
                                <Col span={24}>
                                    <Form.Item 
                                        name={'label'} // mesmo nome no objeto de elementos
                                        label={'Título'}
                                        initialValue={e.data.label}
                                        >
                                        <Input placeholder={'Título'} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item 
                                        name={'tipo'} // mesmo nome no objeto de elementos
                                        label={'Tipo'}
                                        initialValue={e.data.tipo}
                                        >
                                        <Select>
                                            <Select.Option value='linha'>Linha</Select.Option>
                                            <Select.Option value='seta'>Seta</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                )
            }
        })
    }

    const exibirItinerario = () => {
        setElementoAtual(null)
        setElementoAtual(
            <Card>
                <Form
                    layout='vertical'
                    fields={fields}
                    onFieldsChange={( _ , allFields) => {
                        setFields(allFields)
                        let newGerais = {}
                        allFields.forEach((field) => {
                            newGerais[field.name[0]] = field.value
                        })
                        console.log(newGerais);
                        setItinerario({gerais : {
                            nome: newGerais.nome,
                            descricao: newGerais.descricao,
                            propretarios: newGerais.propretarios,
                            autores: newGerais.autores,
                            objetivos: newGerais.objetivos,
                            tema: newGerais.tema,
                            area: newGerais.area,
                            eixo: newGerais.eixo,
                            instCertificadora: newGerais.instCertificadora,
                        }})
                    }}
                >
                    <Row gutter={[5, 5]}>
                        <Col span={24}>
                            <Form.Item 
                                name={'nome'} // mesmo nome no objeto de elementos
                                label={'Título'} 
                                initialValue={itinerario.gerais.nome}
                                >
                                <Input placeholder={'Título'} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item 
                                name={'descricao'} // mesmo nome no objeto de elementos
                                label={'Descrição'} 
                                initialValue={itinerario.gerais.descricao}
                                >
                                <Input.TextArea  placeholder={'Descrição'} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item 
                                name={'propretarios'} // mesmo nome no objeto de elementos
                                label={'Proprietários'} 
                                initialValue={itinerario.gerais.propretarios}
                                >
                                <Input.TextArea  placeholder={'Proprietários'} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item 
                                name={'autores'} // mesmo nome no objeto de elementos
                                label={'Autores'} 
                                initialValue={itinerario.gerais.autores}
                                >
                                <Input.TextArea  placeholder={'Autores'} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item 
                                name={'objetivos'} // mesmo nome no objeto de elementos
                                label={'Objetivos'} 
                                initialValue={itinerario.gerais.objetivos}
                                >
                                <Input.TextArea  placeholder={'Objetivos'} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item 
                                name={'tema'} // mesmo nome no objeto de elementos
                                label={'Tema'} 
                                initialValue={itinerario.gerais.tema}
                                >
                                <Input.TextArea  placeholder={'Tema'} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item 
                                name={'area'} // mesmo nome no objeto de elementos
                                label={'Área'} 
                                initialValue={itinerario.gerais.area}
                                >
                                <Input.TextArea  placeholder={'Área'} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item 
                                name={'eixo'} // mesmo nome no objeto de elementos
                                label={'Eixo'} 
                                initialValue={itinerario.gerais.eixo}
                                >
                                <Input.TextArea  placeholder={'Eixo'} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item 
                                name={'instCertificadora'} // mesmo nome no objeto de elementos
                                label={'Instituição Certificadora'} 
                                initialValue={itinerario.gerais.instCertificadora}
                                >
                                <Input.TextArea  placeholder={'Instituição Certificadora'} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
        )
    }



    useEffect(() => {
        const cy = cyRef.current;
        cy.on("click", function (event) {
            if (event.target === cy) {
                exibirItinerario()
            }
        });
        cy.on("click", 'edge', function (event) {
            exibirEdge(event.target)
        });
        cy.on("click", 'node', function (event) {
            console.log(event);
            exibirNode(event.target, elements)
        });

    }, []);



    let style = [          
        {
            selector: 'node',
            style: {

                'label': 'data(outlabel)',
                'target-label': 'data(outlabel)',
                'shape': 'round-diamond',
                'width': '40px',
                'height': '40px',
                'border-width' : '2px',
                'border-color' : '#ffb600',
                'color': '#ffb600',
                'background-fit': 'contain',
                'background-clip': 'none',
                'background-color': '#ffb600',
                'text-halign': 'right',
                'text-valign':'center',
                'text-margin-x': '10px',
            }
        }, 
        {
            selector: 'edge',
            style: {
                'background-color': '#ffb600',
                'text-background-color': 'yellow',
                'width': '3px',
                'target-arrow-shape': 'triangle',
                'control-point-step-size': '140px'
            }
        }
    ]

    let cytoscapeStyle = {
        width: '100%',
        height: '500px',
        backgroundColor:'#fff'
    }

    return (
        <>
            <HeaderEditor/>
            <Layout>
                <Content>
                    <Row wrap={false} >
                        <Col flex='300px' style={{padding: '5px', height: '540px', overflowY: 'scroll'}}>
                            {elementoAtual}
                        </Col>
                        <Col flex='auto'>
                                <Row gutter={[3, 0]} style={{margin: '0 0' ,backgroundColor: 'white', borderBottom: 'solid #E7E7E7 1px', padding: 3}}>
                                    <Col>
                                        <Button type='default' onClick={addNo}><PlusCircleTwoTone /> Etapa </Button>
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
                                        style={cytoscapeStyle}
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
                                        stylesheet = {style}
                                    />
                                </Row>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    )
}
