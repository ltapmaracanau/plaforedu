import AuthAxios from "./auth-axios";

export default {
  registerCatComp: (payload) =>
    AuthAxios.post("/competencies-category/new", {
      name: payload.name,
      description: payload.description,
    }),

  registerComp: (payload) =>
    AuthAxios.post("/competencies/new", {
      name: payload.name,
      description: payload.description,
      itinerariesIds: payload.itinerariesIds,
      competenciesCategoryIds: payload.competenciesCategoryIds,
    }),

  updateCatComp: (payload) =>
    AuthAxios.put(`/competencies-category/${payload.id}/update`, {
      name: payload.name,
      description: payload.description,
    }),

  updateComp: (payload) =>
    AuthAxios.put(`/competencies/${payload.id}/update`, {
      name: payload.name,
      competenciesCategoryIds: payload.competenciesCategoryIds,
      itinerariesIds: payload.itinerariesIds,
      description: payload.description,
    }),

  getCatComp: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/competencies-category/list?search=${payload.query}&includeFiled=${payload.showFiled}`
    ),

  getCompetencias: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/competencies/list?search=${payload.query}&includeFiled=${payload.showFiled}`
    ),

  archiveCatComp: (payload) =>
    AuthAxios.patch(`/competencies-category/${payload.id}/archive`),

  unarchiveCatComp: (payload) =>
    AuthAxios.patch(`/competencies-category/${payload.id}/unarchive`),

  archiveComp: (payload) =>
    AuthAxios.patch(`/competencies/${payload.id}/archive`),

  unarchiveComp: (payload) =>
    AuthAxios.patch(`/competencies/${payload.id}/unarchive`),
};
