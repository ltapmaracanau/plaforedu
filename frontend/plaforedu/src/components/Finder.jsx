import React from 'react';
import { Row, Input, Typography, Col } from 'antd';
import { useNavigate } from 'react-router-dom'

import Fundo from '../assets/fundo02.png';
import { useStoreActions, useStoreState } from 'easy-peasy';

import {
    SearchOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

export default function Finder() {

    let navigate = useNavigate();

    const setFiltro = useStoreActions(actions => actions.cursos.setFilter)
    const filtroDefault = useStoreState(state => state.cursos.filterDefault)

    const onSearch = (value) => {
        setFiltro({ ...filtroDefault, buscaInterna: value })
        navigate(`/cursos`)
    }

    return (
        <>
            <Row
                style={{
                    backgroundPosition: 'center top',
                    backgroundImage: `url(${Fundo})`,
                    backgroundRepeat: 'no-repeat',
                    height: '486px',
                    justifyContent: 'center',
                    alignItems: 'end',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#3183C4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
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

            </Row>
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
                    flex={'80%'}
                    style={{
                        textAlign: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Roboto',
                            fontWeight: 'bold',
                            fontSize: '20px'
                        }}
                    >
                        O PlaforEdu é a plataforma utilizada pelo Plano de Formação Continuada dos Servidores da Rede Federal de Educação Profissional, Científica e Tecnológica (<a href='http://portal.mec.gov.br/apresentacao-plafor' style={{ textDecoration: 'none' }}>PLAFOR</a>). A plataforma tem como objetivo proporcionar um espaço onde os servidores podem encontrar capacitações com a finalidade de potencializar a atuação da Educação Profissional no âmbito da Rede Federal de Educação Profissional, Científica e Tecnológica (RFEPCT).
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
