import { Button, Result } from "antd";

export default function Denied() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 64px)",
      }}
    >
      <Result
        status="403"
        title="403"
        subTitle="Desculpe, você não tem acesso a esta página."
        extra={
          <Button href="/" type="primary">
            Ir para Home
          </Button>
        }
      />
    </div>
  );
}
