import { action, thunk } from "easy-peasy";
import services from "../services";

const trilhasModel = {
  loading: false,
  registering: false,

  trilhas: [],
  trilhasSecondary: [],

  getTrilhas: thunk(
    async (actions, payload = { query: "", showFiled: false }) => {
      actions.setLoading(true);
      try {
        await services.trailsService
          .getTrilhas({
            query: payload.query,
            showFiled: payload.showFiled,
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
