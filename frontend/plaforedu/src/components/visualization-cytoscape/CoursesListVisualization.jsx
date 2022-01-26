import React, { useState } from 'react'

import {
    List,
    Card,
    Col,
    Button,
    Modal,
    Descriptions
} from 'antd'

import { useStoreState } from 'easy-peasy'

export default function CoursesListVisualization() {

    const listData = useStoreState(state => state.cursos.cursos)
    const cursosFiltrados = useStoreState(state => state.cursos.cursosFiltrados)
    const listInst = useStoreState(state => state.cursos.instituicoes)
    const [courseOnModal, setCourseOnModal] = useState(listData[0])
    const [modalVisible, setModalVisible] = useState(false)

    const handleOk = () => {
        setModalVisible(false);
    };

    return (
        <Col flex={'auto'} style={{ height: '600px', overflow: 'scroll' }}>
            <Card style={{ padding: '10px', minHeight: '600px', background: '#eee' }}>
                <List
                    grid={{
                        gutter: 40,
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                    }}
                    dataSource={listData.filter(curso => cursosFiltrados.includes(curso.id))}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <Card
                                key={item.id}
                                hoverable
                                onClick={() => {
                                    setCourseOnModal(item)
                                    setModalVisible(true)
                                }}
                                title={item.title}
                            >
                                {item.descricao}
                            </Card>
                        </List.Item>
                    )}
                />
            </Card>
            <Modal
                visible={modalVisible}
                onOk={handleOk}
                onCancel={handleOk}
                title={courseOnModal.title}
                centered={true}
                footer={[
                    <Button type='primary' onClick={handleOk}>Ok</Button>
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