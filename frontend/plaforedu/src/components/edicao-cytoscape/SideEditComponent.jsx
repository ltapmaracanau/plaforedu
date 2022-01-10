import React, { useEffect, useState } from 'react'
import { useStoreState } from 'easy-peasy';

import {
    Card,
    Col,
    Menu
} from 'antd'

const { SubMenu } = Menu

const ElementoExemplo = () => (
    <Col flex='300px' style={{padding: '5px', minHeight: '597px', overflowY: 'scroll'}}>
        <Menu theme='dark' mode='inline'>
            {/* Itinerarios */}
            <SubMenu key='it1' title='Iniciação ao serviço público' theme='dark'>
                {/* Trilhas */}
                <SubMenu key='it1trilha1' title='Isso seria a trilha'>
                    {/* Trilhos */}
                    <Menu.Item key='it1trilha1trilho1'>
                        Isso seria o trilho
                    </Menu.Item>
                    <Menu.Item key='it1trilha1trilho2'>
                        Isso seria o trilho
                    </Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key='it2' title='Técnico administrativo em educação' theme='dark'>
                <SubMenu key='it2trilha1' title='Isso seria a trilha'>
                    <Menu.Item key='it2trilha1trilho1'>
                        Isso seria o trilho
                    </Menu.Item>
                    <Menu.Item key='it2trilha1trilho2'>
                        Isso seria o trilho
                    </Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key='it3' title='Docente' theme='dark'>
                <SubMenu key='it3trilha1' title='Isso seria a trilha'>
                    <Menu.Item key='it3trilha1trilho1'>
                        Isso seria o trilho
                    </Menu.Item>
                    <Menu.Item key='it3trilha1trilho2'>
                        Isso seria o trilho
                    </Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key='it4' title='Gerencial (Liderança)' theme='dark'>
                <SubMenu key='it4trilha1' title='Isso seria a trilha'>
                    <Menu.Item key='it4trilha1trilho1'>
                        Isso seria o trilho
                    </Menu.Item>
                    <Menu.Item key='it4trilha1trilho2'>
                        Isso seria o trilho
                    </Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key='it5' title='Preparação para aposentadoria' theme='dark'>
                <SubMenu key='it5trilha1' title='Isso seria a trilha'>
                    <Menu.Item key='it5trilha1trilho1'>
                        Isso seria o trilho
                    </Menu.Item>
                    <Menu.Item key='it5trilha1trilho2'>
                        Isso seria o trilho
                    </Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key='it6' title='Educação empreendedora e ACT SEBRAE' theme='dark'>
                <SubMenu key='it6trilha1' title='Isso seria a trilha'>
                    <Menu.Item key='it6trilha1trilho1'>
                        Isso seria o trilho
                    </Menu.Item>
                    <Menu.Item key='it6trilha1trilho2'>
                        Isso seria o trilho
                    </Menu.Item>
                </SubMenu>
            </SubMenu>
        </Menu>
    </Col>
)

const Filtros = () => {
    return(<Card>Aqui vão ficar os filtros</Card>)
}

export default function SideEditComponent() {

    const todos_itinerarios = useStoreState(state => state.itinerarios);
    const todas_trilhas = useStoreState(state => state.trilhas);
    const todos_trilhos = useStoreState(state => state.trilhos);

    // Esse cara pega todos os itinerarios/trilhas/trilhas e transforma nos itens do menu lateral
    const [menuElements, setMenuElements] = useState(null)

    return (
        <ElementoExemplo/>
    )
}