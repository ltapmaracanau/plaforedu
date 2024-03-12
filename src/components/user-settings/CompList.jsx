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
  Space,
  Tooltip,
  Switch,
} from "antd";
import CompRegister from "./CompRegister";

const { Search } = Input;

export default function CompList() {
  const getComp = useStoreActions((actions) => actions.competencies.getComp);

  const [registerVisible, setRegisterVisible] = useState(false);
  const [modalText, setModalText] = useState("Cadastrar Competência");
  const [editandoComp, setEditandoComp] = useState(null);
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const loadingCompetencies = useStoreState(
    (state) => state.competencies.loadingCompetencies
  );
  const competencias = useStoreState(
    (state) => state.competencies.competencias
  );

  useEffect(() => {
    getComp();
  }, [getComp]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <div style={{ width: "100%" }}>
          <Card
            title={"Competências"}
            headStyle={{
              fontSize: 20,
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
                    getComp({
                      query: e,
                      showFiled: showFiled,
                    });
                  }}
                  style={{
                    marginRight: "10px",
                  }}
                  placeholder={"Buscar competências"}
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
                      getComp({
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
                    setEditandoComp(null);
                    setModalText("Cadastrar Competência");
                    setRegisterVisible(true);
                  }}
                >
                  Adicionar
                </Button>
              </div>
            }
          >
            <List
              loading={loadingCompetencies}
              dataSource={competencias}
              style={{ width: "100%" }}
              renderItem={(item) => {
                return (
                  <List.Item
                    key={item.id}
                    actions={[
                      <Button
                        key={item.id}
                        onClick={() => {
                          setEditandoComp(item);
                          setModalText("Editar Competência");
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
                          {item.description}
                          <span>
                            {item.categoriesCompetencies.map((categoria) => (
                              <Tag color="blue" key={categoria.id}>
                                {categoria.name}
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
              getComp({
                query: textSearch,
                showFiled: showFiled,
              });
              setEditandoComp(null);
              setModalText("Cadastrar Competência");
              setRegisterVisible(false);
            }}
            styles={{ body: { backgroundColor: "#f8f8f8" } }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getComp({
                    query: textSearch,
                    showFiled: showFiled,
                  });
                  setEditandoComp(null);
                  setModalText("Cadastrar Competência");
                  setRegisterVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <CompRegister
              comp={editandoComp}
              actionVisible={() => {
                setRegisterVisible(false);
                getComp({
                  query: textSearch,
                  showFiled: showFiled,
                });
              }}
            />
          </Modal>
        </div>
      </div>
    </>
  );
}
