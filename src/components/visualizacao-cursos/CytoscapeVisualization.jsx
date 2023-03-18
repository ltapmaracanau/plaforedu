import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import CytoscapeComponent from "react-cytoscapejs";
import { CSVLink } from "react-csv";
/* import { PDFDownloadLink } from "@react-pdf/renderer"; */

import fundoLegenda from "../../assets/icon/PLAFOREDU_Icones-Legenda.png";

/* import { Template } from "../pdf-document"; */

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import {
  Col,
  Modal,
  Typography,
  Descriptions,
  Button,
  Card,
  Row,
  Slider,
  Select,
  Form,
  Skeleton,
  Space,
  List,
  Empty,
} from "antd";

const { Text } = Typography;

export default function CytoscapeVisualization() {
  const cyRef = useRef(null);

  const filter = useStoreState((state) => state.courses.filter);
  const elementsCourses = useStoreState((state) => state.courses.elements);
  const elementsTrails = useStoreState((state) => state.trilhas.elements);
  const colorSchemaDefault = useStoreState(
    (state) => state.courses.filterDefault.esquemaDeCores
  );

  const layouts = useStoreState((state) => state.itineraries.layouts);
  const layoutAtual = useStoreState((state) => state.itineraries.layoutAtual);
  const filterCollapsed = useStoreState((state) => state.adm.filterCollapsed);
  const listCompetencias = useStoreState(
    (state) => state.competencies.competencias
  );

  const setFilter = useStoreActions((actions) => actions.courses.setFilter);
  const setUniqueCourse = useStoreActions(
    (actions) => actions.courses.setUniqueCourse
  );
  const setLayoutAtual = useStoreActions(
    (actions) => actions.itineraries.setLayoutAtual
  );
  const setFilterCollapsed = useStoreActions(
    (actions) => actions.adm.setFilterCollapsed
  );
  const getUniqueCourse = useStoreActions(
    (actions) => actions.courses.getUniqueCourse
  );

  const [zoom, setZoom] = useState(1);
  const [competenceOnModal, setCompetenceOnModal] = useState(undefined);

  const uniqueCourse = useStoreState((state) => state.courses.uniqueCourse);
  const loadingUniqueCourse = useStoreState(
    (state) => state.courses.loadingUniqueCourse
  );

  const [modalCourseVisible, setModalCourseVisible] = useState(false);
  const [modalCompetenciaVisible, setModalCompetenciaVisible] = useState(false);

  const csvCursosHeaders = [
    { label: "Título", key: "titulo" },
    { label: "Descrição", key: "descricao" },
    { label: "Carga horária", key: "cargaHoraria" },
    { label: "Instituição Certificadora", key: "instCert" },
    { label: "Possui Acessibilidade", key: "possuiAcessibilidade" },
    { label: "Link", key: "link" },
  ];

  const csvTrilhasHeaders = [
    { label: "Trilha", key: "trilha" },
    { label: "Descrição trilha", key: "descTrilha" },
    { label: "Título", key: "titulo" },
    { label: "Descrição", key: "descricao" },
    { label: "Carga horária", key: "cargaHoraria" },
    { label: "Instituição Certificadora", key: "instCert" },
    { label: "Possui Acessibilidade", key: "possuiAcessibilidade" },
    { label: "Link", key: "link" },
  ];

  const handleOk = () => {
    setCompetenceOnModal(undefined);
    setUniqueCourse({});
    setModalCourseVisible(false);
    setModalCompetenciaVisible(false);
  };

  useEffect(() => {
    if (filter.tipoClassificacao) {
      cyRef.current.add(elementsTrails);
      cyRef.current.layout(layouts["layoutGrid"]).run();
    } else {
      cyRef.current.add(elementsCourses);
      cyRef.current.layout(layouts[layoutAtual]).run();
    }
    setZoom(cyRef.current._private.zoom + 0.3);
  }, [elementsCourses, elementsTrails, layoutAtual, filter, layouts]);

  return (
    <Col flex="auto">
      {/* Barra de Tarefas */}
      <Form size="small" layout="horizontal">
        <Row
          align="middle"
          style={{ backgroundColor: "#EBEBEB", padding: "5px" }}
        >
          <Col style={{ margin: "5px" }}>
            <Button
              style={{ height: "35px" }}
              onClick={() => {
                setFilterCollapsed();
              }}
              icon={
                filterCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
              }
            >
              Filtro
            </Button>
          </Col>
          <Col style={{ margin: "5px" }}>
            <Card>
              <Form.Item label={"Zoom"} style={{ marginBottom: "0" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Button
                    shape="circle"
                    onClick={() => {
                      setZoom((zoomAtual) => {
                        return zoomAtual > 0.01 ? zoomAtual - 0.01 : zoomAtual;
                      });
                    }}
                    icon={<MinusOutlined />}
                  />
                  <Slider
                    step={0.0001}
                    min={0.01}
                    max={1.0}
                    value={zoom}
                    open={false}
                    style={{ width: "80px", margin: "0 15px" }}
                    onChange={(value) => {
                      setZoom(value);
                    }}
                  />
                  <Button
                    icon={<PlusOutlined />}
                    shape="circle"
                    onClick={() => {
                      setZoom((zoomAtual) => {
                        return zoomAtual < 1 ? zoomAtual + 0.01 : zoomAtual;
                      });
                    }}
                  />
                </div>
              </Form.Item>
            </Card>
          </Col>
          {!filter.tipoClassificacao && (
            <>
              <Col
                style={{
                  margin: "5px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  minWidth: "250px",
                }}
              >
                <Card style={{ width: "100%" }}>
                  <Form.Item
                    label={"Visualização"}
                    style={{ marginBottom: "0" }}
                  >
                    <Select
                      onChange={(value) => {
                        setLayoutAtual(value);
                      }}
                      defaultValue={"layoutCose"}
                      style={{ width: "100%" }}
                    >
                      <Select.Option value={"layoutCose"}>Padrão</Select.Option>
                      <Select.Option value={"layoutBreadthFirst"}>
                        Dendograma
                      </Select.Option>
                      <Select.Option value={"layoutBreadthFirstCircle"}>
                        Dendograma Circular
                      </Select.Option>
                      <Select.Option value={"layoutGrid"}>Grade</Select.Option>
                      <Select.Option value={"layoutCircular"}>
                        Circular
                      </Select.Option>
                      <Select.Option value={"layoutConcentric"}>
                        Concêntrico
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Card>
              </Col>
              <Col
                style={{
                  margin: "5px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  minWidth: "250px",
                }}
              >
                <Card style={{ width: "100%" }}>
                  <Form.Item
                    label={"Esquema de cores"}
                    style={{ marginBottom: "0" }}
                  >
                    <Select
                      onChange={(value) => {
                        setFilter({ ...filter, esquemaDeCores: value });
                      }}
                      value={filter.esquemaDeCores}
                      defaultValue={colorSchemaDefault}
                      style={{ width: "100%" }}
                    >
                      <Select.Option value={"categoria"}>
                        Competência
                      </Select.Option>
                      <Select.Option value={"itinerario"}>
                        Itinerário
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Card>
              </Col>
            </>
          )}
          {/* <Col style={{ margin: "5px" }}>
            <Card style={{ width: "100%" }}>
              <CSVLink
                filename="plaforedu"
                headers={
                  filter.tipoClassificacao
                    ? csvTrilhasHeaders
                    : csvCursosHeaders
                }
                data={data}
                target="_blank"
              >
                <Button onClick={() => {}} icon={<FileExcelOutlined />}>
                  <Text style={{ fontFamily: "Roboto" }}>Exportar .csv</Text>
                </Button>
              </CSVLink>
            </Card>
          </Col> */}
          {/* <Col
                        style={{ margin: '5px' }}
                    >
                        <Card style={{ width: '100%' }}>
                            <PDFDownloadLink document={<Template sourceImage={() => cyRef?.current.jpg()} />} fileName="plaforedu.pdf">
                                {({ loading, error }) => loading ? (
                                    <Button icon={<LoadingOutlined />}>
                                        <Text>{error?.message}</Text>
                                    </Button>
                                ) : (
                                    <Button icon={<FilePdfOutlined />}>
                                        <Text style={{ fontFamily: 'Roboto' }}>Exportar .pdf</Text>
                                    </Button>
                                )}
                            </PDFDownloadLink>
                        </Card>
                    </Col> */}
        </Row>
      </Form>
      {/* Canvas Cytoscape */}
      <CytoscapeComponent
        elements={filter.tipoClassificacao ? elementsTrails : elementsCourses}
        minZoom={0.01}
        maxZoom={1.0}
        zoom={zoom}
        zoomingEnabled={true}
        userZoomingEnabled={false}
        cy={(cy) => {
          cyRef.current = cy;
          cy.on("click", "node", function (event) {
            const element = event.target._private.data;
            if (
              element.id.includes("curso") &&
              !element.id.includes("container") &&
              !element.id.includes("equivalent")
            ) {
              getUniqueCourse({ id: element.id.split("curso")[1] });
              setModalCourseVisible(true);
            }
            if (element.id.includes("equivalent")) {
              getUniqueCourse({ id: element.id.split("equivalent")[1] });
              setModalCourseVisible(true);
            }
            if (
              element.id.includes("competencia") &&
              !element.id.includes("categoria") &&
              !element.id.includes("container") &&
              !element.id.includes("curso")
            ) {
              setCompetenceOnModal(
                listCompetencias.find(
                  (competencia) =>
                    competencia.id === element.id.replace(/competencia/gi, "")
                )
              );
              setModalCompetenciaVisible(true);
            }
          });
        }}
        style={{
          position: "relative",
          width: "100%",
          height: "555px",
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
        layout={layouts[layoutAtual]}
        stylesheet={[
          {
            selector: ".curso",
            style: {
              "background-image": "data(image)",
              label: "data(label)",
              width: "100px",
              height: "100px",
              padding: "0px",
              "border-width": "0px",
              "font-family": "Roboto",
              "border-color": "white",
              color: "data(color)",
              "background-fit": "contain",
              "background-clip": "none",
              "background-color": "white",
              "text-halign": "right",
              "text-valign": "center",
              "text-margin-x": "10px",
              "text-transform": "uppercase",
              "text-wrap": "wrap",
              "text-max-width": "80px",
              "font-weight": "bold",
            },
          },
          {
            selector: ":parent",
            css: {
              padding: "10px",
              height: "120px",
              "font-family": "Roboto",
              label: "data(label)",
              color: "data(color)",
              "text-halign": "center",
              "text-valign": "top",
            },
          },
          {
            selector: ".categoria",
            style: {
              "background-image": "data(image)",
              label: "data(label)",
              width: "150px",
              height: "150px",
              padding: "0px",
              "border-width": "0px",
              "font-family": "Roboto",
              "border-color": "white",
              color: "data(color)",
              "background-fit": "contain",
              "background-clip": "none",
              "background-color": "white",
              "background-width": "100%",
              "background-height": "100%",
              "text-halign": "right",
              "text-valign": "center",
              "text-margin-x": "10px",
              "text-transform": "uppercase",
              "text-wrap": "wrap",
              "text-max-width": "80px",
              "font-weight": "bold",
            },
          },
          {
            selector: ".competencia",
            style: {
              "background-image": "data(image)",
              label: "data(label)",
              width: "120px",
              height: "120px",
              padding: "0px",
              "border-width": "0px",
              "font-family": "Roboto",
              "border-color": "white",
              color: "data(color)",
              "background-fit": "contain",
              "background-clip": "none",
              "background-color": "white",
              "background-width": "100%",
              "background-height": "100%",
              "text-halign": "right",
              "text-valign": "center",
              "text-margin-x": "10px",
              "text-transform": "uppercase",
              "text-wrap": "wrap",
              "text-max-width": "80px",
              "font-weight": "bold",
            },
          },
          {
            selector: "edge",
            style: {
              "background-color": "#ffb600",
              width: "3px",
              "target-arrow-shape": "triangle",
              "control-point-step-size": "140px",
            },
          },
        ]}
      />
      <img
        src={fundoLegenda}
        width={180}
        alt={"Legenda"}
        style={{
          position: "absolute",
          top: "400px",
          right: "50px",
          width: "180px",
          borderRadius: "30px",
          boxShadow: "0px 11px 15px 0px rgba(0,0,0,0.38)",
        }}
        draggable={false}
      />
      <Modal
        open={modalCourseVisible}
        key={`modalCurso`}
        destroyOnClose={true}
        centered={true}
        onCancel={handleOk}
        onOk={handleOk}
        title={"Sobre o curso"}
        footer={
          <Button onClick={handleOk} type={"primary"}>
            Ok
          </Button>
        }
      >
        {loadingUniqueCourse ? (
          <Skeleton active />
        ) : (
          <Card>
            <Descriptions
              column={1}
              bordered
              layout={"vertical"}
              style={{ backgroundColor: "white" }}
            >
              <Descriptions.Item label="Título">
                {uniqueCourse?.name}
              </Descriptions.Item>
              <Descriptions.Item label="Descrição">
                {uniqueCourse?.description}
              </Descriptions.Item>
              <Descriptions.Item label="Carga Horária">
                {uniqueCourse?.hours}
              </Descriptions.Item>
              <Descriptions.Item label="Instituições Certificadoras">
                {uniqueCourse?.institutions?.map((inst) => (
                  <Space key={inst.institutionId} direction={"vertical"}>
                    <Text>{inst.name}</Text>
                    <div>
                      <span>Link: </span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        key={`link${inst.id}`}
                        href={inst.link}
                      >
                        {inst.link}
                      </a>
                    </div>
                  </Space>
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
          </Card>
        )}
      </Modal>
      <Modal // Modal de Competência
        open={modalCompetenciaVisible}
        onOk={handleOk}
        onCancel={handleOk}
        destroyOnClose={true}
        title={competenceOnModal?.name}
        centered={true}
        footer={[
          <Button type="primary" key={"modalCompetence"} onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        <Descriptions column={1} bordered style={{ fontFamily: "Roboto" }}>
          <Descriptions.Item label="Descrição" style={{ fontFamily: "Roboto" }}>
            {competenceOnModal?.description}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </Col>
  );
}
