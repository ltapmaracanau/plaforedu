import { action, thunk, thunkOn } from "easy-peasy";
import services from "../services";

const initialFilterDefault = {
  page: 1,
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

  filterDefault: initialFilterDefault,

  filter: initialFilterDefault,

  setFilter: action((state, payload) => {
    state.filter = { ...state.filter, ...payload };
  }),

  onSetFilter: thunkOn(
    // targetResolver:
    (actions, storeActions) => [
      actions.setFilter,
      storeActions.adm.setTipoVisualizacao,
    ],
    // handler:
    async (actions, target, { getStoreState, getState }) => {
      if (!getState().filter.tipoClassificacao) {
        await actions.getCursos(
          target.type.includes("setFilter")
            ? {
                showFiled: false,
                registerLog:
                  target.payload.query && target.payload.query !== "",
                page: getStoreState().adm.tipoVisualizacao
                  ? target.payload.page
                  : 0,
                query: target.payload.query,
                cargaHoraria: target.payload.cargaHoraria,
                institutions: target.payload.institutions,
                itineraries: target.payload.itinerario
                  ? [target.payload.itinerario]
                  : [],
                accessibilities: target.payload.accessibilities,
                competencies: target.payload.competencies,
                subtemas: target.payload.subThemes,
                taxonomies: target.payload.taxonomies,
              }
            : {
                ...getStoreState().courses.filter,
              }
        );
      }
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
        page = 1,
        query = "",
        cargaHoraria = [],
        institutions = [],
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
      return await services.courseService
        .getCursos({
          includeFiled: showFiled,
          registerLog: import.meta.env.PROD ? registerLog : false,
          page: page,
          search: query.trim(),
          hours: cargaHoraria,
          institutions: institutions,
          itineraries: itineraries,
          accessibilities: accessibilities,
          competencies: competencies,
          taxonomies: taxonomies,
          subThemes: subtemas,
          sortByCreatedAt: !!sort.createdAt,
          sortByUpdatedAt: !!sort.updatedAt,
          onlyPending: false,
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

  getPendingCourses: thunk(async (actions, payload) => {
    const { page = 0 } = payload;
    return await services.courseService
      .getCursos({
        includeFiled: false,
        registerLog: false,
        page: page,
        search: "",
        hours: [],
        institutions: [],
        itineraries: [],
        accessibilities: [],
        competencies: [],
        taxonomies: [],
        subThemes: [],
        sortByCreatedAt: false,
        sortByUpdatedAt: false,
        onlyPending: true,
      })
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }),

  getTaxonomias: thunk(async (actions) => {
    actions.setLoading(true);
    return await services.courseService
      .getTaxonomias()
      .then(({ data }) => {
        actions.setTaxonomias(data);
        return data;
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
    const { id = "", saveViewed = false } = payload;
    return await services.courseService
      .getUniqueCourse({ id: id })
      .then(({ data }) => {
        actions.setUniqueCourse(data);
        if (saveViewed) {
          services.admService.setLastViewedCourses({
            titulo: data.name,
            id: data.id,
            institution: data.institutions
              .map((institution) => institution.abbreviation)
              .join(", "),
          });
        }
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

  unarchiveCourse: thunk(async (actions, payload) => {
    const { courseId } = payload;
    actions.setArchiving(true);
    await services.courseService
      .unarchiveCourse({ id: courseId })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setArchiving(false);
      });
  }),

  archiveCourse: thunk(async (actions, payload) => {
    const { coursesIds = [] } = payload;
    actions.setArchiving(true);
    await services.courseService
      .archiveCourse({ coursesIds })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setArchiving(false);
      });
  }),

  activePendingCourses: thunk(async (actions, payload) => {
    const { courses = [] } = payload;
    await services.courseService
      .activePendingCourse({ courses: courses })
      .catch((error) => {
        throw new Error(error);
      });
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
