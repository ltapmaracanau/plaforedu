import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import { registerCatCompSchema } from "../../schemas/registers/registersSchema";

import { Button, Card, Form, Input, Layout, notification, Switch } from "antd";

const { Content } = Layout;

export default function CatCompRegister(props) {
  const { catComp = null, actionVisible } = props;

  const registerCatComp = useStoreActions(
    (actions) => actions.competencies.registerCatComp
  );

  const updateCatComp = useStoreActions(
    (actions) => actions.competencies.updateCatComp
  );
  const registering = useStoreState((state) => state.competencies.registering);

  const [filed, setFiled] = useState(catComp?.filedAt !== null);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: catComp,
    resolver: yupResolver(registerCatCompSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    if (catComp) {
      try {
        if ((catComp.filedAt !== null) !== filed) {
          await updateCatComp({
            ...values,
            id: catComp.id,
            filed: filed,
          });
        } else {
          await updateCatComp({
            ...values,
            id: catComp.id,
          });
        }
        notification.success({
          message: "Categoria alterada com sucesso!",
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
        await registerCatComp(values);
        notification.success({
          message: "Categoria cadastrada com sucesso!",
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
                name="description"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Descrição da categoria"}
                      style={{ marginBottom: "20px" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input.TextArea placeholder="Descrição" {...field} />
                    </Form.Item>
                  );
                }}
              />
              {catComp && (
                <Form.Item
                  label={"Categoria arquivada"}
                  style={{ marginBottom: "20px" }}
                >
                  <Switch
                    checked={filed}
                    defaultChecked={catComp.filedAt}
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
                  {catComp?.id ? <>Alterar</> : <>Cadastrar</>}
                </Button>
              </div>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  );
}
