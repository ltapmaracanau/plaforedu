import { action, computed, thunk } from "easy-peasy";
import AuthAxios from "../services/authAxios";
import { dataService } from "../services/dataService";

const admModel = {
  tipoVisualizacao: false, // false: grafo, true: lista
  filterCollapsed: true, // true: filtro escondido, false: filtro visível
  loading: false,
  iniciando: true,
  isAuthenticated: true,

  myProfile: {},

  isAdm: computed((state) =>
    state.myProfile.UsersRoles?.some(
      (item) => item.role.name === "ADMINISTRADOR"
    )
  ),

  init: thunk(async (actions, _) => {
    const token = localStorage.getItem("token");
    if (token) {
      AuthAxios.defaults.headers.Authorization = `Bearer ${token}`;
      try {
        const myUser = await dataService.getMyProfile();
        actions.setMyProfile(myUser);
      } catch (error) {
        localStorage.removeItem("token");
        AuthAxios.defaults.headers.Authorization = undefined;
        actions.setIsAuthenticated(false);
      }
    } else {
      actions.setIsAuthenticated(false);
    }
    actions.setIniciando(false);
  }),

  login: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const authentication = await dataService.login({
      username: payload.username,
      password: payload.password,
    });
    if (authentication.token) {
      actions.setMyProfile(authentication.user);
      localStorage.removeItem("token");
      localStorage.setItem("token", authentication.token);
      AuthAxios.defaults.headers.Authorization = `Bearer ${authentication.token}`;
      actions.setIsAuthenticated(true);
    }
    actions.setLoading(false);
    return authentication;
  }),

  logout: thunk(async (actions, _) => {
    actions.setLoading(true);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    AuthAxios.defaults.headers.Authorization = undefined;
    actions.setIsAuthenticated(false);
    actions.setMyProfile({});
    actions.setLoading(false);
  }),

  forgetPassword: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const tryForgetPassword = await dataService.forgetPassword({
      username: payload.username,
    });
    actions.setLoading(false);
    return tryForgetPassword;
  }),

  resetPassword: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const tryResetPassword = await dataService.resetPassword({
      token: payload.token,
      password: payload.password,
    });
    actions.setLoading(false);
    return tryResetPassword;
  }),

  updatePassword: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const tryUpdatePassword = await dataService.updatePassword({ ...payload });
    const newUser = await dataService.getMyProfile();
    actions.setMyProfile(newUser);
    actions.setLoading(false);
    return tryUpdatePassword;
  }),

  logout: thunk(async (actions, _) => {
    actions.setLoading(true);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    AuthAxios.defaults.headers.Authorization = undefined;
    actions.setIsAuthenticated(false);
    actions.setMyProfile({});
    actions.setLoading(false);
  }),

  getMyProfile: thunk(async (actions, _) => {
    actions.setLoading(true);
    const myProfile = await dataService.getMyProfile();
    if (!myProfile.error) {
      actions.setMyProfile(myProfile);
    }
    actions.setLoading(false);
    return myProfile;
  }),

  // Setters

  setFilterCollapsed: action((state, _) => {
    state.filterCollapsed = !state.filterCollapsed;
  }),

  setTipoVisualizacao: action((state, payload) => {
    state.tipoVisualizacao = payload;
  }),

  setIsAuthenticated: action((state, payload) => {
    state.isAuthenticated = payload;
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setIniciando: action((state, payload) => {
    state.iniciando = payload;
  }),

  setMyProfile: action((state, payload) => {
    state.myProfile = payload;
  }),
};

export default admModel;
