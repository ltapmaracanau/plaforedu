import React, { useEffect } from 'react';

import HeaderHome from '../components/header/HeaderHome';

import { Row, Layout } from 'antd';

import CytoscapeVisualization from '../components/visualization-cytoscape/CytoscapeVisualization';
import CoursesListVisualization from '../components/visualization-cytoscape/CoursesListVisualization';
import SideFilter from '../components/visualization-cytoscape/SideFilter';
import { useStoreState, useStoreActions } from 'easy-peasy';
import RowItinerario from '../components/visualization-cytoscape/RowItinerario';

const { Sider, Content } = Layout;

export default function CoursesPage(props) {
    const { itinerario } = props

    const setItinerario = useStoreActions(actions => actions.cursos.setItinerario)
    const filterCollapsed = useStoreState(state => state.adm.filterCollapsed)
    const tipoVisualizacao = useStoreState(state => state.adm.tipoVisualizacao)

    useEffect(() => {
        setItinerario(itinerario)
    }, [])

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
                        <RowItinerario itinerario={itinerario} />
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
