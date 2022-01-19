import React from 'react';

import { Link } from "react-router-dom";

import LogoPlafor from '../../assets/PLAFORLOGO.png';

import {
  DownOutlined,
} from '@ant-design/icons';

import {
  Row,
  Col,
  Menu,
  Image,
} from 'antd';

const { SubMenu } = Menu;

export default function HeaderHome() {

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
      <Col offset={6} flex='auto' style={{ padding: '0px 100px', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
        <Menu disabledOverflow={true} mode='horizontal' selectable={false}>
          <Menu.Item key={1}><Link to={'/'}>HOME</Link></Menu.Item>
          <SubMenu icon={<DownOutlined />} key={2} title='SOBRE' >
            <Menu.Item key={21}>Sobre</Menu.Item>
            <Menu.Item key={22}>Termos e Licenças</Menu.Item>
            <Menu.Item key={23}>Manuais e Guias</Menu.Item>
            <Menu.Item key={24}>Orientações</Menu.Item>
          </SubMenu>
          <SubMenu icon={<DownOutlined />} key={3} title='RECURSOS' >
            <Menu.Item key={31}><Link to={'/cursos'}>Itinerários</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
    </Row>
  )
}
