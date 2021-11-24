import 'antd/dist/antd.css'
import './App.less';
import Home from '../pages/Home'
import brasil from '../assets/br.svg'
import {
  CloseCircleFilled,
  SearchOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';

import {
  Layout, 
  Row, 
  Col,
  Space,
  Typography,
  Menu,
  Input,
  Button,
  Dropdown,
  Avatar,
} from 'antd'

const {Title, Text} = Typography
const {SubMenu} = Menu
const { 
  Header, 
  Content,
  Footer
} = Layout;

function App() {

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">Home</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">Configurações</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout style={{minHeight:'100vh'}}>
      <Header>
        <Row align='top' style={{padding: '0px 100px', backgroundColor:'#ccc'}}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Space>
              <a href='https://www.gov.br/pt-br'>
              <img
              style={{ width: 32, height: 24, padding: 2}}
              src={brasil}
              alt="Brasil"
              />
              <Text style={{fontSize: '80%', fontWeight: '10px'}}>BRASIL</Text>
              </a>
            </Space>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
              <Space>
                <a href='https://www.gov.br/pt-br'><Text>Simplifique!</Text></a>
                <a href='https://www.gov.br/pt-br'><Text>Participe</Text></a>
                <a href='https://www.gov.br/pt-br'><Text>Acesso à informação</Text></a>
                <a href='https://www.gov.br/pt-br'><Text>Legislação</Text></a>
                <a href='https://www.gov.br/pt-br'><Text>Canais</Text></a>
              </Space>
          </Col>
        </Row>
        <Row align='middle' style={{padding: '0px 50px'}} gutter={[50, 0]}>
          <Col span={4}>
            <Title
            level={4}
            style={{
              color: '#7a7a7a',
            }}>
              PlaforEDU
            </Title>
          </Col>
          <Col
            span={8}
            style={{ paddingTop: '0px' }}
          >
            <Input
              placeholder="Buscar"
              bordered={false}
              size={'large'}
              prefix={
                <Button
                  style={{ borderStyle: 'none', backgroundColor: 'inherit' }}
                  shape="circle"
                  icon={<SearchOutlined />}
                />
              }
              suffix={
                <>
                  <Button
                    style={{ borderStyle: 'none', backgroundColor: 'inherit' }}
                    shape="circle"
                    icon={<CloseCircleFilled />}
                  />
                  <Button
                    style={{ borderStyle: 'none', backgroundColor: 'inherit' }}
                    shape="circle"
                    icon={<CaretDownOutlined />}
                  />
                </>
              }
            />
          </Col>
          <Col span={12} style={{display:'flex', justifyContent: 'space-around', alignItems:'center'}}>
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
      </Header>
      <Layout>
        <Content>
          <Home/>
        </Content>
      </Layout>
      <Footer style={{height: 30}}>
        PlaforEDU footer
      </Footer>
    </Layout>
  );
}

export default App;
