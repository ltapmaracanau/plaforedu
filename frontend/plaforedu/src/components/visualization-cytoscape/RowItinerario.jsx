import React, { useCallback } from 'react'
import { useStoreState } from 'easy-peasy'

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

const { Text, Title } = Typography


export default function RowItinerario(props) {
    const { itinerario } = props;

    const itinerarioData = useStoreState((state) => state.itinerarios.itinerarios.filter((obj) => obj.dados_gerais.id === itinerario)[0]);

    const navigate = useNavigate();
    const handleOnClick = useCallback((itinerario) => navigate(`/${itinerario}`, { replace: true }), [navigate]);

    const mapMandala = {
        name: 'mandalamap',
        areas: [
            {
                name: 'docente',
                shape: 'circle',
                coords: [125, 135, 30],
                href: ''
            },
            {
                name: 'lideranca',
                shape: 'circle',
                coords: [55, 135, 30],
                href: ''
            },
            {
                name: 'preparacaoparaaposentadoria',
                shape: 'circle',
                coords: [33, 70, 30],
                href: ''
            },
            {
                name: 'iniciacaoaoservicopublico',
                shape: 'circle',
                coords: [90, 30, 30],
                href: ''
            },
            {
                name: 'tecnicoadministrativoeducacao',
                shape: 'circle',
                coords: [146, 71, 25],
                href: ''
            }
        ]
    };
    const mapDocente = {
        name: 'mandalamap',
        areas: [
            {
                name: 'lideranca',
                shape: 'circle',
                coords: [73, 140, 20],
                href: ''
            },
            {
                name: 'preparacaoparaaposentadoria',
                shape: 'circle',
                coords: [55, 88, 20],
                href: ''
            },
            {
                name: 'iniciacaoaoservicopublico',
                shape: 'circle',
                coords: [100, 55, 20],
                href: ''
            },
            {
                name: 'tecnicoadministrativoeducacao',
                shape: 'circle',
                coords: [145, 88, 20],
                href: ''
            }
        ]
    };
    const mapLideranca = {
        name: 'mandalamap',
        areas: [
            {
                name: 'docente',
                shape: 'circle',
                coords: [130, 140, 20],
                href: ''
            },
            {
                name: 'preparacaoparaaposentadoria',
                shape: 'circle',
                coords: [55, 88, 20],
                href: ''
            },
            {
                name: 'iniciacaoaoservicopublico',
                shape: 'circle',
                coords: [100, 55, 20],
                href: ''
            },
            {
                name: 'tecnicoadministrativoeducacao',
                shape: 'circle',
                coords: [145, 88, 20],
                href: ''
            }
        ]
    };
    const mapAposentadoria = {
        name: 'mandalamap',
        areas: [
            {
                name: 'docente',
                shape: 'circle',
                coords: [130, 140, 20],
                href: ''
            },
            {
                name: 'lideranca',
                shape: 'circle',
                coords: [73, 140, 20],
                href: ''
            },
            {
                name: 'iniciacaoaoservicopublico',
                shape: 'circle',
                coords: [100, 55, 20],
                href: ''
            },
            {
                name: 'tecnicoadministrativoeducacao',
                shape: 'circle',
                coords: [145, 88, 20],
                href: ''
            }
        ]
    };
    const mapInicServPublico = {
        name: 'mandalamap',
        areas: [
            {
                name: 'docente',
                shape: 'circle',
                coords: [130, 140, 20],
                href: ''
            },
            {
                name: 'lideranca',
                shape: 'circle',
                coords: [73, 140, 20],
                href: ''
            },
            {
                name: 'preparacaoparaaposentadoria',
                shape: 'circle',
                coords: [55, 88, 20],
                href: ''
            },
            {
                name: 'tecnicoadministrativoeducacao',
                shape: 'circle',
                coords: [145, 88, 20],
                href: ''
            }
        ]
    };
    const mapTecAdmEduc = {
        name: 'mandalamap',
        areas: [
            {
                name: 'docente',
                shape: 'circle',
                coords: [130, 140, 20],
                href: ''
            },
            {
                name: 'lideranca',
                shape: 'circle',
                coords: [73, 140, 20],
                href: ''
            },
            {
                name: 'preparacaoparaaposentadoria',
                shape: 'circle',
                coords: [55, 88, 20],
                href: ''
            },
            {
                name: 'iniciacaoaoservicopublico',
                shape: 'circle',
                coords: [100, 55, 20],
                href: ''
            },
        ]
    };

    const onClickMap = (area) => {
        handleOnClick(area.name)
    }

    const linha = {
        0: <ImageMapper src={Img0} width={180} map={mapMandala} onClick={onClickMap} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        1: <ImageMapper src={Img1} width={200} map={mapDocente} onClick={onClickMap} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        2: <ImageMapper src={Img2} width={200} map={mapInicServPublico} onClick={onClickMap} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        3: <ImageMapper src={Img3} width={200} map={mapLideranca} onClick={onClickMap} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        4: <ImageMapper src={Img4} width={200} map={mapAposentadoria} onClick={onClickMap} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
        5: <ImageMapper src={Img5} width={200} map={mapTecAdmEduc} onClick={onClickMap} strokeColor='rgba(0, 0, 0, 0)' fillColor='rgba(0,0,0,0)' />,
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