import React, { useEffect } from 'react'

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
    const changeFilter = useStoreActions(actions => actions.cursos.changeFilter)
    const onChangeTipoVisualizacao = useStoreActions(actions => actions.adm.onChangeTipoVisualizacao)
    const filter = useStoreState(state => state.cursos.filter)

    const onSubmit = (values) => {
        changeFilter(values)
    }

    const onSearch = () => {
        changeFilter(register.getValues())
    }

    const register = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: filterDefault,
        context: undefined,
        criteriaMode: 'firstError',
        shouldFocusError: true,
        shouldUnregister: false,
        shouldUseNativeValidation: false,
        delayError: undefined
    });

    useEffect(() => {
        register.reset()
    }, [filter.itinerario])

    return (
        <Col style={{ padding: '8px 16px', overflowY: 'scroll' }}>
            <FormProvider {...register}>
                <Form
                    layout='vertical'
                    onFinish={register.handleSubmit(onSubmit)}
                >
                    <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                        <Controller
                            control={register.control}
                            name='buscaInterna'
                            render={({ field }) => {
                                return (
                                    <Form.Item style={{ marginBottom: '0' }} >
                                        <Input allowClear={true} prefix={<SearchOutlined />} placeholder="Buscar" {...field} onPressEnter={onSearch} />
                                    </Form.Item>
                                )
                            }}
                        />
                    </Card>
                    <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                        <Controller
                            control={register.control}
                            defaultValue={true}
                            name='tipoVisualizacao'
                            render={() => {
                                return (
                                    <Form.Item style={{ marginBottom: '0' }} label={'Tipo de Visualização:'}>
                                        <Switch
                                            defaultChecked={false}
                                            checkedChildren="Lista"
                                            unCheckedChildren="Grafo"
                                            onChange={(value) => { onChangeTipoVisualizacao(value) }}
                                        />
                                    </Form.Item>
                                )
                            }
                            }
                        />
                    </Card>
                    <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                        <Controller
                            control={register.control}
                            name='categoriasDeCompetencias'
                            render={({ field }) => (
                                <Form.Item style={{ marginBottom: '0' }} label={'Categorias de Competências:'}>
                                    <Select
                                        {...field}
                                        mode='multiple'
                                        placeholder={'Todas as categorias'}
                                        showArrow
                                        style={{ width: '100%' }}
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
                            control={register.control}
                            name='competencias'
                            render={({ field }) => (
                                <Form.Item style={{ marginBottom: '0' }} label={'Competências:'}>
                                    <Select
                                        {...field}
                                        mode='multiple'
                                        placeholder={'Todas as competências'}
                                        showArrow
                                        style={{ width: '100%' }}
                                    >
                                        {competencias.map((competencia) => (
                                            <Select.Option key={competencia.id} value={competencia.id}>{competencia.titulo}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            )}
                        />
                    </Card>
                    <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                        <Controller
                            control={register.control}
                            name='temas'
                            render={({ field }) => (
                                <Form.Item style={{ marginBottom: '0' }} label={'Temas:'}>
                                    <Select
                                        {...field}
                                        mode='multiple'
                                        placeholder={'Todos os temas'}
                                        showArrow
                                        filterOption={(input, option) => {
                                            console.log(option)
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
                            control={register.control}
                            name='subtemas'
                            render={({ field }) => (
                                <Form.Item style={{ marginBottom: '0' }} label={'Subtemas:'}>
                                    <Select
                                        {...field}
                                        placeholder={'Todos os Subtemas'}
                                        mode='multiple'
                                        showSearch
                                        filterOption={(input, option) => {
                                            console.log(option)
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
                            control={register.control}
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
                                    />
                                </Form.Item>
                            )}
                        />
                    </Card>
                    <Card style={{ borderRadius: '21px', marginBottom: '5px' }} bodyStyle={{ alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                        <Controller
                            control={register.control}
                            name='instCertificadora'
                            render={({ field }) => (
                                <Form.Item style={{ marginBottom: '0' }} label={'Instituição Certificadora:'}>
                                    < Select
                                        {...field}
                                        placeholder={'Todas as Instituições'}
                                        mode='multiple'
                                        showArrow
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
                    <Card style={{ borderColor: 'transparent', backgroundColor: 'transparent' }} bodyStyle={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Button
                            style={{ marginRight: 8 }}
                            type='primary'
                            htmlType='submit'
                        >
                            Aplicar Filtro
                        </Button>
                        <Button
                            type='primary'
                            onClick={() => {
                                register.reset()
                                onSubmit(filterDefault)
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