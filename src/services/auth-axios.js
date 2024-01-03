import { notification } from "antd";
import axios from "axios";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AuthAxios = import.meta.env.PROD
  ? axios.create({
      baseURL: import.meta.env.VITE_PRODUCTION_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
  : axios.create({
      baseURL: import.meta.env.VITE_DEVELOPMENT_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

// Catch of 401 errors
AuthAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    if (error.response.status === 401) {
      localStorage.removeItem("profile");
      notification.error({
        message: "Atenção!",
        description:
          "Sua sessão expirou, faça login novamente, você está sendo redirecionado...",
      });
      await wait(3000);
      window.location.href = "/login";
    }
    return Promise.reject(
      error.response?.data?.message || error.message || "Erro Desconhecido"
    );
  }
);

export default AuthAxios;
