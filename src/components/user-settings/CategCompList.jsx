import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { PlusOutlined, EditOutlined } from "@ant-design/icons";

import { Button, Card, List, Modal, Input, Tooltip, Switch, Tag } from "antd";
import CatCompRegister from "./CatCompRegister";

const { Search } = Input;

export default function CategCompList() {
  const getCatComp = useStoreActions(
    (actions) => actions.competencies.getCatComp
  );

  const [registerVisible, setRegisterVisible] = useState(false);
  const [modalText, setModalText] = useState("Cadastrar Categoria");
  const [editandoCatComp, setEditandoCatComp] = useState(null);
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const loadingCategCompetencies = useStoreState(
    (state) => state.competencies.loadingCategCompetencies
  );
  const catComp = useStoreState((state) => state.competencies.catComp);

  useEffect(() => {
    getCatComp();
  }, [getCatComp]);

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
          styles={{
            header: {
              fontSize: 20,
            },
          }}
          title={"Categorias de competências"}
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
                  getCatComp({
                    query: e,
                    showFiled: showFiled,
                  });
                }}
                style={{
                  marginRight: "10px",
                }}
                placeholder={"Buscar categorias"}
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
                    getCatComp({
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
                  setEditandoCatComp(null);
                  setModalText("Cadastrar Categoria");
                  setRegisterVisible(true);
                }}
              >
                Adicionar
              </Button>
            </div>
          }
        >
          <List
            loading={loadingCategCompetencies}
            dataSource={catComp}
            style={{ width: "100%" }}
            renderItem={(item) => {
              return (
                <List.Item
                  key={item.id}
                  actions={[
                    <Button
                      key={item.id}
                      onClick={() => {
                        setEditandoCatComp(item);
                        setModalText("Editar Categoria");
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
                      <span>
                        {item.filedAt && (
                          <Tag
                            style={{
                              margin: "3px",
                            }}
                            color={"orange"}
                          >
                            ARQUIVADO
                          </Tag>
                        )}
                        {item.description}
                      </span>
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
            getCatComp({
              query: textSearch,
              showFiled: showFiled,
            });
            setEditandoCatComp(null);
            setModalText("Cadastrar Categoria");
            setRegisterVisible(false);
          }}
          footer={[
            <Button
              type="primary"
              key={"back"}
              onClick={() => {
                getCatComp({
                  query: textSearch,
                  showFiled: showFiled,
                });
                setEditandoCatComp(null);
                setRegisterVisible(false);
              }}
            >
              Cancelar
            </Button>,
          ]}
        >
          <CatCompRegister
            catComp={editandoCatComp}
            actionVisible={() => {
              setRegisterVisible(false);
              getCatComp({
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
