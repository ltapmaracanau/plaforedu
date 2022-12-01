import AuthAxios from "./authAxios";

export default {
  registerInstitution: (payload) =>
    AuthAxios.post("/institutions/new", {
      name: payload.name,
      abbreviation: payload.abbreviation,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateInstitution: (payload) =>
    AuthAxios.put(`/institutions/${payload.id}/update`, {
      name: payload.name,
      abbreviation: payload.abbreviation,
      uf: payload.uf,
    })
      .then(() => ({}))
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getInstituicoes: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/institutions/all?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getEstados: () =>
    AuthAxios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  archiveInstitution: (payload) =>
    AuthAxios.patch(`/institutions/${payload.id}/archive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  unarchiveInstitution: (payload) =>
    AuthAxios.patch(`/institutions/${payload.id}/unarchive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),
};
