import React from 'react';
import HeaderHome from '../components/header/HeaderHome';
import video from '../assets/about/video.png'
import mandala from '../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_Completa.png'
import retangulo from '../assets/about/Rectangle.png'

import {
    Layout,
    Row,
    Col,
    Card,
    Typography,
    Image,
} from 'antd'

const { Text, Title } = Typography

const { Content } = Layout

export default function AboutPage() {
    return (
        <>
            <HeaderHome />
            <Layout>
                <Content
                    style={{
                        backgroundColor: '#3291CF4D'
                    }}
                >
                    <Card
                        bodyStyle={{
                            height: '490px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        style={{
                            marginBottom: '5px'
                        }}
                    >
                        <Row align='middle'>
                            <Col
                                span={12}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    src={video}
                                    preview={false}
                                    width={534}
                                />
                            </Col>
                            <Col
                                span={12}
                                style={{ padding: '30px' }}
                            >
                                <Title
                                    style={{
                                        fontFamily: 'Poppins',
                                        fontSize: '30px',
                                        color: '#2C55A1',
                                    }}
                                >
                                    PlaforEdu
                                </Title>
                                <Text
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                    }}
                                >
                                    O PlaforEdu é a plataforma utilizada pelo Plano de Formação Continuada dos Servidores da Rede Federal de Educação Profissional, Científica e Tecnológica (<a href='http://portal.mec.gov.br/apresentacao-plafor' style={{ textDecoration: 'none' }}>PLAFOR</a>). A plataforma tem como objetivo proporcionar um espaço onde os servidores podem encontrar capacitações com a finalidade de potencializar a atuação da Educação Profissional no âmbito da Rede Federal de Educação Profissional, Científica e Tecnológica (RFEPCT).
                                </Text>
                            </Col>
                        </Row>
                    </Card>
                    <Card
                        bodyStyle={{
                            height: '490px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        style={{
                            marginBottom: '5px'
                        }}
                    >
                        <Row align='middle'>
                            <Col
                                span={12}
                                style={{ padding: '40px' }}
                            >
                                <Title
                                    style={{
                                        fontFamily: 'Poppins',
                                        fontSize: '30px',
                                        color: '#2C55A1',
                                    }}
                                >
                                    Itinerários Formativos
                                </Title>
                                <Text
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                    }}
                                >
                                    O PlaforEdu reúne diversos cursos online abertos (Cursos Mooc) ofertados por diversas instituições de ensino da RFEPCT, que dão suporte ao desenvolvimento das competências recomendadas para um setor público de alto desempenho através de Itinerários Formativos. No PlaforEdu você pode buscar as competências associadas ao seu perfil profissional, a partir de uma busca simples, e ter acesso a todos os cursos relacionados àquelas competências.
                                </Text>
                            </Col>
                            <Col
                                span={12}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    src={mandala}
                                    preview={false}
                                    width={375}
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Card
                        bodyStyle={{
                            height: '490px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        style={{
                            marginBottom: '5px'
                        }}
                    >
                        <Row align='middle'>
                            <Col
                                span={8}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    src={retangulo}
                                    preview={false}
                                    width={278}
                                />
                            </Col>
                            <Col
                                span={16}
                                style={{ padding: '40px' }}
                            >
                                <Title
                                    style={{
                                        fontFamily: 'Poppins',
                                        fontSize: '30px',
                                        color: '#2C55A1',
                                    }}
                                >
                                    Trilhas Formativas
                                </Title>
                                <Text
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '24px',
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vel ab officiis expedita alias modi optio, consectetur voluptatibus adipisci reiciendis omnis natus rem illum similique obcaecati reprehenderit exercitationem molestiae nam.
                                </Text>
                            </Col>
                        </Row>
                    </Card>
                </Content>
            </Layout>
        </>
    )
}
