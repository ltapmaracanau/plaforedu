import { notification } from "antd";
import axios from "axios";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AuthAxios = import.meta.env.PROD
  ? axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
  : axios.create({
      baseURL: "http://localhost:3333",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

const AuthAxiosInterceptors = [
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      notification.error({
        message: "Atenção!",
        description:
          "Sua sessão expirou, faça login novamente, você está sendo redirecionado...",
      });
      await wait(3000);
      window.location.href = "/login";
    }
    if (error.code && error.code === "ERR_NETWORK") {
      return Promise.reject("Sem conexão com o servidor");
    }
    return Promise.reject(
      error.response?.data?.message || error.message || "Erro Desconhecido"
    );
  },
];

export { AuthAxiosInterceptors };
export default AuthAxios;
