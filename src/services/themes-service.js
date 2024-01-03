import AuthAxios from "./auth-axios";

export default {
  getThemes: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/themes/list?search=${payload.query}&includeFiled=${payload.showFiled}`
    ),

  getSubthemes: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/sub-themes/list?search=${payload.query}&includeFiled=${payload.showFiled}`
    ),

  registerTheme: (payload) =>
    AuthAxios.post("/themes/new", {
      name: payload.name,
    }),

  registerSubtheme: (payload) =>
    AuthAxios.post("/sub-themes/new", {
      name: payload.name,
      themeIds: payload.themeIds,
    }),

  updateSubtheme: (payload) =>
    AuthAxios.put(`/sub-themes/${payload.id}/update`, {
      name: payload.name,
      themes: payload.themeIds,
    }),

  updateTheme: (payload) =>
    AuthAxios.put(`/themes/${payload.id}/update`, {
      name: payload.name,
    }),

  archiveTheme: (payload) => AuthAxios.patch(`/themes/${payload.id}/archive`),

  unarchiveTheme: (payload) =>
    AuthAxios.patch(`/themes/${payload.id}/unarchive`),

  archiveSubtheme: (payload) =>
    AuthAxios.patch(`/sub-themes/${payload.id}/archive`),

  unarchiveSubtheme: (payload) =>
    AuthAxios.patch(`/sub-themes/${payload.id}/unarchive`),
};
