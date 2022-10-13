import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import { registerCatCompSchema } from "../../schemas/registers/registersSchema";

import { Button, Card, Form, Input, Layout, notification } from "antd";

const { Content } = Layout;

export default function CatCompRegister(props) {
  const { actionVisible } = props;

  const registerCatComp = useStoreActions(
    (actions) => actions.adm.registerCatComp
  );
  const loading = useStoreState((state) => state.adm.loading);

  const register = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(registerCatCompSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    const newCat = await registerCatComp(values);
    if (newCat.error) {
      notification.error({
        message: "Algo deu errado!",
        description: newCat.message,
      });
    } else {
      notification.success({
        message: "Categoria cadastrada com sucesso!",
      });
      register.reset();
      actionVisible();
    }
  };

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
                      label={"Nome da categoria"}
                      style={{ marginBottom: "0" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input placeholder="Nome" {...field} />
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="description"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Descrição da categoria"}
                      style={{ marginBottom: "0" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input.TextArea placeholder="Descrição" {...field} />
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
