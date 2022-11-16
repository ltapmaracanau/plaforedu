import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import { registerInstitutionSchema } from "../../schemas/registers/registersSchema";

import { Button, Card, Form, Input, Layout, notification } from "antd";

const { Content } = Layout;

export default function InstitutionRegister(props) {
  const { instituicao = {}, actionVisible } = props;

  const registerNewInstitution = useStoreActions(
    (actions) => actions.institutions.registerNewInstitution
  );
  const updateInstitution = useStoreActions(
    (actions) => actions.institutions.updateInstitution
  );
  const registering = useStoreState((state) => state.institutions.registering);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: instituicao,
    resolver: yupResolver(registerInstitutionSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    if (instituicao === null) {
      const newInstitution = await registerNewInstitution(values);
      if (newInstitution.error) {
        notification.error({
          message: "Algo deu errado!",
          description: newInstitution.message,
        });
      } else {
        notification.success({
          message: "Instituição cadastrada com sucesso!",
        });
        register.reset();
        actionVisible();
      }
    } else {
      const tryUpdate = await updateInstitution({
        ...values,
        id: instituicao.id,
      });
      if (tryUpdate.error) {
        notification.error({
          message: "Erro!",
          description: tryUpdate.message,
        });
      } else {
        notification.success({
          message: "Instituição alterada com sucesso!",
        });
        actionVisible();
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
                      label={"Nome da instituição"}
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
                name="abbreviation"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Sigla da instituição"}
                      style={{ marginBottom: "20px" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input placeholder="Sigla" {...field} />
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
                  {instituicao === null ? <>Cadastrar</> : <>Alterar</>}
                </Button>
              </div>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  );
}
