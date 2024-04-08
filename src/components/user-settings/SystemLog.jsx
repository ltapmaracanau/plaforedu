import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

// import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import { Card, Input, Tooltip, Switch, Space, Table, Select, Modal, Descriptions } from "antd";

export default function SystemLog() {
  
  const getLastCoursesTrailsChanges = useStoreActions( actions => actions.adm.getLastCoursesTrailsChanges )
  const lastCoursesChanges = useStoreState( state => state.adm.lastCoursesChanges )
  const lastTrailsChanges = useStoreState( state => state.adm.lastTrailsChanges )
  const loadingLastChanges = useStoreState( state => state.adm.loadingLastChanges )

  const countLastCourses = useStoreState( state => state.adm.countLastCourses )
  const countLastTrails = useStoreState( state => state.adm.countLastTrails )

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
      key: 'columnsTable1',
    },
    {
      title: 'Criado em',
      dataIndex: 'createdAt',
      key: 'columnsTable2',
    },
    {
      title: 'Atualizado em',
      dataIndex: 'updatedAt',
      key: 'columnsTable3',
    },
    {
      title: 'Arquivado em',
      dataIndex: 'filedAt',
      key: 'columnsTable4',
    },
  ]

  const [pageNumber, setPageNumber] = useState(1);
  const [pagesCount, setPagesCount] = useState(countLastCourses)
  const [modalTitle, setModalTitle] = useState()
  const [categoria, setCategoria] = useState(categoriaOptions[0].value);
  const [status, setStatus] = useState(statusOptions[0].value);
  const [dataSource, setDataSource] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  const [descriptionItems, setDescriptionItems] = useState([]);



  const handleCategoriaChange = (value) => {
    setCategoria(value);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const handlePages = (page) => {
    setPageNumber(page)
  }

  const handleClickOnItem = (record) => {
    setSelectedItem(record);
  };

  useEffect(()=> {
    getLastCoursesTrailsChanges();
  }, [])

  useEffect(() => {
    if (!loadingLastChanges) {
      setDataSource(categoria === categoriaOptions[0].value ? lastCoursesChanges : lastTrailsChanges);

      setPagesCount(
        categoria === categoriaOptions[0].value ?
                  countLastCourses :
                  countLastTrails 
      )
      
      setModalTitle(
        categoria === categoriaOptions[0].value ?
                      "Detalhes do curso" :
                      "Detalhes da trilha"
      )

      if (selectedItem) {
        setDescriptionItems(
          categoria === categoriaOptions[0].value ?  [
            { key: 'descriptionItemsCursos1', label: 'Nome', children: selectedItem.name },
            { key: 'descriptionItemsCursos2', label: 'Criado em', children: selectedItem.createdBy },
            { key: 'descriptionItemsCursos3', label: 'Criado por', children: selectedItem.updatedBy },
            { key: 'descriptionItemsCursos4', label: 'Atualizado em', children: selectedItem.updatedat },
            { key: 'descriptionItemsCursos5', label: 'Atualizado por', children: selectedItem.updatedBy },
            { key: 'descriptionItemsCursos6', label: 'Arquivado em', children: selectedItem.filledAt },
            { key: 'descriptionItemsCursos7', label: 'Arquivado por', children: selectedItem.filedBy },
            { key: 'descriptionItemsCursos8', label: 'Publicado em', children: selectedItem.publishedAt },
            { key: 'descriptionItemsCursos9', label: 'Publicado por', children: selectedItem.publishedBy },
          ] : [
            { key: 'descriptionItemsTrilhas1', label: 'Nome', children: selectedItem.name },
            { key: 'descriptionItemsTrilhas2', label: 'Criado em', children: selectedItem.createdBy },
            { key: 'descriptionItemsTrilhas3', label: 'Criado por', children: selectedItem.updatedBy },
            { key: 'descriptionItemsTrilhas4', label: 'Atualizado em', children: selectedItem.updatedat },
            { key: 'descriptionItemsTrilhas5', label: 'Atualizado por', children: selectedItem.updatedBy },
            { key: 'descriptionItemsTrilhas6', label: 'Arquivado em', children: selectedItem.filledAt },
            { key: 'descriptionItemsTrilhas7', label: 'Arquivado por', children: selectedItem.filedBy },
          ]
        )
      }
    }      
  }, [loadingLastChanges, categoria, lastCoursesChanges, lastTrailsChanges, selectedItem]);

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
                onRow={(record) => {
                  // record: o objeto da lista que está selecionado, ou seja, o curso/trilha selecionado
                  return {
                    onClick: () => {
                      handleClickOnItem(record);
                    },
                    style: { cursor: 'pointer' }
                  };
                }}
              />
            </Card>
        </div>
      </div>

      <Modal
        title={modalTitle}
        open={!!selectedItem}
        onCancel={() => setSelectedItem(null)}
        footer={null}
      >
        {selectedItem && (
            <Descriptions column={1} bordered={true} layout="horizontal" items={descriptionItems}/>
        )}
      </Modal>
    </>
  );
} 
