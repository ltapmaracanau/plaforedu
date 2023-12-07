import { forgetPasswordSchema } from "../schemas/forgetPasswordSchema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";

import { Button, Card, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const forgetPassword = useStoreActions(
    (actions) => actions.adm.forgetPassword
  );
  const loading = useStoreState((state) => state.adm.loading);

  let navigate = useNavigate();

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(forgetPasswordSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    const forget = await forgetPassword(values);
    if (forget.error) {
      notification.error({
        message: "Algo deu errado!",
        description: forget.message,
      });
    } else {
      notification.success({
        message: "Solicitação de alteração de senha encaminhada!",
        description: "Verifique seu email!",
      });
      navigate(`/`);
    }
  };

  return (
    <div
      style={{
        flexGrow: 1,
        height: "100%",
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
        title={"RECUPERAR SENHA"}
      >
        <Form layout="vertical" onFinish={register.handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={register.control}
            render={({ field, fieldState: { error } }) => {
              return (
                <Form.Item
                  label={"Digite seu email"}
                  validateStatus={error ? "error" : ""}
                  help={error ? error.message : ""}
                  hasFeedback
                >
                  <Input placeholder="email@exemplo.com" {...field} />
                </Form.Item>
              );
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              shape="round"
            >
              Confirmar
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
