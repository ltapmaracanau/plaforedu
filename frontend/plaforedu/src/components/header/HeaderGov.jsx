import React from 'react'
import brasil from '../../assets/br.svg'

import {
    Row,
    Col,
    Image,
    Typography,
} from 'antd'

const {Text} = Typography

export default function HeaderGov() {
    return (
        <Row align='top' style={{padding: '0px 130px', backgroundColor:'#ccc'}}>
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
    )
}
