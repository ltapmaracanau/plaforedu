import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerCourseSchema } from "../../schemas/registers/registersSchema";
import { useStoreActions, useStoreState } from "easy-peasy";

import { RollbackOutlined, PlusOutlined } from "@ant-design/icons";

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
  Switch,
  Table,
  List,
  Popconfirm,
} from "antd";

const { Text, Title } = Typography;
const { Content } = Layout;

export default function CourseRegister(props) {
  const { curso, actionVisible, title } = props;

  const cursoDefault = {
    name: curso ? curso.name : "",
    description: curso ? curso.description : "",
    institutions: curso ? curso.institutions : [],
    hours: curso ? curso.hours : "",
    accessibilities: curso ? curso.accessibilities.map((item) => item.id) : [],
    itineraries: curso ? curso.itineraries.map((item) => item.id) : [],
    taxonomies: curso ? curso.taxonomies.map((item) => item.id) : [],
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
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);
  const taxonomies = useStoreState((state) => state.courses.taxonomies);
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

  const [filed, setFiled] = useState(curso?.filedAt !== null);
  const [instituicoesAtuais, setInstituicoesAtuais] = useState(
    cursoDefault.institutions.map((item, index) => ({ ...item, count: index }))
  );

  const [countInstitutions, setcountInstitutions] = useState(
    cursoDefault.institutions.length - 1
  );

  const [form] = Form.useForm();

  const EditableCell = (props) => {
    const {
      title,
      text,
      children,
      editable,
      dataIndex,
      record = { count: 0 },
      action = false,
      handleSave,
      ...restProps
    } = props;
    let childNode = children;
    if (editable) {
      childNode = text ? (
        <Form.Item
          style={{
            margin: 0,
          }}
          name={`${dataIndex}${record.count}`}
          rules={[
            {
              required: true,
              message: `${title} é obrigatório!`,
            },
          ]}
        >
          <Input placeholder={"Link do curso na instituição"} />
        </Form.Item>
      ) : (
        <Form.Item
          style={{
            margin: 0,
          }}
          name={`${dataIndex}${record.count}`}
          rules={[
            {
              required: true,
              message: `${title} é obrigatório!`,
            },
          ]}
        >
          <Select
            optionLabelProp="label"
            showSearch
            filterOption={(input, option) => {
              return (
                option.children[2].toLowerCase().indexOf(input.toLowerCase()) >=
                  0 ||
                option.children[0].toLowerCase().indexOf(input.toLowerCase()) >=
                  0
              );
            }}
          >
            {instituicoes.map((inst) => (
              <Select.Option
                key={inst.id}
                value={inst.id}
                label={inst.abbreviation}
              >
                {inst.abbreviation}
                <br />
                {inst.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      );
    }

    return <td {...restProps}>{childNode}</td>;
  };

  const handleDelete = (count) => {
    setInstituicoesAtuais((antg) => antg.filter((inst) => inst.count != count));
  };

  const defaultColumns = [
    {
      title: "Instituição",
      dataIndex: "name",
      text: false,
      editable: true,
      width: "40%",
    },
    {
      title: "Link",
      dataIndex: "link",
      text: true,
      editable: true,
      width: "40%",
    },
    {
      title: "",
      action: true,
      editable: false,
      width: "20%",
      dataIndex: "operation",
      render: (_, record) =>
        instituicoesAtuais.length >= 1 ? (
          <Popconfirm
            title="Tem certeza?"
            onConfirm={() => handleDelete(record.count)}
          >
            <a>Excluir</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const components = {
    body: {
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    return {
      ...col,
      onCell: (record) => ({
        record,
        action: col.action,
        text: col.text,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  const handleAdd = () => {
    setInstituicoesAtuais((antg) => [
      ...antg,
      {
        id: "",
        name: "",
        abbreviation: "",
        link: "",
        count: countInstitutions + 1,
      },
    ]);
    setcountInstitutions((antg) => antg + 1);
  };

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
    let instituicoesValidadas = false;
    let arrayInstituicoesDoForm = [];
    Object.entries(form.getFieldsValue()).forEach((item, _index, array) => {
      if (item[0].includes("name")) {
        let count = item[0].slice(4);
        let link = array.find(
          (element) =>
            element[0].includes("link") && element[0].slice(4) === count
        );
        let relationObject = instituicoesAtuais.find((element) => {
          return element.count == count && element.institutionId === item[1];
        });
        arrayInstituicoesDoForm.push({
          relationId: relationObject ? relationObject.relationId : undefined,
          institutionId: item[1],
          link: link[1],
        });
      }
    });
    if (instituicoesAtuais.length !== 0) {
      await form
        .validateFields()
        .then(() => {
          instituicoesValidadas = true;
        })
        .catch(() => {
          notification.error({
            message: "Erro ao submeter!",
            description: "Verifique as instituições certificadoras!",
          });
          form.submit();
        });
    } else {
      notification.error({
        message: "Erro ao submeter!",
        description:
          "Adicione as instituições certificadoras do curso e seus respectivos links.",
      });
    }
    const newValues = { ...values, institutions: arrayInstituicoesDoForm };

    if (instituicoesValidadas) {
      if (curso) {
        try {
          if ((curso.filedAt !== null) !== filed) {
            await updateCourse({ ...newValues, id: curso.id, filed: filed });
          } else {
            await updateCourse({ ...newValues, id: curso.id });
          }
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
        try {
          await registerNewCourse({ ...newValues });
          notification.success({
            message: "Curso cadastrado com sucesso!",
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
          <Form layout="horizontal" onFinish={register.handleSubmit(onSubmit)}>
            <Card
              style={{ margin: "0px 0px" }}
              bodyStyle={{
                fontFamily: "Roboto",
              }}
              title={title}
              bordered={false}
              extra={
                <Button
                  loading={registering}
                  disabled={
                    !register.formState.isValid &&
                    instituicoesAtuais.length === 0
                  }
                  type="primary"
                  shape="round"
                  htmlType="submit"
                >
                  {curso?.id ? <>Salvar</> : <>Cadastrar</>}
                </Button>
              }
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
                            placeholder="Itinerários"
                            {...field}
                            showSearch
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
                <Descriptions.Item label={"Taxonomias de Bloom"}>
                  <Controller
                    key={"taxonomias"}
                    name="taxonomies"
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
                            placeholder="Taxonomias"
                            {...field}
                            filterOption={(input, option) => {
                              return (
                                option.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              );
                            }}
                          >
                            {taxonomies.map((item) => (
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
                {curso && (
                  <Descriptions.Item label={"Curso arquivado"}>
                    <Switch
                      checked={filed}
                      defaultChecked={curso.filedAt}
                      onChange={(value) => {
                        setFiled(value);
                      }}
                    />
                  </Descriptions.Item>
                )}
              </Descriptions>
            </Card>
          </Form>
          <div>
            <Form
              form={form}
              initialValues={Object.fromEntries([
                ...cursoDefault.institutions.map((item, index) => [
                  `name${index}`,
                  item.institutionId,
                ]),
                ...cursoDefault.institutions.map((item, index) => [
                  `link${index}`,
                  item.link,
                ]),
              ])}
            >
              <Table
                title={() => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Title level={4}>Instituições Certificadoras</Title>
                    <Button
                      onClick={handleAdd}
                      type="primary"
                      style={{
                        margin: "0px 20px",
                      }}
                    >
                      Adicionar <PlusOutlined />
                    </Button>
                  </div>
                )}
                pagination={false}
                components={components}
                rowKey={"count"}
                bordered
                dataSource={instituicoesAtuais}
                columns={columns}
              />
            </Form>
          </div>
        </Content>
      </Layout>
    </>
  );
}
