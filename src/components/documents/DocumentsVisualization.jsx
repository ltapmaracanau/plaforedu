import { Card, Empty, List, notification, Tag, Typography } from "antd";
import { useStoreActions } from "easy-peasy";
import { useEffect, useMemo, useState } from "react";

import { FileTextFilled, RightOutlined } from "@ant-design/icons";
import ViewAllDocumentsModal from "./ViewAllDocumentsModal";

const { Title, Link, Text } = Typography;

export default function DocumentsVisualization() {
  const getDocuments = useStoreActions(
    (actions) => actions.documents.getDocuments
  );
  const getDocumentsTypes = useStoreActions(
    (actions) => actions.documents.getDocumentsTypes
  );

  const [loadingDocuments, setLoadingDocuments] = useState(true);
  const [documents, setDocuments] = useState([]);
  const [documentTypes, setDocumentTypes] = useState([]);
  const [viewAllDocumentsVisible, setViewAllDocumentsVisible] = useState(false);
  const [typeIdSelectedViewAll, setTypeIdSelectedViewAll] = useState(null);

  const datasourceViewAllDocuments = useMemo(() => {
    return documents.filter(
      (document) => document.documentType.id === typeIdSelectedViewAll
    );
  }, [typeIdSelectedViewAll, documents]);

  const typeOfficialDocument = useMemo(
    () =>
      documentTypes.find(
        (documentType) => documentType.name === "Documento Oficial"
      ),
    [documentTypes]
  );

  const typeScientificProduction = useMemo(
    () =>
      documentTypes.find(
        (documentType) => documentType.name === "Produção Científica"
      ),
    [documentTypes]
  );

  const typeNews = useMemo(
    () => documentTypes.find((documentType) => documentType.name === "Notícia"),
    [documentTypes]
  );

  useEffect(() => {
    const init = async () => {
      try {
        const documentsTypes = await getDocumentsTypes();
        setDocumentTypes(documentsTypes);
        const documents = await getDocuments();
        setDocuments(documents.data);
      } catch (error) {
        notification.error({
          message: "Erro ao buscar documentos",
          description: error.message,
        });
      } finally {
        setLoadingDocuments(false);
      }
    };
    init();
  }, [getDocuments, getDocumentsTypes]);

  return (
    <div
      style={{
        display: "grid",
        // justifyContent: "center",
        margin: "5% 10% 0 10%",
      }}
    >
      <Title level={2}>Documentos Oficiais</Title>
      <List
        loading={loadingDocuments}
        locale={{
          emptyText: <Empty description="Nenhum documento oficial" />,
        }}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
        }}
        dataSource={documents
          .filter(
            (document) => document.documentType.id === typeOfficialDocument?.id
          )
          .slice(0, 6)}
        itemLayout="horizontal"
        renderItem={(document) => (
          <List.Item>
            <Card
              style={{
                backgroundColor: "#f5f5f5",
              }}
              size="small"
              hoverable
              onClick={() => {
                window.open(document.link, "_blank");
              }}
            >
              <Card.Meta
                avatar={
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FileTextFilled
                      style={{
                        fontSize: "32px",
                        color: "#304C84",
                      }}
                    />
                  </div>
                }
                title={<Text strong>{document.name}</Text>}
              />
            </Card>
          </List.Item>
        )}
      />
      {(
        documents.filter(
          (document) => document.documentType.id === typeOfficialDocument?.id
        ) || []
      ).length > 6 && (
        <Link
          onClick={() => {
            setTypeIdSelectedViewAll(typeOfficialDocument?.id);
            setViewAllDocumentsVisible(true);
          }}
        >
          Ver todos os documentos oficiais <RightOutlined />
        </Link>
      )}

      <Title level={2}>Produção Científica</Title>
      <List
        loading={loadingDocuments}
        locale={{
          emptyText: <Empty description="Nenhuma produção científica" />,
        }}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
        }}
        dataSource={documents
          .filter(
            (document) =>
              document.documentType.id === typeScientificProduction?.id
          )
          .slice(0, 6)}
        itemLayout="horizontal"
        renderItem={(document) => (
          <List.Item>
            <Card
              size="small"
              hoverable
              onClick={() => {
                window.open(document.link, "_blank");
              }}
            >
              <Card.Meta
                title={document.name}
                description={document.description}
              />
              <Tag
                style={{
                  marginTop: "10px",
                }}
                color="blue"
              >
                {document.documentSubType.name}
              </Tag>
            </Card>
          </List.Item>
        )}
      />
      {(
        documents.filter(
          (document) =>
            document.documentType.id === typeScientificProduction?.id
        ) || []
      ).length > 6 && (
        <Link
          onClick={() => {
            setTypeIdSelectedViewAll(typeScientificProduction?.id);
            setViewAllDocumentsVisible(true);
          }}
        >
          Ver todas as produções científicas <RightOutlined />
        </Link>
      )}

      <Title level={2}>Arquivos de Notícias</Title>
      <List
        loading={loadingDocuments}
        locale={{
          emptyText: <Empty description="Nenhuma Notícia" />,
        }}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
        }}
        dataSource={documents
          .filter((document) => document.documentType.id === typeNews?.id)
          .slice(0, 6)}
        itemLayout="horizontal"
        renderItem={(document) => (
          <List.Item>
            <Card
              size="small"
              onClick={() => {
                window.open(document.link, "_blank");
              }}
              hoverable
            >
              <Card.Meta
                title={document.name}
                description={document.description}
              />
              <Tag
                style={{
                  marginTop: "10px",
                }}
                color="blue"
              >
                {document.documentSubType.name}
              </Tag>
            </Card>
          </List.Item>
        )}
      />
      {(
        documents.filter(
          (document) => document.documentType.id === typeNews?.id
        ) || []
      ).length > 6 && (
        <Link
          onClick={() => {
            setTypeIdSelectedViewAll(typeNews?.id);
            setViewAllDocumentsVisible(true);
          }}
        >
          Ver todas as notícias <RightOutlined />
        </Link>
      )}

      <ViewAllDocumentsModal
        visible={viewAllDocumentsVisible}
        setVisible={setViewAllDocumentsVisible}
        datasource={datasourceViewAllDocuments.filter(
          (document) => document.documentType.id === typeIdSelectedViewAll
        )}
        typeOfficialDocument={typeOfficialDocument}
        typeScientificProduction={typeScientificProduction}
        typeNews={typeNews}
      />
    </div>
  );
}
