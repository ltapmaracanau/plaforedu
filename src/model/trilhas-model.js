import { action, computed, thunk, thunkOn } from "easy-peasy";
import reformuladorDeElementosCytoscape from "../helpers/reformuladorDeElementosCytoscape";
import services from "../services";

const trilhasModel = {
  loading: false,
  registering: false,
  archiving: false,

  trilhas: [],
  count: 0,

  elements: computed(
    [
      (state) => state.trilhas,
      (_state, storeState) => storeState.courses.filter,
      (_state, storeState) => storeState.itineraries.itinerarios,
      (_state, storeState) => storeState.competencies.competencias,
    ],
    (trilhas, filter, itinerarios, competencias) => {
      return reformuladorDeElementosCytoscape(
        trilhas,
        filter,
        competencias,
        itinerarios,
        true
      );
    }
  ),

  onSetFilter: thunkOn(
    // targetResolver:
    (_actions, storeActions) => storeActions.courses.setFilter,
    // handler:
    async (actions, target) => {
      await actions.getTrilhas(target.payload);
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
        registerLog: registerLog,
        itineraries: itinerario ? [itinerario] : [],
        competencies: competencies,
        sortByCreatedAt: !!sort.createdAt,
        sortByUpdatedAt: !!sort.updatedAt,
      };
      try {
        await services.trailsService.getTrilhas(request).then((trilhas) => {
          if (trilhas?.data?.length >= 0) {
            actions.setCount(trilhas.count);
            actions.setTrilhas(trilhas.data);
          }
        });
      } catch (error) {
        throw new Error(error.message);
      } finally {
        actions.setLoading(false);
      }
    }
  ),

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
      throw new Error(error.message);
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
    const newPayload = {
      name: payload.name.trim(),
      description: payload.description,
      itineraries: payload.itineraries,
      competencies: payload.competencies,
      courses: coursesRefactored,
    };
    try {
      await services.trailsService.registerTrilha(newPayload);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
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
      throw new Error(error.message);
    } finally {
      actions.setArchiving(false);
    }
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
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

  setCount: action((state, payload) => {
    state.count = payload;
  }),
};

export default trilhasModel;
