import { thunk, action } from "easy-peasy";
import services from "../services";

const instituicoesModel = {
  loading: false,
  registering: false,
  instituicoes: [],
  estados: [],

  registerNewInstitution: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name, abbreviation } = payload;
    return await services.institutionService
      .registerInstitution({
        name: name.trim(),
        abbreviation: abbreviation.trim(),
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  updateInstitution: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { id, name, abbreviation, uf, filed } = payload;
    return await services.institutionService
      .updateInstitution({
        id,
        name: name.trim(),
        abbreviation: abbreviation.trim(),
        uf,
      })
      .then(async () => {
        if (filed !== undefined) {
          if (filed) {
            await services.institutionService.archiveInstitution({
              id,
            });
          } else {
            await services.institutionService.unarchiveInstitution({
              id,
            });
          }
        }
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  getInstituicoes: thunk(
    async (actions, payload = { query: "", showFiled: false, page: 1 }) => {
      actions.setLoading(true);
      const { query = "", showFiled = false, page = 1 } = payload;
      return await services.institutionService
        .getInstituicoes({
          query: query.trim(),
          showFiled,
          page,
        })
        .then((response) => {
          actions.setInstituicoes(response.data);
          return response.data;
        })
        .catch((error) => {
          throw new Error(error.message);
        })
        .finally(() => {
          actions.setLoading(false);
        });
    }
  ),

  getStates: thunk(async (actions) => {
    return await services.institutionService
      .getStates()
      .then((response) => {
        actions.setEstados(response.data);
        return response.data;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setRegistering: action((state, payload) => {
    state.registering = payload;
  }),

  setInstituicoes: action((state, payload) => {
    state.instituicoes = payload;
  }),

  setEstados: action((state, payload) => {
    state.estados = payload;
  }),
};

export default instituicoesModel;
