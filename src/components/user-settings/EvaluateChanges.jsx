import {
  Button,
  Card,
  Popconfirm,
  Select,
  Space,
  Table,
  Tag,
  notification,
} from "antd";
import { useEffect, useMemo } from "react";
import colorCourseStatus from "../../helpers/colorCourseStatus";
import CourseModalVisualization from "../CourseModalVisualization";
import { useState } from "react";
import { useStoreActions } from "easy-peasy";

export default function EvaluateChanges() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [pagesCount, setPagesCount] = useState(1);
  const [page, setPage] = useState(1);
  const [modalViewCourseVisible, setModalViewCourseVisible] = useState(false);
  const [viewCourseId, setViewCourseId] = useState(null);
  const [coursesSelectedIds, setCoursesSelectedIds] = useState([]);

  const getPendingCourses = useStoreActions(
    (actions) => actions.courses.getPendingCourses
  );

  const getDataSource = async ({ page = 0 }) => {
    setLoading(true);
    try {
      const courses = await getPendingCourses({ page });
      setDataSource(courses.data);
      setPagesCount(courses.pagesCount);
    } catch (error) {
      notification.error({
        message: "Erro ao buscar cursos pendentes",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        const courses = await getPendingCourses({ page });
        setDataSource(courses.data);
        setPagesCount(courses.pagesCount);
      } catch (error) {
        notification.error({
          message: "Erro ao buscar cursos pendentes",
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [getPendingCourses, page]);

  const columnsTable = useMemo(() => {
    return [
      {
        title: "Nome",
        dataIndex: "name",
        key: "name",
        width: "50%",
      },
      {
        title: "Horas",
        dataIndex: "hours",
        key: "hours",
        width: "10%",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (_text, record) => {
          return (
            <Tag color={colorCourseStatus(record.status)}>{record.status}</Tag>
          );
        },
        width: "10%",
      },
      {
        title: "Criado em",
        dataIndex: "createdAt",
        key: "createdAt",
        width: "10%",
        render: (text) => {
          return new Date(text).toLocaleDateString("pt-BR");
        },
      },
      {
        title: "Usuário",
        dataIndex: "user",
        key: "user",
        width: "10%",
        render: (text, record) => {
          return (
            <div>
              <p>{record.user.name}</p>
              <p>{record.user.email}</p>
            </div>
          );
        },
      },
      {
        title: "Ações",
        dataIndex: "actions",
        key: "actions",
        width: "10%",
        render: (text, record) => {
          return (
            <Space size="small" direction="vertical" align="center">
              <Space size="small">
                <Popconfirm
                  title="Deseja realmente aprovar este curso?"
                  onConfirm={() => {
                    console.log("approve");
                  }}
                  okText="Sim"
                  cancelText="Não"
                >
                  <Button
                    size="small"
                    style={{
                      backgroundColor: "#52c41a",
                      color: "#fff",
                    }}
                  >
                    Aprovar
                  </Button>
                </Popconfirm>
                <Popconfirm
                  title="Deseja realmente rejeitar este curso?"
                  onConfirm={() => {
                    console.log("reject");
                  }}
                  okText="Sim"
                  cancelText="Não"
                >
                  <Button
                    size="small"
                    style={{ backgroundColor: "#f5222d", color: "#fff" }}
                  >
                    Rejeitar
                  </Button>
                </Popconfirm>
              </Space>
              <Button
                onClick={() => {
                  setViewCourseId(record.id);
                  setModalViewCourseVisible(true);
                }}
                size="small"
              >
                Detalhes
              </Button>
            </Space>
          );
        },
      },
    ];
  }, []);

  return (
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
          title={"Cursos sob análise"}
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
            coursesSelectedIds.length > 0 && (
              <Space size="small">
                <Popconfirm
                  title="Deseja realmente aprovar os cursos selecionados?"
                  onConfirm={() => {
                    console.log("approve");
                  }}
                  okText="Sim"
                  cancelText="Não"
                >
                  <Button
                    style={{
                      backgroundColor: "#52c41a",
                      color: "#fff",
                    }}
                  >
                    Aprovar Selecionados
                  </Button>
                </Popconfirm>
                <Popconfirm
                  title="Deseja realmente arquivar os cursos selecionados?"
                  onConfirm={() => {
                    console.log("reject");
                  }}
                  okText="Sim"
                  cancelText="Não"
                >
                  <Button type="primary">Arquivar Selecionados</Button>
                </Popconfirm>
              </Space>
            )
          }
        >
          <Table
            loading={loading}
            size="small"
            pagination={{
              pageSize: 30,
              total: pagesCount,
              showSizeChanger: false,
              current: page,
              defaultCurrent: 1,
              hideOnSinglePage: true,
              onChange: (page) => {
                setPage(page);
                getDataSource({ page });
              },
            }}
            columns={columnsTable}
            dataSource={dataSource}
            rowKey={(record) => {
              return record.id;
            }}
            rowSelection={{
              type: "checkbox",
              selectedRowKeys: coursesSelectedIds,
              onChange: (_selectedRowKeys, selectedRows) => {
                setCoursesSelectedIds(selectedRows.map((course) => course.id));
              },
            }}
          />
        </Card>
        <CourseModalVisualization
          id={viewCourseId}
          visible={modalViewCourseVisible}
          setVisible={setModalViewCourseVisible}
        />
      </div>
    </div>
  );
}
