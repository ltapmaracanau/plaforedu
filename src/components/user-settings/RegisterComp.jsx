import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import { registerCompSchema } from "../../schemas/registers/registerCompSchema";

import { Button, Card, Form, Input, Layout, notification, Select } from "antd";

const { Content } = Layout;

export default function RegisterComp() {
  const getCatComp = useStoreActions((actions) => actions.adm.getCatComp);
  const registerComp = useStoreActions((actions) => actions.adm.registerComp);
  const catComp = useStoreState((state) => state.adm.catComp);
  const loading = useStoreState((state) => state.adm.loading);

  const register = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(registerCompSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    const newComp = await registerComp(values);
    if (newComp.error) {
      notification.error({
        message: "Algo deu errado!",
        description: newComp.message,
      });
    } else {
      notification.success({
        message: "Competência cadastrada com sucesso!",
      });
      register.reset();
    }
  };

  useEffect(() => {
    (async () => {
      await getCatComp();
    })();
  }, [getCatComp]);

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
                      label={"Nome da competência"}
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
                name="competenciesCategoryIds"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Categorias da competência"}
                      style={{ marginBottom: "0" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Select
                        placeholder="Categorias"
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
                        {catComp.map((element) => (
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
                  marginBottom: "15px",
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
