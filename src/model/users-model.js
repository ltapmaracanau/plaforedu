import { action, thunk } from "easy-peasy";
import { dataService } from "../services/dataService";

const usuariosModel = {
  loading: false,
  registering: false,
  users: [],

  getUsers: thunk(async (actions, payload = { query: "", showFiled: "" }) => {
    const { query = "", showFiled = false } = payload;
    actions.setLoading(true);
    const users = await dataService.getUsers({
      query: query.trim(),
      showFiled: showFiled,
    });
    if (users?.length >= 0) {
      actions.setUsers(users);
    }
    actions.setLoading(false);
  }),

  getUniqueUser: thunk(async (actions, payload = { id: "" }) => {
    const user = await dataService.getUniqueUser({ id: payload.id });
    if (user) {
      return user;
    }
  }),

  registerNewUser: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { cpf, email, institution, name, phone, roles } = payload;
    try {
      await dataService.createUser({
        cpf,
        email: email.trim(),
        institution: institution.trim(),
        name: name.trim(),
        phone,
        roles,
      });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  updateUser: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { id, name, email, cpf, institution, phone, roles } = payload;
    try {
      await dataService.updateUser({
        id,
        name: name.trim(),
        email: email.trim(),
        cpf,
        institution: institution.trim(),
        phone,
      });
      await dataService.updateUserRoles({
        id,
        roles,
      });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  blockUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setRegistering(true);
    try {
      await dataService.blockUser({ id: payload.id });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  archiveUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setRegistering(true);
    try {
      await dataService.archiveUser({ id: payload.id });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  activeUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setRegistering(true);
    try {
      await dataService.activeUser({ id: payload.id });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setRegistering: action((state, payload) => {
    state.registering = payload;
  }),

  setUsers: action((state, payload) => {
    state.users = payload;
  }),
};

export default usuariosModel;
