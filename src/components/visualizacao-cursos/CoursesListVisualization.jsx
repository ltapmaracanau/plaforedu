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
  const setFilterCollapsed = useStoreActions(
    (actions) => actions.adm.setFilterCollapsed
  );

  const filterCollapsed = useStoreState((state) => state.adm.filterCollapsed);
  const cursos = useStoreState((state) => state.courses.cursos);
  const trilhas = useStoreState((state) => state.trilhas.trilhasSecondary);

  const filter = useStoreState((state) => state.courses.filter);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);

  const [courseOnModal, setCourseOnModal] = useState(cursos[0]);
  const [modalVisible, setModalVisible] = useState(false);

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
                  {trilhas.map((trilha) => (
                    <Panel key={"trilha" + trilha.id} header={trilha.titulo}>
                      <List
                        itemLayout="vertical"
                        dataSource={trilha.cursos[filter.itinerario]}
                        renderItem={(idCurso) => {
                          const curso = cursos.find(
                            (curso) => curso.id === idCurso
                          );
                          return (
                            <List.Item
                              key={`trilha${trilha.id}curso${idCurso}`}
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
                                        {trilha.cursos[
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
                                        {curso.instituicoes.map(
                                          (instituicao) => (
                                            <span key={instituicao.id}>
                                              {instituicao.nome}
                                            </span>
                                          )
                                        )}
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
                                        {curso.categorias.map((categoria) => (
                                          <span key={categoria.id}>
                                            {categoria.nome}
                                          </span>
                                        ))}
                                      </Text>
                                    </Text>

                                    <Text style={{ fontFamily: "Roboto" }}>
                                      Competências:{" "}
                                      <Text strong>
                                        {curso.competencias.map(
                                          (competencia) => (
                                            <span key={competencia.id}>
                                              {competencia.nome}
                                            </span>
                                          )
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
                dataSource={cursos.filter((curso) =>
                  cursosFiltrados.includes(curso.id)
                )}
                renderItem={(curso) => (
                  <List.Item key={curso.id} style={{ backgroundColor: "#fff" }}>
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
                          style={{ color: "#2C55A1", fontFamily: "Poppins" }}
                        >
                          {curso.title}
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
                            <Text strong>
                              {curso.instituicoes.map((instituicao) => (
                                <span key={instituicao.id}>
                                  {instituicao.nome}
                                </span>
                              ))}
                            </Text>
                          </Text>

                          <Text style={{ fontFamily: "Roboto" }}>
                            Carga horária:
                            <Text strong>{` ${curso.cargaHoraria}H`}</Text>
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
                              {curso.categorias.map((categoria) => (
                                <span key={categoria.id}>{categoria.nome}</span>
                              ))}
                            </Text>
                          </Text>

                          <Text style={{ fontFamily: "Roboto" }}>
                            Competências:{" "}
                            <Text strong>
                              {curso.competencias.map((competencia) => (
                                <span key={competencia.id}>
                                  {competencia.nome}
                                </span>
                              ))}
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
            title={courseOnModal?.title}
            centered={true}
            footer={[
              <Button type="primary" key={courseOnModal?.id} onClick={handleOk}>
                Ok
              </Button>,
            ]}
          >
            <Descriptions column={1} bordered>
              <Descriptions.Item label="Descrição">
                {courseOnModal?.descricao}
              </Descriptions.Item>
              <Descriptions.Item label="Carga Horária">
                {courseOnModal?.cargaHoraria}
              </Descriptions.Item>
              <Descriptions.Item label="Instituição Certificadora">
                {courseOnModal?.instCert.instituicoes.map((instituicao) => (
                  <span key={instituicao.id}>{instituicao.nome}</span>
                ))}
              </Descriptions.Item>
              <Descriptions.Item label="Link">
                <a target="_blank" rel="noreferrer" href={courseOnModal?.link}>
                  {courseOnModal?.link}
                </a>
              </Descriptions.Item>
            </Descriptions>
          </Modal>
        </Col>
      </Row>
    </Col>
  );
}
