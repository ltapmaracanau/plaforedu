import React from 'react'
import HeaderHome from '../components/header/HeaderHome';
import Finder from '../components/Finder';
import Int1 from '../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_Docente.png'
import Int2 from '../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_InicServPublico.png'
import Int3 from '../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_Gerencial.png'
import Int4 from '../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_PrepAposenta.png'
import Int5 from '../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_TecAdmEdu.png'

import { Link } from "react-router-dom";

import {
    Layout,
    Row,
    Col,
    Card,
    Divider,
    Typography
} from 'antd'

const { Title } = Typography

const { Content } = Layout


export default function HomePage() {
    return (
        <>
            <HeaderHome />
            <Layout>
                <Content style={{ backgroundColor: 'white' }}>
                    <Finder />

                    <Divider orientation='left'>Itinerários Formativos</Divider>

                    <Row
                        style={{
                            display: 'flex',
                            alignItems: 'top',
                            justifyContent: 'space-evenly',
                            margin: '32px 0'
                        }}
                    >
                        <Col>
                            <Link to='/iniciacaoaoservicopublico'>
                                <Card
                                    style={{ width: '180px', backgroundColor: '#fff', height: '270px' }}
                                    cover={<img alt="example" src={Int2} />}
                                    hoverable
                                >
                                    <Title style={{ color: '#0059b3', fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center' }} level={5}>Iniciação ao Serviço Público</Title>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/tecnicoadministrativoeducacao'>
                                <Card
                                    style={{ width: '180px', backgroundColor: '#fff', height: '270px' }}
                                    cover={<img alt="example" src={Int5} />}
                                    hoverable
                                >
                                    <Title style={{ color: '#0059b3', fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center' }} level={5}>Técnico Administrativo em Educação</Title>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/docente'>
                                <Card
                                    style={{ width: '180px', backgroundColor: '#fff', height: '270px' }}
                                    cover={<img alt="example" src={Int1} />}
                                    hoverable
                                >
                                    <Title style={{ color: '#0059b3', fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center' }} level={5}>Docente</Title>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/lideranca'>
                                <Card
                                    style={{ width: '180px', backgroundColor: '#fff', height: '270px' }}
                                    cover={<img alt="example" src={Int3} />}
                                    hoverable
                                >
                                    <Title style={{ color: '#0059b3', fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center' }} level={5}>Gerencial</Title>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/preparacaoparaaposentadoria'>
                                <Card
                                    style={{ width: '180px', backgroundColor: '#fff', height: '270px' }}
                                    cover={<img alt="example" src={Int4} />}
                                    hoverable
                                >
                                    <Title style={{ color: '#0059b3', fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center' }} level={5}>Preparação para Aposentadoria</Title>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    )
}
