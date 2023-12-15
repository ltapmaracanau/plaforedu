import React, { useEffect, useMemo, useState } from "react";

import { RollbackOutlined, MenuOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Form,
  Input,
  notification,
  Descriptions,
  Typography,
  Table,
  Modal,
  Tag,
  Space,
  Popconfirm,
  Empty,
} from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Controller, useForm } from "react-hook-form";
import { registerStudyPlanSchema } from "../../schemas/registers/registersSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import TableSelectCourses from "../filter-components/TableSelectCourses";

import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useNavigate, useParams } from "react-router-dom";
import TableAddTrailStudyPlan from "../filter-components/TableAddTrailStudyPlan";
const { Title } = Typography;

const Row = ({ children, ...props }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
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
    ...(isDragging
      ? {
          position: "relative",
          zIndex: 5,
        }
      : {}),
  };
  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if (child.key === "sort") {
          return React.cloneElement(child, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{
                  touchAction: "none",
                  cursor: "move",
                }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};

export default function StudyPlanRegister() {
  const { planId = null } = useParams();

  const navigate = useNavigate();

  const updateStudyPlan = useStoreActions(
    (actions) => actions.studyPlans.updateStudyPlan
  );
  const createStudyPlan = useStoreActions(
    (actions) => actions.studyPlans.createStudyPlan
  );
  const getUniqueStudyPlan = useStoreActions(
    (actions) => actions.studyPlans.getUniqueStudyPlan
  );

  const loading = useStoreState((state) => state.studyPlans.loading);

  const [studyPlan, setStudyPlan] = useState({
    name: "",
    description: "",
    courses: [],
  });
  const [addCourseVisible, setAddCourseVisible] = useState(false);
  const [addTrailVisible, setAddTrailVisible] = useState(false);

  const [coursesPlan, setCoursesPlan] = useState([]);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    values: {
      name: studyPlan.name,
      description: studyPlan.description,
      courses: studyPlan.courses.map((course) => course.courseId),
    },
    defaultValues: studyPlan
      ? {
          name: studyPlan.name,
          description: studyPlan.description,
          courses: studyPlan.courses.map((course) => course.courseId),
        }
      : {},
    resolver: yupResolver(registerStudyPlanSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const coursesPlanIds = useMemo(() => {
    register.setValue(
      "courses",
      coursesPlan.map((course) => course.courseId)
    );
    return coursesPlan.map((course) => course.courseId);
  }, [coursesPlan, register]);

  useEffect(() => {
    async function init() {
      if (planId) {
        try {
          const plan = await getUniqueStudyPlan({ id: planId });
          setStudyPlan(plan);
          setCoursesPlan(plan.courses.sort((a, b) => a.sequence - b.sequence));
        } catch (error) {
          notification.error({
            message: "Erro ao buscar plano de estudo",
            description: error.message,
          });
        }
      }
    }
    init();
  }, [planId, getUniqueStudyPlan]);

  const onSubmit = async (values) => {
    if (planId) {
      try {
        if (coursesPlanIds.length === 0) {
          throw new Error("A lista de cursos não pode estar vazia!");
        }
        await updateStudyPlan({
          id: planId,
          name: values.name,
          description: values.description,
          courses: coursesPlanIds.map((courseId, index) => ({
            courseId: courseId,
            sequence: index + 1,
          })),
        });
        notification.success({
          message: "Trilha alterada com sucesso!",
        });
        navigate("/settings/study-plans");
      } catch (error) {
        notification.error({
          message: "Erro!",
          description: error.message,
        });
      }
    } else {
      try {
        if (coursesPlanIds.length === 0) {
          throw new Error("A lista de cursos não pode estar vazia!");
        }
        console.log({
          name: values.name,
          description: values.description,
          courses: coursesPlanIds.map((courseId, index) => ({
            courseId: courseId,
            sequence: index + 1,
          })),
        });
        await createStudyPlan({
          name: values.name,
          description: values.description,
          courses: coursesPlanIds.map((courseId, index) => ({
            courseId: courseId,
            sequence: index + 1,
          })),
        });
        notification.success({
          message: "Trilha cadastrada com sucesso!",
        });
        register.reset();
        navigate("/settings/study-plans");
      } catch (error) {
        notification.error({
          message: "Algo deu errado!",
          description: error.message,
        });
      }
    }
  };

  const addTrail = (trail) => {
    const coursesToAdd = trail.courses.filter((course) => {
      return !coursesPlanIds.includes(course.id);
    });
    setCoursesPlan((last) => [
      ...last,
      ...coursesToAdd.map((course) => ({
        courseId: course.id,
        name: course.name,
      })),
    ]);
  };

  // Table add courses to trail

  const onSelectChange = (courseChanged, selected) => {
    if (selected) {
      setCoursesPlan((last) => [
        ...last,
        {
          courseId: courseChanged.id,
          name: courseChanged.name,
        },
      ]);
    } else {
      setCoursesPlan((last) =>
        last.filter((course) => course.courseId !== courseChanged.id)
      );
    }
  };

  const handleDeletePlanCourse = (courseId) => {
    setCoursesPlan((last) =>
      last.filter((course) => course.courseId !== courseId)
    );
  };

  // Drag and Sort Table

  const columns = [
    {
      title: "Ordem",
      key: "sort",
      width: "10%",
    },
    {
      title: "Curso",
      dataIndex: "name",
      className: "drag-visible",
      render: (text, record) => {
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
      title: "",
      action: true,
      editable: false,
      width: "20%",
      dataIndex: "operation",
      render: (_, record) => (
        <Popconfirm
          title="Tem certeza?"
          onConfirm={() => handleDeletePlanCourse(record.courseId)}
        >
          <Button type="dashed">Excluir</Button>
        </Popconfirm>
      ),
    },
  ];

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setCoursesPlan((previous) => {
        const activeIndex = previous.findIndex((i) => i.courseId === active.id);
        const overIndex = previous.findIndex((i) => i.courseId === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "1rem",
      }}
    >
      <Button
        onClick={() => {
          navigate("/settings/study-plans");
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
          title={
            planId ? <>Editar Plano de Estudo</> : <>Criar Plano de Estudo</>
          }
          bordered={false}
          extra={
            <Space direction="horizontal">
              <Button
                loading={loading}
                disabled={!register.formState.isValid}
                type="primary"
                shape="round"
                htmlType="submit"
              >
                {planId ? <>Salvar</> : <>Cadastrar</>}
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
            <Descriptions.Item label={"Título do Plano"}>
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
            <Descriptions.Item label={"Descrição do Plano"}>
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
          </Descriptions>
          <DndContext
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={onDragEnd}
          >
            <SortableContext
              // rowKey array
              items={coursesPlan.map((i) => i.courseId)}
              strategy={verticalListSortingStrategy}
            >
              <Table
                columns={columns}
                dataSource={coursesPlan}
                pagination={false}
                rowKey={"courseId"}
                // empty
                locale={{
                  emptyText: (
                    <Empty
                      description={
                        <span>
                          Não há cursos adicionados ao plano de estudo
                        </span>
                      }
                    />
                  ),
                }}
                components={{
                  body: {
                    row: Row,
                  },
                }}
                title={() => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Title level={4}>Cursos no Plano</Title>
                    <div>
                      <Button
                        type="primary"
                        style={{ marginRight: "10px" }}
                        onClick={() => {
                          setAddTrailVisible(true);
                        }}
                      >
                        Adicionar Trilha Formativa
                      </Button>
                      <Button
                        type="primary"
                        onClick={() => {
                          setAddCourseVisible(true);
                        }}
                      >
                        Adicionar/Remover Cursos
                      </Button>
                    </div>
                  </div>
                )}
              />
            </SortableContext>
          </DndContext>
          <Modal
            open={addCourseVisible}
            onCancel={() => {
              setAddCourseVisible(false);
            }}
            width={"auto"}
            destroyOnClose={true}
            title={"Adicionar/Remover cursos no plano"}
            footer={null}
          >
            <TableSelectCourses
              onSelectChange={onSelectChange}
              cursosDefaultSelected={coursesPlanIds}
            />
          </Modal>
          <Modal
            open={addTrailVisible}
            onCancel={() => {
              setAddTrailVisible(false);
            }}
            width={"auto"}
            destroyOnClose={true}
            title={"Adicionar Trilha Formativa"}
            footer={null}
          >
            <TableAddTrailStudyPlan
              onAdd={(trail) => {
                addTrail(trail);
              }}
            />
          </Modal>
        </Card>
      </Form>
    </div>
  );
}
