import { action, thunk } from "easy-peasy";
import { dataService } from "../services/dataService";

const competenciasModel = {
  loading: false,
  registering: false,
  competencias: [],
  catComp: [],

  registerCatComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const newCat = await dataService.registerCatComp({ ...payload });
    actions.setRegistering(false);
    return newCat;
  }),

  getCatComp: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const catComp = await dataService.getCatComp({ query: payload.query });
    if (catComp?.length >= 0) {
      actions.setCatComp(catComp);
    }
    actions.setLoading(false);
  }),

  updateCatComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const tryUpdateCatComp = await dataService.updateCatComp({ ...payload });
    actions.setRegistering(false);
    return tryUpdateCatComp;
  }),

  registerComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const newComp = await dataService.registerComp({ ...payload });
    actions.setRegistering(false);
    return newComp;
  }),

  updateComp: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const tryUpdateComp = await dataService.updateComp({ ...payload });
    actions.setRegistering(false);
    return tryUpdateComp;
  }),

  getComp: thunk(async (actions, payload = { query: "" }) => {
    actions.setLoading(true);
    const competencias = await dataService.getCompetencias({
      query: payload.query,
    });
    if (competencias?.length >= 0) {
      actions.setCompetencias(competencias);
    }
    actions.setLoading(false);
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
