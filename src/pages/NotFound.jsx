import { Button, Result } from "antd";

export default function NotFound() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Desculpe, a página que você visitou não existe."
        extra={<Button type="primary">Ir para Home</Button>}
      />
    </div>
  );
}
