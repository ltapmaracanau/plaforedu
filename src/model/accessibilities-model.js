import { action, thunk } from "easy-peasy";
import services from "../services";

const accessibilitiesModel = {
  loading: false,
  acessibilidades: [],

  getAcessibilidades: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    await services.admService
      .getAcessibilidades({
        query: payload.query.trim(),
      })
      .then((response) => {
        if (response.status === 200) {
          actions.setAcessibilidades(response.data);
        }
      })
      .catch((error) => {
        throw new Error(
          error.response?.data?.message || "Erro ao buscar acessibilidades"
        );
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setAcessibilidades: action((state, payload) => {
    state.acessibilidades = payload;
  }),
};

export default accessibilitiesModel;
