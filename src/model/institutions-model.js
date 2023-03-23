import { thunk, action } from "easy-peasy";
import services from "../services";

const instituicoesModel = {
  loading: false,
  loadingEstados: false,
  registering: false,
  instituicoes: [],
  estados: [],

  registerNewInstitution: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name, abbreviation } = payload;
    try {
      await services.institutionService.registerInstitution({
        name: name.trim(),
        abbreviation: abbreviation.trim(),
      });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  updateInstitution: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { id, name, abbreviation } = payload;
    try {
      await services.institutionService.updateInstitution({
        id,
        name: name.trim(),
        abbreviation: abbreviation.trim(),
      });
      if (payload.filed !== undefined) {
        if (payload.filed) {
          await services.institutionService.archiveInstitution({
            id,
          });
        } else {
          await services.institutionService.unarchiveInstitution({
            id,
          });
        }
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  getInstituicoes: thunk(
    async (actions, payload = { query: "", showFiled: false }) => {
      actions.setLoading(true);
      const { query = "", showFiled = false } = payload;
      try {
        await services.institutionService
          .getInstituicoes({
            query: query.trim(),
            showFiled,
          })
          .then((instituicoes) => {
            if (instituicoes?.length >= 0) {
              actions.setInstituicoes(instituicoes);
            }
          });
      } catch (error) {
        throw new Error(error.message);
      } finally {
        actions.setLoading(false);
      }
    }
  ),

  getEstados: thunk(async (actions, _) => {
    actions.setLoadingEstados(true);
    try {
      await services.institutionService.getEstados().then((estados) => {
        if (estados?.length >= 0) {
          actions.setEstados(estados);
        }
      });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setLoadingEstados(false);
    }
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setLoadingEstados: action((state, payload) => {
    state.loadingEstados = payload;
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
