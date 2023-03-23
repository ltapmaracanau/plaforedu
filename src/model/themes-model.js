import { action, thunk } from "easy-peasy";
import services from "../services";

import { temasDefault, subtemasDefault } from "../services/mockData";

const temasModel = {
  loading: false,
  registering: false,
  themes: [],
  themesSecondary: temasDefault,
  subthemes: [],
  subthemesSecondary: subtemasDefault,

  getThemes: thunk(
    async (actions, payload = { query: "", showFiled: false }) => {
      actions.setLoading(true);
      const { query = "", showFiled = false } = payload;
      try {
        await services.themesService
          .getThemes({
            query: query.trim(),
            showFiled: showFiled,
          })
          .then((themes) => {
            if (themes?.length >= 0) {
              actions.setThemes(themes);
            }
          });
      } catch (error) {
        throw new Error(error.message);
      } finally {
        actions.setLoading(false);
      }
    }
  ),

  registerTheme: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name } = payload;
    try {
      await services.themesService.registerTheme({ name: name.trim() });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  updateTheme: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name, id } = payload;
    try {
      await services.themesService.updateTheme({ name: name.trim(), id });
      if (payload.filed !== undefined) {
        if (payload.filed) {
          await services.themesService.archiveTheme({
            id,
          });
        } else {
          await services.themesService.unarchiveTheme({
            id,
          });
        }
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  updateSubtheme: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { id, name, themeIds } = payload;
    try {
      await services.themesService.updateSubtheme({
        id,
        name: name.trim(),
        themeIds,
      });
      if (payload.filed !== undefined) {
        if (payload.filed) {
          await services.themesService.archiveSubtheme({
            id,
          });
        } else {
          await services.themesService.unarchiveSubtheme({
            id,
          });
        }
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  getSubthemes: thunk(
    async (actions, payload = { query: "", showFiled: false }) => {
      actions.setLoading(true);
      const { query = "", showFiled = false } = payload;
      try {
        await services.themesService
          .getSubthemes({
            query: query.trim(),
            showFiled: showFiled,
          })
          .then((subthemes) => {
            if (subthemes?.length >= 0) {
              actions.setSubthemes(subthemes);
            }
          });
      } catch (error) {
        throw new Error(error.message);
      } finally {
        actions.setLoading(false);
      }
    }
  ),

  registerSubtheme: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name, themeIds } = payload;
    try {
      await services.themesService.registerSubtheme({
        name: name.trim(),
        themeIds,
      });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
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
