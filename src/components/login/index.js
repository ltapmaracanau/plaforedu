import React, { useState } from 'react'
import { loginSchema } from '../../schemas/loginSchema'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Button,
    Card,
    Form,
    Input,
    Space,
    Modal,
    notification
} from 'antd'
import { useStoreActions, useStoreState } from 'easy-peasy';

export default function Login() {

    const login = useStoreActions(actions => actions.adm.login)
    const setLoginIsVisible = useStoreActions(actions => actions.adm.setLoginIsVisible)
    const loading = useStoreState(state => state.adm.loading)
    const isVisible = useStoreState(state => state.adm.loginIsVisible)

    const register = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {},
        resolver: yupResolver(loginSchema),
        context: undefined,
        criteriaMode: 'firstError',
        shouldFocusError: true,
        shouldUnregister: false,
        shouldUseNativeValidation: false,
        delayError: undefined
    })

    const onSubmit = async (values) => {
        const tryLogin = await login(values)
        if (tryLogin.error) {
            notification.error({
                message: 'Algo deu errado!',
                description: "Verifique seu login ou senha.",
            })
        } else {
            console.log('Aqui ocorre a atualização da página e o acesso ao sistema!');
        }
    }

    return (
        <Modal
            closable={true}
            title={'Login'}
            visible={isVisible}
            onCancel={() => { setLoginIsVisible(false) }}
            footer={null}
        >
            <Card>
                <Form
                    layout='vertical'
                    onFinish={register.handleSubmit(onSubmit)}
                >
                    <Controller
                        name='username'
                        control={register.control}
                        render={({ field, fieldState: { error } }) => {
                            return (
                                <Form.Item
                                    label={'Login'}
                                    validateStatus={error ? 'error' : ''}
                                    help={error ? error.message : ''}
                                    hasFeedback
                                >
                                    <Input placeholder='email@exemplo.com' {...field} />
                                </Form.Item>
                            )
                        }}
                    />
                    <Controller
                        name='password'
                        control={register.control}
                        render={({ field, fieldState: { error } }) => {
                            return (
                                <Form.Item
                                    label={'Senha'}
                                    validateStatus={error ? 'error' : ''}
                                    help={error ? error.message : ''}
                                    hasFeedback
                                >
                                    <Input.Password {...field} />
                                </Form.Item>
                            )
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '15px'
                        }}
                    >
                        <Button loading={loading} type='primary' htmlType='submit'>Login</Button>
                    </div>
                </Form>
                <Space
                    align='center'
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly'
                    }}
                >
                    <a href='/'>Esqueci a senha</a>
                </Space>
            </Card>
        </Modal>
    )
}
