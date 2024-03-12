import { action, computed, thunk, thunkOn } from "easy-peasy";
import services from "../services";

import reformuladorDeElementosCytoscape from "../helpers/reformuladorDeElementosCytoscape";

const initialFilterDefault = {
  query: "",
  cargaHoraria: [0, 300],
  tipoClassificacao: true, // false: por cursos, true: por trilhas
  categoriasDeCompetencias: [],
  competencies: [],
  temas: [],
  subtemas: [],
  institutions: [],
  esquemaDeCores: "categoria",
  itinerario: 0,
};

const coursesModel = {
  loading: false,
  loadingUniqueCourse: false,
  registering: false,
  archiving: false,

  count: 0,
  uniqueCourse: {},
  cursos: [],
  taxonomies: [],

  cursosSecondary: [],
  countSecondary: 0,
  loadingCursosSecondary: false,

  elements: computed(
    [
      (state) => state.cursos,
      (state) => state.filter,
      (_state, storeState) => storeState.itineraries.itinerarios,
      (_state, storeState) => storeState.competencies.competencias,
    ],
    (cursos, filter, itineraries, competencias) => {
      return reformuladorDeElementosCytoscape(
        cursos,
        filter,
        competencias,
        itineraries,
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
      await actions.getCursos({
        ...target.payload,
        registerLog:
          target.payload.query && target.payload.query !== "" ? true : false,
      });
    }
  ),

  getCursos: thunk(
    async (
      actions,
      payload = { query: "", showFiled: false, page: 0, secondary: false }
    ) => {
      const {
        secondary = false,
        showFiled = false,
        registerLog = false,
        page = 0,
        query = "",
        cargaHoraria = [],
        institutions = [],
        itinerario,
        itineraries = [],
        accessibilities = [],
        competencies = [],
        subtemas = [],
        taxonomies = [],
        sort = {
          createdAt: undefined,
          updatedAt: undefined,
        },
      } = payload;
      if (secondary) {
        actions.setLoadingSecondary(true);
      } else {
        actions.setLoading(true);
      }
      let newItineraries = [];
      if (itineraries.length === 0) {
        if (itinerario && itinerario != 0) {
          newItineraries = [itinerario];
        }
      } else {
        newItineraries = itineraries;
      }
      return await services.courseService
        .getCursos({
          includeFiled: showFiled,
          registerLog: import.meta.env.PROD ? registerLog : false,
          page: page,
          search: query.trim(),
          hours: cargaHoraria,
          institutions: institutions,
          itineraries: newItineraries,
          accessibilities: accessibilities,
          competencies: competencies,
          taxonomies: taxonomies,
          subThemes: subtemas,
          sortByCreatedAt: !!sort.createdAt,
          sortByUpdatedAt: !!sort.updatedAt,
        })
        .then(({ data }) => {
          if (secondary) {
            actions.setCursosSecondary(data.data);
            actions.setCountSecondary(data.count);
          } else {
            actions.setCursos(data.data);
            actions.setCount(data.count);
          }
        })
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          if (secondary) {
            actions.setLoadingSecondary(false);
          } else {
            actions.setLoading(false);
          }
        });
    }
  ),

  getTaxonomias: thunk(async (actions) => {
    actions.setLoading(true);
    services.courseService
      .getTaxonomias()
      .then(({ data }) => {
        actions.setTaxonomias(data);
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  getUniqueCourse: thunk(async (actions, payload) => {
    actions.setLoadingUniqueCourse(true);
    const { id = "" } = payload;
    return await services.courseService
      .getUniqueCourse({ id: id })
      .then(({ data }) => {
        actions.setUniqueCourse(data);
        services.admService.setLastViewedCourses({
          titulo: data.name,
          id: data.id,
          institution: data.institutions
            .map((institution) => institution.abbreviation)
            .join(", "),
        });
        return data;
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoadingUniqueCourse(false);
      });
  }),

  registerNewCourse: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const {
      name,
      description,
      hours,
      institutions,
      accessibilities,
      itineraries,
      subThemes,
      competencies,
      taxonomies,
      equivalents,
    } = payload;
    return await services.courseService
      .registerCourse({
        name: name.trim(),
        description: description,
        hours: hours,
        institutions: institutions,
        accessibilities: accessibilities,
        itineraries: itineraries,
        subThemes: subThemes,
        competencies: competencies,
        taxonomies: taxonomies,
        equivalents: equivalents,
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  updateCourse: thunk(async (actions, payload) => {
    const {
      id,
      term = undefined,
      name,
      description,
      hours,
      link,
      institutions,
      accessibilities,
      itineraries,
      competencies,
      subThemes,
      taxonomies,
      equivalents,
    } = payload;
    actions.setRegistering(true);
    try {
      await services.courseService.updateCourse({
        id,
        name: name.trim(),
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
      await services.courseService.updateCourseTaxonomies({
        id,
        taxonomies,
      });
      await services.courseService.updateCourseItineraries({
        id,
        itineraries,
      });
      await services.courseService.updateCourseCompetencies({
        id,
        competencies,
      });
      await services.courseService.updateCourseEquivalents({
        id,
        equivalents,
      });
      // Send the file if it exists
      if (term) {
        await services.courseService.updateCourseTermPdf({
          id,
          term,
        });
      }
      await services.courseService.updateCourseSubThemes({ id, subThemes });
    } catch (error) {
      throw new Error(error);
    } finally {
      actions.setRegistering(false);
    }
  }),

  setArchivedCourse: thunk(async (actions, payload) => {
    const { filed, id } = payload;
    actions.setArchiving(true);
    if (filed) {
      await services.courseService
        .archiveCourse({ id })
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          actions.setArchiving(false);
        });
    } else {
      await services.courseService
        .unarchiveCourse({ id })
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          actions.setArchiving(false);
        });
    }
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setLoadingSecondary: action((state, payload) => {
    state.loadingCursosSecondary = payload;
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

  setCursosSecondary: action((state, payload) => {
    state.cursosSecondary = payload;
  }),

  setTaxonomias: action((state, payload) => {
    state.taxonomies = payload;
  }),

  setUniqueCourse: action((state, payload) => {
    state.uniqueCourse = payload;
  }),

  setCount: action((state, payload) => {
    state.count = payload;
  }),

  setCountSecondary: action((state, payload) => {
    state.countSecondary = payload;
  }),

  setArchiving: action((state, payload) => {
    state.archiving = payload;
  }),
};

export default coursesModel;
