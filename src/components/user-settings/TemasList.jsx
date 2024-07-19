import { useCallback, useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  List,
  Modal,
  Input,
  Tooltip,
  Switch,
  Tag,
  notification,
} from "antd";
import TemasRegister from "./TemasRegister";

const { Search } = Input;

export default function TemasList() {
  const getThemesAction = useStoreActions(
    (actions) => actions.themes.getThemes
  );

  const [registerVisible, setRegisterVisible] = useState(false);
  const [modalText, setModalText] = useState("Cadastrar Tema");
  const [editandoTema, setEditandoTema] = useState(null);
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const [themes, setThemes] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getThemes = useCallback(
    async ({ query = "", page = 1, showFiled = false }) => {
      setLoading(true);
      try {
        const { data, count } = await getThemesAction({
          query,
          page,
          showFiled,
        });
        setCount(count);
        setThemes(data);
      } catch (error) {
        notification.error({
          message: "Erro ao buscar temas",
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    },
    [getThemesAction]
  );

  useEffect(() => {
    getThemes({
      query: "",
      page: 1,
      showFiled: false,
    });
  }, [getThemes]);

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
          title={"Temas"}
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
                  getThemes({
                    query: e,
                    showFiled: showFiled,
                    page: 1,
                  });
                }}
                style={{
                  marginRight: "10px",
                }}
                placeholder={"Buscar temas"}
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
                    getThemes({
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
                  setEditandoTema(null);
                  setModalText("Cadastrar Tema");
                  setRegisterVisible(true);
                }}
              >
                Adicionar
              </Button>
            </div>
          }
        >
          <List
            loading={loading}
            dataSource={themes}
            pagination={{
              pageSize: 30,
              current: page,
              total: count,
              defaultCurrent: 1,
              showSizeChanger: false,
              onChange: (value) => {
                setPage(value);
                getThemes({
                  query: textSearch,
                  showFiled: showFiled,
                  page: value,
                });
              },
            }}
            style={{ width: "100%" }}
            renderItem={(item) => {
              return (
                <List.Item
                  key={item.id}
                  actions={[
                    <Button
                      onClick={() => {
                        setEditandoTema(item);
                        setModalText("Editar Tema");
                        setRegisterVisible(true);
                      }}
                      key={item.id}
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
                      item.filedAt && <Tag color="orange">ARQUIVADO</Tag>
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
            getThemes({
              query: textSearch,
              showFiled: showFiled,
              page: page,
            });
            setEditandoTema(null);
            setModalText("Cadastrar Tema");
            setRegisterVisible(false);
          }}
          footer={[
            <Button
              type="primary"
              key={"back"}
              onClick={() => {
                getThemes({
                  query: textSearch,
                  showFiled: showFiled,
                  page: page,
                });
                setEditandoTema(null);
                setModalText("Cadastrar Tema");
                setRegisterVisible(false);
              }}
            >
              Cancelar
            </Button>,
          ]}
        >
          <TemasRegister
            theme={editandoTema}
            actionVisible={() => {
              setRegisterVisible(false);
              getThemes({
                query: textSearch,
                showFiled: showFiled,
                page: page,
              });
              setEditandoTema(null);
            }}
          />
        </Modal>
      </div>
    </div>
  );
}
