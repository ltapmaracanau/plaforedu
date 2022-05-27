import "antd/dist/antd.css";
import "./App.less";

import VLibras from "@djpfs/react-vlibras";

import HeaderGov from "../components/header/HeaderGov.jsx";
import FooterGov from "../components/footer/FooterGov.jsx";

import { Layout } from "antd";
import CustomRoutes from "../routes/routes";
import { useEffect } from "react";
import { useStoreActions } from "easy-peasy";

function App() {

  const init = useStoreActions(actions => actions.adm.init)

  var s = document.createElement("script");
  s.setAttribute("data-account", "yPtwRHQcX8");
  s.setAttribute("src", "https://cdn.userway.org/widget.js");
  document.body.appendChild(s);

  useEffect(() => {
    init()
  }, [init])


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
