import React from 'react'
import HeaderHome from '../components/header/HeaderHome';
import Finder from '../components/Finder';
import Int1 from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_Docente.png'
import Int2 from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_InicServPublico.png'
import Int3 from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_Gerencial.png'
import Int4 from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_PrepAposenta.png'
import Int5 from '../assets/itinerarios/PLAFOREDU_Itinerarios-Home_v5_TecAdmEdu.png'
import { useStoreActions, useStoreState } from 'easy-peasy'
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

    const setFilter = useStoreActions(actions => actions.cursos.setFilter)
    const filterDefault = useStoreState(state => state.cursos.filterDefault)

    const onClickItinerario = (itinerario) => {
        setFilter({ ...filterDefault, itinerario: itinerario, esquemaDeCores: 'categoria' })
    }

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
                        <Col
                            flex={'200px'}
                            style={{
                                height: '300px'
                            }}
                        >
                            <Link onClick={() => { onClickItinerario(1) }} to='/cursos'>
                                <Card
                                    style={{ width: '180px', backgroundColor: '#fff', height: '270px' }}
                                    cover={<img alt="example" src={Int2} />}
                                    hoverable
                                >
                                    <Title style={{ color: '#0059b3', fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center' }} level={5}>Iniciação ao Serviço Público</Title>
                                </Card>
                            </Link>
                        </Col>
                        <Col
                            flex={'200px'}
                            style={{
                                height: '300px'
                            }}
                        >
                            <Link onClick={() => { onClickItinerario(2) }} to='/cursos'>
                                <Card
                                    style={{ width: '180px', backgroundColor: '#fff', height: '270px' }}
                                    cover={<img alt="example" src={Int5} />}
                                    hoverable
                                >
                                    <Title style={{ color: '#0059b3', fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center' }} level={5}>Técnico-Administrativo em Educação</Title>
                                </Card>
                            </Link>
                        </Col>
                        <Col
                            flex={'200px'}
                            style={{
                                height: '300px'
                            }}
                        >
                            <Link onClick={() => { onClickItinerario(3) }} to='/cursos'>
                                <Card
                                    style={{ width: '180px', backgroundColor: '#fff', height: '270px' }}
                                    cover={<img alt="example" src={Int1} />}
                                    hoverable
                                >
                                    <Title style={{ color: '#0059b3', fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center' }} level={5}>Docente</Title>
                                </Card>
                            </Link>
                        </Col>
                        <Col
                            flex={'200px'}
                            style={{
                                height: '300px'
                            }}
                        >
                            <Link onClick={() => { onClickItinerario(4) }} to='/cursos'>
                                <Card
                                    style={{ width: '180px', backgroundColor: '#fff', height: '270px' }}
                                    cover={<img alt="example" src={Int3} />}
                                    hoverable
                                >
                                    <Title style={{ color: '#0059b3', fontFamily: 'Poppins', fontWeight: 'bold', textAlign: 'center' }} level={5}>Gerencial</Title>
                                </Card>
                            </Link>
                        </Col>
                        <Col
                            flex={'200px'}
                            style={{
                                height: '300px'
                            }}
                        >
                            <Link onClick={() => { onClickItinerario(5) }} to='/cursos'>
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
                    <div style={{
                        height: '30px',
                        backgroundImage: 'linear-gradient(to right, #2C55A1, #35A8E0)'
                    }}></div>
                </Content>
            </Layout>
        </>
    )
}
