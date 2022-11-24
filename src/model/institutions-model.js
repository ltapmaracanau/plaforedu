import { thunk, action } from "easy-peasy";
import { dataService } from "../services/dataService";

const instituicoesModel = {
  loading: false,
  loadingEstados: false,
  registering: false,
  instituicoes: [],
  estados: [],

  registerNewInstitution: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const newInstitution = await dataService.registerInstitution({
      ...payload,
    });
    actions.setRegistering(false);
    return newInstitution;
  }),

  updateInstitution: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const tryUpdateInstitution = await dataService.updateInstitution({
      ...payload,
    });
    actions.setRegistering(false);
    return tryUpdateInstitution;
  }),

  getInstituicoes: thunk(
    async (actions, payload = { query: "", showFiled: false }) => {
      actions.setLoading(true);
      const instituicoes = await dataService.getInstituicoes(payload);
      if (instituicoes?.length >= 0) {
        actions.setInstituicoes(instituicoes);
      }
      actions.setLoading(false);
    }
  ),

  getEstados: thunk(async (actions, _) => {
    actions.setLoadingEstados(true);
    const estados = await dataService.getEstados();
    if (estados?.length >= 0) {
      actions.setEstados(estados);
    }
    actions.setLoadingEstados(false);
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
