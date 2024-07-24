import { useCallback, useEffect, useMemo, useState } from "react";

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { RollbackOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Form,
  Input,
  notification,
  Select,
  Descriptions,
  Typography,
  Switch,
  Table,
  Modal,
  Tag,
  Tooltip,
  Space,
  Popconfirm,
  ConfigProvider,
  Empty,
} from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Controller, useForm } from "react-hook-form";
import { registerTrilhaSchema } from "../../schemas/registers/registersSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import TableSelectCourses from "../filter-components/TableSelectCourses";
import DebounceSelect from "../fields/DebounceSelect";
import { useNavigate, useParams } from "react-router-dom";

const { Title } = Typography;

const Row = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props["data-row-key"],
  });
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleY: 1,
      }
    ),
    transition,
    cursor: "move",
    ...(isDragging
      ? {
          position: "relative",
          zIndex: 9999,
        }
      : {}),
  };
  return (
    <tr
      {...props}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    />
  );
};

export default function FormativeTrailsRegister() {
  const { trailId } = useParams();
  const navigate = useNavigate();

  const updateTrilha = useStoreActions(
    (actions) => actions.trilhas.updateTrilha
  );
  const setArchivedTrilha = useStoreActions(
    (actions) => actions.trilhas.setArchivedTrilha
  );
  const registerTrilha = useStoreActions(
    (actions) => actions.trilhas.registerTrilha
  );
  const getTrailAction = useStoreActions(
    (actions) => actions.trilhas.getUniqueTrail
  );
  const getCompetenciesAction = useStoreActions(
    (actions) => actions.competencies.getComp
  );
  const getUniqueCompAction = useStoreActions(
    (actions) => actions.competencies.getUniqueComp
  );

  const registering = useStoreState((state) => state.trilhas.registering);
  const archiving = useStoreState((state) => state.trilhas.archiving);

  const allItinerarios = useStoreState(
    (state) => state.itineraries.itinerarios
  );

  const [filed, setFiled] = useState(false);
  const [addCourseVisible, setAddCourseVisible] = useState(false);
  const [trail, setTrail] = useState(undefined);
  const [trailDefaultValues, setTrailDefaultValues] = useState({
    name: "",
    description: "",
    competencies: "",
    itineraries: "",
    courses: [],
    filedAt: false,
  });

  const [competencieSelected, setCompetencieSelected] = useState(undefined);
  const [itinerarieSelected, setItinerarieSelected] = useState(undefined);
  const [cursosTrilha, setCursosTrilha] = useState([]);

  const getCompetencies = useCallback(
    async ({ query, page }) => {
      try {
        const { data } = await getCompetenciesAction({
          query,
          page,
          itineraryId: itinerarieSelected,
          showFiled: false,
        });
        return data.map((item) => ({
          label: item.name,
          value: item.id,
          filedAt: item.filedAt,
        }));
      } catch (error) {
        notification.error({
          message: "Erro ao buscar competências!",
          description: error.message,
        });
      }
    },
    [getCompetenciesAction, itinerarieSelected]
  );

  const register = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    values: trailDefaultValues,
    resolver: yupResolver(registerTrilhaSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const cursosTrilhaIds = useMemo(() => {
    register.setValue(
      "courses",
      cursosTrilha.map((course) => course.id)
    );
    return cursosTrilha.map((course) => course.id);
  }, [cursosTrilha, register]);

  useEffect(() => {
    const init = async () => {
      if (trailId) {
        try {
          const trail = await getTrailAction({ id: trailId });
          setTrail(trail);
          setTrailDefaultValues({
            name: trail.name,
            description: trail.description,
            competencies: trail.competencies[0]?.id,
            itineraries: trail.itineraries[0]?.id,
            courses: trail.courses.map((item) => item.id),
            filedAt: trail.filedAt,
          });
          setCompetencieSelected(
            trail.competencies[0]
              ? {
                  label: trail.competencies[0].name,
                  value: trail.competencies[0].id,
                }
              : undefined
          );
          setFiled(trail.filedAt);
          setCursosTrilha(
            trail.courses.sort((a, b) => a.sequence - b.sequence)
          );
          setItinerarieSelected(trail.itineraries[0]?.id);
        } catch (error) {
          notification.error({
            message: "Erro!",
            description: "Erro ao buscar trilha!",
          });
        }
      }
    };
    init();
  }, [getTrailAction, trailId, getCompetenciesAction]);

  const onSubmit = async (values) => {
    if (trailId) {
      try {
        if (cursosTrilhaIds.length === 0) {
          throw new Error("A lista de cursos não pode estar vazia!");
        }
        await updateTrilha({
          ...values,
          itineraries: [values.itineraries],
          competencies: [values.competencies],
          id: trailId,
        });
        notification.success({
          message: "Trilha alterada com sucesso!",
        });
        navigate("/settings/formative-trails");
      } catch (error) {
        notification.error({
          message: "Erro ao alterar trilha!",
          description: error.message,
        });
      }
    } else {
      try {
        if (cursosTrilhaIds.length === 0) {
          throw new Error("A lista de cursos não pode estar vazia!");
        }
        await registerTrilha({
          ...values,
          itineraries: [values.itineraries],
          competencies: [values.competencies],
        });
        notification.success({
          message: "Trilha cadastrada com sucesso!",
        });
        register.reset();
        navigate("/settings/formative-trails");
      } catch (error) {
        notification.error({
          message: "Erro ao cadastrar trilha!",
          description: error.message,
        });
      }
    }
  };

  const handleArchive = async (value) => {
    try {
      await setArchivedTrilha({ id: trailId, filed: value });
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

  const setDescriptionIfEmpty = async (value) => {
    if (register.getValues("description") === "") {
      const competencie = await getUniqueCompAction({ id: value });
      register.setValue("description", competencie.description);
      register.trigger("description");
    }
  };

  // Table add courses to trail

  const onSelectChange = (record, selected) => {
    if (selected) {
      setCursosTrilha((antig) => [
        ...antig,
        {
          name: record.name,
          id: record.id,
          filedAt: record.filedAt,
          taxonomies: record.taxonomies,
        },
      ]);
    } else {
      setCursosTrilha((antig) =>
        antig.filter((curso) => curso.id !== record.id)
      );
    }
  };

  const handleDeleteTrailCourse = (id) => {
    setCursosTrilha((antig) => antig.filter((curso) => curso.id !== id));
  };

  // Drag and Sort Table

  const columns = [
    {
      title: "Curso",
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
          onConfirm={() => handleDeleteTrailCourse(record.id)}
        >
          <a>Excluir</a>
        </Popconfirm>
      ),
    },
  ];

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // https://docs.dndkit.com/api-documentation/sensors/pointer#activation-constraints
        distance: 1,
      },
    })
  );

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setCursosTrilha((prev) => {
        const activeIndex = prev.findIndex((i) => i.id === active.id);
        const overIndex = prev.findIndex((i) => i.id === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  return (
    <>
      <div>
        <div
          style={{
            width: "100%",
          }}
        >
          <Button
            onClick={() => {
              navigate("/settings/formative-trails");
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
              title={trail?.id ? "Editar Trilha" : "Cadastrar Trilha"}
              bordered={false}
              extra={
                <Space direction="horizontal">
                  {trailId && (
                    <Tooltip title={"Trilha arquivada"}>
                      <Switch
                        checked={filed}
                        loading={archiving}
                        style={{
                          marginRight: "15px",
                        }}
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
                    {trailId ? <>Salvar</> : <>Cadastrar</>}
                  </Button>
                </Space>
              }
            >
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      zIndexPopup: 10000,
                    },
                  },
                }}
              >
                <Descriptions
                  bordered
                  layout="horizontal"
                  size="small"
                  column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2, xxl: 2 }}
                >
                  <Descriptions.Item label={"Título da Trilha"}>
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
                  <Descriptions.Item label={"Descrição da Trilha"}>
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
                  <Descriptions.Item label={"Itinerário"}>
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
                              showSearch
                              placeholder="Itinerários"
                              {...field}
                              onChange={(value) => {
                                setItinerarieSelected(value);
                                field.onChange(value);
                                register.setValue("competencies", "");
                              }}
                              filterOption={(input, option) => {
                                return (
                                  option.label
                                    .toString()
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                                );
                              }}
                              options={allItinerarios.map((item) => ({
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
                            help={
                              error
                                ? error.message
                                : !itinerarieSelected
                                ? "Selecione um itinerário"
                                : ""
                            }
                            hasFeedback
                          >
                            <DebounceSelect
                              {...field}
                              disabled={!itinerarieSelected}
                              placeholder="Competências"
                              optionsToInclude={
                                trail?.competencies
                                  .filter((_, i) => i === 0)
                                  .map((item) => ({
                                    label: item.name,
                                    value: item.id,
                                    filedAt: true,
                                  })) || []
                              }
                              fetchOptions={getCompetencies}
                              onChange={(value, selected) => {
                                setDescriptionIfEmpty(value);
                                field.onChange(value);
                                setCompetencieSelected(selected);
                              }}
                              labelRender={(props) => {
                                const { value, label } = props;
                                const itemFiled = trail?.competencies.find(
                                  (comp) => comp.id === value
                                )?.filedAt;
                                return (
                                  <Space direction="horizontal">
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
                                  </Space>
                                );
                              }}
                            />
                          </Form.Item>
                        );
                      }}
                    />
                  </Descriptions.Item>
                </Descriptions>
              </ConfigProvider>
              <DndContext
                sensors={sensors}
                modifiers={[restrictToVerticalAxis]}
                onDragEnd={onDragEnd}
              >
                <SortableContext
                  // rowKey array
                  items={cursosTrilha.map((i) => i.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <Table
                    components={{
                      body: {
                        row: Row,
                      },
                    }}
                    columns={columns}
                    locale={{
                      emptyText: <Empty description={"Sem cursos na trilha"} />,
                    }}
                    dataSource={cursosTrilha}
                    pagination={false}
                    rowKey={"id"}
                    title={() => (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Title level={4}>Cursos na trilha</Title>
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
                </SortableContext>
              </DndContext>
              <Modal
                zIndex={10000}
                open={addCourseVisible}
                onCancel={() => {
                  setAddCourseVisible(false);
                }}
                width={"auto"}
                destroyOnClose={true}
                title={"Adicionar/Remover cursos na trilha"}
                footer={null}
              >
                <TableSelectCourses
                  onSelectChange={onSelectChange}
                  cursosDefaultSelected={cursosTrilhaIds}
                  filterDefault={{
                    competencies: competencieSelected
                      ? [
                          {
                            label: competencieSelected.label,
                            value: competencieSelected.value,
                          },
                        ]
                      : [],
                  }}
                />
              </Modal>
            </Card>
          </Form>
        </div>
      </div>
    </>
  );
}
