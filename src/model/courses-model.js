import { action, computed, thunk, thunkOn } from "easy-peasy";
import services from "../services";

import reformuladorDeElementosCytoscape from "../helpers/reformuladorDeElementosCytoscape";

const initialFilterDefault = {
  buscaInterna: "",
  cargaHoraria: [0, 200],
  tipoClassificacao: true, // false: por cursos, true: por trilhas
  categoriasDeCompetencias: [],
  competencias: [],
  temas: [],
  subtemas: [],
  instCertificadora: [],
  esquemaDeCores: "categoria",
  itinerario: undefined,
};

const coursesModel = {
  loading: false,
  loadingUniqueCourse: false,
  registering: false,

  count: 0,
  page: 1,

  uniqueCourse: {},
  cursos: [],

  elements: computed(
    [
      (state) => state.cursos,
      (state) => state.filter,
      (_state, storeState) => storeState.competencies.competencias,
    ],
    (cursos, filter, competencias) => {
      return reformuladorDeElementosCytoscape(
        cursos,
        filter,
        competencias,
        false
      );
    }
  ),

  filterDefault: initialFilterDefault,

  filter: initialFilterDefault,

  setFilter: action((state, payload) => {
    state.filter = { ...state.filter, ...payload };
  }),

  onSetFilter: thunkOn(
    // targetResolver:
    (actions) => actions.setFilter,
    // handler:
    async (actions, target) => {
      await actions.getCursos(target.payload);
    }
  ),

  getCursos: thunk(
    async (actions, payload = { query: "", showFiled: false, page: null }) => {
      const {
        showFiled = false,
        registerLog = false,
        page = 0,
        buscaInterna = "",
        cargaHoraria = [],
        instCertificadora = [],
        itinerario,
        accessibilities = [],
        competencias = [],
        subtemas = [],
      } = payload;
      actions.setLoading(true);
      const cursos = await services.courseService.getCursos({
        includeFiled: showFiled,
        registerLog: registerLog,
        page: page,
        search: buscaInterna,
        hours: cargaHoraria,
        institutions: instCertificadora,
        itineraries: itinerario && itinerario != 0 ? [itinerario] : [],
        accessibilities: accessibilities,
        competencies: competencias,
        subThemes: subtemas,
      });
      if (cursos?.data?.length >= 0) {
        actions.setCursos(cursos.data);
        actions.setCount(cursos.count);
      }
      actions.setLoading(false);
    }
  ),

  getUniqueCourse: thunk(async (actions, payload) => {
    actions.setLoadingUniqueCourse(true);
    const { id = "" } = payload;
    try {
      const course = await services.courseService.getUniqueCourse({ id: id });
      actions.setUniqueCourse(course);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setLoadingUniqueCourse(false);
    }
  }),

  registerNewCourse: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    try {
      await services.courseService.registerCourse({
        ...payload,
      });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  updateCourse: thunk(async (actions, payload) => {
    const {
      id,
      name,
      description,
      hours,
      link,
      institutions,
      accessibilities,
      itineraries,
      competencies,
      subThemes,
      filed = undefined,
    } = payload;
    actions.setRegistering(true);
    try {
      await services.courseService.updateCourse({
        id,
        name,
        description,
        hours,
        link,
      });
      await services.courseService.updateCourseInstitutions({
        id,
        institutions,
      });
      await services.courseService.updateCourseAccessibilities({
        id,
        accessibilities,
      });
      await services.courseService.updateCourseItineraries({
        id,
        itineraries,
      });
      await services.courseService.updateCourseCompetencies({
        id,
        competencies,
      });
      await services.courseService.updateCourseSubThemes({ id, subThemes });
      if (filed !== undefined) {
        if (filed) {
          await services.courseService.archiveCourse({ id });
        } else {
          await services.courseService.unarchiveCourse({ id });
        }
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setLoadingUniqueCourse: action((state, payload) => {
    state.loadingUniqueCourse = payload;
  }),

  setRegistering: action((state, payload) => {
    state.registering = payload;
  }),

  setCursos: action((state, payload) => {
    state.cursos = payload;
  }),

  setUniqueCourse: action((state, payload) => {
    state.uniqueCourse = payload;
  }),

  setCount: action((state, payload) => {
    state.count = payload;
  }),

  setPage: action((state, payload) => {
    state.page = payload;
  }),
};

export default coursesModel;
