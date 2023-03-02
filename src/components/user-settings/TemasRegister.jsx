import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import { registerThemeSchema } from "../../schemas/registers/registersSchema";

import { Button, Card, Form, Input, Layout, notification, Switch } from "antd";

const { Content } = Layout;

export default function TemasRegister(props) {
  const { theme = null, actionVisible } = props;

  const registerTheme = useStoreActions(
    (actions) => actions.themes.registerTheme
  );
  const updateTheme = useStoreActions((actions) => actions.themes.updateTheme);
  const registering = useStoreState((state) => state.themes.registering);

  const [filed, setFiled] = useState(theme?.filedAt !== null);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: theme,
    resolver: yupResolver(registerThemeSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    if (theme) {
      try {
        if ((theme.filedAt !== null) !== filed) {
          await updateTheme({ ...values, id: theme.id, filed: filed });
        } else {
          await updateTheme({ ...values, id: theme.id });
        }
        notification.success({
          message: "Tema alterado com sucesso!",
        });
        actionVisible();
      } catch (error) {
        notification.error({
          message: "Erro!",
          description: error.message,
        });
      }
    } else {
      try {
        await registerTheme(values);
        notification.success({
          message: "Tema cadastrado com sucesso!",
        });
        register.reset();
        actionVisible();
      } catch (error) {
        notification.error({
          message: "Algo deu errado!",
          description: error.message,
        });
      }
    }
  };

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
            style={{ width: "350px", margin: "30px 0px" }}
            bodyStyle={{
              backgroundColor: "#f8f8f8",
              fontFamily: "Roboto",
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
                      label={"Nome do tema"}
                      style={{ marginBottom: "20px" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input placeholder="Nome" {...field} />
                    </Form.Item>
                  );
                }}
              />
              {theme && (
                <Form.Item
                  label={"Tema arquivado"}
                  style={{ marginBottom: "20px" }}
                >
                  <Switch
                    checked={filed}
                    defaultChecked={theme.filedAt}
                    onChange={(value) => {
                      setFiled(value);
                    }}
                  />
                </Form.Item>
              )}
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
                  {theme ? <>Alterar</> : <>Cadastrar</>}
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}
