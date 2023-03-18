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
  };

  const updateTrilha = useStoreActions(
    (actions) => actions.trilhas.updateTrilha
  );
  const registerTrilha = useStoreActions(
    (actions) => actions.trilhas.registerTrilha
  );

  const registering = useStoreState((state) => state.trilhas.registering);

  const allItinerarios = useStoreState(
    (state) => state.itineraries.itinerarios
  );

  const allCompetencias = useStoreState(
    (state) => state.competencies.competencias
  );

  const cursos = useStoreState((state) => state.courses.cursos);
  const cursosSecondary = useStoreState(
    (state) => state.courses.cursosSecondary
  );

  const [filed, setFiled] = useState(trilha?.filedAt !== null);
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
        if ((trilha.filedAt !== null) !== filed) {
          await updateTrilha({
            ...values,
            id: trilha.id,
            filed: filed,
            courses: cursosTrilhaIds,
          });
        } else {
          await updateTrilha({
            ...values,
            id: trilha.id,
            courses: cursosTrilhaIds,
          });
        }
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

  // Table add courses to trail

  const onSelectChange = (newSelectedRowKeys) => {
    setCursosTrilhaIds(newSelectedRowKeys);
    const novosCursos = newSelectedRowKeys.map((idCurso, _index) => {
      const curso = cursosSecondary.find((curso) => curso.id === idCurso);
      return {
        name: curso.name,
        id: curso.id,
        filedAt: curso.filedAt,
      };
    });
    setCursosTrilha(novosCursos);
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
        /* return dataCourse.taxonomies.map((tax) => (
          <Tag color={"blue"} key={tax.id}>
            {tax.name}
          </Tag>
        )); */
        return <>taxonomias</>;
      },
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
                <Button
                  loading={registering}
                  disabled={!register.formState.isValid}
                  type="primary"
                  shape="round"
                  htmlType="submit"
                >
                  {trilha?.id ? <>Salvar</> : <>Cadastrar</>}
                </Button>
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
                {trilha && (
                  <Descriptions.Item label={"Trilha arquivada"}>
                    <Switch
                      checked={filed}
                      defaultChecked={trilha.filedAt}
                      onChange={(value) => {
                        setFiled(value);
                      }}
                    />
                  </Descriptions.Item>
                )}
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
