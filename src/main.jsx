import ReactDOM from "react-dom/client";
import App from "./app/App";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);
