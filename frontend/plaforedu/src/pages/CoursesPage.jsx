import React, { useState } from 'react'

import HeaderHome from '../components/header/HeaderHome'
import Finder from '../components/Finder'

import {
    Row,
    Layout,
    Col,
    Divider,
} from 'antd'

import CytoscapeVisualization from '../components/visualization-cytoscape/CytoscapeVisualization'
import CoursesListVisualization from '../components/visualization-cytoscape/CoursesListVisualization'
import SideFilter from '../components/visualization-cytoscape/SideFilter';
import { useStoreState } from 'easy-peasy';

const {
    Content,
} = Layout;

export default function CytocscapePage() {

    const visualizationType = useStoreState(state => state.adm.visualizationType)

    return (
        <>
            <HeaderHome />
            <Finder />
            <Layout>
                <Content>
                    <Divider orientation='left'>Iniciação ao Serviço Público</Divider>
                    <Row wrap={false}>
                        <SideFilter />
                        {visualizationType === false ?
                            <CoursesListVisualization /> :
                            <CytoscapeVisualization />
                        }
                    </Row>
                </Content>
            </Layout>
        </>
    )
}
