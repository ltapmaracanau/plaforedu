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
  Divider, 
  Space,
  Typography,
  Menu,
  Image,
  Breadcrumb,
  Input,
  Button
} from 'antd'

const {Title, Text} = Typography
const {SubMenu} = Menu
const { 
  Header, 
  Content,
  Sider, 
  Footer, 
} = Layout;

function App() {
  return (
    <Layout style={{minHeight:'100vh'}}>
      <header className="header-gov" style={{padding: '0 100px'}}>
        <Row align='top'>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <a href='https://www.gov.br/pt-br'>
            <img
            style={{ width: 32, height: 24, padding: 2}}
            src={brasil}
            alt="Brasil"
            />
            <Text style={{fontSize: '80%', fontWeight: '10px'}}>BRASIL</Text>
            </a>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <a>Simplifique!</a>
              <a>Participe</a>
              <a>Acesso à informação</a>
              <a>Legislação</a>
              <a>Canais</a>
          </Col>
        </Row>
      </header>
      <Header>
        <Row align='middle'>
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
            span={6}
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
          <Col span={6}>
            <Menu mode='horizontal'>
              <Menu.Item>Nav1</Menu.Item>
              <Menu.Item>Nav2</Menu.Item>
              <Menu.Item>Nav3</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider>
          <Menu mode='inline'>
            <SubMenu key="sub1" title="subnav 1">
              <Menu.Item>Item 1</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="subnav 2">
              <Menu.Item>Item 1</Menu.Item>
              <Menu.Item>Item 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>
          <Home/>
        </Content>
      </Layout>
      <Footer>
      </Footer>
    </Layout>
  );
}

export default App;
