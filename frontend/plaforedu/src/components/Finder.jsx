import React from 'react'
import Fundo from '../assets/fundo01.png'
import {
    SearchOutlined
} from '@ant-design/icons';

import {
    Row,
    Col,
    Input,
    Button
} from 'antd'

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
            <Col>
                <Search size='large' placeholder="Buscar" onSearch={onSearch} enterButton />
            </Col>
        </Row>
    )
}
