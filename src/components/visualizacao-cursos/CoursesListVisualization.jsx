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
  Empty,
  Space,
  Skeleton,
} from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const { Panel } = Collapse;

export default function CoursesListVisualization() {
  const setFilterCollapsed = useStoreActions(
    (actions) => actions.adm.setFilterCollapsed
  );
  const getUniqueCourse = useStoreActions(
    (actions) => actions.courses.getUniqueCourse
  );

  const filterCollapsed = useStoreState((state) => state.adm.filterCollapsed);
  const cursos = useStoreState((state) => state.courses.cursos);
  const trilhas = useStoreState((state) => state.trilhas.trilhas);

  const listCompetencias = useStoreState(
    (state) => state.competencies.competencias
  );
  const filter = useStoreState((state) => state.courses.filter);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);

  const uniqueCourse = useStoreState((state) => state.courses.uniqueCourse);
  const loadingUniqueCourse = useStoreState(
    (state) => state.courses.loadingUniqueCourse
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handleOk = () => {
    setModalVisible(false);
  };

  const getCategoriasCompetencia = (competencies) => {
    let nomesCategorias = [];
    competencies.forEach((element) => {
      const competencieData = listCompetencias.find(
        (comp) => comp.id === element.id
      );
      competencieData.categoriesCompetencies.forEach((categoria) => {
        nomesCategorias.push(categoria.name);
      });
    });
    const nomes_categorias_sem_repeticao = [...new Set(nomesCategorias)];
    return nomes_categorias_sem_repeticao.join(" | ");
  };

  const getNomeItinerario = (id_itinerario) => {
    const nome_itinerario = itinerarios.find(
      (itinerario) => itinerario.id === id_itinerario
    )?.name;

    return nome_itinerario;
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
            {filter.tipoClassificacao ? ( // False: por cursos   True: por trilhas
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
                      {filter.itinerario ? (
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
                          {getNomeItinerario(filter.itinerario)}
                        </Title>
                      )}
                    </Col>
                  </Row>
                  {trilhas.length !== 0 ? (
                    <Collapse
                      style={{
                        justifyContent: "center",
                      }}
                    >
                      {trilhas.map((trilha) => (
                        <Panel key={"trilha" + trilha.id} header={trilha.name}>
                          <List
                            itemLayout="vertical"
                            dataSource={trilha.courses}
                            renderItem={(curso) => {
                              return (
                                <List.Item
                                  key={`trilha${trilha.id}curso${curso.id}`}
                                  style={{ backgroundColor: "#fff" }}
                                >
                                  <Card
                                    hoverable
                                    bordered={false}
                                    onClick={() => {
                                      getUniqueCourse({ id: curso.id });
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
                                        {curso.name}
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
                                          <Text strong>{curso.sequence}</Text>
                                        </Text>
                                      </div>
                                      {/* <div
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
                                      </div> */}

                                      {/* <div
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
                                      </div> */}
                                    </div>
                                  </Card>
                                </List.Item>
                              );
                            }}
                          />
                        </Panel>
                      ))}
                    </Collapse>
                  ) : (
                    <Empty
                      style={{
                        margin: "20px 0px",
                      }}
                      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                      imageStyle={{
                        height: 80,
                      }}
                      description={<span>Não encontrado</span>}
                    />
                  )}
                </Card>
              </>
            ) : (
              <List
                itemLayout="vertical"
                locale={{
                  emptyText: (
                    <Card>
                      <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{
                          height: 80,
                        }}
                        description={<span>Não encontrado</span>}
                      />
                    </Card>
                  ),
                }}
                dataSource={cursos}
                renderItem={(curso) => (
                  <List.Item key={curso.id} style={{ backgroundColor: "#fff" }}>
                    <Card
                      hoverable
                      bordered={false}
                      onClick={() => {
                        getUniqueCourse({ id: curso.id });
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
                          {curso.name}
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
                              {curso.institutions
                                .map((inst) => inst.name)
                                .join(" | ")}
                            </Text>
                          </Text>

                          <Text style={{ fontFamily: "Roboto" }}>
                            Carga horária:
                            <Text strong>{` ${curso.hours}H`}</Text>
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
                              {getCategoriasCompetencia(curso.competencies)}
                            </Text>
                          </Text>

                          <Text style={{ fontFamily: "Roboto" }}>
                            Competências:{" "}
                            <Text strong>
                              {curso.competencies
                                .map((comp) => comp.name)
                                .join(" | ")}
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
            key={`modalCurso`}
            onCancel={handleOk}
            title={uniqueCourse?.name}
            centered={true}
            footer={[
              <Button type="primary" key={"buttonOk"} onClick={handleOk}>
                Ok
              </Button>,
            ]}
          >
            {loadingUniqueCourse ? (
              <Skeleton active />
            ) : (
              <Descriptions column={1} bordered>
                <Descriptions.Item label="Descrição">
                  {uniqueCourse?.description}
                </Descriptions.Item>
                <Descriptions.Item label="Carga Horária">
                  {uniqueCourse?.hours}
                </Descriptions.Item>
                <Descriptions.Item label="Instituições Certificadoras">
                  {uniqueCourse?.institutions?.map((inst) => (
                    <Card key={inst.institutionId} bordered>
                      {inst.name}
                      <br />
                      <strong>Link: </strong>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        key={`link${inst.id}`}
                        href={inst.link}
                      >
                        {inst.link}
                      </a>
                    </Card>
                  ))}
                </Descriptions.Item>
                <Descriptions.Item label="Acessibilidades">
                  {uniqueCourse?.accessibilities
                    ?.map((ac) => ac.name)
                    .join(" | ")}
                </Descriptions.Item>
                <Descriptions.Item label="Taxonomia revisada de Bloom">
                  {uniqueCourse?.taxonomies?.map((tx) => tx.name).join(" | ")}
                </Descriptions.Item>
                <Descriptions.Item label="Subtemas">
                  {uniqueCourse?.subThemes?.map((sub) => sub.name).join(" | ")}
                </Descriptions.Item>
              </Descriptions>
            )}
          </Modal>
        </Col>
      </Row>
    </Col>
  );
}
