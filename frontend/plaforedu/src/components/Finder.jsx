import React from 'react';
import { Row, Input } from 'antd';

import Fundo from '../assets/fundo01.png';
import { useStoreActions, useStoreState } from 'easy-peasy';

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
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundPosition: 'center bottom',
                backgroundImage: `url(${Fundo})`,
                backgroundRepeat: 'no-repeat'
            }}
        >
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
