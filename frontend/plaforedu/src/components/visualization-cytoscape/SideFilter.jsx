import React, { useEffect, useRef, useState } from 'react'

import { useStoreActions, useStoreState } from 'easy-peasy'
import { useForm, FormProvider, Controller } from 'react-hook-form'

import {
    SearchOutlined,
} from '@ant-design/icons';

import {
    Col,
    Switch,
    Select,
    Button,
    Slider,
    Input,
    Form,
    Card
} from 'antd'

export default function SideFilter() {

    const subtemas = useStoreState(state => state.cursos.subtemas)
    const temas = useStoreState(state => state.cursos.temas)
    const competencias = useStoreState(state => state.cursos.competencias)
    const categoriasDeCompetencias = useStoreState(state => state.cursos.categoriasDeCompetencias)
    const instituicoes = useStoreState(state => state.cursos.instituicoes)
    const filterDefault = useStoreState(state => state.cursos.filterDefault)
    const filter = useStoreState(state => state.cursos.filter)
    const itinerarios = useStoreState(state => state.itinerarios.itinerarios)

    const [filtroCompleto, setFiltroCompleto] = useState(true)

    const setFilter = useStoreActions(actions => actions.cursos.setFilter)
    const setTipoVisualizacao = useStoreActions(actions => actions.adm.setTipoVisualizacao)

    const register = useRef(useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: filter,
        context: undefined,
        criteriaMode: 'firstError',
        shouldFocusError: true,
        shouldUnregister: false,
        shouldUseNativeValidation: false,
        delayError: undefined
    }));

    const onSubmit = () => {
        let allValuesFields = register.current.getValues()
        delete allValuesFields.tipoVisualizacao
        setFilter(allValuesFields)
    }

    const onReset = () => {
        setFiltroCompleto(true)
        register.current.reset(filterDefault)
        onSubmit(filterDefault)
    }

    useEffect(() => {
        register.current.setValue('itinerario', filter.itinerario)
    }, [filter.itinerario])



    return (
        <Col style={{ padding: '8px 16px', overflowY: 'scroll' }}>
            <FormProvider {...register.current}>
                <Form
                    layout='vertical'
                    onFinish={register.current.handleSubmit(onSubmit)}
                >
                    <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                        <Controller
                            control={register.current.control}
                            name='buscaInterna'
                            render={({ field }) => {
                                return (
                                    <Form.Item style={{ marginBottom: '0' }} >
                                        <Input allowClear={true} prefix={<SearchOutlined />} placeholder="Buscar" {...field} onPressEnter={onSubmit} />
                                    </Form.Item>
                                )
                            }}
                        />
                    </Card>
                    <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                        <Controller
                            control={register.current.control}
                            name='tipoVisualizacao'
                            render={() => {
                                return (
                                    <Form.Item style={{ marginBottom: '0' }} label={'Visualizar em:'}>
                                        <Switch
                                            defaultChecked={false}
                                            checkedChildren="Lista"
                                            unCheckedChildren="Grafo"
                                            onChange={(value) => { setTipoVisualizacao(value) }}
                                        />
                                    </Form.Item>
                                )
                            }
                            }
                        />
                    </Card>
                    <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                        <Controller
                            control={register.current.control}
                            name='tipoClassificacao'
                            render={({ field }) => {
                                return (
                                    <Form.Item style={{ marginBottom: '0' }} label={'Classificar por:'}>
                                        <Switch
                                            checkedChildren="Trilhas"
                                            unCheckedChildren="Cursos"
                                            checked={field.value}
                                            onChange={(value) => {
                                                setFiltroCompleto(!value)
                                                field.onChange(value)
                                                onSubmit()
                                            }}
                                        />
                                    </Form.Item>
                                )
                            }
                            }
                        />
                    </Card>
                    <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                        <Controller
                            control={register.current.control}
                            name='itinerario'
                            render={({ field }) => (
                                <Form.Item style={{ marginBottom: '0' }} label={'Itinerário:'}>
                                    <Select
                                        {...field}
                                        placeholder={'Itinerário'}
                                        showArrow
                                        onChange={(value) => {
                                            field.onChange(value)
                                            onSubmit()
                                        }}
                                        style={{ width: '100%' }}
                                    >
                                        {itinerarios.map((itinerario) => {
                                            return itinerario.dados_gerais.id === 0 ?
                                                <Select.Option key={itinerario.dados_gerais.id} value={itinerario.dados_gerais.id}>Todos os Itinerários</Select.Option>
                                                : <Select.Option key={itinerario.dados_gerais.id} value={itinerario.dados_gerais.id}>{itinerario.dados_gerais.titulo}</Select.Option>
                                        })}
                                    </Select>
                                </Form.Item>
                            )}
                        />
                    </Card>
                    <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                        <Controller
                            control={register.current.control}
                            name='categoriasDeCompetencias'
                            render={({ field }) => (
                                <Form.Item style={{ marginBottom: '0' }} label={'Categorias de Competências:'}>
                                    <Select
                                        {...field}
                                        mode='multiple'
                                        placeholder={'Todas as categorias'}
                                        showArrow
                                        onChange={(value) => {
                                            field.onChange(value)
                                            onSubmit()
                                        }}
                                        style={{ width: '100%' }}
                                        filterOption={(input, option) => {
                                            return (option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0)
                                        }}
                                    >
                                        {categoriasDeCompetencias.map((categoria) => (
                                            <Select.Option key={categoria.id} value={categoria.id}>{categoria.nome}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            )}
                        />
                    </Card>
                    <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                        <Controller
                            control={register.current.control}
                            name='competencias'
                            render={({ field }) => (
                                <Form.Item style={{ marginBottom: '0' }} label={'Competências:'}>
                                    <Select
                                        {...field}
                                        mode='multiple'
                                        placeholder={'Todas as competências'}
                                        showArrow
                                        onChange={(value) => {
                                            field.onChange(value)
                                            onSubmit()
                                        }}
                                        style={{ width: '100%' }}
                                        filterOption={(input, option) => {
                                            return (option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0)
                                        }}
                                    >
                                        {competencias.map((competencia) => (
                                            <Select.Option key={competencia.id} value={competencia.id}>{competencia.titulo}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            )}
                        />
                    </Card>
                    {filtroCompleto &&
                        <>
                            <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                                <Controller
                                    control={register.current.control}
                                    name='temas'
                                    render={({ field }) => (
                                        <Form.Item style={{ marginBottom: '0' }} label={'Temas:'}>
                                            <Select
                                                {...field}
                                                mode='multiple'
                                                placeholder={'Todos os temas'}
                                                showArrow
                                                onChange={(value) => {
                                                    field.onChange(value)
                                                    onSubmit()
                                                }}
                                                filterOption={(input, option) => {
                                                    return (option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0)
                                                }}
                                                style={{ width: '100%' }}
                                            >
                                                {temas.map((tema) => (
                                                    <Select.Option key={tema.id} value={tema.id}>{tema.titulo}</Select.Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    )}
                                />
                            </Card>
                            <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                                <Controller
                                    control={register.current.control}
                                    name='subtemas'
                                    render={({ field }) => (
                                        <Form.Item style={{ marginBottom: '0' }} label={'Subtemas:'}>
                                            <Select
                                                {...field}
                                                placeholder={'Todos os Subtemas'}
                                                mode='multiple'
                                                showSearch
                                                onChange={(value) => {
                                                    field.onChange(value)
                                                    onSubmit()
                                                }}
                                                filterOption={(input, option) => {
                                                    return (option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0)
                                                }}
                                                style={{ width: '100%' }}
                                            >
                                                {subtemas.map((subtema) => (
                                                    <Select.Option key={subtema.id} value={subtema.id}>{subtema.titulo}</Select.Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    )}
                                />
                            </Card>
                            <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                                <Controller
                                    control={register.current.control}
                                    name='cargaHoraria'
                                    render={({ field }) => (
                                        <Form.Item style={{ marginBottom: '0' }} label={'Carga Horária:'}>
                                            <Slider
                                                {...field}
                                                range
                                                marks={{
                                                    0: '0h',
                                                    200: '200h',
                                                }}
                                                step={10}
                                                max={200}
                                                onChange={(value) => {
                                                    field.onChange(value)
                                                    onSubmit()
                                                }}
                                            />
                                        </Form.Item>
                                    )}
                                />
                            </Card>
                            <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                                <Controller
                                    control={register.current.control}
                                    name='instCertificadora'
                                    render={({ field }) => (
                                        <Form.Item style={{ marginBottom: '0' }} label={'Instituição Certificadora:'}>
                                            < Select
                                                {...field}
                                                placeholder={'Todas as Instituições'}
                                                mode='multiple'
                                                showArrow
                                                onChange={(value) => {
                                                    field.onChange(value)
                                                    onSubmit()
                                                }}
                                                style={{ width: '100%' }}
                                            >
                                                {instituicoes.map((instituicao) => (
                                                    <Select.Option key={instituicao.id} value={instituicao.id}>{instituicao.titulo}</Select.Option>
                                                ))}
                                            </Select >
                                        </Form.Item>
                                    )}
                                />
                            </Card>
                        </>
                    }
                    <Card style={{ borderColor: 'transparent', backgroundColor: 'transparent' }} bodyStyle={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Button
                            type='primary'
                            onClick={() => {
                                onReset()
                            }}
                        >
                            Resetar Filtro
                        </Button>
                    </Card>
                </Form>
            </FormProvider>
        </Col >
    )
}