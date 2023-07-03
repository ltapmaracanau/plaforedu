import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Row, Layout, Drawer, Grid, ConfigProvider } from 'antd';

import { CloseOutlined } from '@ant-design/icons';

import HeaderHome from '../components/header/HeaderHome';
import SideFilter from '../components/SideFilter';
import RowItinerario from '../components/RowItinerario';
import CytoscapeVisualization from '../components/visualizacao-cursos/CytoscapeVisualization';
import CoursesListVisualization from '../components/visualizacao-cursos/CoursesListVisualization';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import filterOpen from '../assets/icon/filterOpen.svg';
import filterClose from '../assets/icon/filterClose.svg';

import './CoursesPage.css';

const { useBreakpoint } = Grid;
const { Sider, Content } = Layout;

export default function CoursesPage() {
  const filterCollapsed = useStoreState((state) => state.adm.filterCollapsed);
  const tipoVisualizacao = useStoreState((state) => state.adm.tipoVisualizacao);
  const setFilterCollapsed = useStoreActions(
    (actions) => actions.adm.setFilterCollapsed,
  );
  const getComp = useStoreActions((actions) => actions.competencies.getComp);
  const getInstituicoes = useStoreActions(
    (actions) => actions.institutions.getInstituicoes,
  );
  const getSubthemes = useStoreActions(
    (actions) => actions.themes.getSubthemes,
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
    <div>
      <HeaderHome />
      <RowItinerario />

      <ConfigProvider
        theme={{
          token: {},
          components: {
            Layout: {
              colorBgLayout: 'red',
            },
          },
        }}
      >
        <Layout>
          <Sider
            width={324}
            collapsedWidth={0}
            trigger={
              filterCollapsed ? (
                <img src={filterOpen} alt="" />
              ) : (
                <img src={filterClose} alt="" />
              )
            }
            defaultCollapsed={true}
            onCollapse={(collapsed, type) => {
              setFilterCollapsed(collapsed);
            }}
            style={{
              zIndex: '99',
              background: screens.lg ? 'var(--bg-site)' : 'none',
              position: !screens.lg && 'absolute',
            }}
            collapsible
            // collapsed={filterCollapsed}
          >
            <SideFilter />
          </Sider>

          <Content style={{ backgroundColor: 'var(--bg-site)' }}>
            <Row
              style={screens.lg ? { maxHeight: 700, overflowY: 'scroll' } : {}}
            >
              {tipoVisualizacao === false && screens.lg ? (
                <CytoscapeVisualization />
              ) : (
                <CoursesListVisualization />
              )}
            </Row>
          </Content>
        </Layout>
      </ConfigProvider>
    </div>
  );
}
