import { useStoreActions } from "easy-peasy";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import downloadBlob from "../../helpers/downloadBlob";
import CourseModalVisualization from "../CourseModalVisualization";

import {
  EditOutlined,
  ArrowLeftOutlined,
  DownloadOutlined,
  CheckCircleFilled,
  PlayCircleFilled,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Card,
  Divider,
  Empty,
  Input,
  List,
  Progress,
  Skeleton,
  Space,
  Tag,
  Tooltip,
  Typography,
  notification,
} from "antd";

export default function StudyPlanView() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [studyPlan, setStudyPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [searchCourse, setSearchCourse] = useState("");
  const [courseModalVisualizationVisible, setCourseModalVisualizationVisible] =
    useState(false);
  const [courseModalVisualizationId, setCourseModalVisualizationId] =
    useState(null);

  const getUniqueStudyPlan = useStoreActions(
    (actions) => actions.studyPlans.getUniqueStudyPlan
  );
  const downloadStudyPlansCourses = useStoreActions(
    (actions) => actions.studyPlans.downloadStudyPlansCourses
  );
  const initCourseAction = useStoreActions(
    (actions) => actions.studyPlans.initStudyPlanCourse
  );

  const onDownloadCSV = async ({ id }) => {
    setDownloading(true);
    try {
      const data = await downloadStudyPlansCourses({ id });
      downloadBlob(data, "CursosPlanoDeEstudoPlafor.csv");
    } catch (error) {
      notification.error({
        message: "Erro ao exportar CSV",
        description: error.message,
      });
    } finally {
      setDownloading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        const plan = await getUniqueStudyPlan({ id });
        setStudyPlan(plan);
      } catch (error) {
        notification.error({
          message: "Erro ao buscar plano de desenvolvimento",
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [id, getUniqueStudyPlan]);

  const setStatus = useCallback(
    async ({ courseId, status }) => {
      try {
        await initCourseAction({
          planId: id,
          courseId: courseId,
          status: status,
        });
        notification.success({
          message: "Status definido com sucesso!",
        });
        const plan = await getUniqueStudyPlan({ id });
        setStudyPlan(plan);
      } catch (error) {
        notification.error({
          message: "Erro ao iniciar curso",
          description: error.message,
        });
      }
    },
    [initCourseAction, getUniqueStudyPlan, id]
  );

  const filtredCourses = useMemo(() => {
    return studyPlan?.courses
      .filter((course) => {
        return course.name.toLowerCase().includes(searchCourse.toLowerCase());
      })
      .sort((a, b) => {
        // PRIMEIRO OS INICIADOS
        // DEPOIS OS PENDENTES
        // DEPOIS OS CONCLUÍDOS
        if (a.status === "IN_PROGRESS" && b.status !== "IN_PROGRESS") {
          return -1;
        }
        if (a.status !== "IN_PROGRESS" && b.status === "IN_PROGRESS") {
          return 1;
        }
        if (a.status === "UNINITIALIZED" && b.status !== "UNINITIALIZED") {
          return -1;
        }
        if (a.status !== "UNINITIALIZED" && b.status === "UNINITIALIZED") {
          return 1;
        }
        if (a.status === "CONCLUDED" && b.status !== "CONCLUDED") {
          return 1;
        }
        if (a.status !== "CONCLUDED" && b.status === "CONCLUDED") {
          return -1;
        }

        return 0;
      });
  }, [studyPlan, searchCourse]);

  if (loading) {
    return (
      <div
        style={{
          padding: "1rem",
        }}
      >
        <Skeleton active paragraph={{ rows: 4 }} title={{ width: "100%" }} />
      </div>
    );
  }

  if (!studyPlan) {
    return <Empty description="plano de desenvolvimento não encontrado" />;
  }

  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <Card
        style={{
          width: "100%",
        }}
      >
        <Card.Meta
          title={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {studyPlan?.name}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Button
                  icon={<DownloadOutlined />}
                  loading={downloading}
                  onClick={async () => {
                    await onDownloadCSV({ id });
                  }}
                >
                  Exportar CSV
                </Button>
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => {
                    navigate(`/settings/study-plans/edit/${studyPlan.id}`);
                  }}
                >
                  Editar
                </Button>
              </div>
            </div>
          }
          avatar={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button
                icon={<ArrowLeftOutlined />}
                style={{ marginRight: "5px" }}
                type="text"
                shape="circle"
                onClick={() => {
                  navigate("/settings/study-plans");
                }}
              />
              <Progress
                type={"circle"}
                size={"small"}
                percent={studyPlan.percentage?.toFixed(0) || 0}
              />
            </div>
          }
          description={
            <div>
              <Typography.Paragraph type="secondary">
                {studyPlan?.description}
              </Typography.Paragraph>
              <Tag color="blue">
                Carga Horária Total:{" "}
                {studyPlan.courses.reduce((acc, curr) => acc + curr.hours, 0)} h
              </Tag>
            </div>
          }
        />
        <Divider>Cursos do Plano</Divider>
        <List
          header={
            <Space>
              <Input.Search
                value={searchCourse}
                onChange={(e) => setSearchCourse(e.target.value)}
                onSearch={(value) => setSearchCourse(value)}
                placeholder="Buscar curso"
                style={{ width: "300px" }}
              />
            </Space>
          }
          locale={{
            emptyText: <Empty description="Nenhum curso encontrado" />,
          }}
          dataSource={filtredCourses}
          renderItem={(item) => (
            <Card
              style={{
                width: "100%",
                marginBottom: "1rem",
              }}
              key={item.courseId}
              title={
                <Space>
                  <Button
                    type="text"
                    onClick={() => {
                      setCourseModalVisualizationId(item.courseId);
                      setCourseModalVisualizationVisible(true);
                    }}
                  >
                    <Typography.Title
                      style={{
                        margin: 0,
                        maxWidth: "300px",
                      }}
                      ellipsis={{ tooltip: true }}
                      level={5}
                    >
                      {item.name}
                    </Typography.Title>
                  </Button>
                  {item.status === "FILED" && (
                    <Tag color="orange">ARQUIVADO</Tag>
                  )}
                  {item.status === "IN_PROGRESS" ? (
                    <Tag color="green">EM ANDAMENTO</Tag>
                  ) : item.status === "CONCLUDED" ? (
                    <Tag color="blue">CONCLUÍDO</Tag>
                  ) : (
                    <Tag color="red">PENDENTE</Tag>
                  )}
                </Space>
              }
              extra={
                <Space>
                  <Tooltip
                    title={
                      item.status === "CONCLUDED" ||
                      item.status === "IN_PROGRESS"
                        ? "Curso iniciado"
                        : "Iniciar Curso"
                    }
                  >
                    <Badge
                      count={
                        item.status !== "UNINITIALIZED" ? (
                          <CheckCircleFilled
                            style={{
                              fontSize: 16,
                              color: "green",
                            }}
                          />
                        ) : null
                      }
                    >
                      <Button
                        type="primary"
                        size="middle"
                        disabled={item.status !== "UNINITIALIZED"}
                        shape="circle"
                        icon={
                          <PlayCircleFilled
                            style={{
                              fontSize: 30,
                            }}
                          />
                        }
                        onClick={() => {
                          setStatus({
                            courseId: item.courseId,
                            status: "IN_PROGRESS",
                          });
                        }}
                      />
                    </Badge>
                  </Tooltip>
                  <Tooltip
                    title={
                      item.status === "CONCLUDED"
                        ? "Curso já concluído!"
                        : item.status === "UNINITIALIZED"
                        ? "Necessário iniciar o curso!"
                        : "Concluir Curso"
                    }
                  >
                    <Badge
                      count={
                        item.status === "CONCLUDED" ? (
                          <CheckCircleFilled
                            style={{
                              fontSize: 16,
                              color: "green",
                            }}
                          />
                        ) : null
                      }
                    >
                      <Button
                        type="primary"
                        size="middle"
                        shape="circle"
                        icon={
                          <CheckCircleFilled
                            style={{
                              fontSize: 30,
                            }}
                          />
                        }
                        disabled={
                          item.status === "UNINITIALIZED" ||
                          item.status === "CONCLUDED"
                        }
                        onClick={() => {
                          setStatus({
                            courseId: item.courseId,
                            status: "CONCLUDED",
                          });
                        }}
                      />
                    </Badge>
                  </Tooltip>
                </Space>
              }
            >
              <Card.Meta
                description={
                  <Space direction="vertical">
                    <Typography.Paragraph
                      style={{
                        marginBottom: 0,
                      }}
                      type="secondary"
                    >
                      {item.description}
                    </Typography.Paragraph>
                    <Space
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                      }}
                    >
                      {item.institutions.map((institution) => (
                        <Tag key={institution.id} color="green">
                          {institution.name}
                        </Tag>
                      ))}
                    </Space>
                    <div>
                      <Tag color="blue">Carga Horária: {item.hours} h</Tag>
                    </div>
                  </Space>
                }
              />
            </Card>
          )}
        />
        <CourseModalVisualization
          id={courseModalVisualizationId}
          visible={courseModalVisualizationVisible}
          setVisible={setCourseModalVisualizationVisible}
        />
      </Card>
    </div>
  );
}
