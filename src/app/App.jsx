import { useEffect } from "react";
import "./App.css";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Image, Spin } from "antd";

import CustomRoutes from "../routes/CustomRoutes";
import LogoPlafor from "../assets/LOGOPLAFORHEADER.svg";

function App() {
  /**
   * Armazenando estado para controlar a inicialização do sistema
   * a partir da ação armazenada init
   * useStoreActions e useStoreState funcionam para abstrair os 
   * parâmetros passados e facilitar o uso de suas funções ao longo 
   * do código para dominuir a verbosidade
   */
  const init = useStoreActions((actions) => actions.adm.init);
  const iniciando = useStoreState((state) => state.adm.iniciando);

  useEffect(() => {
    init();
  }, [init]);

  /**
   * Retornar spinner ao esperar o carregamento das rotas
   * em função do estado iniciando
   */
  if (iniciando) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "column",
        }}
      >
        <div
          style={{
            backgroundColor: "#2d56a0",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <Image
            preview={false}
            height="55px"
            style={{ padding: "5px" }}
            src={LogoPlafor}
          />
        </div>
        <Spin size="large" />
      </div>
    );
  }

  // Puxando o controle de rotas e layout do site após carregamento  
  return <CustomRoutes />;
}

export default App;
