import React from "react";
import { registerSchema } from "../schemas/RegisterSchema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";

import { Button, Card, Form, Input, Layout, notification, Select } from "antd";
import HeaderHome from "../components/header/HeaderHome";

const { Content } = Layout;

export default function Register() {
  const registerNewUser = useStoreActions(
    (actions) => actions.adm.registerNewUser
  );
  const loading = useStoreState((state) => state.adm.loading);

  const register = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(registerSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    const newUser = await registerNewUser(values);
    if (newUser.error) {
      notification.error({
        message: "Algo deu errado!",
        description: "Verifique seu login ou senha.",
      });
    } else {
      notification.success({
        message: "Registo bem sucedido!",
        description: "Agora você pode entrar na PlaforEDU!",
      });
    }
  };

  return (
    <>
      <HeaderHome />
      <Layout>
        <Content
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{ width: "350px", margin: "30px 0px" }}
            headStyle={{
              backgroundColor: "#2C55A1",
              textAlign: "center",
              color: "#fff",
              fontFamily: "Poppins",
              fontSize: "18px",
            }}
            title={"CADASTRO"}
          >
            <Form layout="vertical" onFinish={register.handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Nome Completo"}
                      style={{ marginBottom: "0" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input placeholder="Nome Completo" {...field} />
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="username"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Login"}
                      style={{ marginBottom: "0" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input placeholder="email@exemplo.com" {...field} />
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="cargo"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Cargo"}
                      style={{ marginBottom: "0" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Select placeholder="cargo" {...field}>
                        <Select.Option value={"TAE"}>
                          Técnico-Administrativo em Educação
                        </Select.Option>
                        <Select.Option value={"Docente"}>Docente</Select.Option>
                        <Select.Option value={"Aposentado"}>
                          Aposentado
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="password1"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Senha"}
                      style={{ marginBottom: "0" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input.Password {...field} />
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="password2"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Confirme a senha"}
                      style={{ marginBottom: "0" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input.Password {...field} />
                    </Form.Item>
                  );
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "15px",
                }}
              >
                <Button
                  loading={loading}
                  disabled={!register.formState.isValid}
                  type="primary"
                  shape="round"
                  htmlType="submit"
                >
                  Cadastre-se
                </Button>
              </div>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  );
}
