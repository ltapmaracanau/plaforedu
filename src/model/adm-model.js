import { action, computed, thunk } from "easy-peasy";
import AuthAxios from "../services/authAxios";
import {
  login,
  forgetPassword,
  resetPassword,
  getRoles,
  createUser,
  resendCredentials,
  updatePassword,
  registerCourse,
  updateInstitution,
  blockUser,
  archiveUser,
  activeUser,
  updateCourse,
  updateUser,
  getAcessibilidades,
  getItinerarios,
  getUsers,
  getMyProfile,
  getUniqueUser,
  getInstituicoes,
  getCursos,
  registerInstitution,
  getCompetencias,
  getCatComp,
  registerCatComp,
  registerComp,
  getSubthemes,
  getThemes,
  registerTheme,
  registerSubtheme,
} from "../services/dataService";

const admModel = {
  tipoVisualizacao: false, // false: grafo, true: lista
  filterCollapsed: true, // true: filter escondido, false: filter visível
  loading: false,
  loadingSecondary: false,
  iniciando: true,
  roles: [],
  itinerarios: [],
  acessibilidades: [],
  instituicoes: [],
  competencias: [],
  themes: [],
  subthemes: [],
  catComp: [],
  cursos: [],
  users: [],

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
        const myUser = await getMyProfile();
        actions.setMyProfile(myUser);
      } catch (error) {
        localStorage.removeItem("token");
        AuthAxios.defaults.headers.Authorization = undefined;
      }
    } else {
      actions.setIsAuthenticated(false);
    }
    actions.setIniciando(false);
  }),

  // POSTS

  login: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const authentication = await login({
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

  registerNewUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setLoading(true);
    const newUser = await createUser({ ...payload });
    actions.setLoading(false);
    return newUser;
  }),

  registerNewCourse: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const newCourse = await registerCourse({ ...payload });
    actions.setLoading(false);
    return newCourse;
    // return { error: true, message: "Não conectado ao back!" }
  }),

  registerNewInstitution: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const newInstitution = await registerInstitution({ ...payload });
    actions.setLoading(false);
    return newInstitution;
    //return { error: true, message: "Não conectado ao back!" }
  }),

  registerCatComp: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const newCat = await registerCatComp({ ...payload });
    actions.setLoading(false);
    return newCat;
    // return { error: true, message: "Não conectado ao back!" }
  }),

  registerComp: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const newComp = await registerComp({ ...payload });
    actions.setLoading(false);
    return newComp;
    // return { error: true, message: "Não conectado ao back!" }
  }),

  registerTheme: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const theme = await registerTheme({ ...payload });
    actions.setLoading(false);
    return theme;
    // return { error: true, message: "Não conectado ao back!" }
  }),

  registerSubtheme: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const subtheme = await registerSubtheme({ ...payload });
    actions.setLoading(false);
    return subtheme;
    // return { error: true, message: "Não conectado ao back!" }
  }),

  forgetPassword: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const tryForgetPassword = await forgetPassword({
      username: payload.username,
    });
    actions.setLoading(false);
    return tryForgetPassword;
  }),

  resendCredentials: thunk(async (actions, payload) => {
    actions.setLoadingSecondary(true);
    const tryResendCredentials = await resendCredentials({ ...payload });
    actions.setLoadingSecondary(false);
    return tryResendCredentials;
  }),

  resetPassword: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const tryResetPassword = await resetPassword({
      token: payload.token,
      password: payload.password,
    });
    actions.setLoading(false);
    return tryResetPassword;
  }),

  // PUTS

  updateUser: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const tryUpdateUser = await updateUser({ ...payload });
    actions.setLoading(false);
    return tryUpdateUser;
  }),

  blockUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setLoading(true);
    const tryBlockUser = await blockUser({ id: payload.id });
    actions.setLoading(false);
    return tryBlockUser;
  }),

  archiveUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setLoading(true);
    const tryArchiveUser = await archiveUser({ id: payload.id });
    actions.setLoading(false);
    return tryArchiveUser;
  }),

  activeUser: thunk(async (actions, payload = { id: "" }) => {
    actions.setLoading(true);
    const tryActiveUser = await activeUser({ id: payload.id });
    actions.setLoading(false);
    return tryActiveUser;
  }),

  updateCourse: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const tryUpdateCourse = await updateCourse({ ...payload });
    actions.setLoading(false);
    return tryUpdateCourse;
    //return { error: true, message: "Não conectado ao back!" }
  }),

  updateInstitution: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const tryUpdateInstitution = await updateInstitution({ ...payload });
    actions.setLoading(false);
    return tryUpdateInstitution;
    //return { error: true, message: "Não conectado ao back!" }
  }),

  updatePassword: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const tryUpdatePassword = await updatePassword({ ...payload });
    const newUser = await getMyProfile();
    actions.setMyProfile(newUser);
    actions.setLoading(false);
    return tryUpdatePassword;
  }),

  // ELSE

  logout: thunk(async (actions, _) => {
    actions.setLoading(true);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    AuthAxios.defaults.headers.Authorization = undefined;
    actions.setIsAuthenticated(false);
    actions.setMyProfile({});
    actions.setLoading(false);
  }),

  // Getters

  getCoursesInfoRelated: thunk(async (actions, _) => {
    actions.setLoading(true);
    const itinerarios = await getItinerarios();
    if (itinerarios?.length > 0) {
      actions.setItinerarios(itinerarios);
    }
    const acessibilidades = await getAcessibilidades();
    if (acessibilidades?.length > 0) {
      actions.setAcessibilidades(acessibilidades);
    }
    const instituicoes = await getInstituicoes();
    if (instituicoes?.length > 0) {
      actions.setInstituicoes(instituicoes);
    }
    actions.setLoading(false);
  }),

  getItinerarios: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const itinerarios = await getItinerarios({ query: payload.query });
    if (itinerarios?.length > 0) {
      actions.setItinerarios(itinerarios);
    }
    actions.setLoading(false);
  }),

  getRoles: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const roles = await getRoles({ query: payload.query });
    if (roles?.length > 0) {
      actions.setRoles(roles);
    }
    actions.setLoading(false);
  }),

  getAcessibilidades: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const acessibilidades = await getAcessibilidades({ query: payload.query });
    if (acessibilidades?.length > 0) {
      actions.setAcessibilidades(acessibilidades);
    }
    actions.setLoading(false);
  }),

  getInstituicoes: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const instituicoes = await getInstituicoes({ query: payload.query });
    if (instituicoes?.length >= 0) {
      actions.setInstituicoes(instituicoes);
    }
    actions.setLoading(false);
  }),

  getComp: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const competencias = await getCompetencias({ query: payload.query });
    if (competencias?.length >= 0) {
      actions.setCompetencias(competencias);
    }
    actions.setLoading(false);
  }),

  getCatComp: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const catComp = await getCatComp({ query: payload.query });
    if (catComp?.length >= 0) {
      actions.setCatComp(catComp);
    }
    actions.setLoading(false);
  }),

  getThemes: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const themes = await getThemes({ query: payload.query });
    if (themes?.length >= 0) {
      actions.setThemes(themes);
    }
    actions.setLoading(false);
  }),

  getSubthemes: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const subthemes = await getSubthemes({ query: payload.query });
    if (subthemes?.length >= 0) {
      actions.setSubthemes(subthemes);
    }
    actions.setLoading(false);
  }),

  getCursos: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const cursos = await getCursos({ query: payload.query });
    if (cursos?.length >= 0) {
      actions.setCursos(cursos);
    }
    actions.setLoading(false);
  }),

  getUsers: thunk(async (actions, payload = { query: "", showFiled: "" }) => {
    const { query = "", showFiled = "" } = payload;
    actions.setLoading(true);
    const users = await getUsers({
      query: query,
      showFiled: showFiled,
    });
    if (users?.length >= 0) {
      actions.setUsers(users);
    }
    actions.setLoading(false);
  }),

  getUniqueUser: thunk(async (actions, payload = { id: "" }) => {
    const user = await getUniqueUser({ id: payload.id });
    if (user) {
      return user;
    }
  }),

  getMyProfile: thunk(async (actions, _) => {
    actions.setLoading(true);
    const myProfile = await getMyProfile();
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

  setLoadingSecondary: action((state, payload) => {
    state.loadingSecondary = payload;
  }),

  setIniciando: action((state, payload) => {
    state.iniciando = payload;
  }),

  setRoles: action((state, payload) => {
    state.roles = payload;
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

  setCompetencias: action((state, payload) => {
    state.competencias = payload;
  }),

  setCatComp: action((state, payload) => {
    state.catComp = payload;
  }),

  setThemes: action((state, payload) => {
    state.themes = payload;
  }),

  setSubthemes: action((state, payload) => {
    state.subthemes = payload;
  }),

  setCursos: action((state, payload) => {
    state.cursos = payload;
  }),

  setUsers: action((state, payload) => {
    state.users = payload;
  }),

  setMyProfile: action((state, payload) => {
    state.myProfile = payload;
  }),
};

export default admModel;
