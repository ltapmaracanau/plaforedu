import React from 'react';

import { Link } from "react-router-dom";

import LogoPlafor from '../../assets/PLAFORLOGO.png';

import { useStoreActions, useStoreState } from 'easy-peasy'
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

  const setFilter = useStoreActions(actions => actions.cursos.setFilter)
  const filterDefault = useStoreState(state => state.cursos.filterDefault)

  const onClickItinerario = (itinerario) => {
    setFilter({ ...filterDefault, itinerario: itinerario, esquemaDeCores: 'categoria' })
  }

  return (
    <Row wrap={false} align='middle' style={{ height: '70px', backgroundImage: 'linear-gradient(to right, #2C55A1, #35A8E0)' }}>
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
      <Col offset={4} flex='auto' style={{ padding: '0px 100px', display: 'flex', fontFamily: 'Roboto', justifyContent: 'right', alignItems: 'center' }}>
        <Menu disabledOverflow={true} mode='horizontal' selectable={false}>
          <Menu.Item key={1}><Link to={'/'}>HOME</Link></Menu.Item>
          <Menu.Item key={2}><Link to={'/about'}>SOBRE</Link></Menu.Item>
          {/* <SubMenu icon={<DownOutlined />} key={2} title='SOBRE' >
            <Menu.Item key={21}><Link to={'/about'}>Sobre</Link></Menu.Item>
            <Menu.Item key={22}>Termos e Licenças</Menu.Item>
            <Menu.Item key={23}>Manuais e Guias</Menu.Item>
            <Menu.Item key={24}>Orientações</Menu.Item>
          </SubMenu> */}
          <SubMenu icon={<DownOutlined />} key={3} title='RECURSOS' >
            <Menu.Item key={31} onClick={() => onClickItinerario(1)} ><Link to={'/cursos'}>Iniciação ao Serviço Público</Link></Menu.Item>
            <Menu.Item key={32} onClick={() => onClickItinerario(2)} ><Link to={'/cursos'}>Técnico-Administrativo em Educação</Link></Menu.Item>
            <Menu.Item key={33} onClick={() => onClickItinerario(3)} ><Link to={'/cursos'}>Docente</Link></Menu.Item>
            <Menu.Item key={34} onClick={() => onClickItinerario(4)} ><Link to={'/cursos'}>Gerencial</Link></Menu.Item>
            <Menu.Item key={35} onClick={() => onClickItinerario(5)} ><Link to={'/cursos'}>Preparação para a aposentadoria</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key={4}><Link to={'/faleconosco'}>FALE CONOSCO</Link></Menu.Item>
        </Menu>
      </Col>
    </Row>
  )
}