import { RollbackOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";

export default function HistoricoItens(props) {
  const { itemHistorico, back } = props;

  const dataSource = [
    {
      key: "1",
      user: "Senhor da lua",
      action: "arquivar",
      actionDate: "2020-10-11",
    },
    {
      key: "2",
      user: "Senhor do sol",
      action: "atualizar",
      actionDate: "2022-12-11",
    },
  ];

  const columns = [
    {
      title: "Usuario",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Ação de modificação",
      dataIndex: "action",
      key: "action",
    },
    {
      title: "Data de modificação",
      dataIndex: "actionDate",
      key: "actionDate",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        padding: "20px",
      }}
    >
      <Button icon={<RollbackOutlined />} onClick={() => back()}>
        Voltar
      </Button>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}
