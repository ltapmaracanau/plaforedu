import React from 'react'
import HeaderHome from '../components/header/HeaderHome';

import {
    CloseCircleFilled,
    SearchOutlined,
    CaretDownOutlined,
} from '@ant-design/icons';

import {
    Layout,
    Row,
    Col,
    Input,
    Button,
    Card,
    Divider,
} from 'antd'

const {Content} = Layout


export default function HomePage() {
    return (
        <>
            <HeaderHome/>
            <Layout>
                <Content style={{backgroundColor: 'white'}}>
                    <Row style={{height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Col>
                            <Input 
                                size='large'
                                placeholder='Buscar'
                                prefix={
                                    <Button
                                    style={{ borderStyle: 'none'}}
                                    shape="circle"
                                    icon={<SearchOutlined />}
                                    />
                                }
                            />
                        </Col>
                    </Row>
                    <Divider orientation='left'>Itinerarios Formativos</Divider>
                    <Row gutter={[20, 20]} style={{padding: '20px 40px'}}>
                        <Col flex='auto'>
                            <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                Intinerário 1
                            </Card>
                        </Col>
                        <Col flex='auto'>
                            <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                Intinerário 2
                            </Card>
                        </Col>
                        <Col flex='auto'>
                            <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                Intinerário 3
                            </Card>
                        </Col>
                        <Col flex='auto'>
                            <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                Intinerário 4
                            </Card>
                        </Col>
                        <Col flex='auto'>
                            <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                Intinerário 5
                            </Card>
                        </Col>
                    </Row>
                    <Divider orientation='left'>Mais Acessados</Divider>
                    <Row gutter={[20, 20]} style={{padding: '20px 40px'}}>
                        <Col flex='auto'>
                            <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                Intinerário 1
                            </Card>
                        </Col>
                        <Col flex='auto'>
                            <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                Intinerário 2
                            </Card>
                        </Col>
                        <Col flex='auto'>
                            <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                Intinerário 3
                            </Card>
                        </Col>
                        <Col flex='auto'>
                            <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                Intinerário 4
                            </Card>
                        </Col>
                        <Col flex='auto'>
                            <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                Intinerário 5
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    )
}
