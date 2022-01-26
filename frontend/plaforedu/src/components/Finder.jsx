import React from 'react';
import { Row, Input, Typography } from 'antd';

import Fundo from '../assets/fundo01.png';
import { useStoreActions, useStoreState } from 'easy-peasy';

const { Title } = Typography;
const { Search } = Input;

export default function Finder() {

    const filtro = useStoreState(state => state.cursos.filter)
    const changeFiltro = useStoreActions(actions => actions.cursos.changeFilter)

    const onSearch = (value) => {
        const newFilter = filtro
        newFilter.buscaInterna = value
        changeFiltro(newFilter)
    }

    return (
        <Row
            style={{
                backgroundPosition: 'center bottom',
                backgroundImage: `url(${Fundo})`,
                backgroundRepeat: 'no-repeat',
                height: '300px',
                justifyContent: 'center',
            }}
        >
            <Title
                level={3}
                style={{
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'montserrat',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 20%'
                }}
            >
                Plano de Formação Continuada dos Servidores da Rede Federal de Educação Profissional e Tecnológica
            </Title>
            <Search
                size='middle'
                style={{ maxWidth: '30%' }}
                placeholder="Buscar"
                onSearch={onSearch}
                enterButton
            />
        </Row>
    )
}
