import React from 'react'

import { Link } from "react-router-dom";

import {
    Row, 
    Col,
    Typography,
    Menu,
    Input,
    Button,
    Dropdown,
    Avatar,
} from 'antd'
  
const {Title} = Typography
const {SubMenu} = Menu

export default function HeaderEditor() {

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to='/' >Home</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to='/editor' >Editor</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <Row wrap={false} align='middle' style={{height: '50px'}}>
      <Col flex='300px'>
        <Title
        level={4}
        style={{
          color: '#7a7a7a',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems:'center',
        }}>
          PlaforEDU
        </Title>
      </Col>
      <Col flex='auto' style={{display: 'flex', justifyContent:'right', padding: '0px 50px'}}>
        <Dropdown overlay={menu} trigger={['click']} >
          <Avatar style={{backgroundColor: '#ccc'}} src="https://joeschmoe.io/api/v1/random" />
        </Dropdown>
      </Col>
    </Row>
  )
}
