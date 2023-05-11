import React, { useEffect, useMemo, useState } from "react";

import {
  RollbackOutlined,
  MenuOutlined,
  FilterFilled,
  SearchOutlined,
} from "@ant-design/icons";
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
  Transfer,
  Tag,
  Tooltip,
  Empty,
  Space,
  Popconfirm,
} from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Controller, useForm } from "react-hook-form";
import { registerTrilhaSchema } from "../../schemas/registers/registersSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import TableSelectCourses from "../filter-components/TableSelectCourses";

const { Title } = Typography;

const SortableItem = SortableElement((props) => <tr {...props} />);
const SortableBody = SortableContainer((props) => <tbody {...props} />);

const DragHandle = SortableHandle(() => (
  <MenuOutlined
    style={{
      cursor: "grab",
      color: "#999",
    }}
  />
));

export default function FormativeTrailsRegister(props) {
  const { trilha, title, actionVisible } = props;

  const trilhaDefault = {
    name: trilha ? trilha.name : "",
    description: trilha ? trilha.description : "",
    competencies: trilha ? trilha.competencies.map((item) => item.id) : [],
    itineraries: trilha ? trilha.itineraries.map((item) => item.id) : [],
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

  const [cursosTrilha, setCursosTrilha] = useState(
    trilha ? trilha.courses.sort((a, b) => a.sequence - b.sequence) : []
  );
  const [cursosTrilhaIds, setCursosTrilhaIds] = useState(
    trilha ? trilha.courses.map((curso) => curso.id) : []
  );

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: trilhaDefault,
    resolver: yupResolver(registerTrilhaSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = async (values) => {
    if (trilha) {
      try {
        if (cursosTrilhaIds.length === 0) {
          throw new Error("A lista de cursos não pode estar vazia!");
        }
        await updateTrilha({
          ...values,
          id: trilha.id,
          courses: cursosTrilhaIds,
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
        await registerTrilha({ ...values, courses: cursosTrilhaIds });
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

  // Table add courses to trail

  const onSelectChange = (record, selected) => {
    if (selected) {
      setCursosTrilhaIds((antig) => [...antig, record.id]);
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
      setCursosTrilhaIds((antig) => antig.filter((id) => id !== record.id));
      setCursosTrilha((antig) =>
        antig.filter((curso) => curso.id !== record.id)
      );
    }
  };

  const handleDeleteTrailCourse = (id) => {
    setCursosTrilhaIds((antig) => antig.filter((idCourse) => idCourse !== id));
    setCursosTrilha((antig) => antig.filter((curso) => curso.id !== id));
  };

  // Drag and Sort Table

  const columns = [
    {
      title: "Ordenação",
      dataIndex: "sort",
      width: 30,
      className: "drag-visible",
      render: () => <DragHandle />,
    },
    {
      title: "Curso",
      dataIndex: "name",
      className: "drag-visible",
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

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(
        cursosTrilha.slice(),
        oldIndex,
        newIndex
      ).filter((el) => !!el);
      setCursosTrilha(newData);
      setCursosTrilhaIds(newData.map((item) => item.id));
    }
  };

  const DraggableContainer = (props) => (
    <SortableBody
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = cursosTrilha.findIndex(
      (x) => x.id === restProps["data-row-key"]
    );
    return <SortableItem index={index} {...restProps} />;
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
              bodyStyle={{
                fontFamily: "Roboto",
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
                            {allItinerarios.map((item) => (
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
                            {allCompetencias.map((item) => (
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
              <Table
                columns={columns}
                dataSource={cursosTrilha}
                pagination={false}
                rowKey={"id"}
                components={{
                  body: {
                    wrapper: DraggableContainer,
                    row: DraggableBodyRow,
                  },
                }}
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
              <Modal
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
                />
              </Modal>
            </Card>
          </Form>
        </div>
      </div>
    </>
  );
}
