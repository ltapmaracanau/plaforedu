import React from "react";
import { updatePasswordSchema } from "../../schemas/registers/updatePasswordSchema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";

import { Button, Card, Form, Input, notification, Layout } from "antd";

const { Content } = Layout;

export default function UpdatePassword() {
  const updatePassword = useStoreActions(
    (actions) => actions.adm.updatePassword
  );
  const loading = useStoreState((state) => state.adm.loading);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(updatePasswordSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    try {
      await updatePassword({
        oldPassword: values.oldPassword,
        newPassword: values.password1,
      });
      notification.success({
        message: "A senha foi alterada com sucesso!",
      });
      register.reset();
    } catch (error) {
      notification.error({
        message: "Algo deu errado!",
        description: error.message,
      });
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
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
        </div>
      </div>
    </>
  );
}
