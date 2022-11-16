import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStoreActions, useStoreState } from "easy-peasy";
import { registerCompSchema } from "../../schemas/registers/registersSchema";

import { Button, Card, Form, Input, Layout, notification, Select } from "antd";

const { Content } = Layout;

export default function CompRegister(props) {
  const {
    comp = {
      name: "",
      categoriesCompetencies: [],
      description: "",
    },
    actionVisible,
  } = props;

  const compRefactored = {
    name: comp.name,
    competenciesCategoryIds: comp.categoriesCompetencies?.map(
      (item) => item.id
    ),
    description: comp.description,
  };

  const getCatComp = useStoreActions(
    (actions) => actions.competencies.getCatComp
  );
  const registerComp = useStoreActions(
    (actions) => actions.competencies.registerComp
  );

  const updateComp = useStoreActions(
    (actions) => actions.competencies.updateComp
  );
  const catComp = useStoreState((state) => state.competencies.catComp);
  const registering = useStoreState((state) => state.competencies.registering);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: compRefactored,
    resolver: yupResolver(registerCompSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    if (comp === {}) {
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
        actionVisible();
      }
    } else {
      const tryUpdate = await updateComp({ ...values, id: comp.id });
      if (tryUpdate?.error) {
        notification.error({
          message: "Erro!",
          description: tryUpdate.message,
        });
      } else {
        notification.success({
          message: "Competência alterada com sucesso!",
        });
        actionVisible();
      }
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
              <Controller
                name="competenciesCategoryIds"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Categorias da competência"}
                      style={{ marginBottom: "20px" }}
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
                  {comp.id ? <>Alterar</> : <>Cadastrar</>}
                </Button>
              </div>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  );
}
