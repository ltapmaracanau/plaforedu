import { action, computed, thunk } from "easy-peasy";
import { authAxios } from "../services/authAxios";
import {
  login,
  forgetPassword,
  resetPassword,
  getRoles,
  createUser,
  updatePassword,
  registerCourse,
  getAcessibilidades,
  getItinerarios,
  getMyProfile,
  getInstituicoes,
} from "../services/dataService";

const admModel = {

  tipoVisualizacao: false, // false: grafo, true: lista
  filterCollapsed: true, // true: filter escondido, false: filter visível
  loading: false,
  iniciando: false,
  roles: [],
  itinerarios: [],
  acessibilidades: [],
  instituicoes: [],

  isAuthenticated: false,

  user: {},

  isAdm: computed((state) => state.user.roles?.includes("ADMINISTRADOR")),

  init: thunk(async (actions, _) => {
    actions.setIniciando(true)
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')
    if (user && token) {
      authAxios.defaults.headers.Authorization = `Bearer ${token}`;
      const myUser = await getMyProfile();

      user.status = myUser.status

      actions.setUser(user)
      actions.setIsAuthenticated(true)

      if (myUser.error) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        authAxios.defaults.headers.Authorization = undefined;
        actions.setIsAuthenticated(false)
        actions.setUser({})
      }

    }
    actions.setIniciando(false)

  }),

  login: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const authentication = await login({ username: payload.username, password: payload.password })
    if (authentication.token) {
      actions.setUser(authentication.user)
      localStorage.setItem('token', authentication.token)
      localStorage.setItem('user', JSON.stringify(authentication.user))
      authAxios.defaults.headers.Authorization = `Bearer ${authentication.token}`;
      actions.setIsAuthenticated(true)
    }
    actions.setLoading(false)
    return (authentication)
  }),

  registerNewUser: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const newUser = await createUser({ ...payload })
    actions.setLoading(false)
    return (newUser)
  }),

  registerNewCourse: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const newCourse = await registerCourse({ ...payload })
    actions.setLoading(false)
    return (newCourse)
    //return { error: true, message: "Não conectado ao back!" }
  }),

  forgetPassword: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const tryForgetPassword = await forgetPassword({ username: payload.username })
    actions.setLoading(false)
    return (tryForgetPassword)
  }),

  resetPassword: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const tryResetPassword = await resetPassword({ token: payload.token, password: payload.password })
    actions.setLoading(false)
    return (tryResetPassword)
  }),

  updatePassword: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const tryUpdatePassword = await updatePassword({ ...payload })
    await getMyProfile().then((result) => {
      if (!result.error) {
        actions.setUserStatus(result.status)
      }
    })
    actions.setLoading(false)
    return (tryUpdatePassword)
  }),

  logout: thunk(async (actions, _) => {
    actions.setLoading(true)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    authAxios.defaults.headers.Authorization = undefined;
    actions.setIsAuthenticated(false)
    actions.setUser({})
    actions.setLoading(false)
  }),

  // Getters

  getRoles: thunk(async (actions, _) => {
    actions.setLoading(true)
    const roles = await getRoles()
    if (roles?.length > 0) {
      actions.setRoles(roles)
    }
    actions.setLoading(false)
  }),

  getItinerarios: thunk(async (actions, _) => {
    actions.setLoading(true)
    const itinerarios = await getItinerarios();
    if (itinerarios?.length > 0) {
      actions.setItinerarios(itinerarios)
    }
    actions.setLoading(false)
  }),

  getAcessibilidades: thunk(async (actions, _) => {
    actions.setLoading(true)
    const itinerarios = await getAcessibilidades();
    if (itinerarios?.length > 0) {
      actions.setAcessibilidades(itinerarios)
    }
    actions.setLoading(false)
  }),

  getInstituicoes: thunk(async (actions, _) => {
    actions.setLoading(true)
    const instituicoes = await getInstituicoes();
    if (instituicoes?.length > 0) {
      actions.setInstituicoes(instituicoes)
    }
    actions.setLoading(false)
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

  setRoles: action((state, payload) => {
    state.roles = payload;
  }),

  setUser: action((state, payload) => {
    state.user = payload;
  }),

  setUserStatus: action((state, payload) => {
    state.user.status = payload;
  }),

  setItinerarios: action((state, payload) => {
    state.itinerarios = payload;
  }),

  setAcessibilidades: action((state, payload) => {
    state.acessibilidades = payload;
  }),

  setInstituicoes: action((state, payload) => {
    state.instituicoes = payload;
  }),
};

export default admModel;
