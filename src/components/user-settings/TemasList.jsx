import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";

import { Button, Card, List, Modal, Input, Tooltip, Switch, Tag } from "antd";
import TemasRegister from "./TemasRegister";

const { Search } = Input;

export default function TemasList() {
  const getThemes = useStoreActions((actions) => actions.themes.getThemes);

  const [registerVisible, setRegisterVisible] = useState(false);
  const [modalText, setModalText] = useState("Cadastrar Tema");
  const [editandoTema, setEditandoTema] = useState(null);
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const loadingThemes = useStoreState((state) => state.themes.loadingThemes);
  const themes = useStoreState((state) => state.themes.themes);

  useEffect(() => {
    getThemes();
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
            loading={loadingThemes}
            dataSource={themes}
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
              });
              setEditandoTema(null);
            }}
          />
        </Modal>
      </div>
    </div>
  );
}
