import { loginSchema } from "../schemas/loginSchema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";

import { Button, Card, Form, Input, Space, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Login() {
  const login = useStoreActions((actions) => actions.adm.login);
  const loading = useStoreState((state) => state.adm.loading);
  const [cookies, _setCookie] = useCookies(["cookieConsent"]);

  const setVisible = useStoreActions(
    (actions) => actions.adm.setCookieConsentModalVisible
  );

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
      if (!cookies.cookieConsent) {
        setVisible(true);
        notification.warning({
          message: "Aviso!",
          description: "Você precisa aceitar os cookies para continuar!",
        });
        return;
      }
      await login(values);
      navigate(`/`);
    } catch (error) {
      notification.error({
        message: "Erro!",
        description: error.message,
      });
    }
  };

  return (
    <div
      style={{
        flex: 1,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{ width: "350px" }}
        styles={{
          header: {
            backgroundColor: "#2C55A1",
            textAlign: "center",
            color: "#fff",
            fontFamily: "Poppins",
            fontSize: "18px",
          },
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
  );
}
