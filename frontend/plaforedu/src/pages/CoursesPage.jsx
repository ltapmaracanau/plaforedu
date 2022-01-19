import React from 'react';

import HeaderHome from '../components/header/HeaderHome';

import { Row, Layout } from 'antd';

import CytoscapeVisualization from '../components/visualization-cytoscape/CytoscapeVisualization';
import CoursesListVisualization from '../components/visualization-cytoscape/CoursesListVisualization';
import SideFilter from '../components/visualization-cytoscape/SideFilter';
import { useStoreState } from 'easy-peasy';
import RowItinerario from '../components/visualization-cytoscape/RowItinerario';

const { Content } = Layout;

export default function CoursesPage(props) {


    const { itinerario } = props

    const tipoVisualizacao = useStoreState(state => state.adm.tipoVisualizacao)

    return (
        <>
            <HeaderHome />

            <RowItinerario itinerario={itinerario} />
            <Layout>
                <Content>
                    <Row wrap={false}>
                        <SideFilter />
                        {tipoVisualizacao === false ?
                            <CytoscapeVisualization /> :
                            <CoursesListVisualization />
                        }
                    </Row>
                </Content>
            </Layout>
        </>
    )
}
