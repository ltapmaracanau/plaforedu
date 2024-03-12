import axios from "axios";
import AuthAxios from "./auth-axios";

export default {
  registerInstitution: (payload) =>
    AuthAxios.post("/institutions/new", {
      name: payload.name,
      abbreviation: payload.abbreviation,
      uf: payload.uf,
    }),

  updateInstitution: (payload) =>
    AuthAxios.put(`/institutions/${payload.id}/update`, {
      name: payload.name,
      abbreviation: payload.abbreviation,
      uf: payload.uf,
    }),

  getInstituicoes: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/institutions/all?search=${payload.query}&includeFiled=${payload.showFiled}`
    ),

  getStates: () =>
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`),

  archiveInstitution: (payload) =>
    AuthAxios.patch(`/institutions/${payload.id}/archive`),

  unarchiveInstitution: (payload) =>
    AuthAxios.patch(`/institutions/${payload.id}/unarchive`),
};
