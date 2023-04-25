import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import "antd/dist/reset.css";

ReactDOM.render(
  <StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </StrictMode>,
  document.getElementById("root")
);
