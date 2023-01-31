import AuthAxios from "./authAxios";

export const dataService = {
  getToken: () => {
    return localStorage.getItem("token");
  },

  login: (payload = { username: "", password: "" }) =>
    AuthAxios.post("/sessions", {
      email: payload.username,
      password: payload.password,
    })
      .then((response) => response.data)
      .catch((error) => ({
        error: true,
        message: error.response.data
          ? error.response.data.message
          : "Usuário e/ou senha incorretos!",
      })),

  createUser: (payload) =>
    AuthAxios.post("/users/new", {
      cpf: payload.cpf,
      email: payload.email,
      institution: payload.institution,
      name: payload.name,
      phone: payload.phone,
      roles: payload.roles,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  resendCredentials: (payload) =>
    AuthAxios.post(`/users/${payload.id}/resend-credentials`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateUser: (payload) =>
    AuthAxios.put(`/profile/${payload.id}/update`, {
      name: payload.name,
      email: payload.email,
      cpf: payload.cpf,
      institution: payload.institution,
      phone: payload.phone,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateUserRoles: (payload) =>
    AuthAxios.patch(`/profile/${payload.id}/update-roles`, {
      roles: payload.roles,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  blockUser: (payload) =>
    AuthAxios.patch(`/users/${payload.id}/block`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  archiveUser: (payload) =>
    AuthAxios.patch(`/users/${payload.id}/archive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  activeUser: (payload) =>
    AuthAxios.patch(`/users/${payload.id}/active`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  forgetPassword: (payload = { username: "" }) =>
    AuthAxios.post("/password/forgot", {
      email: payload.username,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  resetPassword: (payload = { token: "", password: "" }) =>
    AuthAxios.post("/password/reset", {
      token: payload.token,
      password: payload.password,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updatePassword: (payload = { oldPassword: "", newPassword: "" }) =>
    AuthAxios.patch("/password/update", {
      oldPassword: payload.oldPassword,
      newPassword: payload.newPassword,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getRoles: () =>
    AuthAxios.get("/roles/list")
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getItinerarios: () =>
    AuthAxios.get("/itineraries/list")
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getAcessibilidades: () =>
    AuthAxios.get("/accessibilities/list")
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getUsers: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/users/all?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getUniqueUser: (payload) =>
    AuthAxios.get(`/profile/${payload.id}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getMyProfile: () =>
    AuthAxios.get("/profile/me")
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getSearchLogs: (payload) =>
    AuthAxios.get(`/logs/all`, {
      params: {
        ...payload,
      },
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  downloadListLogs: () =>
    AuthAxios.get("/logs/export-csv")
      .then((value) => value)
      .catch((error) => {
        throw new Error(
          error.response?.data?.message || "Não foi possível fazer o download!"
        );
      }),
};
