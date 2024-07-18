import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
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
  Spin,
  Skeleton,
} from "antd";
import TableSelectCourses from "../filter-components/TableSelectCourses";
import DebounceSelect from "../fields/DebounceSelect";
import { useNavigate, useParams } from "react-router-dom";

const { Title } = Typography;

export default function CourseRegister() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const getUniqueCourse = useStoreActions(
    (actions) => actions.courses.getUniqueCourse
  );
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
  const getInstituicoesAction = useStoreActions(
    (actions) => actions.institutions.getInstituicoes
  );
  const getCompetenciesAction = useStoreActions(
    (actions) => actions.competencies.getComp
  );
  const getAccessibilitiesAction = useStoreActions(
    (actions) => actions.accessibilities.getAcessibilidades
  );
  const getTaxonomiesAction = useStoreActions(
    (actions) => actions.courses.getTaxonomias
  );
  const getSubthemesAction = useStoreActions(
    (actions) => actions.themes.getSubthemes
  );

  const registering = useStoreState((state) => state.courses.registering);
  const archiving = useStoreState((state) => state.courses.archiving);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);
  const isConsultor = useStoreState((state) => state.adm.isConsultor);

  const [taxonomies, setTaxonomies] = useState([]);
  const [accessibilities, setAccessibilities] = useState([]);
  const [loadingCourse, setLoadingCourse] = useState(false);
  const [course, setCourse] = useState(undefined);
  const [courseDefault, setCourseDefaultValues] = useState({
    name: "",
    description: "",
    hours: 0,
    institutions: [],
    accessibilities: [],
    itineraries: [],
    taxonomies: [],
    competencies: [],
    subThemes: [],
    filedAt: false,
    status: null,
    setecTerm: null,
  });
  const [filed, setFiled] = useState(
    courseDefault.filedAt || courseDefault.status === "FILED"
  );

  const [addCourseVisible, setAddCourseVisible] = useState(false);
  const [cursosEquivalentesIds, setCursosEquivalentesIds] = useState([]);
  const [cursosEquivalentes, setCursosEquivalentes] = useState([]);

  const [setecTerm, setSetecTerm] = useState(
    courseDefault.setecTerm
      ? [
          {
            uid: courseDefault.setecTerm,
            name: "Termo Setec",
            status: "done",
            url: courseDefault.setecTerm,
          },
        ]
      : []
  );

  const getInstitutions = useCallback(
    async ({ query, page }) => {
      try {
        const { data } = await getInstituicoesAction({
          query,
          page,
          showFiled: false,
        });
        return data.map((item) => ({
          ...item,
          value: item.id,
          label: item.abbreviation,
        }));
      } catch (error) {
        notification.error({
          message: "Erro ao buscar instituições",
          description: error.message,
        });
      }
    },
    [getInstituicoesAction]
  );

  const getCompetencies = useCallback(
    async ({ query, page }) => {
      try {
        const { data } = await getCompetenciesAction({
          query,
          page,
          showFiled: false,
        });
        return data.map((item) => ({
          ...item,
          value: item.id,
          label: item.name,
        }));
      } catch (error) {
        notification.error({
          message: "Erro ao buscar competências",
          description: error.message,
        });
      }
    },
    [getCompetenciesAction]
  );

  const getAccessibilities = useCallback(async () => {
    try {
      const data = await getAccessibilitiesAction();
      return data;
    } catch (error) {
      notification.error({
        message: "Erro ao buscar competências",
        description: error.message,
      });
    }
  }, [getAccessibilitiesAction]);

  const getTaxonomies = useCallback(async () => {
    try {
      const data = await getTaxonomiesAction();
      return data;
    } catch (error) {
      notification.error({
        message: "Erro ao buscar taxonomias",
        description: error.message,
      });
    }
  }, [getTaxonomiesAction]);

  const getSubthemes = useCallback(
    async ({ query, page }) => {
      try {
        const { data } = await getSubthemesAction({
          query,
          page,
          showFiled: false,
        });
        return data.map((item) => ({
          ...item,
          value: item.id,
          label: item.name,
        }));
      } catch (error) {
        notification.error({
          message: "Erro ao buscar subtemas",
          description: error.message,
        });
      }
    },
    [getSubthemesAction]
  );

  const register = useForm({
    mode: "onTouched",
    reValidateMode: "onTouched",
    values: courseDefault,
    resolver: yupResolver(registerCourseSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const arrayInstitutionsRegister = useFieldArray({
    control: register.control,
    name: "institutions",
  });

  useEffect(() => {
    const init = async () => {
      if (courseId) {
        try {
          setLoadingCourse(true);
          const curso = await getUniqueCourse({
            id: courseId,
            saveViewed: false,
          });
          setCourse(curso);
          setFiled(curso.filedAt);
          setCourseDefaultValues({
            ...curso,
            accessibilities: curso.accessibilities.map((item) => item.id),
            itineraries: curso.itineraries.map((item) => item.id),
            taxonomies: curso.taxonomies.map((item) => item.id),
            competencies: curso.competencies.map((item) => item.id),
            subThemes: curso.subThemes.map((item) => item.id),
            filedAt: curso.filedAt !== null,
          });
          setSetecTerm(
            curso.setecTerm
              ? [
                  {
                    uid: curso.setecTerm,
                    name: "Termo Setec",
                    status: "done",
                    url: curso.setecTerm,
                  },
                ]
              : []
          );
          setCursosEquivalentesIds(curso.equivalents.map((curso) => curso.id));
          setCursosEquivalentes(curso.equivalents);
        } catch (error) {
          notification.error({
            message: "Erro ao buscar curso",
            description: error.message,
          });
        } finally {
          setLoadingCourse(false);
        }
      }
      const accessibilities = await getAccessibilities();
      setAccessibilities(accessibilities);
      const taxonomies = await getTaxonomies();
      setTaxonomies(taxonomies);
    };
    init();
  }, [
    getInstitutions,
    courseId,
    getUniqueCourse,
    getCompetencies,
    getAccessibilities,
    getTaxonomies,
    register,
  ]);

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
        await archiveCourse({ coursesIds: [courseId] });
      } else {
        await unarchiveCourse({ courseId: courseId });
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

  const EditableCell = useCallback(
    (props) => {
      const { text, children, editable, index, ...restProps } = props;
      let childNode = children;
      if (editable) {
        childNode = text ? (
          <Controller
            control={register.control}
            name={`institutions.${index}.link`}
            render={({ field, fieldState: { error } }) => {
              return (
                <Form.Item
                  style={{
                    margin: 0,
                  }}
                  validateStatus={error ? "error" : ""}
                  help={error ? error.message : ""}
                  hasFeedback
                >
                  <Input
                    placeholder={"Link do curso na instituição"}
                    {...field}
                  />
                </Form.Item>
              );
            }}
          />
        ) : (
          <Controller
            control={register.control}
            name={`institutions.${index}.institutionId`}
            render={({ field, fieldState: { error } }) => {
              return (
                <Form.Item
                  style={{
                    margin: 0,
                  }}
                  validateStatus={error ? "error" : ""}
                  help={error ? error.message : ""}
                  hasFeedback
                >
                  <DebounceSelect
                    {...field}
                    placeholder={"Instituição Certificadora"}
                    style={{
                      maxWidth: "380px",
                    }}
                    optionsToInclude={
                      course?.institutions.map((item) => ({
                        label: item.abbreviation,
                        value: item.institutionId,
                        filedAt: item.filedAt,
                      })) ?? []
                    }
                    fetchOptions={getInstitutions}
                    labelRender={(props) => {
                      const { value, label } = props;
                      const itemFiled = course?.institutions.find(
                        (inst) => inst.institutionId === value
                      )?.filedAt;
                      return (
                        <>
                          {label}
                          {itemFiled ? (
                            <Space>
                              <Tag
                                style={{
                                  margin: "3px",
                                }}
                                color={"orange"}
                              >
                                ARQUIVADO
                              </Tag>
                            </Space>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    }}
                    optionRender={(option) => {
                      return (
                        <div>
                          {option.label}
                          <br />
                          {option.data.name}
                        </div>
                      );
                    }}
                  />
                </Form.Item>
              );
            }}
          />
        );
      }

      return <td {...restProps}>{childNode}</td>;
    },
    [getInstitutions, register.control, course]
  );

  const defaultColumns = useMemo(
    () => [
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
        editable: false,
        width: "20%",
        dataIndex: "operation",
        render: (_text, record, index) => (
          <Popconfirm
            title="Tem certeza?"
            onConfirm={() => {
              arrayInstitutionsRegister.remove(index);
            }}
          >
            <a>Excluir</a>
          </Popconfirm>
        ),
      },
    ],
    [arrayInstitutionsRegister]
  );

  const components = useMemo(
    () => ({
      body: {
        cell: EditableCell,
      },
    }),
    [EditableCell]
  );

  const columns = useMemo(
    () =>
      defaultColumns.map((col) => {
        return {
          ...col,
          onCell: (record, index) => {
            return {
              record,
              text: col.text,
              editable: col.editable,
              title: col.title,
              index,
            };
          },
        };
      }),
    [defaultColumns]
  );

  // Submeter alterações do curso

  const onSubmit = async (values) => {
    let instituicoesValidadas = false;
    let arrayInstituicoesDoForm = [];
    // Object.entries(form.getFieldsValue()).forEach((item, _index, array) => {
    //   if (item[0].includes("name")) {
    //     let count = item[0].slice(4);
    //     let link = array.find(
    //       (element) =>
    //         element[0].includes("link") && element[0].slice(4) === count
    //     );
    //     let relationObject = instituicoesAtuais.find((element) => {
    //       return element.count == count && element.institutionId === item[1];
    //     });
    //     arrayInstituicoesDoForm.push({
    //       relationId: relationObject ? relationObject.relationId : undefined,
    //       institutionId: item[1],
    //       link: link[1],
    //     });
    //   }
    // });
    // if (instituicoesAtuais.length !== 0) {
    //   await form
    //     .validateFields()
    //     .then(() => {
    //       instituicoesValidadas = true;
    //     })
    //     .catch(() => {
    //       notification.error({
    //         message: "Erro ao submeter!",
    //         description: "Verifique as instituições certificadoras!",
    //       });
    //       form.submit();
    //     });
    // } else {
    //   notification.error({
    //     message: "Erro ao submeter!",
    //     description:
    //       "Adicione as instituições certificadoras do curso e seus respectivos links.",
    //   });
    // }
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
      if (courseId) {
        try {
          await updateCourse({ ...newValues, id: courseId });
          notification.success({
            message: "Curso alterado com sucesso!",
          });
          navigate("/settings/courses");
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
          navigate("/settings/courses");
        } catch (error) {
          notification.error({
            message: "Algo deu errado!",
            description: error.message,
          });
        }
      }
    }
  };

  if (loadingCourse) {
    return <Card loading />;
  }

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Button
        onClick={() => {
          navigate("/settings/courses");
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
          title={courseId ? "Editar Curso" : "Cadastrar Curso"}
          bordered={false}
          extra={
            <Space direction="horizontal">
              {courseId && (
                <Tooltip title={"Curso arquivado"}>
                  <Switch
                    checked={filed}
                    loading={archiving}
                    style={{
                      marginRight: "15px",
                    }}
                    defaultChecked={courseDefault.filedAt}
                    onChange={(value) => {
                      setFiled(value);
                      handleArchive(value);
                    }}
                  />
                </Tooltip>
              )}
              <Button
                loading={registering}
                disabled={!register.formState.isValid}
                type="primary"
                shape="round"
                htmlType="submit"
              >
                {courseId ? <>Salvar</> : <>Cadastrar</>}
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
                        options={accessibilities.map((item) => ({
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
                      <DebounceSelect
                        mode="multiple"
                        placeholder="Competências"
                        fetchOptions={getCompetencies}
                        optionsToInclude={
                          course
                            ? course.competencies.map((comp) => ({
                                label: comp.name,
                                value: comp.id,
                                filedAt: comp.filedAt,
                              }))
                            : []
                        }
                        {...field}
                        tagRender={(props) => {
                          const { label, value, closable, onClose } = props;
                          const itemFiled = course?.competencies.find(
                            (comp) => comp.id === value
                          )?.filedAt;
                          return (
                            <Tag
                              closable={closable}
                              onClose={onClose}
                              style={{
                                marginRight: 3,
                                fontSize: 14,
                              }}
                            >
                              {label}
                              {itemFiled && (
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
                      <DebounceSelect
                        mode="multiple"
                        placeholder="Subtemas"
                        fetchOptions={getSubthemes}
                        optionsToInclude={
                          course
                            ? course.subThemes.map((comp) => ({
                                label: comp.name,
                                value: comp.id,
                                filedAt: comp.filedAt,
                              }))
                            : []
                        }
                        {...field}
                        tagRender={(props) => {
                          const { label, value, closable, onClose } = props;
                          const itemFiled = course?.subThemes.find(
                            (sub) => sub.id === value
                          )?.filedAt;
                          return (
                            <Tag
                              closable={closable}
                              onClose={onClose}
                              style={{
                                marginRight: 3,
                                fontSize: 14,
                              }}
                            >
                              {label}
                              {itemFiled && (
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
                      />
                    </Form.Item>
                  );
                }}
              />
            </Descriptions.Item>
            {/* Upload aparece apenas no update de curso */}
            {courseId && (
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
        <Form form={form}>
          <Table
            title={() => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Space direction="vertical">
                  <Title level={4}>Instituições Certificadoras</Title>
                  {register.formState.errors.institutions && (
                    <Typography.Text type="danger">
                      {register.formState.errors.institutions.message}
                    </Typography.Text>
                  )}
                </Space>
                <Button
                  onClick={() => {
                    arrayInstitutionsRegister.append({
                      institutionId: "",
                      link: "",
                    });
                  }}
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
            rowKey={(record) => {
              return record.id;
            }}
            dataSource={arrayInstitutionsRegister.fields}
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
          courseToHideId={courseId ?? ""}
          onSelectChange={onSelectChange}
          cursosDefaultSelected={cursosEquivalentesIds}
        />
      </Modal>
    </div>
  );
}
