import { useEffect, useState, useMemo } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Card, Space, Table, Select, Modal, Descriptions } from "antd";

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
      title: 'Ação',
      dataIndex: 'action',
      key: 'columnsTable2',
    },
    {
      title: 'Data da ação',
      dataIndex: 'updatedAt',
      key: 'columnsTable3',
    },
    {
      title: 'Usuário',
      dataIndex: 'user',
      key: 'columnsTable4',
    },
  ]

  const [pageNumber, setPageNumber] = useState(1);
  const [categoria, setCategoria] = useState(categoriaOptions[0].value);
  const [status, setStatus] = useState(statusOptions[0].value);
  const [usuario, setUsuario] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Funções que gerencial o estado de categoria, status e usuário
  // que são chamadas pelos selects
  const handleCategoriaChange = (value) => {
    setCategoria(value);
  };
  
  const handleStatusChange = (value) => {
    setStatus(value);
  };
  
  const handleUsuarioChange = (value) => {
    setUsuario(value)
  };

  // quando o usuário muda a página
  const handlePages = (page) => {
    setPageNumber(page)
  }

  // quando o usuário clica em algum curso/trilha da lista
  const handleClickOnItem = (record) => {
    setSelectedItem(record);
  };

  useEffect(()=> {
    getLastCoursesTrailsChanges();
  }, [])

  // Memos que retornam o que deve aparecer com relação à mudança de categoria
  // ou seja, se for cursos aparece uma opção, se for trilha, outra
  const dataSource = useMemo(() => {
    if (!loadingLastChanges) {
      return categoria === categoriaOptions[0].value ? lastCoursesChanges : lastTrailsChanges;
    }
  }, [loadingLastChanges, categoria, lastCoursesChanges, lastTrailsChanges]);

  const pagesCount = useMemo(() => {
      if (!loadingLastChanges) {
        return categoria === categoriaOptions[0].value ? countLastCourses : countLastTrails;
      }
  }, [loadingLastChanges, categoria, countLastCourses, countLastTrails]);

  const modalTitle = useMemo(() => {
      if (!loadingLastChanges) {
        return categoria === categoriaOptions[0].value ? "Detalhes do curso" : "Detalhes da trilha";
      }
  }, [loadingLastChanges, categoria]);

  const coursesSelectedItems = () => {
    return selectedItem.cursos.map(curso => curso.name).join(", ");
  }

  const descriptionItems = useMemo(() => {
    if (!loadingLastChanges && selectedItem) {
      return categoria === categoriaOptions[0].value ? [
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
        { key: 'descriptionItemsTrilhas2', label: 'Cursos', children: coursesSelectedItems() },
        { key: 'descriptionItemsTrilhas3', label: 'Criado em', children: selectedItem.createdBy },
        { key: 'descriptionItemsTrilhas4', label: 'Criado por', children: selectedItem.updatedBy },
        { key: 'descriptionItemsTrilhas5', label: 'Atualizado em', children: selectedItem.updatedat },
        { key: 'descriptionItemsTrilhas6', label: 'Atualizado por', children: selectedItem.updatedBy },
        { key: 'descriptionItemsTrilhas7', label: 'Arquivado em', children: selectedItem.filledAt },
        { key: 'descriptionItemsTrilhas8', label: 'Arquivado por', children: selectedItem.filedBy },
      ];
    }
  }, [loadingLastChanges, categoria, selectedItem]);

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
                    options={categoriaOptions}
                    defaultValue={categoriaOptions[0].value}
                    value={categoria}
                    onChange={handleCategoriaChange}
                    allowClear={true}
                    />
                  <Select
                    style={{ width: "8em" }}
                    options={statusOptions}
                    defaultValue={statusOptions[0].value}
                    value={status}
                    onChange={handleStatusChange}
                    allowClear={true}
                  />
                  <Select
                    style={{ width: "15em" }}
                    options={usuarioOptions}
                    value={usuario}
                    onChange={handleUsuarioChange}
                    showSearch={true}
                    placeholder={"usuário"}
                    allowClear={true}
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
                rowKey={
                  // record: o objeto que está sendo exibido na tabela
                  (record) => { return record.id }
                }
                onRow={
                  (record) => {
                  // record: o curso/trilha selecionado
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
            <Descriptions column={1} bordered={true} layout="horizontal" items={descriptionItems} />
        )}
      </Modal>
    </>
  );
} 
