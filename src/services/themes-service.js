import AuthAxios from "./authAxios";

export default {
  getThemes: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/themes/list?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getSubthemes: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/sub-themes/list?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  registerTheme: (payload) =>
    AuthAxios.post("/themes/new", {
      name: payload.name,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  registerSubtheme: (payload) =>
    AuthAxios.post("/sub-themes/new", {
      name: payload.name,
      themeIds: payload.themeIds,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateSubtheme: (payload) =>
    AuthAxios.put(`/sub-themes/${payload.id}/update`, {
      name: payload.name,
      themes: payload.themeIds,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateTheme: (payload) =>
    AuthAxios.put(`/themes/${payload.id}/update`, {
      name: payload.name,
    })
      .then(() => {})
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  archiveTheme: (payload) =>
    AuthAxios.patch(`/themes/${payload.id}/archive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  unarchiveTheme: (payload) =>
    AuthAxios.patch(`/themes/${payload.id}/unarchive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  archiveSubtheme: (payload) =>
    AuthAxios.patch(`/sub-themes/${payload.id}/archive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  unarchiveSubtheme: (payload) =>
    AuthAxios.patch(`/sub-themes/${payload.id}/unarchive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),
};
