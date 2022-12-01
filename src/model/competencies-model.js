import { action, thunk } from "easy-peasy";
import services from "../services";

const competenciasModel = {
  loading: false,
  registering: false,
  competencias: [],
  catComp: [],

  registerCatComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    try {
      await services.compService.registerCatComp({ ...payload });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  getCatComp: thunk(
    async (actions, payload = { query: "", showFiled: false }) => {
      actions.setLoading(true);
      try {
        await services.compService
          .getCatComp({
            query: payload.query,
            showFiled: payload.showFiled,
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
    try {
      await services.compService.updateCatComp({
        ...payload,
      });
      if (payload.filed !== undefined) {
        if (payload.filed) {
          await services.compService.archiveCatComp({ id: payload.id });
        } else {
          await services.compService.unarchiveCatComp({ id: payload.id });
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
    try {
      await services.compService.registerComp({ ...payload });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  updateComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    try {
      await services.compService.updateComp({ ...payload });
      if (payload.filed !== undefined) {
        if (payload.filed) {
          await services.compService.archiveComp({ id: payload.id });
        } else {
          await services.compService.unarchiveComp({ id: payload.id });
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
    try {
      await services.compService
        .getCompetencias({
          query: payload.query,
          showFiled: payload.showFiled,
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
