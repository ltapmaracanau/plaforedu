import React from 'react'
import { useStoreState } from 'easy-peasy'

import Img0 from '../../assets/itinerarios/PLAFOREDU_Mandala-Itinerarios_v3_Completa.png'
import Img1 from '../../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_Docente.png'
import Img2 from '../../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_InicServPublico.png'
import Img3 from '../../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_Gerencial.png'
import Img4 from '../../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_PrepAposenta.png'
import Img5 from '../../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_TecAdmEdu.png'

import {
    Row,
    Col,
    Typography,
    Image,
    Card,
} from 'antd'
import Title from 'antd/lib/typography/Title'

const { Text } = Typography


export default function RowItinerario(props) {
    const { itinerario } = props;
    
    const itinerarioData = useStoreState((state) => state.itinerarios.itinerarios.filter((obj) => obj.dados_gerais.id === itinerario)[0]);

    const linha = {
        0: <Image preview={false} src={Img0} width={180} />,
        1: <Image preview={false} src={Img1} width={90} />,
        2: <Image preview={false} src={Img2} width={90} />,
        3: <Image preview={false} src={Img3} width={90} />,
        4: <Image preview={false} src={Img4} width={90} />,
        5: <Image preview={false} src={Img5} width={90} />,
    };

    const rowHeight = itinerario === 0 ? '220px' : '140px';

    return (
        <Row style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: rowHeight,
            padding: '20px 60px',
        }}>
            <Col style={{ marginRight: 24 }}>
                {linha[itinerario]}
            </Col>
            <Col>
                <Card bordered={false}>
                    <Title level={4} style={{ fontFamily: 'Roboto', fontWeight: '700', color: '#2C55A1' }}>{itinerarioData.dados_gerais.titulo}</Title>
                    <Text style={{ fontFamily: 'Roboto',color: '#444343' }}>{itinerarioData.dados_gerais.descricao}</Text>
                </Card>
            </Col>
        </Row>
    )
}
