import { useCallback, useMemo, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import CourseModalVisualization from "../CourseModalVisualization";

import {
  List,
  Card,
  Col,
  Button,
  Row,
  Typography,
  Collapse,
  Empty,
  Spin,
  Tooltip,
  Space,
  Pagination,
} from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { CSVLink } from "react-csv";

const { Text, Title } = Typography;

export default function CoursesListVisualization() {
  const setFilterCollapsed = useStoreActions(
    (actions) => actions.adm.setFilterCollapsed
  );
  const setFilter = useStoreActions((actions) => actions.courses.setFilter);

  const filterCollapsed = useStoreState((state) => state.adm.filterCollapsed);
  const cursos = useStoreState((state) => state.courses.cursos);
  const trilhas = useStoreState((state) => state.trilhas.trilhas);
  const countCourses = useStoreState((state) => state.courses.count);
  const countTrails = useStoreState((state) => state.trilhas.count);

  const filter = useStoreState((state) => state.courses.filter);
  const itinerarios = useStoreState((state) => state.itineraries.itinerarios);

  const loading = useStoreState((state) => state.courses.loading);
  const loadingTrilhas = useStoreState((state) => state.trilhas.loading);
  const [modalVisible, setModalVisible] = useState(false);
  const [idCourseView, setIdCourseView] = useState(undefined);
  const [page, setPage] = useState(1);

  const getNomeItinerario = (id_itinerario) => {
    const nome_itinerario = itinerarios.find(
      (itinerario) => itinerario.id === id_itinerario
    )?.name;

    return nome_itinerario;
  };

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

  const onChangePage = useCallback(
    (page) => {
      setPage(page);
      setFilter({
        ...filter,
        page: page,
      });
    },
    [setFilter, filter]
  );

  // useEffect(() => {
  //   setPage(1);
  // }, [filter.tipoClassificacao]);

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
        {!filter.tipoClassificacao && (
          <Col style={{ margin: "5px" }}>
            <CSVLink
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
            </CSVLink>
          </Col>
        )}
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
                  ) : trilhas.length !== 0 ? (
                    <Space
                      direction="vertical"
                      style={{
                        width: "100%",
                      }}
                    >
                      <Collapse
                        style={{
                          justifyContent: "center",
                        }}
                        items={trilhas
                          .filter((trail) => {
                            // Aqui eu verifico se devo ou não mostrar a trilha de acordo com as competências arquivadas
                            if (
                              !trail.competencies.some(
                                (competencie) => !competencie.filedAt
                              ) &&
                              trail.competencies.length > 0
                            ) {
                              return false;
                            }
                            if (
                              !trail.courses.some((curso) => {
                                return !curso?.filedAt;
                              }) &&
                              trail.courses.length > 0
                            ) {
                              return false;
                            }
                            return true;
                          })
                          .map((trilha) => {
                            return {
                              key: trilha.id,
                              label: (
                                <Space direction="vertical">
                                  <Title
                                    level={5}
                                    style={{
                                      fontFamily: "Poppins",
                                    }}
                                  >
                                    {trilha.name}
                                  </Title>
                                  <Text
                                    style={{
                                      fontFamily: "Roboto",
                                    }}
                                  >
                                    {trilha.description}
                                  </Text>
                                </Space>
                              ),
                              children: (
                                <List
                                  itemLayout="vertical"
                                  dataSource={trilha.courses.filter(
                                    (course) => {
                                      return !course.filedAt;
                                    }
                                  )}
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
                                            setIdCourseView(curso.id);
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
                                                style={{
                                                  fontFamily: "Roboto",
                                                }}
                                              >
                                                Instituição:{" "}
                                                <Text strong>
                                                  {curso.institutions
                                                    .map((inst) => inst.name)
                                                    .join(" | ")}
                                                </Text>
                                              </Text>

                                              <Text
                                                style={{
                                                  fontFamily: "Roboto",
                                                }}
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
                                                style={{
                                                  fontFamily: "Roboto",
                                                }}
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
                              ),
                            };
                          })}
                      />
                      <Pagination
                        onChange={onChangePage}
                        pageSize={20}
                        total={countTrails}
                        showSizeChanger={false}
                        current={page}
                        defaultCurrent={1}
                        hideOnSinglePage={false}
                      />
                    </Space>
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
                pagination={{
                  onChange: (page) => {
                    onChangePage(page);
                  },
                  pageSize: 20,
                  total: countCourses,
                  showSizeChanger: false,
                  current: page,
                  defaultCurrent: 1,
                  hideOnSinglePage: false,
                }}
                dataSource={cursos.filter((curso) => {
                  // Aqui verifico se devo ou não mostrar o curso de acordo com os dados arquivados
                  if (
                    !curso.competencies.some(
                      (competencie) => !competencie?.filedAt
                    ) &&
                    curso.competencies.length > 0
                  ) {
                    return false;
                  }
                  if (
                    !curso.institutions.some(
                      (institution) => !institution?.filedAt
                    ) &&
                    curso.institutions.length > 0
                  ) {
                    return false;
                  }
                  return true;
                })}
                loading={loading}
                renderItem={(curso) => {
                  return (
                    <List.Item
                      key={curso.id}
                      style={{ backgroundColor: "#fff" }}
                    >
                      <Card
                        hoverable
                        bordered={false}
                        onClick={() => {
                          setIdCourseView(curso.id);
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
          <CourseModalVisualization
            id={idCourseView}
            visible={modalVisible}
            setVisible={setModalVisible}
          />
        </Col>
      </Row>
    </Col>
  );
}
