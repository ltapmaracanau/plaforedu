import { action, computed, thunk, thunkOn } from "easy-peasy";
import reformuladorDeElementosCytoscape from "../helpers/reformuladorDeElementosCytoscape";
import services from "../services";

const trilhasModel = {
  loading: false,
  registering: false,

  trilhas: [],

  elements: computed(
    [
      (state) => state.trilhas,
      (_state, storeState) => storeState.courses.filter,
      (_state, storeState) => storeState.competencies.competencias,
    ],
    (trilhas, filter, competencias) => {
      return reformuladorDeElementosCytoscape(
        trilhas,
        filter,
        competencias,
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
        competencias: [],
      }
    ) => {
      actions.setLoading(true);
      const {
        showFiled = false,
        query = "",
        page = 0,
        registerLog = false,
        itinerario = undefined,
        competencias = [],
      } = payload;
      try {
        await services.trailsService
          .getTrilhas({
            includeFiled: showFiled,
            search: query,
            page: page,
            registerLog: registerLog,
            itineraries: itinerario ? [itinerario] : [],
            competencies: competencias,
          })
          .then((trilhas) => {
            if (trilhas?.data?.length >= 0) {
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
    const {
      id,
      name,
      description,
      itineraries,
      competencies,
      courses,
      filed = undefined,
    } = payload;
    const coursesRefactored = courses.map((item, index) => ({
      courseId: item,
      sequence: index + 1,
    }));
    actions.setRegistering(true);
    try {
      await services.trailsService.updateTrilha({
        id,
        name,
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
      if (filed !== undefined) {
        if (filed) {
          await services.trailsService.archiveTrilha({ id });
        } else {
          await services.trailsService.unarchiveTrilha({ id });
        }
      }
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
    const newPayload = { ...payload, courses: coursesRefactored };
    try {
      await services.trailsService.registerTrilha(newPayload);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      actions.setRegistering(false);
    }
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setRegistering: action((state, payload) => {
    state.registering = payload;
  }),

  setTrilhas: action((state, payload) => {
    state.trilhas = payload;
  }),
};

export default trilhasModel;
