import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerCourseSchema } from "../../schemas/registers/registersSchema";
import { useStoreActions, useStoreState } from "easy-peasy";

import {
  RollbackOutlined,
  PlusOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";

import {
  Button,
  InputNumber,
  Card,
  Form,
  Input,
  notification,
  Select,
  Descriptions,
  Space,
  Typography,
  Tooltip,
  Tag,
  Switch,
  Table,
  Popconfirm,
  Modal,
  Upload,
} from "antd";
import TableSelectCourses from "../filter-components/TableSelectCourses";

const { Title } = Typography;

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
    filedAt: curso !== null && curso.filedAt !== null,
    status: curso ? curso.status : null,
    setecTerm: curso ? curso.setecTerm : null,
  };

  const registerNewCourse = useStoreActions(
    (actions) => actions.courses.registerNewCourse
  );
  const updateCourse = useStoreActions(
    (actions) => actions.courses.updateCourse
  );
  const archiveCourse = useStoreActions(
    (actions) => actions.courses.archiveCourse
  );
  const unarchiveCourse = useStoreActions(
    (actions) => actions.courses.unarchiveCourse
  );

  const registering = useStoreState((state) => state.courses.registering);
  const archiving = useStoreState((state) => state.courses.archiving);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);
  const taxonomies = useStoreState((state) => state.courses.taxonomies);
  const isConsultor = useStoreState((state) => state.adm.isConsultor);
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

  const [filed, setFiled] = useState(
    cursoDefault.filedAt || cursoDefault.status === "FILED"
  );
  const [instituicoesAtuais, setInstituicoesAtuais] = useState(
    cursoDefault.institutions.map((item, index) => ({ ...item, count: index }))
  );

  const [countInstitutions, setcountInstitutions] = useState(
    cursoDefault.institutions.length - 1
  );

  const [addCourseVisible, setAddCourseVisible] = useState(false);
  const [cursosEquivalentesIds, setCursosEquivalentesIds] = useState(
    curso ? curso.equivalents.map((curso) => curso.id) : []
  );
  const [cursosEquivalentes, setCursosEquivalentes] = useState(
    curso ? curso.equivalents : []
  );

  const [setecTerm, setSetecTerm] = useState(
    cursoDefault.setecTerm
      ? [
          {
            uid: cursoDefault.setecTerm,
            name: "Termo Setec",
            status: "done",
            url: cursoDefault.setecTerm,
          },
        ]
      : []
  );

  const [form] = Form.useForm();

  const propsUpload = {
    onRemove: (_file) => {
      // Remover arquivos setec
      // Se houvesse arquivo no servidor, não removeria
      // Apenas atualiza
      setSetecTerm([]);
    },
    beforeUpload: (file) => {
      if (setecTerm.length >= 1) {
        notification.error({
          message: "Erro ao fazer upload!",
          description:
            "O curso já possui um termo. Caso queira atualizar, exclua o atual e faça o upload novamente.",
        });
        return false;
      }
      setSetecTerm([file]);
      return false;
    },
    fileList: setecTerm,
    defaultFileList: setecTerm,
  };

  const handleArchive = async (value) => {
    try {
      if (value) {
        await archiveCourse({ coursesIds: [curso.id] });
      } else {
        await unarchiveCourse({ courseId: curso.id });
      }
      notification.success({
        message: "Operação realizada com sucesso!",
      });
    } catch (error) {
      notification.error({
        message: "Erro ao fazer operação!",
        description: "Por favor, tente novamente.",
      });
    }
  };

  // Table add courses equivalents

  const onSelectChange = (record, selected) => {
    if (selected) {
      setCursosEquivalentesIds((antig) => [...antig, record.id]);
      setCursosEquivalentes((antig) => [
        ...antig,
        {
          name: record.name,
          id: record.id,
          filedAt: record.filedAt,
          taxonomies: record.taxonomies,
        },
      ]);
    } else {
      setCursosEquivalentesIds((antig) =>
        antig.filter((id) => id !== record.id)
      );
      setCursosEquivalentes((antig) =>
        antig.filter((curso) => curso.id !== record.id)
      );
    }
  };

  const handleDeleteEquivalent = (id) => {
    setCursosEquivalentesIds((antig) =>
      antig.filter((idCourse) => idCourse !== id)
    );
    setCursosEquivalentes((antig) => antig.filter((curso) => curso.id !== id));
  };

  const columnsEquivalents = [
    {
      title: "Título",
      dataIndex: "name",
      render: (text, record, _index) => {
        return record.filedAt ? (
          <>
            {text} <Tag color={"orange"}>ARQUIVADO</Tag>
          </>
        ) : (
          <>{text}</>
        );
      },
    },
    {
      title: "Taxonomias",
      key: "taxonomies",
      render: (_, record) => {
        return record.taxonomies.map((tax) => (
          <Tag color={"blue"} key={tax.id}>
            {tax.name}
          </Tag>
        ));
      },
    },
    {
      title: "",
      action: true,
      editable: false,
      width: "20%",
      dataIndex: "operation",
      render: (_, record) => (
        <Popconfirm
          title="Tem certeza?"
          onConfirm={() => handleDeleteEquivalent(record.id)}
        >
          <a>Excluir</a>
        </Popconfirm>
      ),
    },
  ];

  // Instituições certificadoras

  const EditableCell = (props) => {
    const {
      title,
      text,
      children,
      editable,
      dataIndex,
      record = { count: 0 },
      //action = false,
      //handleSave,
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
            labelRender={({ value }) => {
              const item = instituicoes.find((comp) => comp.id === value);
              return (
                <>
                  {item.abbreviation}
                  {item.filedAt && (
                    <Tag
                      style={{
                        margin: "3px",
                      }}
                      color={"orange"}
                    >
                      ARQUIVADO
                    </Tag>
                  )}
                </>
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
      render: (text, record) => {
        return (
          <Typography.Text>
            {text}
            {record.filedAt && (
              <Tag
                style={{
                  marginLeft: "10px",
                }}
                color="blue"
              >
                ARQUIVADO
              </Tag>
            )}
          </Typography.Text>
        );
      },
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
    mode: "onTouched",
    reValidateMode: "onTouched",
    defaultValues: cursoDefault,
    resolver: yupResolver(registerCourseSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  // Submeter alterações do curso

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
    const newValues = {
      ...values,
      institutions: arrayInstituicoesDoForm,
      equivalents: cursosEquivalentesIds,
    };
    if (setecTerm.length > 0) {
      const formData = new FormData();
      formData.append("term", setecTerm[0]);
      newValues.term = formData;
    }
    if (instituicoesValidadas) {
      if (curso) {
        try {
          await updateCourse({ ...newValues, id: curso.id });
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
            description: isConsultor
              ? "Seu curso está pendente para análise"
              : "",
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
    <div
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
          styles={{
            body: {
              fontFamily: "Roboto",
            },
          }}
          title={title}
          bordered={false}
          extra={
            <Space direction="horizontal">
              {curso && (
                <Tooltip title={"Curso arquivado"}>
                  <Switch
                    checked={filed}
                    loading={archiving}
                    style={{
                      marginRight: "15px",
                    }}
                    defaultChecked={cursoDefault.filedAt}
                    onChange={(value) => {
                      setFiled(value);
                      handleArchive(value);
                    }}
                  />
                </Tooltip>
              )}
              <Button
                loading={registering}
                disabled={
                  !register.formState.isValid && instituicoesAtuais.length === 0
                }
                type="primary"
                shape="round"
                htmlType="submit"
              >
                {curso?.id ? <>Salvar</> : <>Cadastrar</>}
              </Button>
            </Space>
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
                      <InputNumber min={0} max={9999} {...field} />
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
                            option.label
                              .toString()
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                        options={acessibilidades.map((item) => ({
                          label: item.name,
                          value: item.id,
                        }))}
                        {...field}
                      />
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
                            option.label
                              .toString()
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                        options={itinerarios.map((item) => ({
                          label: item.name,
                          value: item.id,
                        }))}
                      />
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
                            option.label
                              .toString()
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                        tagRender={(props) => {
                          const { value, closable, onClose } = props;
                          const item = competencies.find(
                            (comp) => comp.id === value
                          );
                          return (
                            <Tag
                              closable={closable}
                              onClose={onClose}
                              style={{
                                marginRight: 3,
                                fontSize: 14,
                              }}
                            >
                              {item.name}
                              {item.filedAt && (
                                <Tag
                                  style={{
                                    margin: "3px",
                                  }}
                                  color={"orange"}
                                >
                                  ARQUIVADO
                                </Tag>
                              )}
                            </Tag>
                          );
                        }}
                        options={competencies
                          .filter((comp) => !comp.filedAt)
                          .map((item) => ({
                            label: item.name,
                            value: item.id,
                          }))}
                      />
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
                            option.label
                              .toString()
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                        options={taxonomies.map((item) => ({
                          label: item.name,
                          value: item.id,
                        }))}
                      />
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
                            option.label
                              .toString()
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          );
                        }}
                        tagRender={(props) => {
                          const { value, closable, onClose } = props;
                          const item = subthemes.find(
                            (subtheme) => subtheme.id === value
                          );
                          return (
                            <Tag
                              closable={closable}
                              onClose={onClose}
                              style={{
                                marginRight: 3,
                                fontSize: 14,
                              }}
                            >
                              {item.name}
                              {item.filedAt && (
                                <Tag
                                  style={{
                                    margin: "3px",
                                  }}
                                  color={"orange"}
                                >
                                  ARQUIVADO
                                </Tag>
                              )}
                            </Tag>
                          );
                        }}
                        options={subthemes
                          .filter((subtheme) => !subtheme.filedAt)
                          .map((item) => ({
                            label: item.name,
                            value: item.id,
                          }))}
                      />
                    </Form.Item>
                  );
                }}
              />
            </Descriptions.Item>
            {/* Upload aparece apenas no update de curso */}
            {curso && (
              <Descriptions.Item label={"Termo da SETEC"}>
                <Upload {...propsUpload}>
                  <Button icon={<FilePdfOutlined />}>Upload</Button>
                </Upload>
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
            dataSource={instituicoesAtuais}
            columns={columns}
          />
        </Form>
      </div>
      <Table
        columns={columnsEquivalents}
        dataSource={cursosEquivalentes}
        pagination={false}
        rowKey={"id"}
        title={() => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Title level={4}>Cursos Equivalentes</Title>
            <Button
              type="primary"
              onClick={() => {
                setAddCourseVisible(true);
              }}
            >
              Adicionar/Remover Cursos
            </Button>
          </div>
        )}
      />
      <Modal
        open={addCourseVisible}
        onCancel={() => {
          setAddCourseVisible(false);
        }}
        width={"auto"}
        destroyOnClose={true}
        title={"Adicionar/Remover cursos equivalentes"}
        footer={null}
      >
        <TableSelectCourses
          courseToHideId={curso ? curso.id : ""}
          onSelectChange={onSelectChange}
          cursosDefaultSelected={cursosEquivalentesIds}
        />
      </Modal>
    </div>
  );
}
