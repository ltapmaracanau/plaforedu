import { action, thunk } from "easy-peasy";
import { dataService } from "../services/dataService";

const accessibilitiesModel = {
  loading: false,
  acessibilidades: [],

  getAcessibilidades: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const acessibilidades = await dataService.getAcessibilidades({
      query: payload.query.trim(),
    });
    if (acessibilidades?.length > 0) {
      actions.setAcessibilidades(acessibilidades);
    }
    actions.setLoading(false);
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setAcessibilidades: action((state, payload) => {
    state.acessibilidades = payload;
  }),
};

export default accessibilitiesModel;
