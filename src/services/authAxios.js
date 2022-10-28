import axios from "axios";

const AuthAxios = axios.create({
  baseURL: "http://plaforedu.iticdigital.com.br",
  headers: { "Content-Type": "application/json" },
});

export default AuthAxios;
