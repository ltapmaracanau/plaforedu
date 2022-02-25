import React from 'react';
import { useStoreState } from 'easy-peasy';
import { Row, Layout } from 'antd';




import HeaderHome from '../components/header/HeaderHome';
import SideFilter from '../components/visualization-cytoscape/SideFilter';
import RowItinerario from '../components/visualization-cytoscape/RowItinerario';
import CytoscapeVisualization from '../components/visualization-cytoscape/CytoscapeVisualization';
import CoursesListVisualization from '../components/visualization-cytoscape/CoursesListVisualization';

const { Sider, Content } = Layout;

export default function CoursesPage() {

    const filterCollapsed = useStoreState(state => state.adm.filterCollapsed)
    const tipoVisualizacao = useStoreState(state => state.adm.tipoVisualizacao)

    return (
        <Layout>
            <HeaderHome />

            <Layout>
                <Sider
                    width={300}
                    collapsedWidth={0}
                    trigger={null}
                    collapsible
                    collapsed={filterCollapsed}
                >
                    <SideFilter />
                </Sider>

                <Content style={{ backgroundColor: '#fff' }} >
                    <Row>
                        <RowItinerario />
                    </Row>

                    <Row style={{ maxHeight: 700, overflowY: 'scroll' }}>
                        {tipoVisualizacao === false ?
                            <CytoscapeVisualization /> :
                            <CoursesListVisualization />
                        }
                    </Row>
                </Content>
            </Layout>
        </Layout>
    )
}
