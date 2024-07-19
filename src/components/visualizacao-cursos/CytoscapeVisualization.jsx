import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import CytoscapeComponent from "react-cytoscapejs";
// import { CSVLink } from "react-csv";
// import { PDFDownloadLink } from "@react-pdf/renderer";

import fundoLegenda from "../../assets/icon/PLAFOREDU_Icones-Legenda.png";

// import { Template } from "../pdf-document";

import ModalCourseVisualization from "../CourseModalVisualization";
import reformuladorDeElementosCytoscape from "../../helpers/reformuladorDeElementosCytoscape";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";

import {
  Col,
  Modal,
  Descriptions,
  Button,
  Card,
  Row,
  Slider,
  Select,
  Form,
} from "antd";

export default function CytoscapeVisualization() {
  const cyRef = useRef(null);

  const filter = useStoreState((state) => state.courses.filter);
  const courses = useStoreState((state) => state.courses.cursos);
  const trails = useStoreState((state) => state.trilhas.trilhas);
  const colorSchemaDefault = useStoreState(
    (state) => state.courses.filterDefault.esquemaDeCores
  );

  const layouts = useStoreState((state) => state.itineraries.layouts);
  const layoutAtual = useStoreState((state) => state.itineraries.layoutAtual);
  const itineraries = useStoreState((state) => state.itineraries.itinerarios);
  const filterCollapsed = useStoreState((state) => state.adm.filterCollapsed);

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
  const getCompetencieAction = useStoreActions(
    (actions) => actions.competencies.getUniqueComp
  );

  const [zoom, setZoom] = useState(1);
  const [competenceOnModal, setCompetenceOnModal] = useState(undefined);
  const [idCourseView, setIdCourseView] = useState(undefined);

  const [modalCourseVisible, setModalCourseVisible] = useState(false);
  const [modalCompetenciaVisible, setModalCompetenciaVisible] = useState(false);

  const elements = useMemo(() => {
    return reformuladorDeElementosCytoscape(
      filter.tipoClassificacao ? trails : courses,
      filter,
      itineraries
    );
  }, [courses, filter, itineraries, trails]);

  const handleOk = () => {
    setCompetenceOnModal(undefined);
    setUniqueCourse({});
    setModalCourseVisible(false);
    setModalCompetenciaVisible(false);
  };

  const getCompetencie = useCallback(
    async (id) => {
      try {
        const comp = await getCompetencieAction({ id });
        setCompetenceOnModal(comp);
        setModalCompetenciaVisible(true);
      } catch (error) {
        console.error(error);
      }
    },
    [getCompetencieAction]
  );

  useEffect(() => {
    if (filter.tipoClassificacao) {
      cyRef.current.add(elements);
      cyRef.current.layout(layouts["layoutGrid"]).run();
    } else {
      cyRef.current.add(elements);
      cyRef.current.layout(layouts[layoutAtual]).run();
    }
    setZoom(cyRef.current._private.zoom + 0.3);
  }, [elements, layoutAtual, filter, layouts]);

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
        </Row>
      </Form>
      {/* Canvas Cytoscape */}
      <CytoscapeComponent
        elements={elements}
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
              setIdCourseView(element.id.split("curso")[1]);
              setModalCourseVisible(true);
            }
            if (element.id.includes("equivalent")) {
              setIdCourseView(element.id.split("equivalent")[1]);
              setModalCourseVisible(true);
            }
            if (
              element.id.includes("competencia") &&
              !element.id.includes("categoria") &&
              !element.id.includes("container") &&
              !element.id.includes("curso")
            ) {
              getCompetencie(element.id.replace(/competencia/gi, ""));
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
      <ModalCourseVisualization
        id={idCourseView}
        visible={modalCourseVisible}
        setVisible={setModalCourseVisible}
      />
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
