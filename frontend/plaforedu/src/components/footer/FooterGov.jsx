import React from 'react'

import secretaria from '../../assets/secretaria.png'
import ministerio from '../../assets/ministerio.png'
import brasil from '../../assets/brasil.png'


import {
    Layout,
    Typography,
    Image
} from 'antd'

const {
    Text
} = Typography

const {
    Footer
} = Layout;


export default function FooterGov() {
    return (
        <Footer style={{ height: 60, backgroundColor: '#404040', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={{ color: 'white', fontSize: '16px' }} >Copyright © 2022 PlaforEDU. Todos os direitos reservados.</Text>
            <Image
                height='40px'
                src={secretaria}
                alt="Secretaria de Educação profissional e Tecnológica"
                preview={false}
            />
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
        </Footer>
    )
}
