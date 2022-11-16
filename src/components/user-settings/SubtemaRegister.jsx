import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import { registerSubthemeSchema } from "../../schemas/registers/registersSchema";

import { Button, Card, Form, Input, Layout, notification, Select } from "antd";

const { Content } = Layout;

export default function SubtemaRegister(props) {
  const {
    subtheme = {
      name: "",
      themes: [],
    },
    actionVisible,
  } = props;

  const subthemeRefactored = {
    name: subtheme.name,
    themeIds: subtheme.themes?.map((item) => item.id),
  };

  const getThemes = useStoreActions((actions) => actions.themes.getThemes);
  const registerSubtheme = useStoreActions(
    (actions) => actions.themes.registerSubtheme
  );
  const updateSubtheme = useStoreActions(
    (actions) => actions.themes.updateSubtheme
  );
  const themes = useStoreState((state) => state.themes.themes);
  const registering = useStoreState((state) => state.themes.registering);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: subthemeRefactored,
    resolver: yupResolver(registerSubthemeSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    if (subtheme === {}) {
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
    } else {
      const tryUpdate = await updateSubtheme({ ...values, id: subtheme.id });
      if (tryUpdate?.error) {
        notification.error({
          message: "Erro!",
          description: tryUpdate.message,
        });
      } else {
        notification.success({
          message: "Subtema alterado com sucesso!",
        });
        actionVisible();
      }
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
              <Controller
                name="themeIds"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Temas do subtema"}
                      style={{ marginBottom: "20px" }}
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
                  loading={registering}
                  disabled={!register.formState.isValid}
                  type="primary"
                  shape="round"
                  htmlType="submit"
                >
                  {subtheme.id ? <>Alterar</> : <>Cadastrar</>}
                </Button>
              </div>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  );
}
