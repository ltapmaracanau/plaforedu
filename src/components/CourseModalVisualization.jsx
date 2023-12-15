import {
  Button,
  Card,
  Descriptions,
  Empty,
  List,
  Modal,
  Skeleton,
  notification,
} from "antd";
import { useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";

export default function CourseModalVisualization(props) {
  const {
    id = null,
    visible = false,
    setVisible = () => {
      return;
    },
  } = props;

  const [uniqueCourse, setUniqueCourse] = useState(null);
  const [loadingUniqueCourse, setLoadingUniqueCourse] = useState(true);
  const getUniqueCourse = useStoreActions(
    (actions) => actions.courses.getUniqueCourse
  );

  useEffect(() => {
    async function init() {
      if (id) {
        setLoadingUniqueCourse(true);
        try {
          const course = await getUniqueCourse({ id });
          setUniqueCourse(course);
        } catch (error) {
          notification.error({
            message: "Erro ao buscar curso",
            description: error.message,
          });
        } finally {
          setLoadingUniqueCourse(false);
        }
      }
    }
    init();
  }, [getUniqueCourse, id]);

  return (
    <div>
      <Modal
        open={visible}
        onOk={() => {
          setVisible(false);
        }}
        key={`modalCurso`}
        onCancel={() => {
          setVisible(false);
        }}
        destroyOnClose={true}
        title={uniqueCourse?.name}
        centered={true}
        footer={[
          <Button
            type="primary"
            key={"buttonOk"}
            onClick={() => {
              setVisible(false);
            }}
          >
            Ok
          </Button>,
        ]}
      >
        {loadingUniqueCourse ? (
          <Skeleton active />
        ) : uniqueCourse !== null ? (
          <Descriptions column={1} bordered layout="vertical">
            <Descriptions.Item label="Descrição">
              {uniqueCourse?.description}
            </Descriptions.Item>
            <Descriptions.Item label="Carga Horária">
              {uniqueCourse?.hours}
            </Descriptions.Item>
            <Descriptions.Item label="Instituições Certificadoras">
              {uniqueCourse?.institutions?.map((inst) => (
                <Card key={inst.institutionId} bordered>
                  {inst.name}
                  <br />
                  <strong>Link: </strong>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    key={`link${inst.id}`}
                    href={inst.link}
                  >
                    {inst.link}
                  </a>
                </Card>
              ))}
            </Descriptions.Item>
            <Descriptions.Item label="Cursos equivalentes">
              <List
                locale={{
                  emptyText: <>Sem equivalentes</>,
                }}
                bordered
                dataSource={uniqueCourse?.equivalents?.filter(
                  (course) => !course.filedAt
                )}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <Button
                        key={item.id}
                        onClick={() => {
                          getUniqueCourse({ id: item.id });
                        }}
                      >
                        Visualizar
                      </Button>,
                    ]}
                    key={item.id}
                  >
                    {item.name}
                  </List.Item>
                )}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Acessibilidades">
              {uniqueCourse?.accessibilities?.map((ac) => ac.name).join(" | ")}
            </Descriptions.Item>
            <Descriptions.Item label="Taxonomia revisada de Bloom">
              {uniqueCourse?.taxonomies?.map((tx) => tx.name).join(" | ")}
            </Descriptions.Item>
            <Descriptions.Item label="Subtemas">
              {uniqueCourse?.subThemes
                ?.filter((sub) => !sub.filedAt)
                .map((sub) => sub.name)
                .join(" | ")}
            </Descriptions.Item>
          </Descriptions>
        ) : (
          <Empty description="Não foi possível encontrar o curso" />
        )}
      </Modal>
    </div>
  );
}
