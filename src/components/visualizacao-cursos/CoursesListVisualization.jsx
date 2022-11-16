import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import {
  List,
  Card,
  Col,
  Button,
  Modal,
  Row,
  Descriptions,
  Typography,
  Collapse,
} from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const { Panel } = Collapse;

export default function CoursesListVisualization() {
  const filterCollapsed = useStoreState((state) => state.adm.filterCollapsed);
  const setFilterCollapsed = useStoreActions(
    (actions) => actions.adm.setFilterCollapsed
  );
  const listData = useStoreState((state) => state.courses.cursos);
  const cursosFiltrados = useStoreState(
    (state) => state.courses.cursosFiltrados.novosCursos
  );
  const competenciasFiltradas = useStoreState(
    (state) => state.courses.cursosFiltrados.novasTrilhas
  );
  const listInst = useStoreState((state) => state.courses.instituicoes);
  const listCategoriasCompetencia = useStoreState(
    (state) => state.courses.categoriasDeCompetencias
  );
  const listCompetencias = useStoreState((state) => state.courses.competencias);
  const filter = useStoreState((state) => state.courses.filter);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);

  const [courseOnModal, setCourseOnModal] = useState(listData[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const getInstituicao = (id_instituicao) => {
    const instituicao = listInst.find(({ id }) => id === id_instituicao);

    if (instituicao) {
      return instituicao.titulo;
    }

    return "Instituição não encontrada";
  };

  const getCategoriasCompetencia = (ids_competencias) => {
    const nomes_categorias = ids_competencias
      .map((id_competencia) =>
        listCategoriasCompetencia.find((categoria) =>
          categoria.competencias.includes(id_competencia)
        )
      )
      .map((categoria) => categoria.nome);
    const nomes_categorias_sem_repeticao = [...new Set(nomes_categorias)];
    return nomes_categorias_sem_repeticao.join(" | ");
  };

  const getCompetencias = (ids_competencias) => {
    const nomes_competencias = listCompetencias
      .filter(({ id }) => ids_competencias.includes(id))
      .map((competencia) => competencia.titulo);

    return nomes_competencias.join(" | ");
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  return (
    <Col flex={1}>
      <Row
        style={{
          backgroundColor: "#EBEBEB",
        }}
      >
        <Col>
          <Button
            style={{ margin: "5px 10px" }}
            onClick={() => {
              setFilterCollapsed();
            }}
            icon={
              filterCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }
          />
        </Col>
      </Row>
      <Row>
        <Col flex={"auto"}>
          <Card bordered={false} style={{ background: "#eee" }}>
            {filter.tipoClassificacao ? ( // False: por competências   True: por trilhas
              <>
                <Card
                  style={{
                    padding: "30px",
                  }}
                >
                  <Row
                    align="middle"
                    style={{
                      display: "flex",
                      justifyContent: "left",
                    }}
                    gutter={[20, 10]}
                  >
                    <Col>
                      {filter.itinerario === 0 ? (
                        <Title
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "24px",
                            color: "#2C55A1",
                            textAlign: "center",
                          }}
                        >
                          Trilhas Formativas
                        </Title>
                      ) : (
                        <Title
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "24px",
                            color: "#2C55A1",
                            textAlign: "center",
                          }}
                        >
                          Trilhas Formativas -{" "}
                          {itinerarios[filter.itinerario].dados_gerais.titulo}
                        </Title>
                      )}
                    </Col>
                  </Row>
                </Card>
                <Collapse>
                  {competenciasFiltradas.map((competencia) => (
                    <Panel
                      key={"competencia" + competencia.id}
                      header={competencia.titulo}
                    >
                      <List
                        itemLayout="vertical"
                        dataSource={competencia.cursos[filter.itinerario]}
                        renderItem={(idCurso) => {
                          const curso = listData.find(
                            (curso) => curso.id === idCurso
                          );
                          return (
                            <List.Item
                              key={`competencia${competencia.id}curso${idCurso}`}
                              style={{ backgroundColor: "#fff" }}
                            >
                              <Card
                                hoverable
                                bordered={false}
                                onClick={() => {
                                  setCourseOnModal(curso);
                                  setModalVisible(true);
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Title
                                    level={4}
                                    style={{
                                      color: "#2C55A1",
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {curso.title}
                                  </Title>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "left",
                                    }}
                                  >
                                    <Text style={{ fontFamily: "Roboto" }}>
                                      Ordem:{" "}
                                      <Text strong>
                                        {competencia.cursos[
                                          filter.itinerario
                                        ].indexOf(idCurso) + 1}
                                      </Text>
                                    </Text>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <Text style={{ fontFamily: "Roboto" }}>
                                      Instituição:{" "}
                                      <Text strong>
                                        {getInstituicao(curso.instCert)}
                                      </Text>
                                    </Text>

                                    <Text style={{ fontFamily: "Roboto" }}>
                                      Carga horária:
                                      <Text
                                        strong
                                      >{` ${curso.cargaHoraria}H`}</Text>
                                    </Text>
                                  </div>

                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <Text style={{ fontFamily: "Roboto" }}>
                                      Categorias de competência:{" "}
                                      <Text strong>
                                        {getCategoriasCompetencia(
                                          curso.filter.competencias
                                        )}
                                      </Text>
                                    </Text>

                                    <Text style={{ fontFamily: "Roboto" }}>
                                      Competências:{" "}
                                      <Text strong>
                                        {getCompetencias(
                                          curso.filter.competencias
                                        )}
                                      </Text>
                                    </Text>
                                  </div>
                                </div>
                              </Card>
                            </List.Item>
                          );
                        }}
                      />
                    </Panel>
                  ))}
                </Collapse>
              </>
            ) : (
              <List
                itemLayout="vertical"
                dataSource={listData.filter((curso) =>
                  cursosFiltrados.includes(curso.id)
                )}
                renderItem={(item) => (
                  <List.Item key={item.id} style={{ backgroundColor: "#fff" }}>
                    <Card
                      hoverable
                      bordered={false}
                      onClick={() => {
                        setCourseOnModal(item);
                        setModalVisible(true);
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Title
                          level={4}
                          style={{ color: "#2C55A1", fontFamily: "Poppins" }}
                        >
                          {item.title}
                        </Title>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text style={{ fontFamily: "Roboto" }}>
                            Instituição:{" "}
                            <Text strong>{getInstituicao(item.instCert)}</Text>
                          </Text>

                          <Text style={{ fontFamily: "Roboto" }}>
                            Carga horária:
                            <Text strong>{` ${item.cargaHoraria}H`}</Text>
                          </Text>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Text style={{ fontFamily: "Roboto" }}>
                            Categorias de competência:{" "}
                            <Text strong>
                              {getCategoriasCompetencia(
                                item.filter.competencias
                              )}
                            </Text>
                          </Text>

                          <Text style={{ fontFamily: "Roboto" }}>
                            Competências:{" "}
                            <Text strong>
                              {getCompetencias(item.filter.competencias)}
                            </Text>
                          </Text>
                        </div>
                      </div>
                    </Card>
                  </List.Item>
                )}
              />
            )}
          </Card>
          <Modal
            open={modalVisible}
            onOk={handleOk}
            onCancel={handleOk}
            title={courseOnModal.title}
            centered={true}
            footer={[
              <Button type="primary" key={courseOnModal.id} onClick={handleOk}>
                Ok
              </Button>,
            ]}
          >
            <Descriptions column={1} bordered>
              <Descriptions.Item label="Descrição">
                {courseOnModal.descricao}
              </Descriptions.Item>
              <Descriptions.Item label="Carga Horária">
                {courseOnModal.cargaHoraria}
              </Descriptions.Item>
              <Descriptions.Item label="Instituição Certificadora">
                {getInstituicao(courseOnModal.instCert)}
              </Descriptions.Item>
              {/* <Descriptions.Item label='Possui Acessibilidade'>
                                {courseOnModal.possuiAcessibilidade}
                            </Descriptions.Item> */}
              <Descriptions.Item label="Link">
                <a target="_blank" rel="noreferrer" href={courseOnModal.link}>
                  {courseOnModal.link}
                </a>
              </Descriptions.Item>
              {/* <Descriptions.Item label='Obsevações'>
                                {courseOnModal.obs}
                            </Descriptions.Item> */}
            </Descriptions>
          </Modal>
        </Col>
      </Row>
    </Col>
  );
}
