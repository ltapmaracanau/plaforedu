import { action, thunk } from "easy-peasy";
import services from "../services";

const temasModel = {
  loadingThemes: false,
  loadingSubthemes: false,
  registering: false,
  themes: [],
  subthemes: [],

  getThemes: thunk(
    async (actions, payload = { query: "", showFiled: false, page: 1 }) => {
      actions.setLoadingThemes(true);
      const { query = "", showFiled = false, page = 1 } = payload;
      return await services.themesService
        .getThemes({
          query: query.trim(),
          showFiled: showFiled,
          page,
        })
        .then((response) => {
          actions.setThemes(response.data);
          return response.data;
        })
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          actions.setLoadingThemes(false);
        });
    }
  ),

  registerTheme: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name } = payload;
    return await services.themesService
      .registerTheme({ name: name.trim() })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  updateTheme: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name, id, filed } = payload;
    return await services.themesService
      .updateTheme({ name: name.trim(), id })
      .then(async () => {
        if (filed !== undefined) {
          if (filed) {
            await services.themesService.archiveTheme({
              id,
            });
          } else {
            await services.themesService.unarchiveTheme({
              id,
            });
          }
        }
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  updateSubtheme: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { id, name, themeIds, filed } = payload;
    return await services.themesService
      .updateSubtheme({
        id,
        name: name.trim(),
        themeIds,
      })
      .then(async () => {
        if (filed !== undefined) {
          if (filed) {
            await services.themesService.archiveSubtheme({
              id,
            });
          } else {
            await services.themesService.unarchiveSubtheme({
              id,
            });
          }
        }
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  getSubthemes: thunk(
    async (actions, payload = { query: "", showFiled: false, page: 1 }) => {
      actions.setLoadingSubthemes(true);
      const { query = "", showFiled = false, page = 1 } = payload;
      return await services.themesService
        .getSubthemes({
          query: query.trim(),
          showFiled: showFiled,
          page,
        })
        .then((response) => {
          actions.setSubthemes(response.data);
          return response.data;
        })
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          actions.setLoadingSubthemes(false);
        });
    }
  ),

  registerSubtheme: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name, themeIds } = payload;
    return await services.themesService
      .registerSubtheme({
        name: name.trim(),
        themeIds,
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  setLoadingThemes: action((state, payload) => {
    state.loadingThemes = payload;
  }),

  setLoadingSubthemes: action((state, payload) => {
    state.loadingSubthemes = payload;
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
