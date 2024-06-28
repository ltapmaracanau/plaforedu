import { action, computed, thunk } from "easy-peasy";
import services from "../services";
import { notification } from "antd";
import AuthAxios, { AuthAxiosInterceptors } from "../services/auth-axios";

const admModel = {
  tipoVisualizacao: true, // false: grafo, true: lista
  filterCollapsed: true, // true: filtro escondido, false: filtro visível
  loading: false,
  loadingStatistics: false,
  iniciando: true,
  downloadingSearchLogs: false,
  myProfile: undefined,
  isAuthenticated: computed((state) => state.myProfile !== undefined),
  cookieConsentModalVisible: false,
  searchLogs: [],
  randomTrails: [],
  countLogs: 0,

  statistics: {},
  loadingInfo: false,

  lastDataChanges: [],
  loadingLastChanges: false,

  getLastCoursesTrailsChanges: thunk(
    async (actions, payload = { page: 1, type: "COURSES" }) => {
      actions.setLoadingLastChanges(true);

      return await services.admService
        .getCousesTrailsMovements(payload)
        .then((response) => {
          actions.setLDataChanges(response.data);
        })
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          actions.setLoadingLastChanges(false);
        });
    }
  ),

  setLDataChanges: action((state, payload) => {
    state.lastDataChanges = payload;
  }),
  setLastTrailsChanges: action((state, payload) => {
    state.lastTrailsChanges = payload;
  }),

  setCountLastCourses: action((state, payload) => {
    state.countLastCourses = payload;
  }),

  setCountLastTrails: action((state, payload) => {
    state.countLastTrails = payload;
  }),

  setLoadingLastChanges: action((state, payload) => {
    state.loadingLastChanges = payload;
  }),

  isActive: computed((state) => state.myProfile?.status === "ACTIVE"),

  isServidor: computed((state) =>
    state.myProfile?.UsersRoles?.some((item) => item.role.name === "SERVIDOR")
  ),

  isAdm: computed((state) =>
    state.myProfile?.UsersRoles?.some(
      (item) => item.role.name === "ADMINISTRADOR"
    )
  ),

  isCoord: computed((state) =>
    state.myProfile?.UsersRoles?.some(
      (item) => item.role.name === "COORDENADOR"
    )
  ),

  isCoordAVA: computed((state) =>
    state.myProfile?.UsersRoles?.some(
      (item) => item.role.name === "COORDENADOR AVA"
    )
  ),

  isAnalistaDados: computed((state) =>
    state.myProfile?.UsersRoles?.some(
      (item) => item.role.name === "ANALISTA DE DADOS"
    )
  ),

  isConsultor: computed((state) =>
    state.myProfile?.UsersRoles?.some((item) => item.role.name === "CONSULTOR")
  ),

  init: thunk(async (actions, _, { getStoreActions }) => {
    const myProfile = await services.loginService
      .getMyProfile()
      .then((response) => {
        actions.setMyProfile(response.data);
        return response.data;
      })
      .catch(() => {});
    if (myProfile?.data?.status === "PENDING") {
      notification.warning({
        message: "Aviso!",
        description:
          "Antes do acesso total ao sistema você precisa alterar sua senha!",
      });
    }
    AuthAxios.interceptors.response.use(...AuthAxiosInterceptors);
    try {
      await getStoreActions().itineraries.getItinerarios();
      await actions.getRandomTrails();
      await actions.getStatistics();
    } catch (error) {
      notification.error({
        message: "Erro!",
        description: error.message,
      });
    } finally {
      actions.setIniciando(false);
    }
  }),

  login: thunk(async (actions, payload) => {
    actions.setLoading(true);
    return await services.loginService
      .login({
        username: payload.username,
        password: payload.password,
      })
      .then((response) => {
        if (response.data?.status === "PENDING") {
          notification.warning({
            message: "Aviso!",
            description:
              "Antes do acesso total ao sistema você precisa alterar sua senha!",
          });
        }
        actions.getMyProfile();
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  logout: thunk(async (actions) => {
    await services.loginService
      .logout()
      .then(() => {
        actions.setMyProfile(undefined);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }),

  getRandomTrails: thunk(async (actions) => {
    actions.setLoading(true);
    return await services.admService
      .getRandomTrailsHomepage()
      .then((response) => {
        if (response.status === 200) {
          actions.setRandomTrails(response.data.formativeTrails);
        }
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  forgotPassword: thunk(async (actions, payload) => {
    actions.setLoading(true);
    return await services.loginService
      .forgotPassword({
        username: payload.username,
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  resetPassword: thunk(async (actions, payload) => {
    actions.setLoading(true);
    await services.loginService
      .resetPassword({
        token: payload.token,
        password: payload.password,
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  updatePassword: thunk(async (actions, payload) => {
    actions.setLoading(true);
    return await services.loginService
      .updatePassword({
        ...payload,
      })
      .then(() => {
        actions.getMyProfile();
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  getMyProfile: thunk(async (actions) => {
    actions.setLoading(true);
    await services.loginService
      .getMyProfile()
      .then((response) => {
        actions.setMyProfile(response.data);
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  getSearchLogs: thunk(async (actions, payload = {}) => {
    const { page = 1, description = "", user = "", date = undefined } = payload;
    actions.setLoadingLogs(true);
    return await services.admService
      .getSearchLogs({
        page: page,
        description: description.trim(),
        userName: user.trim(),
        initialDate: date ? date[0].format("YYYY-MM-DD") : "",
        finalDate: date ? date[1].format("YYYY-MM-DD") : "",
      })
      .then((response) => {
        actions.setSearchLogs(response.data.data);
        actions.setCountLogs(response.data.count);
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoadingLogs(false);
      });
  }),

  downloadSearchLogs: thunk(async (actions) => {
    actions.setDownloadingSearchLogs(true);
    return await services.admService
      .downloadListLogs()
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setDownloadingSearchLogs(false);
      });
  }),

  getStatistics: thunk(async (actions) => {
    actions.setLoadingStatistics(true);
    return await services.admService
      .getStatistics()
      .then((response) => {
        actions.setStatistics(response.data);
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoadingStatistics(false);
      });
  }),

  // Setters

  setStatistics: action((state, payload) => {
    state.statistics = payload;
  }),

  setLoadingStatistics: action((state, payload) => {
    state.loadingStatistics = payload;
  }),

  setFilterCollapsed: action((state) => {
    state.filterCollapsed = !state.filterCollapsed;
  }),

  setTipoVisualizacao: action((state, payload) => {
    state.tipoVisualizacao = payload;
  }),

  setIsAuthenticated: action((state, payload) => {
    state.isAuthenticated = payload;
  }),

  setCookieConsentModalVisible: action((state, payload) => {
    state.cookieConsentModalVisible = payload;
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

  setRandomTrails: action((state, payload) => {
    state.randomTrails = payload;
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
