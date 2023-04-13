import React from "react";
import { loginSchema } from "../schemas/loginSchema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";

import { Button, Card, Form, Input, Space, notification } from "antd";
import HeaderHome from "../components/header/HeaderHome";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const login = useStoreActions((actions) => actions.adm.login);
  const loading = useStoreState((state) => state.adm.loading);

  let navigate = useNavigate();

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(loginSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    try {
      await login(values);
      notification.success({
        message: "Login bem sucedido!",
      });
      navigate(`/`);
    } catch (error) {
      notification.error({
        message: "Erro!",
        description: error.message,
      });
    }
  };

  return (
    <>
      <HeaderHome />
      <div
        style={{
          height: "100%",
          flexGrow: 1,
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
          title={"IDENTIFICAÇÃO"}
        >
          <Form layout="vertical" onFinish={register.handleSubmit(onSubmit)}>
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
              name="password"
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
            <Space
              align="end"
              style={{
                display: "flex",
                justifyContent: "right",
              }}
            >
              <Link to="/forget">Esqueci a senha</Link>
            </Space>
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
                Login
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
}
