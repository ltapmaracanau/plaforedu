import React from 'react'
import brasil from '../../assets/br.svg'

import {
  Row,
  Col,
  Image,
  Typography,
} from 'antd'

const { Text } = Typography

export default function HeaderGov() {
  return (
    <Row align='top' style={{ height: '40px', display: 'flex', alignItems: 'center', padding: '0px 130px', backgroundColor: '#f8f8f8' }}>
      <Col span={12} style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          height='24px'
          style={{ padding: 2 }}
          src={brasil}
          alt="Brasil"
          preview={false}
        />
        <Text style={{ fontSize: '80%', fontWeight: '10px' }}>BRASIL</Text>
      </Col>
      <Col span={12} style={{ backgroundColor: '#ccc', display: 'flex', justifyContent: 'right', height: '100%', alignItems: 'center' }} >
        <a className='linkHeader' href='https://www.gov.br/pt-br'><Text>Simplifique!</Text></a>
        <a className='linkHeader' href='https://www.gov.br/pt-br'><Text>Participe</Text></a>
        <a className='linkHeader' href='https://www.gov.br/pt-br'><Text>Acesso à informação</Text></a>
        <a className='linkHeader' href='https://www.gov.br/pt-br'><Text>Legislação</Text></a>
        <a className='linkHeader' href='https://www.gov.br/pt-br'><Text>Canais</Text></a>
      </Col>
    </Row>
  )
}
