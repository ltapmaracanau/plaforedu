import { notification } from "antd";
import axios from "axios";

const AuthAxios = axios.create({
  baseURL: "http://plaforedu.iticdigital.com.br",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Catch of 401 errors
AuthAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      notification.error({
        message: "Erro",
        description:
          "Sua sessão expirou, faça login novamente, você está sendo redirecionado.",
        onClose: () => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        },
      });
    }
    return Promise.reject(error);
  }
);

export default AuthAxios;
