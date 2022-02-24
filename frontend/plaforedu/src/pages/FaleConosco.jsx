import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import teamSVG from '../assets/ITteam.jpg'

import { faleConoscoSchema } from '../schemas/faleConoscoSchema';

import { sendEmail } from '../services/sendEmailService';
import HeaderHome from '../components/header/HeaderHome'

import {
    SendOutlined,
    WarningOutlined
} from '@ant-design/icons';

import {
    Form,
    Layout,
    Input,
    Button,
    Select,
    Card,
    Row,
    Modal,
    Result,
    Col,
    Image,
    Grid,
} from 'antd'

const { useBreakpoint } = Grid;


const { Content } = Layout

export default function FaleConosco() {

    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [resultado, setResultado] = useState(null)
    const [isSending, setIsSending] = useState(false)

    const screens = useBreakpoint()

    console.log(screens);

    const register = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            from_name: '',
            type_message: 'Elogio',
            from_email: '',
            message: '',
        },
        resolver: yupResolver(faleConoscoSchema),
        context: undefined,
        criteriaMode: 'firstError',
        shouldFocusError: true,
        shouldUnregister: false,
        shouldUseNativeValidation: false,
        delayError: undefined
    })

    const onSubmit = async (values) => {
        const valuesToSend = {
            service_id: 'service_edhhocn',
            template_id: 'template_p61p5xd',
            user_id: 'user_SzHDcMIvIxZqgIRMp8kjM',
            template_params: values
        }
        // Envio da requisição 
        setIsSending(true)
        const result = await sendEmail(valuesToSend)
        setIsSending(false)
        // Procesamento do resultado
        if (result.status === 200) {
            register.reset()
            setResultado(
                <Result
                    status="success"
                    title="Sua mensagem foi enviada com sucesso!"
                    subTitle="Dentro de algumas horas vamos retornar ao email informado com mais detalhes"
                    extra={[
                        <Button type="primary" key="console" onClick={() => { setModalIsVisible(false) }} >
                            Maravilha!
                        </Button>,
                    ]}
                >
                </Result>
            )
        } else {
            setResultado(
                <Result
                    status="500"
                    title="Algo deu errado!"
                    subTitle="Por favor, tente novamente mais tarde 😉"
                    extra={[
                        <Button type="primary" key="console" onClick={() => { setModalIsVisible(false) }} >
                            Poxa 😢, Tudo bem!
                        </Button>,
                    ]}
                >
                </Result>
            )
        }
        setModalIsVisible(true)
    }

    return (
        <Layout>
            <HeaderHome />
            <Layout>
                <Content style={{ backgroundColor: '#fff' }} >
                    <Form
                        layout='vertical'
                        onFinish={register.handleSubmit(onSubmit)}
                    >
                        <Row
                            style={{ margin: '40px 0px' }}
                        >
                            {screens.xl ? (
                                <Col
                                    flex={12}
                                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Image preview={false} src={teamSVG} width={600} />
                                </Col>
                            ) : null}
                            <Col
                                flex={12}
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Card
                                    headStyle={{ fontFamily: 'Roboto', fontSize: '30px', fontWeight: 'bold' }}
                                    style={{ width: '500px', border: '5px solid #ebebeb' }}
                                    title={'Fale Conosco'}
                                >
                                    <Controller
                                        control={register.control}
                                        name='from_name'
                                        render={({ field, fieldState: { error } }) => {
                                            return (
                                                <Form.Item
                                                    style={{ marginBottom: '0', fontFamily: 'Roboto' }}
                                                    validateStatus={error ? 'error' : ''}
                                                    help={error ? error.message : ''}
                                                    hasFeedback
                                                    label={'Nome'}
                                                >
                                                    <Input placeholder="Seu nome" {...field} />
                                                </Form.Item>
                                            )
                                        }}
                                    />
                                    <Controller
                                        control={register.control}
                                        name='from_email'
                                        render={({ field, fieldState: { error } }) => {
                                            return (
                                                <Form.Item
                                                    style={{ marginBottom: '0', fontFamily: 'Roboto' }}
                                                    validateStatus={error ? 'error' : ''}
                                                    help={error ? error.message : ''}
                                                    hasFeedback
                                                    label={'Email'}
                                                >
                                                    <Input placeholder="email@exemplo.com" {...field} />
                                                </Form.Item>
                                            )
                                        }}
                                    />
                                    <Controller
                                        control={register.control}
                                        name='type_message'
                                        render={({ field, fieldState: { error } }) => {
                                            return (
                                                <Form.Item
                                                    style={{ marginBottom: '0', fontFamily: 'Roboto' }}
                                                    validateStatus={error ? 'error' : ''}
                                                    help={error ? error.message : ''}
                                                    hasFeedback
                                                    label={'A que se refere sua mensagem'}
                                                >
                                                    <Select {...field} >
                                                        <Select.Option value={'Elogio'}>Elogio</Select.Option>
                                                        <Select.Option value={'Sugestão'}>Sugestão</Select.Option>
                                                        <Select.Option value={'Reclamação'}>Reclamação</Select.Option>
                                                    </Select>
                                                </Form.Item>
                                            )
                                        }}
                                    />
                                    <Controller
                                        control={register.control}
                                        name='message'
                                        render={({ field, fieldState: { error } }) => {
                                            return (
                                                <Form.Item
                                                    style={{ marginBottom: '0', fontFamily: 'Roboto' }}
                                                    validateStatus={error ? 'error' : ''}
                                                    help={error ? error.message : ''}
                                                    hasFeedback
                                                    label={'Sua mensagem'}
                                                >
                                                    <Input.TextArea autoSize={{ minRows: 4, maxRows: 10 }} placeholder="Escreva aqui" {...field} />
                                                </Form.Item>
                                            )
                                        }}
                                    />
                                    <Button
                                        disabled={!register.formState.isValid}
                                        loading={register.formState.isValidating || isSending}
                                        htmlType='submit'
                                        type='primary'
                                        icon={register.formState.isValid ? <SendOutlined /> : <WarningOutlined />}
                                    >
                                        Enviar
                                    </Button>
                                </Card>
                            </Col>
                        </Row>
                    </Form>
                    <Modal
                        visible={modalIsVisible}
                        footer={null}
                    >
                        {resultado}
                    </Modal>
                </Content>
            </Layout>
        </Layout>
    )
}
