import { useCallback, useEffect, useState } from "react";

import {
  DeleteOutlined,
  PlusOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Empty,
  Form,
  Input,
  List,
  notification,
  Popconfirm,
  Row,
  Select,
  Space,
  Switch,
  Tooltip,
  Typography,
} from "antd";
import { useStoreActions } from "easy-peasy";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { registerDocumentSchema } from "../../schemas/registers/registersSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

export default function DocumentRegister() {
  const { documentId = null } = useParams();

  const navigate = useNavigate();

  const getUniqueDocument = useStoreActions(
    (actions) => actions.documents.getUniqueDocument
  );
  const getDocumentsTypes = useStoreActions(
    (actions) => actions.documents.getDocumentsTypes
  );
  const getDocumentSubTypes = useStoreActions(
    (actions) => actions.documents.getDocumentSubTypes
  );
  const createDocument = useStoreActions(
    (actions) => actions.documents.createDocument
  );
  const updateDocument = useStoreActions(
    (actions) => actions.documents.updateDocument
  );
  const archiveDocument = useStoreActions(
    (actions) => actions.documents.archiveDocument
  );
  const unarchiveDocument = useStoreActions(
    (actions) => actions.documents.unarchiveDocument
  );

  const [documentTypes, setDocumentTypes] = useState([]);
  const [documentSubTypes, setDocumentSubTypes] = useState([]);
  const [documentEditing, setDocumentEditing] = useState({
    name: "",
    description: "",
    link: "",
    publicationDate: "",
    documentTypeId: null,
    documentSubTypeId: null,
    authors: [],
  });
  const [loading, setLoading] = useState(true);
  const [loadingSaving, setLoadingSaving] = useState(false);
  const [archiving, setArchiving] = useState(false);

  const getDocumentSubTypesByType = useCallback(
    async (typeId) => {
      try {
        const responseDocumentSubTypes = await getDocumentSubTypes({ typeId });
        setDocumentSubTypes(responseDocumentSubTypes);
      } catch (error) {
        notification.error({
          message: "Erro ao buscar subtipos de documento!",
          description: error.message,
        });
      }
    },
    [getDocumentSubTypes]
  );

  useEffect(() => {
    const init = async () => {
      try {
        if (documentId) {
          const responseDocument = await getUniqueDocument({ documentId });
          setDocumentEditing({
            name: responseDocument.name,
            description: responseDocument.description,
            link: responseDocument.link,
            publicationDate: responseDocument.publicationDate.split("T")[0],
            documentTypeId: responseDocument.documentType.id,
            documentSubTypeId: responseDocument.documentSubType.id,
            authors: responseDocument.authors.map((author) => author.name),
            filedAt: responseDocument.filedAt,
          });
          await getDocumentSubTypesByType(responseDocument.documentType.id);
        }
        const responseDocumentsTypes = await getDocumentsTypes();
        setDocumentTypes(responseDocumentsTypes);
      } catch (error) {
        notification.error({
          message: "Erro ao buscar documento!",
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [
    getUniqueDocument,
    documentId,
    getDocumentsTypes,
    getDocumentSubTypesByType,
  ]);

  const register = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    values: documentEditing,
    defaultValues: {},
    resolver: yupResolver(registerDocumentSchema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const arrayAuthorsRegister = useFieldArray({
    control: register.control,
    name: "authors",
  });

  const onSubmit = async (data) => {
    setLoadingSaving(true);
    try {
      const documentToSave = {
        name: data.name,
        description: data.description,
        link: data.link,
        publicationDate: data.publicationDate,
        documentTypeId: data.documentTypeId,
        documentSubTypeId: data.documentSubTypeId,
        authors: data.authors,
      };
      if (documentId) {
        await updateDocument({ documentId, documentValues: documentToSave });
      } else {
        await createDocument({ document: documentToSave });
      }
      notification.success({
        message: "Operação realizada com sucesso!",
      });
      navigate("/settings/documents");
    } catch (error) {
      notification.error({
        message: "Erro ao salvar documento!",
        description: error.message,
      });
    } finally {
      setLoadingSaving(false);
    }
  };

  const archiveUnarchiveDocument = async (archive) => {
    setArchiving(true);
    try {
      if (archive) {
        await archiveDocument({ documentId });
      } else {
        await unarchiveDocument({ documentId });
      }
      const responseDocument = await getUniqueDocument({ documentId });
      setDocumentEditing({
        ...responseDocument,
        publicationDate: responseDocument.publicationDate.split("T")[0],
        documentTypeId: responseDocument.documentType.id,
        documentSubTypeId: responseDocument.documentSubType.id,
        authors: responseDocument.authors.map((author) => author.name),
      });
      notification.success({
        message: "Operação realizada com sucesso!",
      });
    } catch (error) {
      notification.error({
        message: "Erro ao arquivar/desarquivar documento!",
        description: error.message,
      });
    } finally {
      setArchiving(false);
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
          navigate("/settings/documents");
        }}
        style={{
          marginBottom: "10px",
        }}
      >
        <RollbackOutlined /> Voltar
      </Button>
      <Form
        layout="vertical"
        onFinish={register.handleSubmit(onSubmit, (error) => {
          console.log(error);
        })}
      >
        <Card
          style={{ margin: "0px 0px" }}
          styles={{
            body: {
              fontFamily: "Roboto",
            },
          }}
          loading={loading}
          title={documentId ? <>Editar Documento</> : <>Criar Documento</>}
          bordered={false}
          extra={
            <Space direction="horizontal">
              {documentId && (
                <Switch
                  loading={archiving}
                  checkedChildren="Arquivado"
                  unCheckedChildren="Arquivar"
                  checked={!!documentEditing?.filedAt}
                  onChange={archiveUnarchiveDocument}
                />
              )}
              <Button
                loading={loadingSaving || loading}
                disabled={!register.formState.isValid}
                type="primary"
                shape="round"
                htmlType="submit"
              >
                {documentId ? <>Salvar</> : <>Cadastrar</>}
              </Button>
            </Space>
          }
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} lg={12} xl={8} xxl={8}>
              <Controller
                key={"name"}
                name="name"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label="Título"
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input.TextArea
                        maxLength={256}
                        placeholder="Título"
                        {...field}
                      />
                    </Form.Item>
                  );
                }}
              />
            </Col>
            <Col xs={24} sm={24} lg={12} xl={8} xxl={8}>
              <Controller
                key={"description"}
                name="description"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label="Descrição"
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
            </Col>
            <Col xs={24} sm={24} lg={12} xl={8} xxl={8}>
              <Controller
                key={"link"}
                name="link"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label="Link"
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Input placeholder="Link" {...field} />
                    </Form.Item>
                  );
                }}
              />
            </Col>
            <Col xs={24} sm={24} lg={12} xl={12} xxl={6}>
              <Controller
                key={"publicationDate"}
                name="publicationDate"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label="Data de Publicação"
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <DatePicker
                        {...field}
                        value={field.value ? dayjs(field.value) : undefined}
                        style={{
                          width: "100%",
                        }}
                        placeholder="Data de publicação"
                        onChange={(_date, dateString) => {
                          field.onChange(dateString);
                        }}
                      />
                    </Form.Item>
                  );
                }}
              />
            </Col>
            <Col xs={24} sm={24} lg={12} xl={12} xxl={6}>
              <Controller
                key={"documentTypeId"}
                name="documentTypeId"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label="Tipo de documento"
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Select
                        {...field}
                        style={{
                          width: "100%",
                        }}
                        placeholder="Tipo de documento"
                        options={documentTypes.map((type) => ({
                          label: type.name,
                          value: type.id,
                        }))}
                        onChange={(value) => {
                          field.onChange(value);
                          setDocumentEditing({
                            ...documentEditing,
                            documentSubTypeId: null,
                          });
                          register.setValue("documentSubTypeId", null);
                          getDocumentSubTypesByType(value);
                        }}
                      />
                    </Form.Item>
                  );
                }}
              />
            </Col>
            <Col xs={24} sm={24} lg={12} xl={12} xxl={6}>
              <Controller
                key={"documentSubTypeId"}
                name="documentSubTypeId"
                control={register.control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <Form.Item
                      label="Tipo de documento"
                      validateStatus={error ? "error" : ""}
                      help={error ? error.message : ""}
                      hasFeedback
                    >
                      <Tooltip
                        title={
                          !register.getValues("documentTypeId")
                            ? "Selecione um tipo de documento"
                            : null
                        }
                      >
                        <Select
                          {...field}
                          style={{
                            width: "100%",
                          }}
                          placeholder="Subtipo do documento"
                          disabled={!register.getValues("documentTypeId")}
                          options={documentSubTypes.map((subtype) => ({
                            label: subtype.name,
                            value: subtype.id,
                          }))}
                        />
                      </Tooltip>
                    </Form.Item>
                  );
                }}
              />
            </Col>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography.Title level={4}>Autores</Typography.Title>
              <Space>
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    arrayAuthorsRegister.append("Autor");
                  }}
                >
                  Adicionar
                </Button>
              </Space>
            </div>
            {register.formState.errors.authors ? (
              <Typography.Text type="danger">
                {register.formState.errors.authors.message}
              </Typography.Text>
            ) : null}
            <List
              style={{
                width: "100%",
              }}
              locale={{
                emptyText: <Empty description="Nenhum autor selecionado" />,
              }}
              itemLayout="vertical"
              dataSource={arrayAuthorsRegister.fields}
              rowKey={(_item, index) => index}
              renderItem={(item, index) => (
                <List.Item>
                  <Card
                    size="small"
                    styles={{
                      body: {
                        fontFamily: "Roboto",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      },
                    }}
                  >
                    <Controller
                      key={item.id}
                      name={`authors[${index}]`}
                      control={register.control}
                      render={({ field }) => {
                        return (
                          <Typography.Text
                            style={{
                              width: "100%",
                            }}
                            editable={{
                              onChange: (value) => {
                                field.onChange(value);
                              },
                            }}
                          >
                            {field.value}
                          </Typography.Text>
                        );
                      }}
                    />
                    <Popconfirm
                      title="Deseja realmente remover este autor?"
                      onConfirm={() => {
                        arrayAuthorsRegister.remove(index);
                      }}
                      okText="Sim"
                      cancelText="Não"
                    >
                      <Button
                        icon={<DeleteOutlined />}
                        type="dashed"
                        shape="round"
                        danger
                      />
                    </Popconfirm>
                  </Card>
                </List.Item>
              )}
            />
          </Row>
        </Card>
      </Form>
    </div>
  );
}
