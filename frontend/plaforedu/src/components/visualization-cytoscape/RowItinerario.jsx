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

const { Text } = Typography


export default function RowItinerario(props) {

    const { itinerario } = props

    const itinerarioData = useStoreState((state) => state.itinerarios.itinerarios.filter((obj) => obj.dados_gerais.id === itinerario)[0])

    const linha = (itinerario) => {
        let retorno = null
        switch (itinerario) {
            case 1:
                retorno = (<Image preview={false} src={Img1} width={90} />)
                break;
            case 2:
                retorno = (<Image preview={false} src={Img2} width={90} />)
                break;
            case 3:
                retorno = (<Image preview={false} src={Img3} width={90} />)
                break;
            case 4:
                retorno = (<Image preview={false} src={Img4} width={90} />)
                break;
            case 5:
                retorno = (<Image preview={false} src={Img5} width={90} />)
                break;
            default:
                retorno = (<Image preview={false} src={Img0} width={200} />)
                break;
        }
        return (retorno)
    }

    const rowHeight = itinerario === 0 ? '220px' : '140px'

    return (
        <Row style={{ height: rowHeight }}>
            <Col flex={'300px'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {linha(itinerario)}
            </Col>
            <Col flex={'auto'} style={{ display: 'flex', alignItems: 'center' }}>
                <Card style={{ fontFamily: 'Roboto', color: '#444343' }} headStyle={{ fontFamily: 'Roboto', fontWeight: '700', color: '#2C55A1' }} title={itinerarioData.dados_gerais.titulo}>
                    <Text>{itinerarioData.dados_gerais.descricao}</Text>
                </Card>
            </Col>
        </Row>
    )
}
