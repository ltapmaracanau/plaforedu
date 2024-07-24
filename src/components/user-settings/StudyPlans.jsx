import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  List,
  Input,
  notification,
  Popconfirm,
  Progress,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

export default function StudyPlans() {
  const navigate = useNavigate();
  const getStudyPlans = useStoreActions(
    (actions) => actions.studyPlans.getStudyPlans
  );
  const deleteStudyPlan = useStoreActions(
    (actions) => actions.studyPlans.deleteStudyPlan
  );

  const [textSearch, setTextSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const loading = useStoreState((state) => state.studyPlans.loading);
  const count = useStoreState((state) => state.studyPlans.count);
  const studyPlans = useStoreState((state) => state.studyPlans.studyPlans);

  useEffect(() => {
    async function init() {
      try {
        await getStudyPlans({
          pageNumber: pageNumber,
          textSearch: textSearch,
        });
      } catch (error) {
        notification.error({
          message: "Erro ao buscar planos de desenvolvimento",
          description: error.message,
        });
      }
    }
    init();
  }, [getStudyPlans, pageNumber, textSearch]);

  const deleteStudyPlanSubmit = async (id) => {
    try {
      await deleteStudyPlan({ id });
      getStudyPlans({
        pageNumber: pageNumber,
        textSearch: textSearch,
      });
    } catch (error) {
      notification.error({
        message: "Erro ao deletar plano de desenvolvimento",
        description: error.message,
      });
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
          title={"Planos de Desenvolvimento"}
          styles={{
            header: {
              fontSize: 20,
            },
          }}
          extra={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "450px",
              }}
            >
              <Search
                allowClear
                defaultValue={textSearch}
                onSearch={(e) => {
                  setTextSearch(e);
                  getStudyPlans({
                    pageNumber: pageNumber,
                    textSearch: e,
                  });
                }}
                style={{
                  marginRight: "10px",
                }}
                placeholder={"Buscar planos de desenvolvimento..."}
              />
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                  navigate("/settings/study-plans/new");
                }}
              >
                Adicionar
              </Button>
            </div>
          }
        >
          <List
            loading={loading}
            dataSource={studyPlans}
            style={{ width: "100%" }}
            pagination={{
              onChange: (page) => {
                setPageNumber(page);
                getStudyPlans({
                  pageNumber: pageNumber,
                  textSearch: textSearch,
                });
              },
              pageSize: 20,
              total: count,
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
                    <Popconfirm
                      key={item.id}
                      title="Tem certeza?"
                      onConfirm={() => deleteStudyPlanSubmit(item.id)}
                      onCancel={() => {}}
                      okText="Sim"
                      cancelText="Não"
                    >
                      <Button shape="circle" danger icon={<DeleteOutlined />} />
                    </Popconfirm>,
                    <Button
                      key={item.id}
                      onClick={() => {
                        navigate(`/settings/study-plans/edit/${item.id}`);
                      }}
                      icon={<EditOutlined />}
                    >
                      Editar
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Progress
                        type="circle"
                        size={"small"}
                        percent={item.percentage?.toFixed(0) || 0}
                      />
                    }
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
                      <div
                        style={{
                          marginLeft: "15px",
                        }}
                      >
                        {item.description}
                      </div>
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
