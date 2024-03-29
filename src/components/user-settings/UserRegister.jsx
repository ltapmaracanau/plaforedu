import React, { useEffect } from "react";
import { registerSchema } from "../../schemas/registers/registersSchema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import InputMask from "../InputMask";

import { Button, Card, Form, Input, Layout, notification, Select } from "antd";

const { Content } = Layout;

export default function UserRegister(props) {
  const { actionVisible } = props;

  const registerNewUser = useStoreActions(
    (actions) => actions.users.registerNewUser
  );
  const getRoles = useStoreActions((state) => state.roles.getRoles);
  const loading = useStoreState((state) => state.users.loading);
  const registering = useStoreState((state) => state.users.registering);
  const roles = useStoreState((state) => state.roles.roles);

  const register = useForm({
    mode: "onChange",
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
    try {
      await registerNewUser(values);
      notification.success({
        message: "Registo bem sucedido!",
        description: "O novo usuário deve verificar seu email!",
      });
      actionVisible();
    } catch (error) {
      notification.error({
        message: "Algo deu errado!",
        description: error.message,
      });
    }
  };

  useEffect(() => {
    getRoles();
  }, [getRoles]);

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{ width: "100%", margin: "30px 0px" }}
            styles={{
              body: {
                backgroundColor: "#f8f8f8",
                fontFamily: "Roboto",
              },
            }}
            bordered={false}
          >
            <Form layout="vertical" onFinish={register.handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Nome Completo"}
                      style={{ marginBottom: "20px" }}
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
                      style={{ marginBottom: "20px" }}
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
                      style={{ marginBottom: "20px" }}
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
                      style={{ marginBottom: "20px" }}
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
                      style={{ marginBottom: "20px" }}
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
                      style={{ marginBottom: "20px" }}
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
                  margin: "15px 0px",
                }}
              >
                <Button
                  loading={registering}
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
        </div>
      </div>
    </>
  );
}
