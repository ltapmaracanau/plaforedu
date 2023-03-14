import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  Layout,
  List,
  Modal,
  Input,
  Tooltip,
  Switch,
  Space,
  Tag,
} from "antd";
import FormativeTrailsRegister from "./FormativeTrailsRegister";

const { Content } = Layout;
const { Search } = Input;
export default function FormativeTrailsList() {
  const getTrilhas = useStoreActions((actions) => actions.trilhas.getTrilhas);
  const getCompetencies = useStoreActions(
    (actions) => actions.competencies.getComp
  );
  const getItinerarios = useStoreActions(
    (actions) => actions.itineraries.getItinerarios
  );
  const getInstitutions = useStoreActions(
    (actions) => actions.institutions.getInstituicoes
  );
  const getCursos = useStoreActions((actions) => actions.courses.getCursos);

  const [registerVisible, setRegisterVisible] = useState(false);

  const loadingTrilhas = useStoreState((state) => state.trilhas.loading);
  const loadingCursos = useStoreState((state) => state.courses.loading);
  const trilhas = useStoreState((state) => state.trilhas.trilhas);

  const [editandoTrilha, setEditandoTrilha] = useState(null);
  const [modalText, setModalText] = useState("Cadastrar Trilha");
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  useEffect(async () => {
    await getTrilhas();
    await getCompetencies({ showFiled: true });
    await getItinerarios();
    await getInstitutions({ showFiled: true });
  }, [getTrilhas]);

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
          {registerVisible ? (
            <FormativeTrailsRegister
              trilha={editandoTrilha}
              title={modalText}
              actionVisible={() => {
                setRegisterVisible(false);
                getTrilhas({
                  query: textSearch,
                  showFiled: showFiled,
                });
              }}
            />
          ) : (
            <Card
              title={"Trilhas Formativas"}
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
                      getTrilhas({
                        query: e,
                        showFiled: showFiled,
                      });
                    }}
                    style={{
                      marginRight: "30px",
                    }}
                    placeholder={"Buscar trilhas"}
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
                        getTrilhas({
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
                      setEditandoTrilha(null);
                      setModalText("Cadastrar Trilha");
                      setRegisterVisible(true);
                    }}
                  >
                    Adicionar
                  </Button>
                </div>
              }
            >
              <List
                loading={loadingTrilhas || loadingCursos}
                dataSource={trilhas}
                style={{ width: "100%" }}
                renderItem={(item) => {
                  return (
                    <List.Item
                      actions={[
                        <Button
                          key={item.id}
                          onClick={() => {
                            setEditandoTrilha(item);
                            setModalText("Editar Trilha");
                            setRegisterVisible(true);
                          }}
                          icon={<EditOutlined />}
                        >
                          Editar
                        </Button>,
                      ]}
                      key={item.id}
                    >
                      <List.Item.Meta
                        style={{ fontFamily: "Roboto" }}
                        title={item.name}
                        description={
                          <Space direction="vertical">
                            {item.description}
                            <Space direction="horizontal">
                              {item.competencies.map((competencia) => (
                                <Tag key={competencia.id} color={"#108ee9"}>
                                  {competencia.name}
                                </Tag>
                              ))}
                            </Space>
                          </Space>
                        }
                      />
                    </List.Item>
                  );
                }}
              />
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
