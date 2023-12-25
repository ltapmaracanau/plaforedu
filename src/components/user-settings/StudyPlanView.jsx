import {
  Button,
  Card,
  Divider,
  Empty,
  List,
  Progress,
  Skeleton,
  Tag,
  Typography,
  notification,
} from "antd";
import { useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  EditOutlined,
  ArrowLeftOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import CourseModalVisualization from "../CourseModalVisualization";
import downloadBlob from "../../helpers/downloadBlob";

export default function StudyPlanView() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [studyPlan, setStudyPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
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
    async function init() {
      try {
        const plan = await getUniqueStudyPlan({ id });
        setStudyPlan(plan);
      } catch (error) {
        notification.error({
          message: "Erro ao buscar plano de estudo",
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [getUniqueStudyPlan, id]);

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
    return <Empty description="Plano de estudo não encontrado" />;
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
              <Progress type={"circle"} size={"small"} percent={0} />
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
          dataSource={studyPlan?.courses || []}
          renderItem={(item) => (
            <Card
              style={{
                width: "100%",
                marginBottom: "1rem",
              }}
              onClick={() => {
                setCourseModalVisualizationId(item.courseId);
                setCourseModalVisualizationVisible(true);
              }}
              key={item.courseId}
              hoverable
            >
              <Card.Meta
                title={item.name}
                description={
                  <div>
                    <Typography.Paragraph type="secondary">
                      Descrição Mock
                    </Typography.Paragraph>
                    {/* <div>
                      {item.institutions.map((institution) => (
                        <Tag key={institution.id} color="green">
                          {institution.name}
                        </Tag>
                      ))}
                    </div> */}
                    <div>
                      <Tag color="blue">Carga Horária: {item.hours} h</Tag>
                    </div>
                  </div>
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
