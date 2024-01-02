import { action, thunk } from "easy-peasy";
import services from "../services";

const rolesModel = {
  loading: false,
  roles: [],

  getRoles: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    return await services.admService
      .getRoles({
        query: payload.query.trim(),
      })
      .then((response) => {
        actions.setRoles(response.data);
      })
      .catch((error) => {
        throw new Error(error.message);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  setRoles: action((state, payload) => {
    state.roles = payload;
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
};

export default rolesModel;
