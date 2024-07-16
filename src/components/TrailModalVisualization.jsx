import {
  Button,
  Descriptions,
  Empty,
  Modal,
  notification,
  Skeleton,
} from "antd";
import { useStoreActions } from "easy-peasy";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function TrailModalVisualization(props) {
  const {
    id = null,
    visible = false,
    setVisible = () => {
      return;
    },
  } = props;

  const getUniqueTrail = useStoreActions(
    (action) => action.trilhas.getUniqueTrail
  );

  const [uniqueTrail, setUniqueTrail] = useState(null);
  const [loadingUniqueTrail, setLoadingUniqueTrail] = useState(false);

  const coursesSelectedTrail = useCallback(() => {
    return uniqueTrail.courses?.map((curso) => {
      return <li key={curso.id}>{curso.name}</li>;
    });
  }, [uniqueTrail]);

  const modalTrailItems = useMemo(() => {
    if (uniqueTrail) {
      return [
        {
          key: "name",
          label: "Nome",
          children: uniqueTrail.name,
        },
        {
          key: "description",
          label: "Descrição",
          children: uniqueTrail.description,
        },
        {
          key: "courses",
          label: "Cursos",
          children: <ul>{coursesSelectedTrail()}</ul>,
        },
      ];
    }
    return null;
  }, [uniqueTrail]);

  useEffect(() => {
    async function init() {
      if (id) {
        setLoadingUniqueTrail(true);
        try {
          const trail = await getUniqueTrail({ id: id });
          setUniqueTrail(trail);
        } catch (error) {
          notification.error({
            message: "Erro ao buscar trilha",
            description: error.message,
          });
        } finally {
          setLoadingUniqueTrail(false);
        }
      }
    }
    init();
  }, [getUniqueTrail, id, visible]);

  return (
    <>
      <Modal
        title={"Detalhes da Trilha"}
        open={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        destroyOnClose={true}
        loading={loadingUniqueTrail}
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
        {uniqueTrail ? (
          <Descriptions
            column={1}
            bordered={true}
            layout="vertical"
            items={modalTrailItems}
          />
        ) : (
          <Empty description="Não foi possível encontrar a trilha" />
        )}
      </Modal>
    </>
  );
}
