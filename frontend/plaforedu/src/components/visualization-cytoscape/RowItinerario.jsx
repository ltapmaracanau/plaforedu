import React, { useState, useCallback } from 'react'
import { useStoreState } from 'easy-peasy'

import { useNavigate } from 'react-router-dom';

import Img0 from '../../assets/itinerarios/PLAFOREDU_Mandala-Itinerarios_v3_Completa.png'
import Img1 from '../../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_Docente.png'
import Img2 from '../../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_InicServPublico.png'
import Img3 from '../../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_Gerencial.png'
import Img4 from '../../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_PrepAposenta.png'
import Img5 from '../../assets/itinerarios/PLAFOREDU_Icones-Itinerarios_v3_TecAdmEdu.png'

import ImageMapper from 'react-image-mapper';

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

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/docente', { replace: true }), [navigate]);

    const map = {
        name: 'mandalamap',
        areas: [
            {
                name: '1',
                shape: 'poly',
                coords: [125, 100, 173, 115, 145, 157, 90, 179, 90, 125],
                href: ''
            }
        ]
    };

    const onClick = (area, index, event) => {
        console.log(area);
        handleOnClick()
    }

    const linha = {
        0: <ImageMapper src={Img0} width={180} map={map} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
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
                    <Text style={{ fontFamily: 'Roboto', color: '#444343' }}>{itinerarioData.dados_gerais.descricao}</Text>
                </Card>
            </Col>
        </Row>
    )
}