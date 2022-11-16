import { action, thunk } from "easy-peasy";
import { dataService } from "../services/dataService";

const rolesModel = {
  loading: false,
  roles: [],

  getRoles: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const roles = await dataService.getRoles({ query: payload.query });
    if (roles?.length > 0) {
      actions.setRoles(roles);
    }
    actions.setLoading(false);
  }),

  setRoles: action((state, payload) => {
    state.roles = payload;
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
};

export default rolesModel;
