import { useCallback, useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";

import { PlusOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  Input,
  notification,
  Space,
  Tag,
  Empty,
  Switch,
  Table,
  Popconfirm,
} from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function DocumentsList() {
  const navigate = useNavigate();
  const getDocuments = useStoreActions(
    (actions) => actions.documents.getDocuments
  );
  const getDocumentsTypes = useStoreActions(
    (actions) => actions.documents.getDocumentsTypes
  );
  const archiveDocumentAction = useStoreActions(
    (actions) => actions.documents.archiveDocument
  );
  const unarchiveDocumentAction = useStoreActions(
    (actions) => actions.documents.unarchiveDocument
  );

  const [documents, setDocuments] = useState([]);
  const [documentsTypes, setDocumentsTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [archivingDocument, setArchivingDocument] = useState(null);
  const [onlyFiled, setOnlyFiled] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const getAllDocuments = useCallback(
    async ({ onlyFiled = false }) => {
      try {
        const response = await getDocuments({ onlyFiled });
        setDocuments(response.data);
        const responseDocumentTypes = await getDocumentsTypes();
        setDocumentsTypes(responseDocumentTypes);
        setLoading(false);
      } catch (error) {
        notification.error({
          message: "Erro ao buscar documentos",
          description: error.message,
        });
      }
    },
    [getDocuments, getDocumentsTypes]
  );

  useEffect(() => {
    getAllDocuments({
      onlyFiled,
    });
  }, [getAllDocuments, onlyFiled]);

  const archiveDocument = async (value, documentId) => {
    setArchivingDocument(documentId);
    try {
      if (value) {
        await archiveDocumentAction({ documentId });
      } else {
        await unarchiveDocumentAction({ documentId });
      }
      await getAllDocuments({
        onlyFiled,
      });
    } catch (error) {
      notification.error({
        message: "Erro ao arquivar documento",
        description: error.message,
      });
    } finally {
      setArchivingDocument(null);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div style={{ width: "100%" }}>
        <Card
          title={"Planos de Estudo"}
          styles={{
            header: {
              fontSize: 20,
            },
          }}
          extra={
            <Space
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <Switch
                style={{
                  width: "100px",
                }}
                checkedChildren="Arquivados"
                unCheckedChildren="Ativos"
                onChange={(checked) => {
                  setOnlyFiled(checked);
                  getAllDocuments({
                    onlyFiled: checked,
                  });
                }}
              />
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                  navigate("/settings/document/edit");
                }}
              >
                Adicionar
              </Button>
            </Space>
          }
        >
          <Table
            locale={{
              emptyText: <Empty description="Nenhum documento encontrado" />,
            }}
            size="small"
            dataSource={documents}
            loading={loading}
            rowKey={(record) => record.id}
            pagination={{
              onChange: (page) => {
                setPageNumber(page);
              },
              pageSize: 20,
              total: documents.length,
              showSizeChanger: false,
              current: pageNumber,
              defaultCurrent: 1,
              hideOnSinglePage: false,
            }}
            columns={[
              {
                title: "Nome",
                dataIndex: "name",
                key: "name",
                filterIcon: (filtered) => (
                  <SearchOutlined
                    style={{
                      color: filtered ? "#1677ff" : undefined,
                    }}
                  />
                ),
                filterDropdown: ({ confirm, setSelectedKeys }) => (
                  <div
                    style={{
                      padding: 8,
                    }}
                  >
                    <Input.Search
                      placeholder="Buscar por nome"
                      onSearch={(value) => {
                        setSelectedKeys(value !== "" ? [value] : []);
                        confirm();
                      }}
                      onPressEnter={(e) => {
                        setSelectedKeys(
                          e.target.value !== "" ? [e.target.value] : []
                        );
                        confirm();
                      }}
                      allowClear
                      style={{ width: 188, marginBottom: 8, display: "block" }}
                    />
                  </div>
                ),
                onFilter: (value, record) => {
                  return record.name
                    .toLowerCase()
                    .includes(value.toLowerCase());
                },
              },
              {
                title: "Tipo",
                dataIndex: "documentType",
                key: "documentType",
                render: (text) => <Tag color="blue">{text.name}</Tag>,
                filters: documentsTypes.map((type) => ({
                  text: type.name,
                  value: type.id,
                })),
                onFilter: (value, record) => record.documentType.id === value,
              },
              {
                title: "Data de Publicação",
                dataIndex: "publicationDate",
                key: "publicationDate",
                render: (text) => dayjs(text).format("DD/MM/YYYY"),
                sorter: (a, b) =>
                  dayjs(a.publicationDate).unix() -
                  dayjs(b.publicationDate).unix(),
                showSorterTooltip: false,
              },
              {
                title: "Descrição",
                dataIndex: "description",
                key: "description",
              },
              {
                title: "Ações",
                key: "actions",
                render: (_text, record) => (
                  <Space>
                    <Popconfirm
                      title={
                        !record.filedAt
                          ? "Deseja arquivar o documento?"
                          : "Deseja desarquivar o documento?"
                      }
                      onConfirm={() => {
                        archiveDocument(!record.filedAt, record.id);
                      }}
                    >
                      <Button
                        loading={archivingDocument === record.id}
                        key={`${record.id}-file`}
                        type="dashed"
                      >
                        {!record.filedAt ? "Arquivar" : "Desarquivar"}
                      </Button>
                    </Popconfirm>
                    <Button
                      key={`${record.id}-edit`}
                      onClick={() => {
                        navigate(`/settings/document/edit/${record.id}`);
                      }}
                      icon={<EditOutlined />}
                    >
                      Editar
                    </Button>
                  </Space>
                ),
              },
            ]}
          />
        </Card>
      </div>
    </div>
  );
}
