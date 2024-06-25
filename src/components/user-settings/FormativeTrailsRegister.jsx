import { useMemo, useState } from "react";

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
} from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Controller, useForm } from "react-hook-form";
import { registerTrilhaSchema } from "../../schemas/registers/registersSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import TableSelectCourses from "../filter-components/TableSelectCourses";

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

export default function FormativeTrailsRegister(props) {
  const { trilha, title, actionVisible } = props;

  const trilhaDefault = {
    name: trilha ? trilha.name : "",
    description: trilha ? trilha.description : "",
    competencies: trilha ? trilha.competencies[0]?.id : "",
    itineraries: trilha ? trilha.itineraries[0]?.id : "",
    courses: trilha ? trilha.courses.map((item) => item.id) : [],
    filedAt: trilha !== null && trilha.filedAt !== null,
  };

  const updateTrilha = useStoreActions(
    (actions) => actions.trilhas.updateTrilha
  );
  const setArchivedTrilha = useStoreActions(
    (actions) => actions.trilhas.setArchivedTrilha
  );
  const registerTrilha = useStoreActions(
    (actions) => actions.trilhas.registerTrilha
  );

  const registering = useStoreState((state) => state.trilhas.registering);
  const archiving = useStoreState((state) => state.trilhas.archiving);

  const allItinerarios = useStoreState(
    (state) => state.itineraries.itinerarios
  );

  const allCompetencias = useStoreState(
    (state) => state.competencies.competencias
  );

  const [filed, setFiled] = useState(trilhaDefault.filedAt);
  const [addCourseVisible, setAddCourseVisible] = useState(false);

  const [itinerarieSelected, setItinerarieSelected] = useState(
    trilhaDefault.itineraries
  );
  const [cursosTrilha, setCursosTrilha] = useState(
    trilha ? trilha.courses.sort((a, b) => a.sequence - b.sequence) : []
  );
  const competenciesFiltred = useMemo(() => {
    return allCompetencias.filter((competencie) =>
      competencie.itineraries.find(
        (itinerarie) => itinerarie.id === itinerarieSelected
      )
    );
  }, [allCompetencias, itinerarieSelected]);

  const register = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: trilhaDefault,
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

  const onSubmit = async (values) => {
    if (trilha) {
      try {
        if (cursosTrilhaIds.length === 0) {
          throw new Error("A lista de cursos não pode estar vazia!");
        }
        await updateTrilha({
          ...values,
          id: trilha.id,
        });
        notification.success({
          message: "Trilha alterada com sucesso!",
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
        if (cursosTrilhaIds.length === 0) {
          throw new Error("A lista de cursos não pode estar vazia!");
        }
        await registerTrilha({ ...values });
        notification.success({
          message: "Trilha cadastrada com sucesso!",
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

  const handleArchive = async (value) => {
    try {
      await setArchivedTrilha({ id: trilha.id, filed: value });
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

  const setDescriptionIfEmpty = (value) => {
    if (register.getValues("description") === "") {
      const competencie = allCompetencias.find((comp) => comp.id === value);
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
                  {trilha && (
                    <Tooltip title={"Trilha arquivada"}>
                      <Switch
                        checked={filed}
                        loading={archiving}
                        style={{
                          marginRight: "15px",
                        }}
                        defaultChecked={trilhaDefault.filedAt}
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
                    {trilha?.id ? <>Salvar</> : <>Cadastrar</>}
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
                          help={error ? error.message : ""}
                          hasFeedback
                        >
                          <Tooltip
                            title={
                              itinerarieSelected.length === 0 &&
                              "Selecione um itinerário"
                            }
                          >
                            <Select
                              showSearch
                              disabled={itinerarieSelected.length === 0}
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
                              onChange={(value) => {
                                setDescriptionIfEmpty(value);
                                field.onChange(value);
                              }}
                              labelRender={({ value }) => {
                                const item = allCompetencias.find(
                                  (comp) => comp.id === value
                                );
                                return (
                                  <>
                                    {item?.name}
                                    {item?.filedAt && (
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
                              options={competenciesFiltred
                                .filter((comp) => !comp.filedAt)
                                .map((item) => ({
                                  label: item.name,
                                  value: item.id,
                                }))}
                            />
                          </Tooltip>
                        </Form.Item>
                      );
                    }}
                  />
                </Descriptions.Item>
              </Descriptions>
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
                    competencies: register.getValues("competencies")
                      ? [register.getValues("competencies")]
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
