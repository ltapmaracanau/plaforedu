import React, { useCallback } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { useNavigate } from 'react-router-dom';

import Img0 from '../../assets/itinerarios/PLAFOREDU_Mandala-Itinerarios_v3_Completa.png'
import Img1 from '../../assets/mandala/docente.png'
import Img2 from '../../assets/mandala/inicservpublico.png'
import Img3 from '../../assets/mandala/gerencial.png'
import Img4 from '../../assets/mandala/aposentadoria.png'
import Img5 from '../../assets/mandala/tecadmeduc.png'

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
    const setItinerario = useStoreActions(actions => actions.cursos.setItinerario)

    const itinerarioData = useStoreState((state) => state.itinerarios.itinerarios.filter((obj) => obj.dados_gerais.id === itinerario)[0]);

    const maps = {
        mapMandala: {
            name: '0',
            areas: [
                {
                    name: '1',
                    shape: 'circle',
                    coords: [125, 135, 30],
                    href: ''
                },
                {
                    name: '2',
                    shape: 'circle',
                    coords: [90, 30, 30],
                    href: ''
                },
                {
                    name: '3',
                    shape: 'circle',
                    coords: [55, 135, 30],
                    href: ''
                },
                {
                    name: '4',
                    shape: 'circle',
                    coords: [33, 70, 30],
                    href: ''
                },
                {
                    name: '5',
                    shape: 'circle',
                    coords: [146, 71, 25],
                    href: ''
                }
            ]
        },
        mapDocente: {
            name: '1',
            areas: [
                {
                    name: '3',
                    shape: 'circle',
                    coords: [73, 140, 20],
                    href: ''
                },
                {
                    name: '4',
                    shape: 'circle',
                    coords: [55, 88, 20],
                    href: ''
                },
                {
                    name: '2',
                    shape: 'circle',
                    coords: [100, 55, 20],
                    href: ''
                },
                {
                    name: '5',
                    shape: 'circle',
                    coords: [145, 88, 20],
                    href: ''
                }
            ]
        },
        mapLideranca: {
            name: '2',
            areas: [
                {
                    name: '1',
                    shape: 'circle',
                    coords: [130, 140, 20],
                    href: ''
                },
                {
                    name: '4',
                    shape: 'circle',
                    coords: [55, 88, 20],
                    href: ''
                },
                {
                    name: '2',
                    shape: 'circle',
                    coords: [100, 55, 20],
                    href: ''
                },
                {
                    name: '5',
                    shape: 'circle',
                    coords: [145, 88, 20],
                    href: ''
                }
            ]
        },
        mapAposentadoria: {
            name: '3',
            areas: [
                {
                    name: '1',
                    shape: 'circle',
                    coords: [130, 140, 20],
                    href: ''
                },
                {
                    name: '3',
                    shape: 'circle',
                    coords: [73, 140, 20],
                    href: ''
                },
                {
                    name: '2',
                    shape: 'circle',
                    coords: [100, 55, 20],
                    href: ''
                },
                {
                    name: '5',
                    shape: 'circle',
                    coords: [145, 88, 20],
                    href: ''
                }
            ]
        },
        mapInicServPublico: {
            name: '4',
            areas: [
                {
                    name: '1',
                    shape: 'circle',
                    coords: [130, 140, 20],
                    href: ''
                },
                {
                    name: '3',
                    shape: 'circle',
                    coords: [73, 140, 20],
                    href: ''
                },
                {
                    name: '4',
                    shape: 'circle',
                    coords: [55, 88, 20],
                    href: ''
                },
                {
                    name: '5',
                    shape: 'circle',
                    coords: [145, 88, 20],
                    href: ''
                }
            ]
        },
        mapTecAdmEduc: {
            name: '5',
            areas: [
                {
                    name: '1',
                    shape: 'circle',
                    coords: [130, 140, 20],
                    href: ''
                },
                {
                    name: '3',
                    shape: 'circle',
                    coords: [73, 140, 20],
                    href: ''
                },
                {
                    name: '4',
                    shape: 'circle',
                    coords: [55, 88, 20],
                    href: ''
                },
                {
                    name: '2',
                    shape: 'circle',
                    coords: [100, 55, 20],
                    href: ''
                },
            ]
        },
    }

    const onClick = (area) => {
        setItinerario(Number(area.name))
    }

    const linha = {
        0: <ImageMapper src={Img0} width={180} map={maps.mapMandala} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        1: <ImageMapper src={Img1} width={200} map={maps.mapDocente} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        2: <ImageMapper src={Img2} width={200} map={maps.mapInicServPublico} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        3: <ImageMapper src={Img3} width={200} map={maps.mapLideranca} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        4: <ImageMapper src={Img4} width={200} map={maps.mapAposentadoria} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        5: <ImageMapper src={Img5} width={200} map={maps.mapTecAdmEduc} onClick={onClick} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
    };

    return (
        <Row style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '220px',
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