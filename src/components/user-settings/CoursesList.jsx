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
  const setPage = useStoreActions((actions) => actions.courses.setPage);

  const [registerVisible, setRegisterVisible] = useState(false);

  const loading = useStoreState((state) => state.courses.loading);
  const cursos = useStoreState((state) => state.courses.cursos);
  const pageNumber = useStoreState((state) => state.courses.page);
  const count = useStoreState((state) => state.courses.count);

  const [editandoCurso, setEditandoCurso] = useState(null);
  const [modalText, setModalText] = useState("Cadastrar Curso");
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");

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
                setPage(1);
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
                      setPage(1);
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
                        setPage(1);
                        getCursos({
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
                      setEditandoCurso(null);
                      setModalText("Cadastrar Curso");
                      setRegisterVisible(true);
                      setPage(1);
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
                    setPage(page);
                    getCursos({
                      page: page,
                      query: textSearch,
                      showFiled: showFiled,
                    });
                  },
                  pageSize: 20,
                  total: count,
                  showSizeChanger: false,
                  current: pageNumber,
                  defaultCurrent: 1,
                  hideOnSinglePage: false,
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
        </Content>
      </Layout>
    </>
  );
}
