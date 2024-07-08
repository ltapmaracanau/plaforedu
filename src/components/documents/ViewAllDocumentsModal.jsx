import { useMemo, useState } from "react";
import {
  Card,
  DatePicker,
  Empty,
  Input,
  List,
  Modal,
  Tag,
  Typography,
} from "antd";
import { FileTextFilled } from "@ant-design/icons";

const { Text } = Typography;

export default function ViewAllDocumentsModal({
  visible,
  setVisible,
  datasource,
  typeOfficialDocument,
  typeScientificProduction,
  typeNews,
}) {
  const [query, setQuery] = useState("");
  const [date, setDate] = useState(undefined);

  const datasourceList = useMemo(() => {
    return datasource.filter(
      (document) =>
        (document.name.toLowerCase().includes(query.toLowerCase()) ||
          document.description.toLowerCase().includes(query.toLowerCase()) ||
          document.authors.some((author) =>
            author.name.toLowerCase().includes(query.toLowerCase())
          )) &&
        (!date ||
          document.publicationDate.toLowerCase().includes(date.toLowerCase()))
    );
  }, [datasource, query, date]);

  return (
    <Modal
      title="Todos os documentos"
      width={"90%"}
      open={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      destroyOnClose
    >
      <div
        style={{
          width: "100%",
          marginBottom: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <Input.Search
          style={{
            width: "45%",
          }}
          placeholder="Pesquisar documento ou autor"
          enterButton
          onSearch={(value) => {
            setQuery(value);
          }}
        />
        <DatePicker
          style={{
            width: "30%",
          }}
          placeholder="Data de publicação"
          onChange={(_date, dateString) => {
            setDate(dateString);
          }}
        />
      </div>
      <div
        style={{
          overflowY: "auto",
          maxHeight: "55vh",
          padding: "10px",
        }}
      >
        <List
          locale={{
            emptyText: <Empty description="Não encontrado!" />,
          }}
          grid={{
            gutter: 10,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3,
          }}
          dataSource={datasourceList}
          itemLayout="horizontal"
          renderItem={(document) => (
            <List.Item>
              {document.documentType.id === typeOfficialDocument?.id && (
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
              )}
              {(document.documentType.id === typeScientificProduction?.id ||
                document.documentType.id === typeNews?.id) && (
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
              )}
            </List.Item>
          )}
        />
      </div>
    </Modal>
  );
}
