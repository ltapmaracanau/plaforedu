import AuthAxios from "./auth-axios";

export default {
  getProfile: () => {
    if (!localStorage.getItem("profile")) return null;
    return JSON.parse(localStorage.getItem("profile"));
  },

  login: (payload = { username: "", password: "" }) =>
    AuthAxios.post("/sessions", {
      email: payload.username,
      password: payload.password,
    }),

  logout: () => AuthAxios.post("/sign-out"),

  forgotPassword: (payload = { username: "" }) =>
    AuthAxios.post("/password/forgot", {
      email: payload.username,
    }),

  resetPassword: (payload = { token: "", password: "" }) =>
    AuthAxios.post("/password/reset", {
      token: payload.token,
      password: payload.password,
    }),

  updatePassword: (payload = { oldPassword: "", newPassword: "" }) =>
    AuthAxios.patch("/password/update", {
      oldPassword: payload.oldPassword,
      newPassword: payload.newPassword,
    }),

  getAllDataProfile: () => AuthAxios.get("/profile/me"),
};
