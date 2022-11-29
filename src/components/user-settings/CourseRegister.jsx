import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerCourseSchema } from "../../schemas/registers/registersSchema";
import { useStoreActions, useStoreState } from "easy-peasy";

import { RollbackOutlined } from "@ant-design/icons";

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
  Descriptions,
  Space,
  Typography,
  Tooltip,
  Tag,
} from "antd";

const { Text } = Typography;
const { Content } = Layout;

export default function CourseRegister(props) {
  const { curso, actionVisible, title } = props;

  const cursoDefault = {
    name: curso ? curso.name : "",
    description: curso ? curso.description : "",
    institutions: curso ? curso.institutions.map((item) => item.id) : [],
    hours: curso ? curso.hours : "",
    link: curso ? curso.link : "",
    accessibilities: curso ? curso.accessibilities.map((item) => item.id) : [],
    itineraries: curso ? curso.itineraries.map((item) => item.id) : [],
    competencies: curso ? curso.competencies.map((item) => item.id) : [],
    subThemes: curso ? curso.subThemes.map((item) => item.id) : [],
  };

  const registerNewCourse = useStoreActions(
    (actions) => actions.courses.registerNewCourse
  );
  const updateCourse = useStoreActions(
    (actions) => actions.courses.updateCourse
  );

  const registering = useStoreState((state) => state.courses.registering);
  const itinerarios = useStoreState(
    (state) => state.itineraries.itinerariosSecondary
  );
  const acessibilidades = useStoreState(
    (state) => state.accessibilities.acessibilidades
  );
  const instituicoes = useStoreState(
    (state) => state.institutions.instituicoes
  );
  const competencies = useStoreState(
    (state) => state.competencies.competencias
  );
  const subthemes = useStoreState((state) => state.themes.subthemes);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: cursoDefault,
    resolver: yupResolver(registerCourseSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    if (curso) {
      try {
        await updateCourse({ ...values, id: curso.id });
        notification.success({
          message: "Curso alterado com sucesso!",
        });
        actionVisible();
      } catch (error) {
        notification.error({
          message: "Erro!",
          description: error.message,
        });
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
            width: "100%",
          }}
        >
          <Button
            onClick={() => {
              actionVisible();
            }}
            style={{
              marginBottom: "10px",
            }}
          >
            <RollbackOutlined /> Voltar
          </Button>
          <Card
            style={{ margin: "0px 0px" }}
            bodyStyle={{
              fontFamily: "Roboto",
            }}
            title={title}
            bordered={false}
          >
            <Form
              layout="horizontal"
              onFinish={register.handleSubmit(onSubmit)}
            >
              <Descriptions
                bordered
                layout="horizontal"
                size="small"
                column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2, xxl: 2 }}
              >
                <Descriptions.Item label={"Título do curso"}>
                  <Controller
                    key={"name"}
                    name="name"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <Input placeholder="Título" {...field} />
                        </Form.Item>
                      );
                    }}
                  />
                </Descriptions.Item>
                <Descriptions.Item label={"Descrição do curso"}>
                  <Controller
                    key={"description"}
                    name="description"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
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
                </Descriptions.Item>
                <Descriptions.Item label={"Instituição Certificadora"}>
                  <Controller
                    key={"institutions"}
                    name="institutions"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <Select
                            mode="multiple"
                            dropdownMatchSelectWidth={false}
                            showSearch
                            placeholder="Instituição"
                            tagRender={(props) => {
                              const { label, closable, onClose } = props;
                              return (
                                <Tag
                                  closable={closable}
                                  onClose={onClose}
                                  style={{ marginRight: 3 }}
                                >
                                  {label[0]}
                                </Tag>
                              );
                            }}
                            filterOption={(input, option) => {
                              return (
                                option.children[2]
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0 ||
                                option.children[0]
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              );
                            }}
                            {...field}
                          >
                            {instituicoes.map((item) => (
                              <Select.Option key={item.id} value={item.id}>
                                {item.abbreviation}
                                <br />
                                {item.name}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      );
                    }}
                  />
                </Descriptions.Item>
                <Descriptions.Item label={"Carga Horária"}>
                  <Controller
                    key={"hours"}
                    name="hours"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <InputNumber min={0} {...field} />
                        </Form.Item>
                      );
                    }}
                  />
                </Descriptions.Item>
                <Descriptions.Item label={"Link do curso"}>
                  <Controller
                    key={"link"}
                    name="link"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <Input
                            placeholder="https://exemplo.com.br"
                            {...field}
                          />
                        </Form.Item>
                      );
                    }}
                  />
                </Descriptions.Item>
                <Descriptions.Item label={"Acessibilidades"}>
                  <Controller
                    key={"accessibilities"}
                    name="accessibilities"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
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
                </Descriptions.Item>
                <Descriptions.Item label={"Itinerários"}>
                  <Controller
                    key={"itineraries"}
                    name="itineraries"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
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
                </Descriptions.Item>
                <Descriptions.Item label={"Competências"}>
                  <Controller
                    key={"competencies"}
                    name="competencies"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <Select
                            mode="multiple"
                            showSearch
                            placeholder="Competências"
                            {...field}
                            filterOption={(input, option) => {
                              return (
                                option.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              );
                            }}
                          >
                            {competencies.map((item) => (
                              <Select.Option key={item.id} value={item.id}>
                                {item.name}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      );
                    }}
                  />
                </Descriptions.Item>
                <Descriptions.Item label={"Sub-temas"}>
                  <Controller
                    key={"subThemes"}
                    name="subThemes"
                    control={register.control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <Form.Item
                          validateStatus={error ? "error" : ""}
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <Select
                            mode="multiple"
                            showSearch
                            placeholder="Sub-temas"
                            {...field}
                            filterOption={(input, option) => {
                              return (
                                option.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              );
                            }}
                          >
                            {subthemes.map((item) => (
                              <Select.Option key={item.id} value={item.id}>
                                {item.name}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      );
                    }}
                  />
                </Descriptions.Item>
              </Descriptions>
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
                  {curso?.id ? <>Alterar</> : <>Cadastrar</>}
                </Button>
              </div>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  );
}
