import "antd/dist/antd.css";
import "./App.less";

import VLibras from "@djpfs/react-vlibras";

import HeaderGov from "../components/header/HeaderGov.jsx";
import FooterGov from "../components/footer/FooterGov.jsx";

import { Layout } from "antd";
import CustomRoutes from "../routes/routes";
import store from "../store";

function App() {

  var s = document.createElement("script");
  s.setAttribute("data-account", "yPtwRHQcX8");
  s.setAttribute("src", "https://cdn.userway.org/widget.js");
  document.body.appendChild(s);


  return (
    <StoreProvider store={store}>
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderGov />
        <CustomRoutes />
        <VLibras />
        <FooterGov />
      </Layout>
    </StoreProvider>
  );
}

export default App;
