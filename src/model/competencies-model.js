import { action, thunk } from "easy-peasy";
import services from "../services";

const competenciasModel = {
  loadingCompetencies: false,
  loadingCategCompetencies: false,
  registering: false,
  competencias: [],
  catComp: [],

  registerCatComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name = "", description = "" } = payload;
    return await services.compService
      .registerCatComp({
        name: name.trim(),
        description: description,
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  getCatComp: thunk(
    async (actions, payload = { query: "", showFiled: false }) => {
      actions.setLoadingCategCompetencies(true);
      const { query = "", showFiled = false } = payload;
      return await services.compService
        .getCatComp({
          query: query.trim(),
          showFiled: showFiled,
        })
        .then((response) => {
          actions.setCatComp(response.data);
        })
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          actions.setLoadingCategCompetencies(false);
        });
    }
  ),

  updateCatComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name, description, id } = payload;
    return await services.compService
      .updateCatComp({
        name: name.trim(),
        description,
        id,
      })
      .then(async () => {
        if (payload.filed !== undefined) {
          if (payload.filed) {
            await services.compService.archiveCatComp({ id });
          } else {
            await services.compService.unarchiveCatComp({ id });
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

  registerComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { name, description, competenciesCategoryIds } = payload;
    return await services.compService
      .registerComp({
        name: name.trim(),
        description,
        competenciesCategoryIds,
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  updateComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { id, name, description, competenciesCategoryIds, filed } = payload;
    return await services.compService
      .updateComp({
        id,
        name: name.trim(),
        description,
        competenciesCategoryIds,
      })
      .then(async () => {
        if (filed !== undefined) {
          if (filed) {
            await services.compService.archiveComp({ id });
          } else {
            await services.compService.unarchiveComp({ id });
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

  getComp: thunk(async (actions, payload = { query: "", showFiled: false }) => {
    actions.setLoadingCompetencies(true);
    const { query = "", showFiled = false } = payload;
    return await services.compService
      .getCompetencias({
        query: query.trim(),
        showFiled: showFiled,
      })
      .then((response) => {
        actions.setCompetencias(response.data);
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoadingCompetencies(false);
      });
  }),

  setLoadingCompetencies: action((state, payload) => {
    state.loadingCompetencies = payload;
  }),

  setLoadingCategCompetencies: action((state, payload) => {
    state.loadingCategCompetencies = payload;
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
