import { useCallback, useEffect, useMemo, useState } from "react";
import { useStoreActions } from "easy-peasy";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  List,
  Input,
  notification,
  Space,
  Tag,
  DatePicker,
  Empty,
  Switch,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

export default function DocumentsList() {
  const navigate = useNavigate();
  const getDocuments = useStoreActions(
    (actions) => actions.documents.getDocuments
  );

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [date, setDate] = useState(undefined);
  const [onlyFiled, setOnlyFiled] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const getAllDocuments = useCallback(
    async ({ onlyFiled = false }) => {
      try {
        const response = await getDocuments({ onlyFiled });
        setDocuments(response.data);
        setLoading(false);
      } catch (error) {
        notification.error({
          message: "Erro ao buscar documentos",
          description: error.message,
        });
      }
    },
    [getDocuments]
  );

  const documentsFiltered = useMemo(() => {
    return documents.filter((document) => {
      return (
        (document.name.toLowerCase().includes(query.toLowerCase()) ||
          document.description.toLowerCase().includes(query.toLowerCase())) &&
        (!date ||
          document.publicationDate.toLowerCase().includes(date.toLowerCase()))
      );
    });
  }, [documents, query, date]);

  useEffect(() => {
    getAllDocuments({
      onlyFiled,
    });
  }, [getAllDocuments, onlyFiled]);

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
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                  navigate("/settings/document/edit");
                }}
              >
                Adicionar
              </Button>
            </div>
          }
        >
          <div
            style={{
              width: "100%",
              marginBottom: "10px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Search
              allowClear
              defaultValue={query}
              onSearch={(e) => {
                setQuery(e);
              }}
              style={{
                width: "45%",
                marginRight: "10px",
              }}
              placeholder={"Buscar documentos..."}
            />
            <DatePicker
              style={{
                width: "40%",
              }}
              placeholder="Data de publicação"
              onChange={(_date, dateString) => {
                setDate(dateString);
              }}
            />
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
          </div>
          <List
            loading={loading}
            dataSource={documentsFiltered}
            style={{ width: "100%" }}
            locale={{
              emptyText: <Empty description="Não encontrado!" />,
            }}
            pagination={{
              onChange: (page) => {
                setPageNumber(page);
              },
              pageSize: 20,
              total: documentsFiltered.length,
              showSizeChanger: false,
              current: pageNumber,
              defaultCurrent: 1,
              hideOnSinglePage: false,
            }}
            renderItem={(item) => {
              return (
                <List.Item
                  key={item.id}
                  actions={[
                    <Button
                      key={item.id}
                      onClick={() => {
                        navigate(`/settings/document/edit/${item.id}`);
                      }}
                      icon={<EditOutlined />}
                    >
                      Editar
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    style={{ fontFamily: "Roboto" }}
                    title={
                      <Button
                        onClick={() => {
                          navigate(`/settings/study-plans/${item.id}`);
                        }}
                        type="text"
                      >
                        {item.name}
                      </Button>
                    }
                    description={
                      <Space
                        direction="vertical"
                        style={{
                          marginLeft: "15px",
                        }}
                      >
                        <Tag color="blue">{item.documentType.name}</Tag>
                        {item.description}
                      </Space>
                    }
                  />
                </List.Item>
              );
            }}
          />
        </Card>
      </div>
    </div>
  );
}
