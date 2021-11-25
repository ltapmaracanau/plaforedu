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
  Image,
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
          <Col span={12} style={{height: '40px', display: 'flex', alignItems: 'center'}}>
              <Image
              height='24px'
              style={{padding: 2}}
              src={brasil}
              alt="Brasil"
              preview={false}
              />
              <Text style={{fontSize: '80%', fontWeight: '10px'}}>BRASIL</Text>
          </Col>
          <Col span={12} style={{height: '35px',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <a className='linkHeader' href='https://www.gov.br/pt-br'><Text>Simplifique!</Text></a>
            <a className='linkHeader' href='https://www.gov.br/pt-br'><Text>Participe</Text></a>
            <a className='linkHeader' href='https://www.gov.br/pt-br'><Text>Acesso à informação</Text></a>
            <a className='linkHeader' href='https://www.gov.br/pt-br'><Text>Legislação</Text></a>
            <a className='linkHeader' href='https://www.gov.br/pt-br'><Text>Canais</Text></a>
          </Col>
        </Row>
        <Row wrap={false} align='middle'>
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
          <Col
            flex='350px'
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
