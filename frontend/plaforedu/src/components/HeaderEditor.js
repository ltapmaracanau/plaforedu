import React from 'react'

import { Link } from "react-router-dom";
import LogoPlafor from '../assets/PLAFORLOGO.png'
import {
    Row, 
    Col,
    Typography,
    Menu,
    Input,
    Button,
    Image,
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
    <Row wrap={false} align='middle' style={{height: '70px', backgroundImage: 'linear-gradient(to right, #2c56a1, #35a7df)'}}>
      <Col flex='300px' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Image
          preview={false}
          height='70px'
          style={{padding: '5px'}}
          src={LogoPlafor}
        />
      </Col>
      <Col flex='auto' style={{display: 'flex', justifyContent:'right', padding: '0px 100px'}}>
        <Dropdown overlay={menu} trigger={['click']} >
          <Avatar style={{backgroundColor: '#ccc'}} src="https://joeschmoe.io/api/v1/random" />
        </Dropdown>
      </Col>
    </Row>
  )
}
