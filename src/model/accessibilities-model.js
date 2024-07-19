import { action, thunk } from "easy-peasy";
import services from "../services";

const accessibilitiesModel = {
  loading: false,
  acessibilidades: [],

  getAcessibilidades: thunk(async (actions) => {
    actions.setLoading(true);
    return await services.admService
      .getAcessibilidades()
      .then((response) => {
        actions.setAcessibilidades(response.data);
        return response.data;
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
