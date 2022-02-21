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
    <Row
      align='top'
      style={{
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10%',
        backgroundColor: '#f8f8f8'
      }}>
      <Col
        span={2}
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderLeft: '2px solid #e7e7e7',
          borderRight: '2px solid #e7e7e7',
          padding: '0 8px',
        }}>
        <a
          href="https://www.gov.br"
          alt="O portal do Brasil"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <Image
            height='24px'
            width='24px'
            src={brasil}
            alt="Brasil"
            preview={false}
          />
          <Text
            style={{
              fontSize: '80%',
              fontWeight: 'bold',
              marginLeft: '4px',
            }}>
            BRASIL
          </Text>
        </a>
      </Col>
      <Col
        span={22}
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
        <a className='linkHeader' href='https://www.gov.br/pt-br'>
          <Text style={{ fontSize: '80%', fontWeight: 'bold' }}>Simplifique!</Text>
        </a>
        <a className='linkHeader' href='https://www.gov.br/pt-br'>
          <Text style={{ fontSize: '80%', fontWeight: 'bold' }}>Participe</Text>
        </a>
        <a className='linkHeader' href='https://www.gov.br/pt-br'>
          <Text style={{ fontSize: '80%', fontWeight: 'bold' }}>Acesso à informação</Text>
        </a>
        <a className='linkHeader' href='https://www.gov.br/pt-br'>
          <Text style={{ fontSize: '80%', fontWeight: 'bold' }}>Legislação</Text>
        </a>
        <a className='linkHeader' href='https://www.gov.br/pt-br'>
          <Text style={{ fontSize: '80%', fontWeight: 'bold' }}>Canais</Text>
        </a>
      </Col>
    </Row>
  )
}
