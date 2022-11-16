import { action, thunk } from "easy-peasy";
import { dataService } from "../services/dataService";

const temasModel = {
  loading: false,
  registering: false,
  themes: [],
  subthemes: [],

  getThemes: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const themes = await dataService.getThemes({ query: payload.query });
    if (themes?.length >= 0) {
      actions.setThemes(themes);
    }
    actions.setLoading(false);
  }),

  registerTheme: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const theme = await dataService.registerTheme({ ...payload });
    actions.setRegistering(false);
    return theme;
  }),

  updateTheme: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const tryUpdateTheme = await dataService.updateTheme({ ...payload });
    actions.setRegistering(false);
    return tryUpdateTheme;
  }),

  getSubthemes: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const subthemes = await dataService.getSubthemes({ query: payload.query });
    if (subthemes?.length >= 0) {
      actions.setSubthemes(subthemes);
    }
    actions.setLoading(false);
  }),

  registerSubtheme: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const subtheme = await dataService.registerSubtheme({ ...payload });
    actions.setRegistering(false);
    return subtheme;
  }),

  updateSubtheme: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const tryUpdate = await dataService.updateSubtheme({ ...payload });
    actions.setRegistering(false);
    return tryUpdate;
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setRegistering: action((state, payload) => {
    state.registering = payload;
  }),

  setThemes: action((state, payload) => {
    state.themes = payload;
  }),

  setSubthemes: action((state, payload) => {
    state.subthemes = payload;
  }),
};

export default temasModel;
