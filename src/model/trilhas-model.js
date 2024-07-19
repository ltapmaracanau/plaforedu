import { action, thunk, thunkOn } from "easy-peasy";
import services from "../services";

const trilhasModel = {
  loading: false,
  loadingUniqueTrail: false,
  registering: false,
  archiving: false,

  trilhas: [],
  uniqueTrail: {},
  count: 0,

  onSetFilter: thunkOn(
    // targetResolver:
    (_actions, storeActions) => [
      storeActions.courses.setFilter,
      storeActions.adm.setTipoVisualizacao,
    ],
    // handler:
    async (actions, target, { getStoreState, getState }) => {
      if (getStoreState().courses.filter.tipoClassificacao) {
        await actions.getTrilhas(
          target.type.includes("setFilter")
            ? {
                query: target.payload.query,
                page: getStoreState().adm.tipoVisualizacao
                  ? target.payload.page
                  : 0,
                registerLog:
                  target.payload.query && target.payload.query !== "",
                itineraries: target.payload.itinerario
                  ? [target.payload.itinerario]
                  : [],
                competencies: target.payload.competencies,
              }
            : {
                ...getState().filter,
              }
        );
      }
    }
  ),

  getTrilhas: thunk(
    async (
      actions,
      payload = {
        showFiled: false,
        query: "",
        page: 0,
        registerLog: false,
        itinerario: undefined,
        competencies: [],
        sort: {
          createdAt: undefined,
          updatedAt: undefined,
        },
      }
    ) => {
      actions.setLoading(true);
      const {
        showFiled = false,
        query = "",
        page = 0,
        registerLog = false,
        itinerario = undefined,
        itineraries = [],
        competencies = [],
        sort = {
          createdAt: undefined,
          updatedAt: undefined,
        },
      } = payload;
      const request = {
        includeFiled: showFiled,
        search: query.trim(),
        page: page,
        registerLog: import.meta.env.PROD ? registerLog : false,
        itineraries: itinerario ? [itinerario] : itineraries,
        competencies: competencies,
        sortByCreatedAt: !!sort.createdAt,
        sortByUpdatedAt: !!sort.updatedAt,
      };
      return await services.trailsService
        .getTrilhas(request)
        .then((response) => {
          actions.setCount(response.data.count);
          actions.setTrilhas(response.data.data);
          return response.data;
        })
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => {
          actions.setLoading(false);
        });
    }
  ),

  getUniqueTrail: thunk(async (actions, payload) => {
    actions.setLoadingUniqueTrail(true);
    const { id = "" } = payload;
    return await services.trailsService
      .getUniqueTrail({ id: id })
      .then(({ data }) => {
        actions.setUniqueTrail(data);
        return data;
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoadingUniqueTrail(false);
      });
  }),

  updateTrilha: thunk(async (actions, payload) => {
    const { id, name, description, itineraries, competencies, courses } =
      payload;
    const coursesRefactored = courses.map((item, index) => ({
      courseId: item,
      sequence: index + 1,
    }));
    actions.setRegistering(true);
    try {
      await services.trailsService.updateTrilha({
        id,
        name: name.trim(),
        description,
      });
      await services.trailsService.updateTrilhaItineraries({
        id,
        itineraries,
      });
      await services.trailsService.updateTrilhaCourses({
        id,
        courses: coursesRefactored,
      });
      await services.trailsService.updateCourseCompetencies({
        id,
        competencies,
      });
    } catch (error) {
      throw new Error(error);
    } finally {
      actions.setRegistering(false);
    }
  }),

  registerTrilha: thunk(async (actions, payload) => {
    actions.setRegistering(true);
    const { courses } = payload;
    const coursesRefactored = courses.map((item, index) => ({
      courseId: item,
      sequence: index + 1,
    }));
    const dataService = {
      name: payload.name.trim(),
      description: payload.description,
      itineraries: payload.itineraries,
      competencies: payload.competencies,
      courses: coursesRefactored,
    };
    return await services.trailsService
      .registerTrilha(dataService)
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setRegistering(false);
      });
  }),

  setArchivedTrilha: thunk(async (actions, payload) => {
    const { filed, id } = payload;
    actions.setArchiving(true);
    try {
      if (filed) {
        await services.trailsService.archiveTrilha({ id });
      } else {
        await services.trailsService.unarchiveTrilha({ id });
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      actions.setArchiving(false);
    }
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setLoadingUniqueTrail: action((state, payload) => {
    state.loadingUniqueTrail = payload;
  }),

  setRegistering: action((state, payload) => {
    state.registering = payload;
  }),

  setArchiving: action((state, payload) => {
    state.archiving = payload;
  }),

  setTrilhas: action((state, payload) => {
    state.trilhas = payload;
  }),

  setUniqueTrail: action((state, payload) => {
    state.uniqueTrail = payload;
  }),

  setCount: action((state, payload) => {
    state.count = payload;
  }),
};

export default trilhasModel;
