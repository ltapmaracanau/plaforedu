import React from 'react'

import { Card, Col, Row, Typography } from 'antd'
const { Text } = Typography

export default function ItemSideFilter({ label, children }) {

    return (
        <Card>
            <Row style={{ marginBottom: '15px' }}>
                <Col>
                    <Text>{label}</Text>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    {children}
                </Col>
            </Row>
        </Card>
    )
}