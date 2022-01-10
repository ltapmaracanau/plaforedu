import React from 'react'

import {
    SearchOutlined
} from '@ant-design/icons';

import {
    Row,
    Col,
    Input,
    Button
} from 'antd'

export default function Finder() {
    return (
        <Row style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Col>
                <Input
                    size='large'
                    placeholder='Buscar'
                    prefix={
                        <Button
                            style={{ borderStyle: 'none' }}
                            shape="circle"
                            icon={<SearchOutlined />}
                        />
                    }
                />
            </Col>
        </Row>
    )
}
