import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { StoreProvider } from "easy-peasy";
import store from "./store";

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);