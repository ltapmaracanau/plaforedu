import { action, thunk } from "easy-peasy";
import { authAxios } from "../services/authAxios";
import { login, forgetPassword, resetPassword, getRoles, createUser, updatePassword } from "../services/dataService";

const admModel = {

  loading: false,
  iniciando: false,
  roles: [],

  isAuthenticated: false,

  user: {},

  init: thunk(async (actions, _) => {
    actions.setIniciando(true)
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')
    if (user != null && token != null) {
      actions.setUser(user)
      authAxios.defaults.headers.Authorization = `Bearer ${token}`;
      actions.setIsAuthenticated(true)
    }
    actions.setIniciando(false)

  }),

  login: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const authentication = await login({ username: payload.username, password: payload.password })
    if (authentication.token) {
      if (authentication.user.status != 'PENDING') {
        localStorage.setItem('token', authentication.token)
        localStorage.setItem('user', JSON.stringify(authentication.user))
        actions.setUser(authentication.user)
        authAxios.defaults.headers.Authorization = `Bearer ${authentication.token}`;
        actions.setIsAuthenticated(true)
      }
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

  forgetPassword: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const tryForgetPassword = await forgetPassword({ username: payload.username })
    actions.setLoading(false)
    return (tryForgetPassword)
  }),

  resetPassword: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const tryResetPassword = await resetPassword({ token: payload.api_token, password: payload.password })
    actions.setLoading(false)
    return (tryResetPassword)
  }),

  updatePassword: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const tryUpdatePassword = await updatePassword({ ...payload })
    actions.setLoading(false)
    return (tryUpdatePassword)
  }),

  getRoles: thunk(async (actions, _) => {
    actions.setLoading(true)
    const roles = await getRoles()
    if (roles?.length > 0) {
      actions.setRoles(roles)
    }
    actions.setLoading(false)
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

  tipoVisualizacao: false, // false: grafo, true: lista

  filterCollapsed: true, // true: filter escondido, false: filter visível

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
};

export default admModel;
