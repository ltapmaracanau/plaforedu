import AuthAxios from "./authAxios";

export default {
  registerCatComp: (payload) =>
    AuthAxios.post("/competencies-category/new", {
      name: payload.name,
      description: payload.description,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  registerComp: (payload) =>
    AuthAxios.post("/competencies/new", {
      name: payload.name,
      description: payload.description,
      competenciesCategoryIds: payload.competenciesCategoryIds,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCatComp: (payload) =>
    AuthAxios.put(`/competencies-category/${payload.id}/update`, {
      name: payload.name,
      description: payload.description,
    })
      .then(() => {})
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateComp: (payload) =>
    AuthAxios.put(`/competencies/${payload.id}/update`, {
      name: payload.name,
      competenciesCategory: payload.competenciesCategoryIds,
      description: payload.description,
    })
      .then(() => {})
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getCatComp: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/competencies-category/list?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getCompetencias: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/competencies/list?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  archiveCatComp: (payload) =>
    AuthAxios.patch(`/competencies-category/${payload.id}/archive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  unarchiveCatComp: (payload) =>
    AuthAxios.patch(`/competencies-category/${payload.id}/unarchive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  archiveComp: (payload) =>
    AuthAxios.patch(`/competencies/${payload.id}/archive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  unarchiveComp: (payload) =>
    AuthAxios.patch(`/competencies/${payload.id}/unarchive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),
};
