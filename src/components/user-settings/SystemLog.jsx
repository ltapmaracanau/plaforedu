import { useEffect, useState, useMemo, useCallback } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Card, Space, Table, Select, Modal, Descriptions, Button } from "antd";
import { FileSyncOutlined } from "@ant-design/icons";
import HistoricoItens from "./HistoricoItens";

export default function SystemLog() {
  const getLastCoursesTrailsChanges = useStoreActions(
    (actions) => actions.adm.getLastCoursesTrailsChanges
  );
  const lastCoursesChanges = useStoreState(
    (state) => state.adm.lastCoursesChanges
  );
  const lastTrailsChanges = useStoreState(
    (state) => state.adm.lastTrailsChanges
  );
  const loadingLastChanges = useStoreState(
    (state) => state.adm.loadingLastChanges
  );

  const countLastCourses = useStoreState((state) => state.adm.countLastCourses);
  const countLastTrails = useStoreState((state) => state.adm.countLastTrails);

  const categoriaOptions = useMemo(() => {
    return [
      { value: "cursos", label: "Cursos" },
      { value: "trilhas_formativas", label: "Trilhas Formativas" },
    ];
  }, []);

  const statusOptions = [
    {
      value: "criado",
      label: "Criado",
    },
    {
      value: "atualizado",
      label: "Atualizado",
    },
    {
      value: "arquivado",
      label: "Arquivado",
    },
  ];

  const [pageNumber, setPageNumber] = useState(1);
  const [categoria, setCategoria] = useState(categoriaOptions[0].value);
  const [status, setStatus] = useState(statusOptions[0].value);
  const [usuario, setUsuario] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [activeClickRow, setActiveClickRow] = useState(true);
  const [itemHistorico, setItemHistorico] = useState("");

  const columnsTable = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "nameColumn",
    },
    {
      title: "Ação",
      dataIndex: "action",
      key: "actionColumn",
    },
    {
      title: "Data da ação",
      dataIndex: "updatedAt",
      key: "actionDateColumn",
    },
    {
      title: "Usuário",
      dataIndex: "user",
      key: "userColumn",
    },
    {
      key: "seeHistory",
      render: (text) => (
        <Space size="middle">
          <Button
            key={text.id}
            onMouseEnter={() => {
              setActiveClickRow(false);
            }}
            onMouseLeave={() => {
              setActiveClickRow(true);
            }}
            onClick={() => {
              setItemHistorico(text.id);
            }}
            icon={<FileSyncOutlined />}
          >
            Histórico
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getLastCoursesTrailsChanges();
  }, [getLastCoursesTrailsChanges]);

  // memos que retornam o que deve aparecer com relação à mudança de categoria
  // ou seja, se for cursos aparece uma opção, se for trilha, outra
  const dataSource = useMemo(() => {
    if (!loadingLastChanges) {
      return categoria === categoriaOptions[0].value
        ? lastCoursesChanges
        : lastTrailsChanges;
    }
  }, [
    loadingLastChanges,
    categoria,
    lastCoursesChanges,
    lastTrailsChanges,
    categoriaOptions,
  ]);

  const usuarioOptions = useMemo(() => {
    let usersList = [];
    if (dataSource) {
      dataSource.map((item) => {
        usersList.push({
          label: item.user,
          value: item.user,
        });
      });
    }
    return usersList;
  }, [dataSource]);

  const pagesCount = useMemo(() => {
    if (!loadingLastChanges) {
      return categoria === categoriaOptions[0].value
        ? countLastCourses
        : countLastTrails;
    }
  }, [
    loadingLastChanges,
    categoria,
    countLastCourses,
    countLastTrails,
    categoriaOptions,
  ]);

  const modalTitle = useMemo(() => {
    if (!loadingLastChanges) {
      return categoria === categoriaOptions[0].value
        ? "Detalhes do curso"
        : "Detalhes da trilha";
    }
  }, [loadingLastChanges, categoria, categoriaOptions]);

  const coursesSelectedItems = useCallback(() => {
    return selectedItem.cursos.map((curso) => curso.name).join(", ");
  }, [selectedItem]);

  const descriptionItems = useMemo(() => {
    if (!loadingLastChanges && selectedItem) {
      return categoria === categoriaOptions[0].value
        ? [
            {
              key: "descriptionItemsName",
              label: "Nome",
              children: selectedItem.name,
            },
            {
              key: "descriptionItemsCreatedBy",
              label: "Criado em",
              children: selectedItem.createdAt,
            },
            {
              key: "descriptionItemsUpdatedBy",
              label: "Criado por",
              children: selectedItem.createdBy,
            },
            {
              key: "descriptionItemsUpdatedAt",
              label: "Atualizado em",
              children: selectedItem.updatedAt,
            },
            {
              key: "descriptionItemsUpdatedBy",
              label: "Atualizado por",
              children: selectedItem.updatedBy,
            },
            {
              key: "descriptionItemsFilledAt",
              label: "Arquivado em",
              children: selectedItem.filledAt,
            },
            {
              key: "descriptionItemsFilledBy",
              label: "Arquivado por",
              children: selectedItem.filedBy,
            },
            {
              key: "descriptionItemsPublishedAt",
              label: "Publicado em",
              children: selectedItem.publishedAt,
            },
            {
              key: "descriptionItemsPublishedBy",
              label: "Publicado por",
              children: selectedItem.publishedBy,
            },
          ]
        : [
            {
              key: "descriptionItemsName",
              label: "Nome",
              children: selectedItem.name,
            },
            {
              key: "descriptionItemsCourses",
              label: "Cursos",
              children: coursesSelectedItems(),
            },
            {
              key: "descriptionItemsCreatedAt",
              label: "Criado em",
              children: selectedItem.createdAt,
            },
            {
              key: "descriptionItemsCreatedBy",
              label: "Criado por",
              children: selectedItem.createdBy,
            },
            {
              key: "descriptionItemsUpdatedat",
              label: "Atualizado em",
              children: selectedItem.updatedat,
            },
            {
              key: "descriptionItemsUpdatedby",
              label: "Atualizado por",
              children: selectedItem.updatedBy,
            },
            {
              key: "descriptionItemsFilledAt",
              label: "Arquivado em",
              children: selectedItem.filledAt,
            },
            {
              key: "descriptionItemsFilledBy",
              label: "Arquivado por",
              children: selectedItem.filedBy,
            },
          ];
    }
  }, [
    loadingLastChanges,
    categoria,
    selectedItem,
    categoriaOptions,
    coursesSelectedItems,
  ]);

  return itemHistorico != "" ? (
    <HistoricoItens
      itemHistorico={itemHistorico}
      back={() => {
        setActiveClickRow(true);
        setItemHistorico("");
      }}
    />
  ) : (
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
                  onChange={(value) => setCategoria(value)}
                  placeholder="Categoria"
                  allowClear={true}
                />
                <Select
                  style={{ width: "8em" }}
                  options={statusOptions}
                  defaultValue={statusOptions[0].value}
                  value={status}
                  onChange={(value) => setStatus(value)}
                  placeholder="Status"
                  allowClear={true}
                />
                <Select
                  style={{ width: "15em" }}
                  options={usuarioOptions}
                  value={usuario}
                  onChange={(value) => setUsuario(value)}
                  showSearch={true}
                  placeholder={"Usuário"}
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
                onChange: (page) => setPageNumber(page),
              }}
              columns={columnsTable}
              dataSource={dataSource}
              rowKey={(record) => {
                return record.id;
              }}
              onRow={(record) => {
                return {
                  onClick: () => {
                    if (activeClickRow) {
                      setSelectedItem(record);
                    }
                  },
                  style: { cursor: "pointer" },
                };
              }}
            />
          </Card>
        </div>
      </div>

      <Modal
        title={modalTitle}
        open={!!selectedItem && activeClickRow}
        onCancel={() => setSelectedItem(null)}
        footer={null}
      >
        {selectedItem && activeClickRow && (
          <Descriptions
            column={1}
            bordered={true}
            layout="horizontal"
            items={descriptionItems}
          />
        )}
      </Modal>
    </>
  );
}
