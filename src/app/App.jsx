import { useEffect } from "react";
import "./App.css";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Image, Spin } from "antd";

import CustomRoutes from "../routes/CustomRoutes";
import LogoPlafor from "../assets/LOGOPLAFORHEADER.svg";

function App() {
  const init = useStoreActions((actions) => actions.adm.init);
  const iniciando = useStoreState((state) => state.adm.iniciando);

  useEffect(() => {
    init();
  }, [init]);

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

  return <CustomRoutes />;
}

export default App;
