import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import { registerInstitutionSchema } from "../../schemas/registers/registersSchema";

import {
  Button,
  Card,
  Form,
  Input,
  Layout,
  notification,
  Select,
  Space,
  Switch,
} from "antd";

const { Content } = Layout;

export default function InstitutionRegister(props) {
  const { instituicao = null, actionVisible } = props;

  const registerNewInstitution = useStoreActions(
    (actions) => actions.institutions.registerNewInstitution
  );
  const updateInstitution = useStoreActions(
    (actions) => actions.institutions.updateInstitution
  );
  const getEstados = useStoreActions(
    (actions) => actions.institutions.getEstados
  );
  const estados = useStoreState((state) => state.institutions.estados);
  const registering = useStoreState((state) => state.institutions.registering);
  const loadingEstados = useStoreState(
    (state) => state.institutions.loadingEstados
  );

  const [filed, setFiled] = useState(instituicao?.filedAt !== null);

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
    if (instituicao) {
      try {
        if ((instituicao.filedAt !== null) !== filed) {
          await updateInstitution({
            ...values,
            id: instituicao.id,
            filed: filed,
          });
        } else {
          await updateInstitution({
            ...values,
            id: instituicao.id,
          });
        }
        notification.success({
          message: "Instituição alterada com sucesso!",
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
        await registerNewInstitution(values);
        notification.success({
          message: "Instituição cadastrada com sucesso!",
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

  useEffect(() => {
    getEstados();
  }, [getEstados]);

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
              <Controller
                name="uf"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Estado da instituição"}
                      style={{ marginBottom: "20px" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Select
                        placeholder="Estado"
                        {...field}
                        loading={loadingEstados}
                        showSearch
                        filterOption={(input, option) => {
                          return (
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                      >
                        {estados.map((element) => (
                          <Select.Option
                            key={element.sigla}
                            value={element.sigla}
                          >
                            {element.nome}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  );
                }}
              />
              {instituicao && (
                <Form.Item
                  label={"Instituição arquivada"}
                  style={{ marginBottom: "20px" }}
                >
                  <Switch
                    checked={filed}
                    defaultChecked={instituicao.filedAt}
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
                  {instituicao ? <>Alterar</> : <>Cadastrar</>}
                </Button>
              </div>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  );
}
