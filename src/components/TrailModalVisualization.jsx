import { Button, Descriptions, Modal } from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";

export default function TrailModalVisualization(props) {
  const {
    id,
    visible,
    setVisible = () => {
      return;
    },
  } = props;

  const getUniqueTrail = useStoreActions(
    (action) => action.trilhas.getUniqueTrail
  );
  const uniqueTrail = useStoreState((state) => state.trilhas.uniqueTrail);

  const coursesSelectedTrail = useCallback(() => {
    return uniqueTrail.courses.map((curso) => {
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
    getUniqueTrail({ id: id });
  }, []);

  return (
    <>
      <Modal
        title={"Detalhes da Trilha"}
        open={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        destroyOnClose={true}
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
        {uniqueTrail && (
          <Descriptions
            column={1}
            bordered={true}
            layout="vertical"
            items={modalTrailItems}
          />
        )}
      </Modal>
    </>
  );
}
