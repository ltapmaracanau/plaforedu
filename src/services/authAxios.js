import axios from "axios";

const AuthAxios = axios.create({
  baseURL: "http://localhost:3333",
});

export default AuthAxios;
