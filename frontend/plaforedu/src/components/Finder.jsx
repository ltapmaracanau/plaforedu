import React from 'react';
import { Row, Input, Typography } from 'antd';

import Fundo from '../assets/fundo02.png';
import { useStoreActions, useStoreState } from 'easy-peasy';

import {
    SearchOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

export default function Finder() {

    const filtro = useStoreState(state => state.cursos.filter)
    const changeFiltro = useStoreActions(actions => actions.cursos.changeFilter)

    const onSearch = (value) => {
        const newFilter = filtro
        newFilter.buscaInterna = value
        changeFiltro(newFilter)
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
                        height: '78px',
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
                    onPressEnter={(value) => { onSearch(value) }}
                />
            </Row>
        </>
    )
}
