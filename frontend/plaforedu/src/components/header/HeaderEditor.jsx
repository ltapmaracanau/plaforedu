import React from 'react'

import { Link } from "react-router-dom";
import LogoPlafor from '../../assets/PLAFORLOGO.png'
import {
  Row,
  Col,
  Image,
} from 'antd'

export default function HeaderEditor() {

  return (
    <Row wrap={false} align='middle' style={{ height: '70px', backgroundImage: 'linear-gradient(to right, #2c56a1, #35a7df)' }}>
      <Col flex='300px' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link to='/'>
          <Image
            preview={false}
            height='65px'
            style={{ padding: '5px' }}
            src={LogoPlafor}
          />
        </Link>
      </Col>
    </Row>
  )
}
