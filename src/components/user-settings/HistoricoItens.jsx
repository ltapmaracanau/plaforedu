import { RollbackOutlined } from "@ant-design/icons";
import { Button, Card, Space, Table } from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useMemo, useState } from "react";

export default function HistoricoItens(props) {
  const { itemHistorico, back, categoria, categoriaOptions, type } = props;

  const getLastCoursesTrailsChanges = useStoreActions(
    (actions) => actions.adm.getLastCoursesTrailsChanges
  );
  const lastDataChanges = useStoreState((state) => state.adm.lastDataChanges);
  const loadingLastChanges = useStoreState(
    (state) => state.adm.loadingLastChanges
  );

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getLastCoursesTrailsChanges({
      page: 1,
      id: itemHistorico.itemId,
    });
  }, [getLastCoursesTrailsChanges, itemHistorico, type]);

  const columns = [
    {
      title: "Usuario",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Ação de modificação",
      dataIndex: "action",
      key: "action",
    },
    {
      title: "Data de modificação",
      dataIndex: "date",
      key: "date",
    },
  ];

  const labelAction = useMemo(() => {
    return {
      CREATION: "Criação",
      ACTIVATION: "Ativação",
      UPDATE: "Atualização",
      FILING: "Arquivação",
      DELETION: "Remoção",
      TURN_PENDING: "Tornado Pendente",
    };
  }, []);

  const dataFormatada = (data) => {
    if (data != null) {
      const date = new Date(data);
      const formattedDate = date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      return formattedDate;
    }
    return null;
  };

  const lastDataChangesFiltered = useMemo(() => {
    const data = [];

    if (lastDataChanges.data != null) {
      lastDataChanges.data.map((item) => {
        data.push({
          id: item.id,
          action: labelAction[item.action],
          date: dataFormatada(item.date),
          userName: item.user.name,
        });
      });
    }
    return data;
  }, [labelAction, lastDataChanges.data]);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <Button
        icon={<RollbackOutlined />}
        onClick={() => back()}
        style={{ marginBottom: "10px" }}
      >
        Voltar
      </Button>

      <Card
        title={itemHistorico.name}
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
          ></Space>
        }
      >
        <Table
          columns={columns}
          dataSource={lastDataChangesFiltered}
          loading={loadingLastChanges}
          pagination={{
            pageSize: 30,
            total: lastDataChanges.count,
            showSizeChanger: false,
            current: pageNumber,
            defaultCurrent: 1,
            hideOnSinglePage: true,
            onChange: (page) => {
              setPageNumber(page);
              getLastCoursesTrailsChanges({ page: page, type: type });
            },
          }}
          rowKey={(record) => {
            return record.id;
          }}
          onRow={() => {
            return {};
          }}
        />
      </Card>
    </div>
  );
}
