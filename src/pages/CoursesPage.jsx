import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Row, Layout, Drawer, Grid, ConfigProvider } from "antd";

import { CloseOutlined } from "@ant-design/icons";

import HeaderHome from "../components/header/HeaderHome";
import SideFilter from "../components/SideFilter";
import RowItinerario from "../components/RowItinerario";
import CytoscapeVisualization from "../components/visualizacao-cursos/CytoscapeVisualization";
import CoursesListVisualization from "../components/visualizacao-cursos/CoursesListVisualization";

const { useBreakpoint } = Grid;
const { Sider, Content } = Layout;

export default function CoursesPage() {
  const filterCollapsed = useStoreState((state) => state.adm.filterCollapsed);
  const tipoVisualizacao = useStoreState((state) => state.adm.tipoVisualizacao);
  const setFilterCollapsed = useStoreActions(
    (actions) => actions.adm.setFilterCollapsed
  );
  const getComp = useStoreActions((actions) => actions.competencies.getComp);
  const getInstituicoes = useStoreActions(
    (actions) => actions.institutions.getInstituicoes
  );
  const getSubthemes = useStoreActions(
    (actions) => actions.themes.getSubthemes
  );

  useEffect(async () => {
    await getComp();
    await getInstituicoes();
    await getSubthemes();
    window.scrollTo(0, 0);
  }, []);

  const screens = useBreakpoint();

  const onClose = () => {
    setFilterCollapsed(false);
  };

  return (
    <Layout>
      <HeaderHome />
      <Layout>
        {screens.lg ? (
          <Sider
            width={300}
            collapsedWidth={0}
            trigger={null}
            style={{
              backgroundColor: "#ebebeb",
            }}
            collapsible
            collapsed={filterCollapsed}
          >
            <SideFilter />
          </Sider>
        ) : (
          <Drawer
            title={"Filtro"}
            open={!filterCollapsed}
            closeIcon={<CloseOutlined style={{ color: "#000" }} />}
            placement="left"
            onClose={onClose}
            width={screens.xs ? "100%" : 400}
          >
            <SideFilter />
          </Drawer>
        )}

        <ConfigProvider
          theme={{
            token: {},
            components: {
              Modal: {
                //colorBgElevated: "#0f40ff",
                //colorTextHeading: "#fff",
              },
            },
          }}
        >
          <Content style={{ backgroundColor: "#fff" }}>
            <Row>
              <RowItinerario />
            </Row>
            <Row
              style={screens.lg ? { maxHeight: 700, overflowY: "scroll" } : {}}
            >
              {tipoVisualizacao === false && screens.lg ? (
                <CytoscapeVisualization />
              ) : (
                <CoursesListVisualization />
              )}
            </Row>
          </Content>
        </ConfigProvider>
      </Layout>
    </Layout>
  );
}
