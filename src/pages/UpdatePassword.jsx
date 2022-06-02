import React from "react";
import { resetPasswordSchema } from "../schemas/resetPasswordSchema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";

import { Button, Card, Form, Input, Layout, notification } from "antd";
import HeaderHome from "../components/header/HeaderHome";

const { Content } = Layout;

export default function UpdatePassword() {
  const updatePassword = useStoreActions(
    (actions) => actions.adm.updatePassword
  );
  const loading = useStoreState((state) => state.adm.loading);

  const register = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(resetPasswordSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    const tryReset = await updatePassword({
      oldPassword: values.oldPassword,
      newPassword: values.password1,
    });
    if (tryReset.error) {
      notification.error({
        message: "Algo deu errado!",
        description: tryReset.message,
      });
    } else {
      notification.success({
        message: "A senha foi alterada com sucesso!",
      });
      register.reset();
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
            style={{ width: "350px" }}
            headStyle={{
              backgroundColor: "#2C55A1",
              textAlign: "center",
              color: "#fff",
              fontFamily: "Poppins",
              fontSize: "18px",
            }}
            title={"ALTERAÇÃO DE SENHA"}
          >
            <Form layout="vertical" onFinish={register.handleSubmit(onSubmit)}>
              <Controller
                name="oldPassword"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Senha Antiga"}
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
                name="password1"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Nova Senha"}
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
                      label={"Repita a Nova Senha"}
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
                  type="primary"
                  htmlType="submit"
                  shape="round"
                >
                  Enviar
                </Button>
              </div>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  );
}
