import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

// import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import { Button, Card, Input, Tooltip, Switch, Space, Table, Select } from "antd";
// import CourseRegister from "./CourseRegister";

const { Search } = Input;

export default function SystemLog() {
  
  const getLastCoursesTrailsChanges = useStoreActions( actions => actions.adm.getLastCoursesTrailsChanges )
  const lastCoursesChanges = useStoreState( state => state.adm.lastCoursesChanges )
  const lastTrailsChanges = useStoreState( state => state.adm.lastTrailsChanges )
  const loadingLastChanges = useStoreState( state => state.adm.loadingLastChanges )

  const countLastCourses = useStoreState( state => state.adm.countLastCourses )
  const countLastTrails = useStoreState( state => state.adm.countLastTrails )

  const [pageNumber, setPageNumber] = useState(1);
  const [pagesCount, setPagesCount] = useState(countLastCourses)
 
  const categoriaOptions = [
    { value: "cursos", label: "Cursos"},
    { value: "trilhas_formativas", label: "Trilhas Formativas" },
  ]
  const statusOptions = [
    { 
      value: "criado",
      label: "Criado"
    },
    {
      value: "atualizado",
      label: "Atualizado"
    },
    { 
      value: "arquivado", 
      label: "Arquivado"
    }
  ]
  const usuarioOptions = [
    { value: "a", label: "a"},
    { value: "b", label: "b" },
  ]
  const columnsTable = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Criado em',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Atualizado em',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },
    {
      title: 'Arquivado em',
      dataIndex: 'filedAt',
      key: 'filedAt',
    },
  ]

  const [categoria, setCategoria] = useState(categoriaOptions[0].value);
  const [status, setStatus] = useState(statusOptions[0].value);
  const [dataSource, setDataSource] = useState()

  const handleCategoriaChange = (value) => {
    setCategoria(value);
    setPagesCount(
      value === categoriaOptions[0].value ?
                countLastCourses :
                countLastTrails )

      setDataSource(
        value === categoriaOptions[0].value ?
                  lastCoursesChanges :
                  lastTrailsChanges
      )
  };

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const handlePages = (page) => {
    setPageNumber(page)
  }

  useEffect(async ()=> {
    getLastCoursesTrailsChanges();
  }, [])

  useEffect(() => {
  if (!loadingLastChanges) {
    setDataSource(categoria === categoriaOptions[0].value ? lastCoursesChanges : lastTrailsChanges);
  }
  }, [loadingLastChanges, categoria, lastCoursesChanges, lastTrailsChanges]);

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
          <Card
              title={"Log do sistema"}
              styles={{
                header: {
                  fontSize: 20,
                  padding: "10px",
                },
                body: {
                  padding: "0px",
                },
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
                  <Select
                    style={{ width: "12em" }}
                    defaultValue={categoriaOptions[0].value}
                    options={categoriaOptions}
                    onChange={handleCategoriaChange}
                    />
                  <Select
                    style={{ width: "8em" }}
                    defaultValue={statusOptions[0].value}
                    options={statusOptions} 
                    onChange={handleStatusChange}
                  />
                  <Select
                    style={{ width: "15em" }}
                    showSearch={true}
                    placeholder={"usuário"}
                    options={usuarioOptions}
                  />
                </Space>
              }
            >
              <Table
                loading={loadingLastChanges}
                pagination={{
                  pageSize: 30,
                  total: pagesCount,
                  showSizeChanger: false,
                  current: pageNumber,
                  defaultCurrent: 1,
                  hideOnSinglePage: true,
                  onChange: {handlePages}
                }}
                columns={columnsTable}
                dataSource={dataSource}
              />
            </Card>
        </div>
      </div>
    </>
  );
}
