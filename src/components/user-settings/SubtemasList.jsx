import { useEffect, useState } from "react";
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
} from "antd";
import SubtemaRegister from "./SubtemaRegister";

const { Search } = Input;

export default function SubtemasList() {
  const getSubthemes = useStoreActions(
    (actions) => actions.themes.getSubthemes
  );
  const getThemes = useStoreActions((actions) => actions.themes.getThemes);

  const [registerVisible, setRegisterVisible] = useState(false);
  const [modalText, setModalText] = useState("Cadastrar Subtema");
  const [editandoSubtema, setEditandoSubtema] = useState(null);
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const loadingSubthemes = useStoreState(
    (state) => state.themes.loadingSubthemes
  );
  const subthemes = useStoreState((state) => state.themes.subthemes);

  useEffect(() => {
    getSubthemes();
    getThemes({
      showFiled: true,
    });
  }, [getSubthemes, getThemes]);

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
                    });
                  }}
                />
              </Tooltip>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                  setEditandoSubtema(null);
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
                        setEditandoSubtema(item);
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
            });
            setEditandoSubtema(null);
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
                });
                setEditandoSubtema(null);
                setModalText("Cadastrar Subtema");
                setRegisterVisible(false);
              }}
            >
              Cancelar
            </Button>,
          ]}
        >
          <SubtemaRegister
            subtheme={editandoSubtema}
            actionVisible={() => {
              setRegisterVisible(false);
              setEditandoSubtema(null);
              getSubthemes({
                query: textSearch,
                showFiled: showFiled,
              });
            }}
          />
        </Modal>
      </div>
    </div>
  );
}
