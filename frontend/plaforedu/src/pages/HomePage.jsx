import React from 'react'
import HeaderHome from '../components/header/HeaderHome';
import Finder from '../components/Finder';
import Int1 from '../assets/itinerarios/PLAFOREDU_IconesTXT-Itinerarios_Docente.png'
import Int2 from '../assets/itinerarios/PLAFOREDU_IconesTXT-Itinerarios_EduEmpreend.png'
import Int3 from '../assets/itinerarios/PLAFOREDU_IconesTXT-Itinerarios_InicServPublico.png'
import Int4 from '../assets/itinerarios/PLAFOREDU_IconesTXT-Itinerarios_Lideranca.png'
import Int5 from '../assets/itinerarios/PLAFOREDU_IconesTXT-Itinerarios_PrepAposenta.png'
import Int6 from '../assets/itinerarios/PLAFOREDU_IconesTXT-Itinerarios_TecAdmEdu.png'

import { Link } from "react-router-dom";

import {
    Layout,
    Row,
    Col,
    Input,
    Button,
    Card,
    Divider,
} from 'antd'

const { Content } = Layout


export default function HomePage() {
    return (
        <>
            <HeaderHome />
            <Layout>
                <Content style={{ backgroundColor: 'white' }}>
                    <Finder />
                    <Divider orientation='left'>Itinerarios Formativos</Divider>
                    <Row style={{ padding: '20px 40px' }}>
                        <Col flex='auto'>
                            <Link to='/docente'>
                                <Card
                                    style={{ width: '150px', height: '220.91px', backgroundColor: '#ccc' }}
                                    cover={<img alt="example" src={Int1} />}
                                    hoverable
                                />
                            </Link>
                        </Col>
                        <Col flex='auto'>
                            <Link to='/educacaoempreendedora'>
                                <Card
                                    style={{ width: '150px', height: '220.91px', backgroundColor: '#ccc' }}
                                    cover={<img alt="example" src={Int2} />}
                                    hoverable
                                />
                            </Link>
                        </Col>
                        <Col flex='auto'>
                            <Link to='/iniciacaoaoservicopublico'>
                                <Card
                                    style={{ width: '150px', height: '220.91px', backgroundColor: '#ccc' }}
                                    cover={<img alt="example" src={Int3} />}
                                    hoverable
                                />
                            </Link>
                        </Col>
                        <Col flex='auto'>
                            <Link to='/lideranca'>
                                <Card
                                    style={{ width: '150px', height: '220.91px', backgroundColor: '#ccc' }}
                                    cover={<img alt="example" src={Int4} />}
                                    hoverable
                                />
                            </Link>
                        </Col>
                        <Col flex='auto'>
                            <Link to='/preparacaoparaaposentadoria'>
                                <Card
                                    style={{ width: '150px', height: '220.91px', backgroundColor: '#ccc' }}
                                    cover={<img alt="example" src={Int5} />}
                                    hoverable
                                />
                            </Link>
                        </Col>
                        <Col flex='auto'>
                            <Link to='/tecnicoadministrativoeducacao'>
                                <Card
                                    style={{ width: '150px', height: '220.91px', backgroundColor: '#ccc' }}
                                    cover={<img alt="example" src={Int6} />}
                                    hoverable
                                />
                            </Link>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    )
}
