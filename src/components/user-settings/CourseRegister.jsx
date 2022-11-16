import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerCourseSchema } from "../../schemas/registers/registersSchema";
import { useStoreActions, useStoreState } from "easy-peasy";

import {
  Button,
  InputNumber,
  Card,
  Form,
  Input,
  Layout,
  notification,
  Select,
  Skeleton,
} from "antd";

const { Content } = Layout;

export default function CourseRegister(props) {
  const { curso = {}, actionVisible } = props;

  const registerNewCourse = useStoreActions(
    (actions) => actions.courses.registerNewCourse
  );
  const updateCourse = useStoreActions(
    (actions) => actions.courses.updateCourse
  );

  const registering = useStoreState((state) => state.courses.registering);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);
  const acessibilidades = useStoreState(
    (state) => state.acessibilities.acessibilidades
  );
  const instituicoes = useStoreState((state) => state.nstitutions.instituicoes);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: curso,
    resolver: yupResolver(registerCourseSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    if (curso !== {}) {
      const tryUpdate = await updateCourse({ ...values, id: curso.id });
      if (tryUpdate.error) {
        notification.error({
          message: "Erro!",
          description: tryUpdate.message,
        });
      } else {
        notification.success({
          message: "Curso alterado com sucesso!",
        });
        actionVisible();
      }
    } else {
      const newCourse = await registerNewCourse(values);
      if (newCourse.error) {
        notification.error({
          message: "Algo deu errado!",
          description: newCourse.message,
        });
      } else {
        notification.success({
          message: "Curso cadastrado com sucesso!",
        });
        register.reset();
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
                      label={"Título do curso"}
                      style={{ marginBottom: "20px" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input placeholder="Título" {...field} />
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
                      label={"Descrição do curso"}
                      style={{ marginBottom: "20px" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input.TextArea
                        placeholder="Digite aqui a descrição..."
                        {...field}
                      />
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="institutionId"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Instituição Certificadora"}
                      style={{ marginBottom: "20px" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Select
                        showSearch
                        placeholder="Instituição"
                        filterOption={(input, option) => {
                          return (
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                        {...field}
                      >
                        {instituicoes.map((item) => (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="hours"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Carga Horária"}
                      style={{ marginBottom: "20px" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <InputNumber min={0} {...field} />
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="link"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Link do curso"}
                      style={{ marginBottom: "20px" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input placeholder="https://exemplo.com.br" {...field} />
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="accessibilities"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Acessibilidades"}
                      style={{ marginBottom: "20px" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Select
                        mode="multiple"
                        showSearch
                        placeholder="Acessibilidades"
                        filterOption={(input, option) => {
                          return (
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                        {...field}
                      >
                        {acessibilidades.map((item) => (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  );
                }}
              />
              <Controller
                name="itineraries"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label={"Itinerários"}
                      style={{ marginBottom: "20px" }}
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Select
                        mode="multiple"
                        showSearch
                        placeholder="Itinerários"
                        {...field}
                        filterOption={(input, option) => {
                          return (
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                      >
                        {itinerarios.map((item) => (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
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
                  {curso.id ? <>Alterar</> : <>Cadastrar</>}
                </Button>
              </div>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  );
}
