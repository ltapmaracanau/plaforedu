import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "./App.less";

import VLibras from "@djpfs/react-vlibras";

import HeaderGov from "../components/header/HeaderGov.jsx";
import FooterGov from "../components/footer/FooterGov.jsx";

import LogoPlafor from "../assets/LOGOPLAFORHEADER.svg";

import { Image, Layout, Spin } from "antd";
import CustomRoutes from "../routes/routes";
import { useStoreActions, useStoreState } from "easy-peasy";

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
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderGov />
      <CustomRoutes />
      <VLibras />
      <FooterGov />
    </Layout>
  );
}

export default App;
