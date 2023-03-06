import React, { useEffect } from "react";
import "./App.css";
import { useStoreActions, useStoreState } from "easy-peasy";
import { ConfigProvider, Image, Spin } from "antd";

import VLibras from "@djpfs/react-vlibras";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import HeaderGov from "../components/header/HeaderGov.jsx";
import FooterGov from "../components/footer/FooterGov.jsx";
import CustomRoutes from "../routes/CustomRoutes";
import LogoPlafor from "../assets/LOGOPLAFORHEADER.svg";

function App() {
  const init = useStoreActions((actions) => actions.adm.init);
  const iniciando = useStoreState((state) => state.adm.iniciando);

  var s = document.createElement("script");
  s.setAttribute("data-account", "yPtwRHQcX8");
  s.setAttribute("src", "https://cdn.userway.org/widget.js");
  document.body.appendChild(s);

  useEffect(() => {
    (async () => {
      await init();
    })();
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
        <Spin size="large" tip={"Carregando..."} />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexFlow: "column",
        minHeight: "100vh",
      }}
    >
      <ConfigProvider
        locale={dayjs}
        theme={{
          token: {},
          components: {
            Card: {
              //colorFillAlter: "linear-gradient(to right, #2C55A1, #35A8E0)",
              //fontWeight: "bold",
            },
            Modal: {},
          },
        }}
      >
        <HeaderGov />
        <CustomRoutes />
        <VLibras />
        <FooterGov />
      </ConfigProvider>
    </div>
  );
}

export default App;
