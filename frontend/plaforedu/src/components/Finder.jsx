import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Input, Typography, Col, Carousel, Grid, Image } from 'antd';
import { useNavigate } from 'react-router-dom'

import PLAFORLOGO from '../assets/PLAFOR.png'
import Fundo1 from '../assets/fundo1.png';
import Fundo2 from '../assets/fundo2.png';
import Fundo3 from '../assets/fundo3.png';
import { useStoreActions, useStoreState } from 'easy-peasy';

import {
    SearchOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

export default function Finder() {

    let navigate = useNavigate();
    let screens = useBreakpoint();
    const setFiltro = useStoreActions(actions => actions.cursos.setFilter)
    const filtroDefault = useStoreState(state => state.cursos.filterDefault)

    const onSearch = (value) => {
        setFiltro({ ...filtroDefault, buscaInterna: value })
        navigate(`/cursos`)
    }

    return (
        <>
            <Carousel>

                <div>
                    <Row
                        style={{
                            backgroundPosition: 'top center',
                            backgroundImage: `url(${Fundo1})`,
                            backgroundRepeat: 'no-repeat',
                            height: '408px',
                            backgroundSize: screens.xxl ? '100% auto' : 'auto auto',
                            justifyContent: 'left',
                            alignItems: 'center',
                        }}
                    >
                        <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={screens.lg ? { marginLeft: '100px' } : { marginLeft: '50px' }}>
                                <Title style={{ color: '#fff', fontFamily: 'Roboto' }} >Conheça a Plataforma PlaforEDU</Title>
                                <Link to={'/about'}><Text style={{ color: '#fff', fontFamily: 'Roboto', fontWeight: 'bold' }} >SAIBA MAIS</Text></Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row
                        style={{
                            backgroundPosition: 'center center',
                            backgroundImage: `url(${Fundo2})`,
                            backgroundRepeat: 'no-repeat',
                            height: '408px',
                            backgroundSize: screens.xxl ? '100%' : 'auto auto',
                            justifyContent: 'left',
                            alignItems: 'center',
                        }}
                    >
                        <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={screens.xl ? { marginLeft: '100px' } : { marginLeft: '50px' }}>
                                <Title style={{ color: '#fff', fontFamily: 'Roboto' }} >Itinerários e Trilhas Formativas</Title>
                                <Link to={'/about'}><Text style={{ color: '#fff', fontFamily: 'Roboto', fontWeight: 'bold' }} >SAIBA MAIS</Text></Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row
                        style={{
                            backgroundPosition: 'top center',
                            backgroundImage: `url(${Fundo3})`,
                            backgroundRepeat: 'no-repeat',
                            height: '408px',
                            backgroundSize: screens.xxl ? '100% auto' : 'auto auto',
                            justifyContent: 'left',
                            alignItems: 'center',
                        }}
                    >
                        <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={screens.lg ? { marginLeft: '100px' } : { marginLeft: '50px' }}>
                                <Title style={{ color: '#fff', fontFamily: 'Roboto' }} >Categorias de Competências</Title>
                                <Link to={'/about'}><Text style={{ color: '#fff', fontFamily: 'Roboto', fontWeight: 'bold' }} >SAIBA MAIS</Text></Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Carousel>
            <div
                style={{
                    backgroundColor: '#3183C4',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '78px',
                    padding: '10px, 0px',
                }}
            >
                <Title
                    level={3}
                    style={{
                        margin: '0px',
                        fontFamily: 'Roboto',
                        fontWeight: 500,
                        fontSize: '25px',
                        textAlign: 'center',
                        color: '#FFFFFF',
                        width: '70%',
                    }}
                >
                    Plano de Formação Continuada dos Servidores da Rede Federal de Educação Profissional, Científica e Tecnológica
                </Title>
            </div>
            <Row
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottom: '10px solid #3291CF4D',
                    borderTop: '10px solid #3291CF4D',
                    padding: '40px 0px'
                }}
            >
                <Col
                    style={{
                        margin: '20px'
                    }}
                >
                    <Image src={PLAFORLOGO} preview={false} draggable='false' />
                </Col>
                <Col
                    flex={'70%'}
                    style={{
                        textAlign: 'left',
                        margin: '20px'
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Roboto',
                            fontWeight: 'bold',
                            fontSize: '20px',
                        }}
                    >
                        Um espaço onde os servidores podem encontrar capacitações com a finalidade de potencializar a atuação da Educação Profissional no âmbito da Rede Federal de Educação Profissional, Científica e Tecnológica (RFEPCT).
                    </Text>
                </Col>
            </Row>
            <Row
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '185px'
                }}
            >
                <Input
                    size='large'
                    className='inputSearch'
                    style={{
                        width: '70%',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: '39px',
                        backgroundColor: '#EFE8E8',
                        fontFamily: 'Roboto',
                        fontSize: '26px',
                        padding: '10px, 0',
                        color: '#AAA4A4',
                        boxShadow: '0px 11px 15px 0px rgba(0,0,0,0.38)'
                    }}
                    prefix={<SearchOutlined style={{ margin: '0 16px' }} />}
                    bordered={false}
                    placeholder={"Busque aqui"}
                    onPressEnter={(e) => { onSearch(e.target.value) }}
                />
            </Row>
        </>
    )
}
