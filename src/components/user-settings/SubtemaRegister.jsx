import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import { registerSubthemeSchema } from "../../schemas/registers/registersSchema";

import { Button, Card, Form, Input, Layout, notification, Select } from "antd";

const { Content } = Layout;

export default function SubtemaRegister(props) {
  const { actionVisible } = props;

  const getThemes = useStoreActions((actions) => actions.adm.getThemes);
  const registerSubtheme = useStoreActions(
    (actions) => actions.adm.registerSubtheme
  );
  const themes = useStoreState((state) => state.adm.themes);
  const loading = useStoreState((state) => state.adm.loading);

  const register = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(registerSubthemeSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    const newComp = await registerSubtheme(values);
    if (newComp.error) {
      notification.error({
        message: "Algo deu errado!",
        description: newComp.message,
      });
    } else {
      notification.success({
        message: "Subtema cadastrado com sucesso!",
      });
      register.reset();
      actionVisible();
    }
  };

  useEffect(() => {
    (async () => {
      await getThemes();
    })();
  }, [getThemes]);

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
                      label={"Nome do subtema"}
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
                name="themeIds"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Temas do subtema"}
                      style={{ marginBottom: "0" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Select
                        placeholder="Temas"
                        {...field}
                        showSearch
                        mode={"multiple"}
                        filterOption={(input, option) => {
                          return (
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                      >
                        {themes.map((element) => (
                          <Select.Option key={element.id} value={element.id}>
                            {element.name}
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
