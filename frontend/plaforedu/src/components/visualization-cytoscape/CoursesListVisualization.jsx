import React from 'react'

import {
    List,
    Card,
    Col,
} from 'antd'

export default function CoursesListVisualization() {

    const listData = [
        {
            title: 'Título do Curso',
            content: 'Demais dados do curso'
        },
    ]

    return (
        <Col flex={'auto'} style={{ height: '600px' }}>
            <Card style={{ padding: '10px', minHeight: '600px' }}>
                <List
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title}>{item.content}</Card>
                        </List.Item>
                    )}
                />
            </Card>
        </Col>
    )
}
