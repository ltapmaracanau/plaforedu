import { action, thunk } from "easy-peasy";
import { login, forgetPassword, resetPassword } from "../services/dataService";

const admModel = {

  loading: false,

  isAuthenticated: false,

  user: {},

  init: thunk(async (actions, payload) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')
    if (user != null && token != null) {
      actions.setUser(user)
      // authAxios.defaults.headers.Authorization = `Bearer ${token}`;
      actions.setIsAuthenticated(true)
    }

  }),

  login: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const authentication = await login({ username: payload.username, password: payload.password })
    if (authentication.token) {
      localStorage.setItem('token', authentication.token)
      localStorage.setItem('user', JSON.stringify(authentication.user))
      actions.setIsAuthenticated(true)
      // authAxios.defaults.headers.Authorization = `Bearer ${authentication.token}`;
      actions.setUser(authentication.user)
    }
    actions.setLoading(false)
    return (authentication)
  }),

  registerNewUser: thunk(async (actions, payload) => {
    actions.setLoading(true)
    console.log('Criar novo usuário: ', payload);
    actions.setLoading(false)
    return ({ error: true })
  }),

  forgetPassword: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const tryForgetPassword = await forgetPassword({ username: payload.username })
    console.log('Esqueci senha: ', tryForgetPassword);
    actions.setLoading(false)
    return (tryForgetPassword)
  }),

  resetPassword: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const tryResetPassword = resetPassword({ token: payload.token, password: payload.password })
    console.log('Reset de senha: ', tryResetPassword);
    actions.setLoading(false)
    return (tryResetPassword)
  }),

  logout: thunk(async (actions, payload) => {
    actions.setLoading(true)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
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

  setUser: action((state, payload) => {
    state.user = payload;
  }),
};

export default admModel;
