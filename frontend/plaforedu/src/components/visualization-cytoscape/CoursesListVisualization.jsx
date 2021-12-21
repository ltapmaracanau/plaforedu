import React, { useState } from 'react'

import {
    List,
    Card,
    Col,
    Row,
    Button,
    Typography,
    Divider,
    Modal,
    Descriptions
} from 'antd'

const {
    Text
} = Typography

export default function CoursesListVisualization() {

    const listData = [
        {
            id: 1,
            title: 'Título do Curso',
            descricao: 'Descricao do curso',
            cargaHoraria: '30h',
            instCert: 'IFCE',
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
        },
        {
            id: 2,
            title: 'Título do Curso',
            descricao: 'Descricao do curso',
            cargaHoraria: '30h',
            instCert: 'IFCE',
            possuiAcessibilidade: 'Sim',
            link: 'https://www.udemy.com/course/curso-web/',
            obs: '',
        },
    ]

    const [courseOnModal, setCourseOnModal] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    const handleOk = () => {
        setModalVisible(false);
    };

    return (
        <Col flex={'auto'} style={{ height: '600px' }}>
            <Card style={{ padding: '10px', minHeight: '600px' }}>
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
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <Card
                                key={item.id}
                                hoverable
                                onClick={() => {
                                    console.log(item);
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
                footer={[
                    <Button type='primary' onClick={handleOk}>Ok</Button>
                ]}
            >
                <Descriptions column={1} bordered>
                    <Descriptions.Item label='Título'>
                        {courseOnModal.title}
                    </Descriptions.Item>
                    <Descriptions.Item label='Descrição'>
                        {courseOnModal.descricao}
                    </Descriptions.Item>
                    <Descriptions.Item label='Carga Horária'>
                        {courseOnModal.cargaHoraria}
                    </Descriptions.Item>
                    <Descriptions.Item label='Instituição Certificadora'>
                        {courseOnModal.instCert}
                    </Descriptions.Item>
                    <Descriptions.Item label='Possui Acessibilidade'>
                        {courseOnModal.possuiAcessibilidade}
                    </Descriptions.Item>
                    <Descriptions.Item label='Link'>
                        <a target="_blank" href={courseOnModal.link}>{courseOnModal.link}</a>
                    </Descriptions.Item>
                    <Descriptions.Item label='Obsevações'>
                        {courseOnModal.obs}
                    </Descriptions.Item>
                </Descriptions>
            </Modal>
        </Col>
    )
}
