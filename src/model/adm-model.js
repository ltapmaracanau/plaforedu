import dayjs, { Dayjs } from "dayjs";
import { action, computed, thunk } from "easy-peasy";
import AuthAxios from "../services/authAxios";
import { dataService } from "../services/dataService";
import { notification } from "antd";

const admModel = {
  tipoVisualizacao: true, // false: grafo, true: lista
  filterCollapsed: true, // true: filtro escondido, false: filtro visível
  loading: false,
  loadingLogs: false,
  iniciando: true,
  downloadingSearchLogs: false,
  isAuthenticated: computed((_state) => !!dataService.getToken()),
  searchLogs: [],
  countLogs: 0,

  myProfile: computed((_state) => dataService.getLocalStorageUser()),
  allDataProfile: {},

  isActive: computed((state) => state.myProfile?.status === "ACTIVE"),

  isAdm: computed((state) =>
    state.myProfile?.roles?.some((item) => item === "ADMINISTRADOR")
  ),

  isCoord: computed((state) =>
    state.myProfile?.roles?.some((item) => item === "COORDENADOR")
  ),

  isCoordAVA: computed((state) =>
    state.myProfile?.roles?.some((item) => item === "COORDENADOR AVA")
  ),

  isAnalDados: computed((state) =>
    state.myProfile?.roles?.some((item) => item === "ANALISTA DE DADOS")
  ),

  init: thunk(async (actions, _, { getStoreActions }) => {
    try {
      await getStoreActions().itineraries.getItinerarios();
    } finally {
      actions.setIniciando(false);
    }
  }),

  login: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      const authentication = await dataService.login({
        username: payload.username,
        password: payload.password,
      });
      if (authentication.user.status === "PENDING") {
        notification.warning({
          message: "Aviso!",
          description:
            "Antes do acesso total ao sistema você precisa alterar sua senha!",
        });
      }
      localStorage.setItem("token", authentication.token);
      localStorage.setItem("user", JSON.stringify(authentication.user));
    } catch (e) {
      throw new Error(e);
    } finally {
      actions.setLoading(false);
    }
  }),

  logout: thunk(async (actions, _) => {
    actions.setLoading(true);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    AuthAxios.defaults.headers.Authorization = undefined;
    actions.setAllDataProfile({});
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
    const newUser = await dataService.getAllDataProfile();
    actions.setAllDataProfile(newUser);
    // set user in local storage
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        roles: newUser.roles.map((role) => role.name),
        status: newUser.status,
      })
    );
    actions.setLoading(false);
    return tryUpdatePassword;
  }),

  logout: thunk(async (actions, _) => {
    actions.setLoading(true);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    actions.setAllDataProfile({});
    actions.setLoading(false);
  }),

  getAllDataProfile: thunk(async (actions, _) => {
    actions.setLoading(true);
    try {
      const allDataProfile = await dataService.getAllDataProfile();
      actions.setAllDataProfile(allDataProfile);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setLoading(false);
    }
  }),

  getSearchLogs: thunk(async (actions, payload = {}) => {
    const { page = 1, description = "", user = "", date = undefined } = payload;
    actions.setLoadingLogs(true);
    try {
      const logs = await dataService.getSearchLogs({
        page: page,
        description: description.trim(),
        userName: user.trim(),
        initialDate: date ? date[0].format("YYYY-MM-DD") : "",
        finalDate: date ? date[1].format("YYYY-MM-DD") : "",
      });
      actions.setSearchLogs(logs.data);
      actions.setCountLogs(logs.count);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setLoadingLogs(false);
    }
  }),

  downloadSearchLogs: thunk(async (actions, payload) => {
    actions.setDownloadingSearchLogs(true);
    try {
      await dataService.downloadListLogs();
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setDownloadingSearchLogs(false);
    }
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

  setAllDataProfile: action((state, payload) => {
    state.allDataProfile = payload;
  }),

  setSearchLogs: action((state, payload) => {
    state.searchLogs = payload;
  }),

  setCountLogs: action((state, payload) => {
    state.countLogs = payload;
  }),

  setLoadingLogs: action((state, payload) => {
    state.loadingLogs = payload;
  }),

  setDownloadingSearchLogs: action((state, payload) => {
    state.downloadingSearchLogs = payload;
  }),
};

export default admModel;
