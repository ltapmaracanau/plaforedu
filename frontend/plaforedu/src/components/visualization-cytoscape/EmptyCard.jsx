import React from 'react'

import {
    Col,
    Empty
} from antd

export default function EmptyCard() {
    return (
        <Col flex='auto' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Col>
    )
}
