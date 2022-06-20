import React, { useEffect } from "react";
import { registerSchema } from "../../schemas/registers/registerSchema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import InputMask from "../InputMask";

import { Button, Card, Form, Input, Layout, notification, Select } from "antd";

const { Content } = Layout;

export default function RegisterUser() {
  const registerNewUser = useStoreActions(
    (actions) => actions.adm.registerNewUser
  );
  const getRoles = useStoreActions((state) => state.adm.getRoles);
  const loading = useStoreState((state) => state.adm.loading);
  const roles = useStoreState((state) => state.adm.roles);

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
    values.cpf = values.cpf.replace(/\./g, "").replace(/-/g, "");
    values.phone = values.phone
      .replace(/\(/g, "")
      .replace(/\)/g, "")
      .replace(" ", "")
      .replace(/-/g, "");
    const newUser = await registerNewUser(values);
    if (newUser.error) {
      notification.error({
        message: "Algo deu errado!",
        description: newUser.message,
      });
    } else {
      notification.success({
        message: "Registo bem sucedido!",
        description: "O novo usuário deve verificar seu email!",
      });
    }
  };

  useEffect(() => {
    getRoles();
  }, [getRoles]);

  return (
    <>
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
                name="institution"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Instituição"}
                      style={{ marginBottom: "0" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input placeholder="Instituição" {...field} />
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="email"
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
                name="cpf"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"CPF"}
                      style={{ marginBottom: "0" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <InputMask
                        mask="999.999.999-99"
                        placeholder="___.___.___-__"
                        {...field}
                      />
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="phone"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Número de Telefone"}
                      style={{ marginBottom: "0" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <InputMask
                        mask="(99) 99999-9999"
                        placeholder="(__) _____-____"
                        {...field}
                      />
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="roles"
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
                      <Select
                        mode="multiple"
                        loading={loading}
                        placeholder="cargo"
                        {...field}
                      >
                        {roles.map((role) => (
                          <Select.Option key={role.id} value={role.id}>
                            {role.name}
                          </Select.Option>
                        ))}
                      </Select>
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
                  Cadastrar
                </Button>
              </div>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  );
}
