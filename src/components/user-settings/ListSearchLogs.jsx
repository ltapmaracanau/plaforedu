import { Card, Empty, Layout, Table } from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";

const { Content } = Layout;

export default function ListSearchLogs() {
  const logs = useStoreState((state) => state.adm.searchLogs);
  const loading = useStoreState((state) => state.adm.loadingLogs);
  const getSearchLogs = useStoreActions((actions) => actions.adm.getSearchLogs);

  useEffect(() => {
    getSearchLogs();
  }, [getSearchLogs]);

  const columns = [
    {
      title: "Usuáro",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Busca",
      dataIndex: "string",
      key: "string",
    },
    {
      title: "Dia/Hora",
      dataIndex: "datetime",
      key: "datetime",
      render: (item) => {
        console.log(item);
        return <>{new Date(item).toLocaleString()}</>;
      },
    },
  ];

  return (
    <Layout
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px",
      }}
    >
      <Content style={{ width: "100%" }}>
        <Table
          dataSource={logs}
          loading={loading}
          rowKey={"id"}
          locale={{
            emptyText: (
              <Card>
                <Empty
                  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                  imageStyle={{
                    height: 80,
                  }}
                  description={<span>Base de dados de logs vazia!</span>}
                />
              </Card>
            ),
          }}
          columns={columns}
        />
      </Content>
    </Layout>
  );
}
