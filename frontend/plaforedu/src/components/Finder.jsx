import React from 'react';
import { Row, Input } from 'antd';

import Fundo from '../assets/fundo01.png';

const { Search } = Input;

export default function Finder() {

    const onSearch = (value) => {
        console.log('Buscando globalmente: ', value);
    }

    return (
        <Row
            style={{
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundPosition: 'center bottom',
                backgroundImage: `url(${Fundo})`
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
