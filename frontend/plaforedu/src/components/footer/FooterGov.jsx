import React from 'react'

/* import secretaria from '../../assets/secretaria.png' */
import ministerio from '../../assets/ministerio.png'
import brasil from '../../assets/brasil.png'


import {
    Layout,
    Typography,
    Row,
    Col,
    Grid,
    Image,
} from 'antd'

const { Text } = Typography
const { useBreakpoint } = Grid
const { Footer } = Layout;


export default function FooterGov() {

    const screens = useBreakpoint()

    return (
        <Footer style={{ minHeight: 60, backgroundColor: '#404040', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <Row
                gutter={[0, 10]}
                align={'middle'}
                wrap={!screens.md}
            >
                <Col
                    flex={14}
                    order={screens.md ? 0 : 1}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Text style={{ color: 'white', fontSize: '16px', textAlign: 'center' }} >Copyright © 2022 PlaforEDU. Todos os direitos reservados.</Text>
                </Col>
                {/* <Col>
                    <Image
                        height='40px'
                        src={secretaria}
                        alt="Secretaria de Educação profissional e Tecnológica"
                        preview={false}
                    />
                </Col> */}
                <Col
                    flex={'auto'}
                    order={screens.md ? 1 : 0}
                    style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
                >
                    <Image
                        height='40px'
                        src={ministerio}
                        alt="Ministério da Educação"
                        preview={false}
                    />
                    <Image
                        height='40px'
                        src={brasil}
                        alt="Governo Federal"
                        preview={false}
                    />
                </Col>
            </Row>
        </Footer>
    )
}
