import React, { useEffect, useState } from "react";
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
  Spin,
} from "antd";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { dataService } from "../../services/dataService";

const { Text, Title } = Typography;

const { Panel } = Collapse;

export default function CoursesListVisualization() {
  const setFilterCollapsed = useStoreActions(
    (actions) => actions.adm.setFilterCollapsed
  );
  const getUniqueCourse = useStoreActions(
    (actions) => actions.courses.getUniqueCourse
  );
  const getCursos = useStoreActions((actions) => actions.courses.getCursos);

  const filterCollapsed = useStoreState((state) => state.adm.filterCollapsed);
  const cursos = useStoreState((state) => state.courses.cursos);
  const count = useStoreState((state) => state.courses.count);
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
  const loading = useStoreState((state) => state.courses.loading);
  const loadingTrilhas = useStoreState((state) => state.trilhas.loading);
  const [modalVisible, setModalVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const handleOk = () => {
    setModalVisible(false);
  };

  const getCategoriasCompetencia = (competencies) => {
    let nomesCategorias = [];
    competencies.forEach((element) => {
      const competencieData = listCompetencias.find(
        (comp) => comp.id === element.id
      );
      competencieData?.categoriesCompetencies?.forEach((categoria) => {
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
          <Card bordered={false} style={{ background: "#fff" }}>
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
                          Trilhas Formativas -{" "}
                          {getNomeItinerario(filter.itinerario)}
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
                          Trilhas Formativas
                        </Title>
                      )}
                    </Col>
                  </Row>
                  {loadingTrilhas ? (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                      }}
                    >
                      <Spin />
                    </div>
                  ) : (
                    <>
                      {trilhas.length !== 0 ? (
                        <Collapse
                          style={{
                            justifyContent: "center",
                          }}
                        >
                          {trilhas.map((trilha) => {
                            // Aqui eu verifico se devo ou não mostrar a trilha de acordo com as competências arquivadas
                            if (
                              !trilha.competencies.some((competencie) => {
                                const competenceData = listCompetencias.find(
                                  (comp) => comp.id === competencie.id
                                );
                                if (competenceData) {
                                  return !competenceData?.filedAt;
                                } else {
                                  return false;
                                }
                              }) &&
                              trilha.competencies.length !== 0
                            ) {
                              return;
                            }
                            // Se a trilha estiver com a lista de cursos vazia
                            if (trilha.courses.length === 0) {
                              return;
                            }
                            // Se todos os cursos estiverem arquivados eu não exibo a trilha
                            if (
                              !trilha.courses.some((curso) => {
                                return !curso?.filedAt;
                              }) &&
                              trilha.courses.length !== 0
                            ) {
                              return;
                            }

                            return (
                              <Panel
                                key={"trilha" + trilha.id}
                                header={trilha.name}
                              >
                                <List
                                  itemLayout="vertical"
                                  dataSource={trilha.courses}
                                  renderItem={(curso) => {
                                    // Se o curso estiver arquivado eu não exibo
                                    if (curso.filedAt) {
                                      return;
                                    }
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
                                              level={5}
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
                                                justifyContent: "space-between",
                                              }}
                                            >
                                              <Text
                                                style={{ fontFamily: "Roboto" }}
                                              >
                                                Instituição:{" "}
                                                <Text strong>
                                                  {curso.institutions
                                                    .map((inst) => inst.name)
                                                    .join(" | ")}
                                                </Text>
                                              </Text>

                                              <Text
                                                style={{ fontFamily: "Roboto" }}
                                              >
                                                Carga horária:
                                                <Text
                                                  strong
                                                >{` ${curso.hours}H`}</Text>
                                              </Text>
                                            </div>

                                            <div
                                              style={{
                                                display: "flex",
                                                flexDirection: "column",
                                              }}
                                            >
                                              {curso.equivalents.length > 0 && (
                                                <Text
                                                  style={{
                                                    fontFamily: "Roboto",
                                                  }}
                                                >
                                                  Cursos equivalentes:{" "}
                                                  <Text strong>
                                                    {curso.equivalents.length}
                                                  </Text>
                                                </Text>
                                              )}
                                              <Text
                                                style={{ fontFamily: "Roboto" }}
                                              >
                                                Categorias de competência:{" "}
                                                <Text strong>
                                                  {getCategoriasCompetencia(
                                                    curso.competencies
                                                  )}
                                                </Text>
                                              </Text>

                                              <Text
                                                style={{ fontFamily: "Roboto" }}
                                              >
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
                                    );
                                  }}
                                />
                              </Panel>
                            );
                          })}
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
                    </>
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
                /* pagination={{
                  onChange: (page) => {
                    setPageNumber(page);
                    getCursos({
                      ...filter,
                      page: page,
                    });
                  },
                  pageSize: 20,
                  total: count,
                  showSizeChanger: false,
                  current: pageNumber,
                  defaultCurrent: 1,
                  hideOnSinglePage: false,
                }} */
                dataSource={cursos}
                loading={loading}
                renderItem={(curso) => {
                  // Aqui verifico se devo ou não mostrar o curso de acordo com os dados arquivados
                  if (
                    !curso.competencies.some(
                      (competencie) => !competencie?.filedAt
                    ) &&
                    curso.competencies.length !== 0
                  ) {
                    return;
                  }
                  if (
                    !curso.institutions.some(
                      (institution) => !institution?.filedAt
                    ) &&
                    curso.institutions.length !== 0
                  ) {
                    return;
                  }
                  if (
                    !curso.competencies.some((competencie) => {
                      let compData = listCompetencias.find(
                        (comp) => comp.id === competencie.id
                      );
                      if (compData) {
                        return compData.categoriesCompetencies.some(
                          (categorie) => !categorie.filedAt
                        );
                      } else {
                        return false;
                      }
                    }) &&
                    curso.competencies.length !== 0
                  ) {
                    return;
                  }

                  return (
                    <List.Item
                      key={curso.id}
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
                            {curso.equivalents.length > 0 && (
                              <Text
                                style={{
                                  fontFamily: "Roboto",
                                }}
                              >
                                Cursos equivalentes:{" "}
                                <Text strong>{curso.equivalents.length}</Text>
                              </Text>
                            )}
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
                  );
                }}
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
              <Descriptions column={1} bordered layout="vertical">
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
                <Descriptions.Item label="Cursos equivalentes">
                  <List
                    locale={{
                      emptyText: <>Sem equivalentes</>,
                    }}
                    bordered
                    dataSource={uniqueCourse?.equivalents?.filter(
                      (course) => !course.filedAt
                    )}
                    renderItem={(item) => (
                      <List.Item
                        actions={[
                          <Button
                            key={item.id}
                            onClick={() => {
                              getUniqueCourse({ id: item.id });
                            }}
                          >
                            Visualizar
                          </Button>,
                        ]}
                        key={item.id}
                      >
                        {item.name}
                      </List.Item>
                    )}
                  />
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
                  {uniqueCourse?.subThemes
                    ?.filter((sub) => !sub.filedAt)
                    .map((sub) => sub.name)
                    .join(" | ")}
                </Descriptions.Item>
              </Descriptions>
            )}
          </Modal>
        </Col>
      </Row>
    </Col>
  );
}
