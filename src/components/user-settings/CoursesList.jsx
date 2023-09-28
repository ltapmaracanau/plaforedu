import React, { useEffect, useMemo, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import {
  EditOutlined,
  PlusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

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
} from "antd";
import CourseRegister from "./CourseRegister";
import { CSVLink } from "react-csv";

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
  const getTaxonomias = useStoreActions(
    (actions) => actions.courses.getTaxonomias
  );
  const getSubthemes = useStoreActions(
    (actions) => actions.themes.getSubthemes
  );

  const [registerVisible, setRegisterVisible] = useState(false);

  const loading = useStoreState((state) => state.courses.loading);
  const cursos = useStoreState((state) => state.courses.cursos);
  const count = useStoreState((state) => state.courses.count);

  const [editandoCurso, setEditandoCurso] = useState(null);
  const [modalText, setModalText] = useState("Cadastrar Curso");
  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(async () => {
    await getCursos({ page: pageNumber });
    await getItinerarios();
    await getAcessibilidades();
    await getInstituicoes({ showFiled: true });
    await getComp({ showFiled: true });
    await getSubthemes({ showFiled: true });
    await getTaxonomias();
  }, [
    getCursos,
    getItinerarios,
    getAcessibilidades,
    getInstituicoes,
    getComp,
    getSubthemes,
  ]);

  const csvCursosHeaders = [
    { label: "Título", key: "title" },
    { label: "Carga horária", key: "cargaHoraria" },
    { label: "Instituições Certificadoras", key: "instCert" },
    { label: "Acessibilidades", key: "acessibilidades" },
    { label: "Link", key: "link" },
    { label: "Itinerários", key: "itineraries" },
    { label: "Competências", key: "competencias" },
    { label: "Subtemas", key: "subtemas" },
    { label: "Taxonomia revisada de Bloom", key: "taxonomias" },
    { label: "Cursos equivalentes", key: "equivalents" },
    { label: "Descrição", key: "descricao" },
  ];

  const data = useMemo(() => {
    return cursos.map((course) => {
      return {
        title: course.name,
        cargaHoraria: `${course.hours}H`,
        instCert: course.institutions.map((inst) => inst.name).join(" | "),
        acessibilidades: course.accessibilities
          .map((ac) => ac.name)
          .join(" | "),
        link: course.institutions.map((inst) => inst.link).join(" | "),
        itineraries: course.itineraries.map((it) => it.name).join(" | "),
        competencias: course.competencies.map((comp) => comp.name).join(" | "),
        subtemas: course.subThemes.map((sub) => sub.name).join(" | "),
        taxonomias: course.taxonomies.map((tx) => tx.name).join(" | "),
        equivalents: course.equivalents.map((eq) => eq.name).join(" | "),
        descricao: course.description,
      };
    });
  }, [cursos]);

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
            <CourseRegister
              curso={editandoCurso}
              title={modalText}
              actionVisible={() => {
                setRegisterVisible(false);
                getCursos({
                  query: textSearch,
                  showFiled: showFiled,
                  page: pageNumber,
                });
              }}
            />
          ) : (
            <Card
              title={"Cursos"}
              headStyle={{
                fontSize: 20,
              }}
              extra={
                <Space
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Search
                    allowClear
                    defaultValue={textSearch}
                    onSearch={(e) => {
                      setTextSearch(e);
                      getCursos({
                        query: e,
                        showFiled: showFiled,
                      });
                      setPageNumber(1);
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
                      onClick={(checked) => {
                        setShowFiled(checked);
                        setPageNumber(1);
                        getCursos({
                          query: textSearch,
                          showFiled: checked,
                          page: 1,
                        });
                      }}
                    />
                  </Tooltip>
                  {/* <CSVLink
                    filename="plaforedu"
                    headers={csvCursosHeaders}
                    data={data}
                    target="_blank"
                  >
                    <Tooltip title={"Exportar para CSV"}>
                      <Button
                        type="text"
                        shape="circle"
                        icon={<DownloadOutlined />}
                      />
                    </Tooltip>
                  </CSVLink> */}
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
                </Space>
              }
            >
              <List
                loading={loading}
                dataSource={cursos}
                pagination={{
                  onChange: (page) => {
                    setPageNumber(page);
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
                          <Space direction="vertical">
                            <>
                              {item.institutions
                                .map((item) => item.name)
                                .join(", ")}
                            </>
                            {item.equivalents.length > 0 && (
                              <>
                                <b>{item.equivalents.length} Equivalência(s)</b>
                              </>
                            )}
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
