import { action, thunk } from "easy-peasy";
import { login } from "../services/dataService";

const admModel = {

  loading: false,

  isAuthenticated: false,

  loginIsVisible: false,

  login: thunk(async (actions, payload) => {
    actions.setLoading(true)
    const authentication = await login({ username: payload.username, password: payload.password })
    if (authentication.token) {
      localStorage.setItem('token', JSON.stringify(authentication.token))
      actions.setIsAuthenticated(true)
    }
    actions.setLoading(false)
    return (authentication)
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

  setLoginIsVisible: action((state, payload) => {
    state.loginIsVisible = payload;
  }),
};

export default admModel;
