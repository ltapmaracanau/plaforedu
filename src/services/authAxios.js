import { notification } from "antd";
import axios from "axios";

const AuthAxios = import.meta.env.PROD
  ? axios.create({
      baseURL: import.meta.env.VITE_PRODUCTION_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    })
  : axios.create({
      baseURL: import.meta.env.VITE_DEVELOPMENT_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

// Set token to all requests
AuthAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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
          localStorage.removeItem("user");
          window.location.href = "/login";
        },
      });
    }
    return Promise.reject(error);
  }
);

export default AuthAxios;
