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
      query: query,
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
    console.log(payload);
    actions.setRegistering(true);
    const newUser = await dataService.createUser({ ...payload });
    actions.setRegistering(false);
    return newUser;
  }),

  updateUser: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const tryUpdateUser = await dataService.updateUser({ ...payload });
    actions.setRegistering(false);
    return tryUpdateUser;
  }),

  blockUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setRegistering(true);
    const tryBlockUser = await dataService.blockUser({ id: payload.id });
    actions.setRegistering(false);
    return tryBlockUser;
  }),

  archiveUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setRegistering(true);
    const tryArchiveUser = await dataService.archiveUser({ id: payload.id });
    actions.setRegistering(false);
    return tryArchiveUser;
  }),

  activeUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setRegistering(true);
    const tryActiveUser = await dataService.activeUser({ id: payload.id });
    actions.setRegistering(false);
    return tryActiveUser;
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
