import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Row, Layout, Drawer, Grid } from 'antd';

import {
    CloseOutlined,
} from '@ant-design/icons'

import HeaderHome from '../components/header/HeaderHome';
import SideFilter from '../components/visualization-cytoscape/SideFilter';
import RowItinerario from '../components/visualization-cytoscape/RowItinerario';
import CytoscapeVisualization from '../components/visualization-cytoscape/CytoscapeVisualization';
import CoursesListVisualization from '../components/visualization-cytoscape/CoursesListVisualization';

const { useBreakpoint } = Grid
const { Sider, Content } = Layout;

export default function CoursesPage() {

    const filterCollapsed = useStoreState(state => state.adm.filterCollapsed)
    const tipoVisualizacao = useStoreState(state => state.adm.tipoVisualizacao)
    const setFilterCollapsed = useStoreActions(actions => actions.adm.setFilterCollapsed);

    const screens = useBreakpoint()

    const onClose = () => {
        setFilterCollapsed(false);
    };


    return (
        <Layout>
            <HeaderHome />

            <Layout>
                {screens.lg ?
                    <Sider
                        width={300}
                        collapsedWidth={0}
                        trigger={null}
                        collapsible
                        collapsed={filterCollapsed}
                    >
                        <SideFilter />
                    </Sider>
                    :
                    <Drawer
                        title={'Filtro'}
                        visible={!filterCollapsed}
                        closeIcon={<CloseOutlined style={{ color: '#000' }} />}
                        placement='left' onClose={onClose}
                        width={screens.xs ? 300 : 400}
                    >
                        <SideFilter />
                    </Drawer>
                }

                <Content style={{ backgroundColor: '#fff' }} >
                    <Row>
                        <RowItinerario />
                    </Row>
                    <Row style={screens.lg ? { maxHeight: 700, overflowY: 'scroll' } : {}}>
                        {(tipoVisualizacao === false && screens.lg) ?
                            <CytoscapeVisualization /> :
                            <CoursesListVisualization />
                        }
                    </Row>
                </Content>
            </Layout>
        </Layout >
    )
}
