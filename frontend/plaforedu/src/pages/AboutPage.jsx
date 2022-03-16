import React from 'react';
import HeaderHome from '../components/header/HeaderHome';
import video from '../assets/about/video1.jpg'
import mandala from '../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_v5_Completa.png'
import retangulo from '../assets/about/Rectangle.png'
import infografico from '../assets/about/PLAFOR_Categorias-Competencias_Infografico_v4.png'

import {
    Layout,
    Row,
    Col,
    Card,
    Typography,
    Image,
    Grid,
} from 'antd'

const { Text, Title } = Typography
const { useBreakpoint } = Grid
const { Content } = Layout

export default function AboutPage() {

    const screens = useBreakpoint()
    console.log(screens);

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
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        style={{
                            marginBottom: '5px'
                        }}
                    >
                        <Row
                            align='middle'
                            wrap={!screens.lg}
                        >
                            <Col
                                flex={!screens.lg ? 12 : 24}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    src={video}
                                    preview={false}
                                    width={screens.sm ? 534 : 350}
                                />
                            </Col>
                            <Col
                                flex={!screens.lg ? 12 : 24}
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
                                        fontSize: '20px',
                                    }}
                                >
                                    O PlaforEdu é a plataforma utilizada pelo Plano de Formação Continuada dos Servidores da Rede Federal de Educação Profissional, Científica e Tecnológica (<a href='http://portal.mec.gov.br/apresentacao-plafor' style={{ textDecoration: 'none' }}>PLAFOR</a>). A plataforma tem como objetivo proporcionar um espaço onde os servidores podem encontrar capacitações com a finalidade de potencializar a atuação da Educação Profissional no âmbito da Rede Federal de Educação Profissional, Científica e Tecnológica (RFEPCT).
                                </Text>
                            </Col>
                        </Row>
                    </Card>
                    <Card
                        bodyStyle={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        style={{
                            marginBottom: '5px'
                        }}
                    >
                        <Row align='middle' wrap={!screens.lg} >
                            <Col
                                flex={screens.lg ? 12 : 24}
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
                                        fontSize: '20px',
                                    }}
                                >
                                    O PlaforEdu reúne diversos cursos online abertos (Cursos Mooc) ofertados por diversas instituições de ensino da RFEPCT, que dão suporte ao desenvolvimento das competências recomendadas para um setor público de alto desempenho através de Itinerários Formativos. No PlaforEdu você pode buscar as competências associadas ao seu perfil profissional, a partir de uma busca simples, e ter acesso a todos os cursos relacionados àquelas competências.
                                </Text>
                            </Col>
                            <Col
                                flex={screens.lg ? 12 : 24}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    src={mandala}
                                    preview={false}
                                    width={!screens.xs ? 375 : 250}
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Card
                        bodyStyle={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        style={{
                            marginBottom: '5px'
                        }}
                    >
                        <Row align='middle' wrap={!screens.lg}>
                            <Col
                                flex={screens.lg ? 12 : 24}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                order={screens.lg ? 0 : 1}
                            >
                                <Image
                                    src={retangulo}
                                    preview={false}
                                    width={278}
                                />
                            </Col>
                            <Col
                                flex={screens.lg ? 12 : 24}
                                style={{ padding: '40px' }}
                                order={screens.lg ? 1 : 0}
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
                                        fontSize: '20px',
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vel ab officiis expedita alias modi optio, consectetur voluptatibus adipisci reiciendis omnis natus rem illum similique obcaecati reprehenderit exercitationem molestiae nam.
                                </Text>
                            </Col>
                        </Row>
                    </Card>
                    <Card
                        style={{
                            marginBottom: '5px'
                        }}
                    >
                        <Row align='middle'>
                            <Col
                                span={24}
                                style={{ padding: '40px' }}
                            >
                                <Title
                                    style={{
                                        fontFamily: 'Poppins',
                                        fontSize: '30px',
                                        color: '#2C55A1',
                                    }}
                                >
                                    Categorias de Competências
                                </Title>
                                <Text
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontSize: '20px',
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vel ab officiis expedita alias modi optio, consectetur voluptatibus adipisci reiciendis omnis natus rem illum similique obcaecati reprehenderit exercitationem molestiae nam.
                                </Text>
                            </Col>
                            <Col
                                span={24}
                                style={{ padding: '40px' }}
                            >
                                <Image
                                    preview={false}
                                    src={infografico}
                                    width={'100%'}
                                />
                            </Col>
                        </Row>
                    </Card>
                </Content>
            </Layout>
        </>
    )
}
