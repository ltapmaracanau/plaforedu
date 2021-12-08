import React from 'react'

import { Link } from "react-router-dom";
import LogoPlafor from '../assets/PLAFORLOGO.png'
import {
    CloseCircleFilled,
    SearchOutlined,
} from '@ant-design/icons';
  
import {
    Row, 
    Col,
    Image,
    Typography,
    Menu,
    Input,
    Button,
    Dropdown,
    Avatar,
} from 'antd'
  
const {Title} = Typography
const {SubMenu} = Menu

export default function HeaderUser() {

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
          <Col
            flex='350px'
            style={{ paddingTop: '0px' }}
            >
            <Input
              placeholder="Buscar"
              bordered={false}
              size='middle'
              prefix={
                <Button
                  style={{ borderStyle: 'none', backgroundColor: 'inherit' }}
                  shape="circle"
                  icon={<SearchOutlined />}
                />
              }
              suffix={
                <Button
                  style={{ borderStyle: 'none', backgroundColor: 'inherit' }}
                  shape="circle"
                  icon={<CloseCircleFilled />}
                />
              }
            />
          </Col>
          <Col flex='auto' style={{display:'flex', justifyContent: 'space-around', alignItems:'center'}}>
            <Menu mode='horizontal'>
              <Menu.Item key={1}>Home</Menu.Item>
              <SubMenu key={2} title='Sobre' >
                <Menu.Item key={21}>Sobre</Menu.Item>
                <Menu.Item key={22}>Termos e Licensas</Menu.Item>
                <Menu.Item key={23}>Manuais e Guias</Menu.Item>
                <Menu.Item key={24}>Orientações</Menu.Item>
              </SubMenu>
              <SubMenu key={3} title='Recursos' >
                <Menu.Item key={31}>Aqui</Menu.Item>
                <Menu.Item key={32}>Vai</Menu.Item>
                <Menu.Item key={33}>Ficar</Menu.Item>
                <Menu.Item key={34}>Todos</Menu.Item>
                <Menu.Item key={35}>Os</Menu.Item>
                <Menu.Item key={36}>Intinerários</Menu.Item>
              </SubMenu>
            </Menu>
            <Dropdown overlay={menu} trigger={['click']} >
              <Avatar style={{backgroundColor: '#ccc'}} src="https://joeschmoe.io/api/v1/random" />
            </Dropdown>
          </Col>
        </Row>
    )
}
