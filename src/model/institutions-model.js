import { thunk, action } from "easy-peasy";
import { dataService } from "../services/dataService";

const instituicoesModel = {
  loading: false,
  registering: false,
  instituicoes: [],

  registerNewInstitution: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const newInstitution = await dataService.registerInstitution({
      ...payload,
    });
    actions.setLoading(false);
    return newInstitution;
  }),

  updateInstitution: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const tryUpdateInstitution = await dataService.updateInstitution({
      ...payload,
    });
    actions.setLoading(false);
    return tryUpdateInstitution;
  }),

  getInstituicoes: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const instituicoes = await dataService.getInstituicoes({
      query: payload.query,
    });
    if (instituicoes?.length >= 0) {
      actions.setInstituicoes(instituicoes);
    }
    actions.setLoading(false);
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
};

export default instituicoesModel;
