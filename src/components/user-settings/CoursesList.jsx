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
} from "antd";
import CourseRegister from "./CourseRegister";

const { Content } = Layout;
const { Search } = Input;

export default function CoursesList() {
  const getCursos = useStoreActions((actions) => actions.courses.getCursos);
  const getItinerarios = useStoreActions(
    (actions) => actions.itineraries.getItinerarios
  );
  const getAcessibilidades = useStoreActions(
    (actions) => actions.accessibilities.getAcessibilidades
  );
  const getInstituicoes = useStoreActions(
    (actions) => actions.institutions.getInstituicoes
  );
  const getComp = useStoreActions((actions) => actions.competencies.getComp);
  const getSubthemes = useStoreActions(
    (actions) => actions.themes.getSubthemes
  );

  const [registerVisible, setRegisterVisible] = useState(false);

  const loading = useStoreState((state) => state.courses.loading);
  const cursos = useStoreState((state) => state.courses.cursos);

  const [editandoCurso, setEditandoCurso] = useState(null);
  const [modalText, setModalText] = useState("Cadastrar Curso");
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getCursos();
    getItinerarios();
    getAcessibilidades();
    getInstituicoes();
    getComp();
    getSubthemes();
  }, [
    getCursos,
    getItinerarios,
    getAcessibilidades,
    getInstituicoes,
    getComp,
    getSubthemes,
  ]);

  return (
    <>
      <Layout
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <Content style={{ width: "100%" }}>
          {registerVisible ? (
            <CourseRegister
              curso={editandoCurso}
              title={modalText}
              actionVisible={() => {
                setRegisterVisible(false);
                getCursos({
                  query: textSearch,
                  showFiled: showFiled,
                });
              }}
            />
          ) : (
            <Card
              title={"Cursos"}
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
                    onSearch={(e) => {
                      setTextSearch(e);
                      getCursos({
                        query: e,
                        showFiled: showFiled,
                      });
                    }}
                    style={{
                      marginRight: "30px",
                    }}
                    placeholder={"Buscar cursos"}
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
                        getCursos({
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
                      setEditandoCurso(null);
                      setModalText("Cadastrar Curso");
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
                dataSource={cursos}
                pagination={{
                  onChange: (page) => {
                    setPageNumber(page);
                  },
                  current: pageNumber,
                  hideOnSinglePage: true,
                }}
                style={{ width: "100%" }}
                renderItem={(item) => {
                  return (
                    <List.Item
                      actions={[
                        <Button
                          key={item.id}
                          onClick={() => {
                            setEditandoCurso(item);
                            setModalText("Editar Curso");
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
                          <>
                            {item.institutions
                              .map((item) => item.name)
                              .join(", ")}
                          </>
                        }
                      />
                    </List.Item>
                  );
                }}
              />
            </Card>
          )}
          {/* <Modal
            title={modalText}
            open={registerVisible}
            destroyOnClose={true}
            onCancel={() => {
              getCursos({
                query: textSearch,
                showFiled: showFiled,
              });
              setEditandoCurso(null);
              setModalText("Cadastrar Curso");
              setRegisterVisible(false);
            }}
            bodyStyle={{ backgroundColor: "#f8f8f8" }}
            footer={[
              <Button
                type="primary"
                key={"back"}
                onClick={() => {
                  getCursos({
                    query: textSearch,
                    showFiled: showFiled,
                  });
                  setEditandoCurso(null);
                  setModalText("Cadastrar Curso");
                  setRegisterVisible(false);
                }}
              >
                Cancelar
              </Button>,
            ]}
          >
            <CourseRegister
              curso={editandoCurso}
              actionVisible={() => {
                setRegisterVisible(false);
                getCursos({
                  query: textSearch,
                  showFiled: showFiled,
                });
              }}
            />
          </Modal> */}
        </Content>
      </Layout>
    </>
  );
}
