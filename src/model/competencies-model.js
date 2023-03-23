import { action, thunk } from "easy-peasy";
import services from "../services";

const competenciasModel = {
  loading: false,
  registering: false,
  competencias: [],
  catComp: [],

  registerCatComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name = "", description = "" } = payload;
    try {
      await services.compService.registerCatComp({
        name: name.trim(),
        description: description,
      });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  getCatComp: thunk(
    async (actions, payload = { query: "", showFiled: false }) => {
      actions.setLoading(true);
      const { query = "", showFiled = false } = payload;
      try {
        await services.compService
          .getCatComp({
            query: query.trim(),
            showFiled: showFiled,
          })
          .then((list) => {
            if (list?.length >= 0) {
              actions.setCatComp(list);
            }
          });
      } catch (error) {
        throw new Error(error.message);
      } finally {
        actions.setLoading(false);
      }
    }
  ),

  updateCatComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name, description, id } = payload;
    try {
      await services.compService.updateCatComp({
        name: name.trim(),
        description,
        id,
      });
      if (payload.filed !== undefined) {
        if (payload.filed) {
          await services.compService.archiveCatComp({ id });
        } else {
          await services.compService.unarchiveCatComp({ id });
        }
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  registerComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name, description, competenciesCategoryIds } = payload;
    try {
      await services.compService.registerComp({
        name: name.trim(),
        description,
        competenciesCategoryIds,
      });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  updateComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { id, name, description, competenciesCategoryIds } = payload;
    try {
      await services.compService.updateComp({
        id,
        name: name.trim(),
        description,
        competenciesCategoryIds,
      });
      if (payload.filed !== undefined) {
        if (payload.filed) {
          await services.compService.archiveComp({ id });
        } else {
          await services.compService.unarchiveComp({ id });
        }
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  getComp: thunk(async (actions, payload = { query: "", showFiled: false }) => {
    actions.setLoading(true);
    const { query = "", showFiled = false } = payload;
    try {
      await services.compService
        .getCompetencias({
          query: query.trim(),
          showFiled: showFiled,
        })
        .then((competencias) => {
          if (competencias?.length >= 0) {
            actions.setCompetencias(competencias);
          }
        });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setLoading(false);
    }
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setRegistering: action((state, payload) => {
    state.registering = payload;
  }),

  setCompetencias: action((state, payload) => {
    state.competencias = payload;
  }),

  setCatComp: action((state, payload) => {
    state.catComp = payload;
  }),
};

export default competenciasModel;
