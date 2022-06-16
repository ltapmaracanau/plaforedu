import React, { useState } from 'react'
import { useStoreState } from 'easy-peasy';

import HeaderHome from '../components/header/HeaderHome'
import UpdatePassword from '../components/user-settings/UpdatePassword';
import Register from '../components/user-settings/Register';
import RegisterCourse from '../components/user-settings/RegisterCourse';

import {
  Layout, Menu,
} from 'antd'

const {
  Sider,
  Content,
} = Layout

export default function SettingsPage() {

  const isAdm = useStoreState(state => state.adm.isAdm)

  const [key, setKey] = useState('0')

  const content = [
    <UpdatePassword/>,
    <Register/>,
    <RegisterCourse/>
  ]

  return (
    <Layout>
      <HeaderHome />
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            style={{
              height: "100%",
              borderRight: 0,
            }}
            theme={"dark"}
            defaultChecked={'0'}
            defaultSelectedKeys={['0']}
            selectedKeys={key}
            onClick={(e)=>{setKey(e.key)}}
          >
            <Menu.Item style={{fontFamily: 'Roboto'}} key={'0'}>Alterar Senha</Menu.Item>
            {isAdm ? (
              <Menu.SubMenu style={{fontFamily: 'Roboto'}} key={''} title={'Cadastros'}>
                <Menu.Item style={{fontFamily: 'Roboto'}} key={'1'}>Cadastrar Usuário</Menu.Item>
                <Menu.Item style={{fontFamily: 'Roboto'}} key={'2'}>Cadastrar Curso</Menu.Item>
              </Menu.SubMenu>
            ) : null}
          </Menu>
        </Sider>
        <Content
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {content[Number(key)]}
        </Content>
      </Layout>
    </Layout>
  );
}
