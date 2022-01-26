import React, { useRef, useEffect, useState } from 'react'
import { useStoreState } from 'easy-peasy';

import CytoscapeComponent from 'react-cytoscapejs'

import {
    Col,
    Modal,
    Descriptions,
    Button
} from 'antd'

export default function CytoscapeVisualization() {

    const cyRef = useRef(null)

    const cytoscapeStyle = useStoreState(state => state.cytoscape.cytoscapeStyle);
    const componentStyle = useStoreState(state => state.cytoscape.componentStyle);
    const elements = useStoreState(state => state.cursos.elements);
    const cursos = useStoreState(state => state.cursos.cursos)
    const listInst = useStoreState(state => state.cursos.instituicoes)
    const [courseOnModal, setCourseOnModal] = useState(cursos[0])
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        const cy = cyRef.current;
        cy.on("click", 'node', function (event) {
            const element = event.target._private.data
            setCourseOnModal(cursos.find((curso) => curso.id.toString() === element.id))
            setModalVisible(true)
        });

    }, []);

    const handleOk = () => {
        setModalVisible(false)
    }


    return (
        <Col flex='auto' style={{ height: '600px' }}>
            <CytoscapeComponent
                elements={elements}
                minZoom={0.1}
                maxZoom={2}
                cy={(cy) => { cyRef.current = cy }}
                style={componentStyle}
                layout={{
                    name: 'cose',
                    fit: true,
                    directed: true,
                    padding: 50,
                    animate: false,
                    animationDuration: 3000,
                    avoidOverlap: true,
                    nodeDimensionsIncludeLabels: false
                }}
                stylesheet={cytoscapeStyle}
            />
            <Modal
                visible={modalVisible}
                onOk={handleOk}
                onCancel={handleOk}
                title={courseOnModal.title}
                centered={true}
                footer={[
                    <Button type='primary' key={courseOnModal.id} onClick={handleOk}>Ok</Button>
                ]}
            >
                <Descriptions column={1} bordered>
                    <Descriptions.Item label='Descrição'>
                        {courseOnModal.descricao}
                    </Descriptions.Item>
                    <Descriptions.Item label='Carga Horária'>
                        {courseOnModal.cargaHoraria}
                    </Descriptions.Item>
                    <Descriptions.Item label='Instituição Certificadora'>
                        {listInst.filter(instituicao => courseOnModal.instCert.includes(instituicao.id)).map(instituicao => instituicao.titulo).join(', ')}
                    </Descriptions.Item>
                    <Descriptions.Item label='Possui Acessibilidade'>
                        {courseOnModal.possuiAcessibilidade}
                    </Descriptions.Item>
                    <Descriptions.Item label='Link'>
                        <a target="_blank" rel="noreferrer" href={courseOnModal.link}>{courseOnModal.link}</a>
                    </Descriptions.Item>
                    <Descriptions.Item label='Obsevações'>
                        {courseOnModal.obs}
                    </Descriptions.Item>
                </Descriptions>
            </Modal>
        </Col>
    )
}
