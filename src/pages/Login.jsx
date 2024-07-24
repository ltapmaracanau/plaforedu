import { loginSchema } from "../schemas/loginSchema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions } from "easy-peasy";

import { Button, Card, Form, Input, Modal, Space, notification } from "antd";
import { Link, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from "react";
import TermConsentLogin from "../components/privacyTerms/TermConsentLogin";

export default function Login() {
  const login = useStoreActions((actions) => actions.adm.login);
  const [cookies, _setCookie] = useCookies(["cookieConsent"]);
  const [loading, setLoading] = useState(false);
  const [modalSignTermVisible, setModalSignTermVisible] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const setCookieConsentModalVisible = useStoreActions(
    (actions) => actions.adm.setCookieConsentModalVisible
  );

  const getMyProfile = useStoreActions((actions) => actions.adm.getMyProfile);
  const signTermAction = useStoreActions((actions) => actions.adm.signTerm);
  const logout = useStoreActions((actions) => actions.adm.logout);

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

  const verifyPending = ({ status }) => {
    if (status === "PENDING") {
      notification.warning({
        message: "Aviso!",
        description:
          "Antes do acesso total ao sistema você precisa alterar sua senha!",
      });
    }
  };

  const onOkModal = async () => {
    try {
      const response = await getMyProfile();
      await signTermAction({ userId: response.id });
      setModalSignTermVisible(false);
      notification.success({
        message: "Termo assinado com sucesso!",
      });
      verifyPending({ status: response.status });
      setAuthenticated(true);
    } catch (error) {
      notification.error({
        message: "Erro ao assinar termo!",
        description: error.message,
      });
    }
  };

  const onSubmit = async (values) => {
    if (!cookies.cookieConsent) {
      setCookieConsentModalVisible(true);
      notification.warning({
        message: "Aviso!",
        description: "Você precisa aceitar os cookies para continuar!",
      });
      return;
    }
    setLoading(true);
    try {
      const { data } = await login(values);
      if (!data.hasSignedTerm) {
        notification.warning({
          message: "Aviso!",
          description:
            "Antes de acessar o sistema você precisa assinar o termo de consentimento!",
        });
        setModalSignTermVisible(true);
        return;
      }
      verifyPending({ status: data.status });
      getMyProfile();
      setAuthenticated(true);
    } catch (error) {
      notification.error({
        message: "Erro ao fazer login!",
        description: error,
      });
    } finally {
      setLoading(false);
    }
  };

  if (authenticated) {
    return <Navigate to="/" />;
  }

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
      <Modal
        width={"70%"}
        title="TERMO DE CONSENTIMENTO PARA TRATAMENTO DE DADOS PESSOAIS"
        open={modalSignTermVisible}
        onOk={onOkModal}
        okText="Assinar"
        onCancel={() => {
          setModalSignTermVisible(false);
          logout();
        }}
      >
        <TermConsentLogin />
      </Modal>
    </div>
  );
}
