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

  lastCoursesChanges: [],
  lastTrailsChanges: [],
  countLastCourses: 0,
  countLastTrails: 0,
  loadingLastChanges: false,

  getLastCoursesTrailsChanges: thunk(async (actions) => {
    actions.setLoadingLastChanges(true);
    const courses = [
      {
        id: "1",
        action: "Criado",
        user: "usuario1",
        name: "Curso1",
        createdAt: "2022-05-08-20-30",
        createdBy: "Ricardin",
        updatedAt: "2023-01-01-19-03",
        updatedBy: "Ricardin",
        filedAt: "",
        filedBy: "",
        publishedAt: "2022-01-01-20-20",
        publishedBy: "Ricardin",
      },
      {
        id: "2",
        action: "Arquivado",
        user: "usuario2",
        name: "Curso2",
        createdAt: "2022-05-08-20-30",
        createdBy: "Ricardin",
        updatedAt: "2023-01-01-19-03",
        updatedBy: "Ricardin",
        filedAt: "",
        filedBy: "",
        publishedAt: "2022-01-01-20-20",
        publishedBy: "Ricardin",
      },
      {
        id: "3",
        action: "Atualizado",
        user: "usuario3",
        name: "Curso3",
        createdAt: "2022-05-08-20-30",
        createdBy: "Ricardin",
        updatedAt: "2023-01-01-19-03",
        updatedBy: "Ricardin",
        filedAt: "",
        filedBy: "",
        publishedAt: "2022-01-01-20-20",
        publishedBy: "Ricardin",
      },
    ];
    const trails = [
      {
        id: "101",
        action: "Criado",
        user: "usuario1",
        name: "Trilha1",
        createdAt: "2022-05-08-20-30",
        createdBy: "Zezin",
        updatedAt: "2023-01-01-19-03",
        updatedBy: "Ricardin",
        filedAt: "",
        filedBy: "",
        cursos: [courses[0], courses[1]],
      },
      {
        id: "102",
        action: "Arquivado",
        user: "usuario7",
        name: "Trilha2",
        createdAt: "2022-05-08-20-30",
        createdBy: "Zezin",
        updatedAt: "2023-01-01-19-03",
        updatedBy: "Ricardin",
        filedAt: "",
        filedBy: "",
        cursos: [courses[0], courses[2]],
      },
      {
        id: "103",
        action: "Atualizado",
        user: "usuario8",
        name: "Trilha3",
        createdAt: "2022-05-08-20-30",
        createdBy: "Zezin",
        updatedAt: "2023-01-01-19-03",
        updatedBy: "Ricardin",
        filedAt: "",
        filedBy: "",
        cursos: [courses[1], courses[2]],
      },
    ];

    actions.setCountLastCourses(courses.length);
    actions.setCountLastTrails(courses.length);

    setTimeout(() => {
      actions.setLastCoursesChanges(courses);
      actions.setLastTrailsChanges(trails);
      actions.setLoadingLastChanges(false);
    }, 2000);
  }),

  setLastCoursesChanges: action((state, payload) => {
    state.lastCoursesChanges = payload;
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
