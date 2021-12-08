import React from 'react'

import {
    Col,
    Card,
    Menu
} from 'antd'

const { SubMenu } = Menu

export default function SideEditComponent() {
    return (
        <Col flex='300px' style={{padding: '5px', minHeight: '597px', overflowY: 'scroll'}}>
            <Menu theme='dark' mode='inline'>
                {/* Itinerarios */}
                <SubMenu key='int1' title='Iniciação ao serviço público' theme='dark'>
                    {/* Trilhas */}
                    <SubMenu key='trilha1int1' title='Isso seria a trilha'>
                        {/* Trilhos */}
                        <Menu.Item key='trilho1'>
                            Isso seria o trilho
                        </Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        </Col>
    )
}
