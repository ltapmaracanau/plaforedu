import React from 'react'
import ItemSideFilter from './ItemSideFilter'

import {
    Col,
    Switch,
    Typography,
    Select,
    Slider
} from 'antd'

import { useStoreActions, useStoreState } from 'easy-peasy'


const { Text } = Typography

const marks = {
    0: '0h',
    80: '80h',
    120: '120h',
    200: '200h',
};

export default function SideFilter() {

    const visualizationType = useStoreState(state => state.adm.visualizationType)
    const changeVisualizationType = useStoreActions(actions => actions.adm.changeVisualizationType)

    return (
        <Col flex='300px' style={{ padding: '5px', height: '600px', overflowY: 'scroll' }}>
            <ItemSideFilter
                label='Tipo de Visualização:'
                element={
                    <Switch
                        checkedChildren="Grafo"
                        unCheckedChildren="Lista"
                        defaultChecked={visualizationType}
                        onChange={(value) => {
                            changeVisualizationType(value)
                        }}
                    />
                }
            />
            <ItemSideFilter
                label={'Categoria:'}
                element={
                    <Select
                        mode='multiple'
                        showArrow
                        defaultValue={0}
                        style={{ width: '100%' }}
                    >
                        <Select.Option value={0}>Todas as Categorias</Select.Option>
                        <Select.Option value={1}>Categoria 1</Select.Option>
                        <Select.Option value={2}>Categoria 2</Select.Option>
                        <Select.Option value={3}>Categoria 3</Select.Option>
                        <Select.Option value={4}>Categoria 4</Select.Option>
                        <Select.Option value={5}>Categoria 5</Select.Option>
                        <Select.Option value={6}>Categoria 6</Select.Option>
                    </Select>
                }
            />
            <ItemSideFilter
                label={'Tema:'}
                element={
                    <Select
                        mode='multiple'
                        showArrow
                        defaultValue={0}
                        style={{ width: '100%' }}
                    >
                        <Select.Option value={0}>Todos os Temas</Select.Option>
                        <Select.Option value={1}>Tema 1</Select.Option>
                        <Select.Option value={2}>Tema 2</Select.Option>
                        <Select.Option value={3}>Tema 3</Select.Option>
                        <Select.Option value={4}>Tema 4</Select.Option>
                        <Select.Option value={5}>Tema 5</Select.Option>
                        <Select.Option value={6}>Tema 6</Select.Option>
                    </Select>
                }
            />
            <ItemSideFilter
                label={'Subtema:'}
                element={
                    <Select
                        mode='multiple'
                        showArrow
                        defaultValue={0}
                        style={{ width: '100%' }}
                    >
                        <Select.Option value={0}>Todos os Subtemas</Select.Option>
                        <Select.Option value={1}>Subtema 1</Select.Option>
                        <Select.Option value={2}>Subtema 2</Select.Option>
                        <Select.Option value={3}>Subtema 3</Select.Option>
                        <Select.Option value={4}>Subtema 4</Select.Option>
                        <Select.Option value={5}>Subtema 5</Select.Option>
                        <Select.Option value={6}>Subtema 6</Select.Option>
                    </Select>
                }
            />
            <ItemSideFilter
                label={'Carga Horária:'}
                element={
                    <Slider
                        range
                        marks={marks}
                        step={10}
                        max={200}
                        defaultValue={[0, 200]}
                    />
                }
            />
            <ItemSideFilter
                label={'Instituição certificadora:'}
                element={
                    <Select
                        mode='multiple'
                        showArrow
                        defaultValue={0}
                        style={{ width: '100%' }}
                    >
                        <Select.Option value={0}>Todos as Instituições</Select.Option>
                        <Select.Option value={1}>Instituição 1</Select.Option>
                        <Select.Option value={2}>Instituição 2</Select.Option>
                        <Select.Option value={3}>Instituição 3</Select.Option>
                        <Select.Option value={4}>Instituição 4</Select.Option>
                        <Select.Option value={5}>Instituição 5</Select.Option>
                        <Select.Option value={6}>Instituição 6</Select.Option>
                    </Select>
                }
            />
        </Col>
    )
}
