import React from 'react'
import HeaderHome from '../components/header/HeaderHome';
import Finder from '../components/Finder';

import { Link } from "react-router-dom";

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
                    <Finder/>
                    <Divider orientation='left'>Itinerarios Formativos</Divider>
                    <Row style={{padding: '20px 40px'}}>
                        <Col flex='auto'>
                            <Link to='/editor'>
                                <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                    Intinerário 1
                                </Card>
                            </Link>
                        </Col>
                        <Col flex='auto'>
                            <Link to='/editor'>
                                <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                    Intinerário 2
                                </Card>
                            </Link>
                        </Col>
                        <Col flex='auto'>
                            <Link to='/editor'>
                                <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                    Intinerário 3
                                </Card>
                            </Link>
                        </Col>
                        <Col flex='auto'>
                            <Link to='/editor'>
                                <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                    Intinerário 4
                                </Card>
                            </Link>
                        </Col>
                        <Col flex='auto'>
                            <Link to='/editor'>
                                <Card style={{width: '200px', height: '250px', backgroundColor: '#ccc'}}>
                                    Intinerário 5
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Divider orientation='left'>Mais Acessados</Divider>
                    <Row style={{padding: '20px 40px'}}>
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
