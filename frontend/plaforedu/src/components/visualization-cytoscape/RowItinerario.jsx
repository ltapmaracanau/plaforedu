import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import Img0 from '../../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_Completa.png'
import Img1 from '../../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_InicServPublico_CLICADO.png'
import Img2 from '../../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_TecAdmEdu_CLICADO.png'
import Img3 from '../../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_Docente_CLICADO.png'
import Img4 from '../../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_Gerencial_CLICADO.png'
import Img5 from '../../assets/mandala/PLAFOREDU_Mandala-Itinerarios_CORES_PrepAposenta_CLICADO.png'

import ImageMapper from 'react-image-mapper';

import {
    Row,
    Col,
    Typography,
    Card,
} from 'antd'
import Title from 'antd/lib/typography/Title'

const { Text } = Typography


export default function RowItinerario() {

    const itinerario = useStoreState(state => state.cursos.filter.itinerario)

    const filter = useStoreState((state) => state.cursos.filter);
    const setFilter = useStoreActions((actions) => actions.cursos.setFilter);
    const itinerarioData = useStoreState((state) => state.itinerarios.itinerarios.find((obj) => obj.dados_gerais.id === itinerario));

    const maps = {
        mapGeral: {
            name: '0',
            areas: [
                {
                    name: '1',
                    shape: 'circle',
                    coords: [125, 45, 40],
                    href: ''
                },
                {
                    name: '2',
                    shape: 'circle',
                    coords: [203, 100, 40],
                    href: ''
                },
                {
                    name: '3',
                    shape: 'circle',
                    coords: [170, 190, 40],
                    href: ''
                },
                {
                    name: '4',
                    shape: 'circle',
                    coords: [75, 190, 40],
                    href: ''
                },
                {
                    name: '5',
                    shape: 'circle',
                    coords: [45, 100, 40],
                    href: ''
                },
            ]
        },
        mapInicServPublico: {
            name: '1',
            areas: [
                {
                    name: '2',
                    shape: 'circle',
                    coords: [183, 122, 40],
                    href: ''
                },
                {
                    name: '3',
                    shape: 'circle',
                    coords: [155, 205, 40],
                    href: ''
                },
                {
                    name: '4',
                    shape: 'circle',
                    coords: [67, 205, 40],
                    href: ''
                },
                {
                    name: '5',
                    shape: 'circle',
                    coords: [40, 124, 40],
                    href: ''
                },
            ]
        },
        mapTecAdmEduc: {
            name: '2',
            areas: [
                {
                    name: '3',
                    shape: 'circle',
                    coords: [150, 170, 40],
                    href: ''
                },
                {
                    name: '4',
                    shape: 'circle',
                    coords: [66, 175, 40],
                    href: ''
                },
                {
                    name: '5',
                    shape: 'circle',
                    coords: [40, 90, 40],
                    href: ''
                },
                {
                    name: '1',
                    shape: 'circle',
                    coords: [110, 45, 40],
                    href: ''
                },
            ]
        },
        mapDocente: {
            name: '3',
            areas: [
                {
                    name: '1',
                    shape: 'circle',
                    coords: [110, 40, 40],
                    href: ''
                },
                {
                    name: '2',
                    shape: 'circle',
                    coords: [185, 90, 40],
                    href: ''
                },
                {
                    name: '4',
                    shape: 'circle',
                    coords: [67, 172, 40],
                    href: ''
                },
                {
                    name: '5',
                    shape: 'circle',
                    coords: [40, 90, 40],
                    href: ''
                }
            ]
        },
        mapLideranca: {
            name: '4',
            areas: [
                {
                    name: '2',
                    shape: 'circle',
                    coords: [211, 90, 40],
                    href: ''
                },
                {
                    name: '3',
                    shape: 'circle',
                    coords: [180, 168, 40],
                    href: ''
                },
                {
                    name: '5',
                    shape: 'circle',
                    coords: [66, 93, 40],
                    href: ''
                },
                {
                    name: '1',
                    shape: 'circle',
                    coords: [139, 35, 40],
                    href: ''
                },
            ]
        },
        mapAposentadoria: {
            name: '5',
            areas: [
                {
                    name: '1',
                    shape: 'circle',
                    coords: [140, 45, 40],
                    href: ''
                },
                {
                    name: '2',
                    shape: 'circle',
                    coords: [212, 92, 40],
                    href: ''
                },
                {
                    name: '3',
                    shape: 'circle',
                    coords: [183, 172, 40],
                    href: ''
                },
                {
                    name: '4',
                    shape: 'circle',
                    coords: [98, 172, 40],
                    href: ''
                },
            ]
        },
    }

    const onClick = (area) => {
        setFilter({ ...filter, itinerario: Number(area.name) })
    }

    const linha = {
        0: <ImageMapper src={Img0} width={220} map={maps.mapGeral} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        1: <ImageMapper src={Img1} width={220} map={maps.mapInicServPublico} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        2: <ImageMapper src={Img2} width={250} map={maps.mapTecAdmEduc} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        3: <ImageMapper src={Img3} width={250} map={maps.mapDocente} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        4: <ImageMapper src={Img4} width={240} map={maps.mapLideranca} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        5: <ImageMapper src={Img5} width={250} map={maps.mapAposentadoria} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
    };

    return (
        <Row
            wrap={false}
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 60px',
            }}
        >
            <Col style={{ marginRight: 24 }}>
                {linha[itinerario]}
            </Col>
            <Col>
                <Card bordered={false}>
                    <Title level={4} style={{ fontFamily: 'Roboto', fontWeight: '700', color: '#2C55A1', marginBottom: '10px' }}>{itinerarioData.dados_gerais.titulo}</Title>
                    <Text style={{ fontFamily: 'Roboto', color: '#444343' }}>{itinerarioData.dados_gerais.descricao}</Text>
                </Card>
            </Col>
        </Row>
    )
}