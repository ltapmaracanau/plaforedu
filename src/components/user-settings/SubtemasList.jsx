import { useCallback, useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  List,
  Modal,
  Input,
  Tag,
  Tooltip,
  Switch,
  Space,
  notification,
} from "antd";
import SubtemaRegister from "./SubtemaRegister";

const { Search } = Input;

export default function SubtemasList() {
  const getSubthemesAction = useStoreActions(
    (actions) => actions.themes.getSubthemes
  );
  const [registerVisible, setRegisterVisible] = useState(false);
  const [modalText, setModalText] = useState("Cadastrar Subtema");
  const [editingSubtheme, setEditingSubtheme] = useState(null);
  const [showFiled, setShowFiled] = useState(false);
  const [subthemes, setSubthemes] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [textSearch, setTextSearch] = useState("");

  const loadingSubthemes = useStoreState(
    (state) => state.themes.loadingSubthemes
  );

  const getSubthemes = useCallback(
    async ({ query, showFiled, page }) => {
      try {
        const { data, count } = await getSubthemesAction({
          query,
          showFiled,
          page,
        });
        setSubthemes(data);
        setCount(count);
      } catch (error) {
        notification.error({
          message: "Erro",
          description: error.message,
        });
      }
    },
    [getSubthemesAction]
  );

  useEffect(() => {
    getSubthemes({
      query: "",
      showFiled: false,
      page: 1,
    });
  }, [getSubthemes]);

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
          title={"Subtemas"}
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
                  getSubthemes({
                    query: e,
                    showFiled: showFiled,
                    page: 1,
                  });
                }}
                style={{
                  marginRight: "10px",
                }}
                placeholder={"Buscar subtemas"}
              />
              <Tooltip title={"Exibir Arquivados"}>
                <Switch
                  defaultChecked={showFiled}
                  checked={showFiled}
                  style={{
                    marginRight: "10px",
                  }}
                  onClick={(checked) => {
                    setShowFiled(checked);
                    getSubthemes({
                      query: textSearch,
                      showFiled: checked,
                      page: 1,
                    });
                  }}
                />
              </Tooltip>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                  setEditingSubtheme(null);
                  setModalText("Cadastrar Subtema");
                  setRegisterVisible(true);
                }}
              >
                Adicionar
              </Button>
            </div>
          }
        >
          <List
            loading={loadingSubthemes}
            pagination={{
              pageSize: 30,
              current: page,
              total: count,
              showSizeChanger: false,
              onChange: (value) => {
                setPage(value);
                getSubthemes({
                  query: textSearch,
                  showFiled: showFiled,
                  page: value,
                });
              },
            }}
            dataSource={subthemes}
            style={{ width: "100%" }}
            renderItem={(item) => {
              return (
                <List.Item
                  key={item.id}
                  actions={[
                    <Button
                      key={item.id}
                      onClick={() => {
                        setEditingSubtheme(item);
                        setModalText("Editar Subtema");
                        setRegisterVisible(true);
                      }}
                      icon={<EditOutlined />}
                    >
                      Editar
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    style={{ fontFamily: "Roboto" }}
                    title={item.name}
                    description={
                      <Space direction="vertical">
                        {item.filedAt && <Tag color="orange">ARQUIVADO</Tag>}
                        <span>
                          {item.themes.map((theme) => (
                            <Tag color="blue" key={theme.id}>
                              {theme.name}
                            </Tag>
                          ))}
                        </span>
                      </Space>
                    }
                  />
                </List.Item>
              );
            }}
          />
        </Card>
        <Modal
          title={modalText}
          open={registerVisible}
          destroyOnClose={true}
          onCancel={() => {
            getSubthemes({
              query: textSearch,
              showFiled: showFiled,
              page: page,
            });
            setEditingSubtheme(null);
            setModalText("Cadastrar Subtema");
            setRegisterVisible(false);
          }}
          footer={[
            <Button
              type="primary"
              key={"back"}
              onClick={() => {
                getSubthemes({
                  query: textSearch,
                  showFiled: showFiled,
                  page: page,
                });
                setEditingSubtheme(null);
                setModalText("Cadastrar Subtema");
                setRegisterVisible(false);
              }}
            >
              Cancelar
            </Button>,
          ]}
        >
          <SubtemaRegister
            subtheme={editingSubtheme}
            actionVisible={() => {
              setRegisterVisible(false);
              setEditingSubtheme(null);
              getSubthemes({
                query: textSearch,
                showFiled: showFiled,
                page: page,
              });
            }}
          />
        </Modal>
      </div>
    </div>
  );
}
