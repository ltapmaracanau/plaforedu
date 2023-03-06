import React from "react";
import { resetPasswordSchema } from "../schemas/resetPasswordSchema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";

import { Button, Card, Form, Input, Layout, notification } from "antd";
import HeaderHome from "../components/header/HeaderHome";
import { useLocation, useNavigate } from "react-router-dom";

const { Content } = Layout;

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ResetPassword() {
  const query = useQuery();
  const resetPassword = useStoreActions((actions) => actions.adm.resetPassword);
  const loading = useStoreState((state) => state.adm.loading);

  let navigate = useNavigate();

  const register = useForm({
    mode: "onChange",
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
    const tryReset = await resetPassword({
      token: query.get("token").replace('"', ""),
      password: values.password1,
    });
    if (tryReset.error) {
      notification.error({
        message: "Algo deu errado!",
        description: tryReset.message,
      });
    } else {
      notification.success({
        message: "Alteração bem sucedida!",
        description: "Agora você pode fazer login!",
      });
      navigate(`/`);
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
          title={"ALTERAÇÃO DE SENHA"}
        >
          <Form layout="vertical" onFinish={register.handleSubmit(onSubmit)}>
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
    </>
  );
}
