import { useCallback, useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";

import {
  Button,
  Card,
  Input,
  Tooltip,
  Switch,
  Space,
  Table,
  Typography,
  Tag,
} from "antd";
import { useNavigate } from "react-router-dom";
//import { CSVLink } from "react-csv";

const { Search } = Input;

export default function CoursesList() {
  const navigate = useNavigate();

  const getCursos = useStoreActions((actions) => actions.courses.getCursos);
  const getItinerarios = useStoreActions(
    (actions) => actions.itineraries.getItinerarios
  );
  const getAcessibilidades = useStoreActions(
    (actions) => actions.accessibilities.getAcessibilidades
  );
  const getInstituicoes = useStoreActions(
    (actions) => actions.institutions.getInstituicoes
  );
  const getComp = useStoreActions((actions) => actions.competencies.getComp);
  const getSubthemes = useStoreActions(
    (actions) => actions.themes.getSubthemes
  );

  const loading = useStoreState((state) => state.courses.loading);
  const cursos = useStoreState((state) => state.courses.cursos);
  const count = useStoreState((state) => state.courses.count);
  const isAdm = useStoreState((state) => state.adm.isAdm);
  const isCoord = useStoreState((state) => state.adm.isCoord);
  const isConsultor = useStoreState((state) => state.adm.isConsultor);

  const [showFiled, setShowFiled] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const init = useCallback(async () => {
    await getCursos({ page: pageNumber });
    await getItinerarios();
    await getAcessibilidades();
    await getInstituicoes({ showFiled: true });
    await getComp({ showFiled: true });
    await getSubthemes({ showFiled: true });
  }, [
    getAcessibilidades,
    getComp,
    getCursos,
    getInstituicoes,
    getItinerarios,
    getSubthemes,
    pageNumber,
  ]);

  useEffect(() => {
    init();
  }, [init]);

  // const csvCursosHeaders = [
  //   { label: "Título", key: "title" },
  //   { label: "Carga horária", key: "cargaHoraria" },
  //   { label: "Instituições Certificadoras", key: "instCert" },
  //   { label: "Acessibilidades", key: "acessibilidades" },
  //   { label: "Link", key: "link" },
  //   { label: "Itinerários", key: "itineraries" },
  //   { label: "Competências", key: "competencias" },
  //   { label: "Subtemas", key: "subtemas" },
  //   { label: "Taxonomia revisada de Bloom", key: "taxonomias" },
  //   { label: "Cursos equivalentes", key: "equivalents" },
  //   { label: "Descrição", key: "descricao" },
  // ];

  // const data = useMemo(() => {
  //   return cursos.map((course) => {
  //     return {
  //       title: course.name,
  //       cargaHoraria: `${course.hours}H`,
  //       instCert: course.institutions.map((inst) => inst.name).join(" | "),
  //       acessibilidades: course.accessibilities
  //         .map((ac) => ac.name)
  //         .join(" | "),
  //       link: course.institutions.map((inst) => inst.link).join(" | "),
  //       itineraries: course.itineraries.map((it) => it.name).join(" | "),
  //       competencias: course.competencies.map((comp) => comp.name).join(" | "),
  //       subtemas: course.subThemes.map((sub) => sub.name).join(" | "),
  //       taxonomias: course.taxonomies.map((tx) => tx.name).join(" | "),
  //       equivalents: course.equivalents.map((eq) => eq.name).join(" | "),
  //       descricao: course.description,
  //     };
  //   });
  // }, [cursos]);

  const [sort, setSort] = useState({
    createdAt: null,
    updatedAt: null,
  });

  const onChangeTable = useCallback(
    (pagination, _filters, sorter) => {
      let sortByCreatedAt = undefined;
      let sortByUpdatedAt = undefined;
      //console.log(sorter);
      if (Array.isArray(sorter)) {
        if (sorter[1].columnKey === "createdAt") {
          sortByCreatedAt = sorter[1].order;
          sortByUpdatedAt = undefined;
        } else {
          sortByCreatedAt = undefined;
          sortByUpdatedAt = sorter[1].order;
        }
        setSort({
          createdAt: sortByCreatedAt,
          updatedAt: sortByUpdatedAt,
        });
      } else {
        if (sorter.columnKey === "createdAt") {
          sortByCreatedAt = sorter.order;
          sortByUpdatedAt = undefined;
        } else {
          sortByCreatedAt = undefined;
          sortByUpdatedAt = sorter.order;
        }
        setSort({
          createdAt: sortByCreatedAt,
          updatedAt: sortByUpdatedAt,
        });
      }
      setPageNumber(pagination.current);
      getCursos({
        page: pagination.current,
        query: textSearch,
        showFiled: showFiled,
        sort: {
          createdAt: sortByCreatedAt,
          updatedAt: sortByUpdatedAt,
        },
      });
    },
    [getCursos, showFiled, textSearch]
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div style={{ width: "100%" }}>
        <Card
          title={"Cursos"}
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
              <Search
                allowClear
                defaultValue={textSearch}
                onSearch={(e) => {
                  setTextSearch(e);
                  getCursos({
                    query: e,
                    showFiled: showFiled,
                    sort: {
                      createdAt: sort.createdAt,
                      updatedAt: sort.updatedAt,
                    },
                  });
                  setPageNumber(1);
                }}
                style={{
                  marginRight: "30px",
                }}
                placeholder={"Buscar cursos"}
              />
              <Tooltip title={"Exibir Arquivados"}>
                <Switch
                  defaultChecked={showFiled}
                  checked={showFiled}
                  onClick={(checked) => {
                    setShowFiled(checked);
                    setPageNumber(1);
                    getCursos({
                      query: textSearch,
                      showFiled: checked,
                      page: 1,
                      sort: {
                        createdAt: sort.createdAt,
                        updatedAt: sort.updatedAt,
                      },
                    });
                  }}
                />
              </Tooltip>
              {/* <CSVLink
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
                  </CSVLink> */}
              <Tooltip
                title={
                  !isAdm && !isCoord && !isConsultor
                    ? "Usuário sem permissão"
                    : ""
                }
              >
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  disabled={!isAdm && !isCoord && !isConsultor}
                  onClick={() => {
                    navigate("edit");
                  }}
                >
                  Adicionar
                </Button>
              </Tooltip>
            </Space>
          }
        >
          <Table
            loading={loading}
            dataSource={cursos}
            pagination={{
              pageSize: 20,
              total: count,
              showSizeChanger: false,
              current: pageNumber,
              defaultCurrent: 1,
              hideOnSinglePage: false,
            }}
            size="small"
            style={{ width: "100%" }}
            rowKey={(record) => record.id}
            onChange={onChangeTable}
            columns={[
              {
                title: "Título",
                dataIndex: "name",
                key: "name",
                render: (titulo, record) => {
                  return (
                    <Typography.Text>
                      {titulo}
                      {record.filedAt && (
                        <Tag
                          style={{
                            marginLeft: "10px",
                          }}
                          color="blue"
                        >
                          ARQUIVADO
                        </Tag>
                      )}
                    </Typography.Text>
                  );
                },
              },
              {
                title: "Equivalências",
                dataIndex: "equivalents",
                key: "equivalents",
                render: (equivalents) => {
                  return equivalents.length;
                },
              },
              {
                title: "Instituições",
                dataIndex: "institutions",
                key: "institutions",
                render: (institutions) => {
                  return institutions
                    .map((item) => item.abbreviation)
                    .join(", ");
                },
              },
              {
                title: "Criado em",
                dataIndex: "createdAt",
                key: "createdAt",
                render: (createdAt) => {
                  return new Date(createdAt).toLocaleString("pt-BR", {
                    timeZone: "UTC",
                  });
                },
                sorter: {
                  multiple: 1,
                },
                sortDirections: ["descend"],
                sortOrder: sort.createdAt,
              },
              {
                title: "Atualizado em",
                dataIndex: "updatedAt",
                key: "updatedAt",
                render: (updatedAt) => {
                  return new Date(updatedAt).toLocaleString("pt-BR", {
                    timeZone: "UTC",
                  });
                },
                sorter: {
                  multiple: 2,
                },
                sortDirections: ["descend"],
                sortOrder: sort.updatedAt,
              },
              {
                key: "action",
                render: (text, record) => (
                  <Space size="middle">
                    <Tooltip
                      title={!isAdm && !isCoord ? "Usuário sem permissão" : ""}
                    >
                      <Button
                        key={record.id}
                        disabled={!isAdm && !isCoord}
                        onClick={() => {
                          navigate(`edit/${record.id}`);
                        }}
                        icon={<EditOutlined />}
                      >
                        Editar
                      </Button>
                    </Tooltip>
                  </Space>
                ),
              },
            ]}
          />
        </Card>
      </div>
    </div>
  );
}
