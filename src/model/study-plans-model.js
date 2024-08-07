import { action, thunk } from "easy-peasy";
import services from "../services";

const studyPlansModel = {
  studyPlans: [],
  count: 0,
  loading: false,

  setStudyPlans: action((state, payload) => {
    state.studyPlans = payload;
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setCount: action((state, payload) => {
    state.count = payload;
  }),

  getStudyPlans: thunk(async (actions, payload) => {
    actions.setLoading(true);
    return await services.studyPlansService
      .getStudyPlans({
        page: payload.pageNumber,
        search: payload.textSearch,
      })
      .then((response) => {
        actions.setStudyPlans(response.data.data);
        actions.setCount(response.data.count);
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  getUniqueStudyPlan: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const { id } = payload;
    return await services.studyPlansService
      .getUniqueStudyPlan({ id })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  updateStudyPlan: thunk(async (actions, payload) => {
    actions.setLoading(true);
    const { id, name, description, courses } = payload;
    return await services.studyPlansService
      .updateStudyPlan({
        id,
        name,
        description,
      })
      .then(async () => {
        await services.studyPlansService
          .updateStudyPlanCourses({
            id,
            courses,
          })
          .then(() => {
            return;
          })
          .catch((error) => {
            throw new Error(
              error.response?.data?.message || "Algo deu errado!"
            );
          });
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  createStudyPlan: thunk(async (actions, payload) => {
    actions.setLoading(true);
    return await services.studyPlansService
      .createStudyPlan({
        name: payload.name,
        description: payload.description,
        courses: payload.courses,
      })
      .then(() => {
        return;
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  deleteStudyPlan: thunk(async (actions, payload) => {
    actions.setLoading(true);
    return await services.studyPlansService
      .deleteStudyPlan({
        id: payload.id,
      })
      .then(() => {
        return;
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        actions.setLoading(false);
      });
  }),

  initStudyPlanCourse: thunk(async (_actions, payload) => {
    const { planId, courseId, status } = payload;
    return await services.studyPlansService
      .initStudyPlanCourse({
        planId,
        courseId,
        status,
      })
      .then(() => {
        return;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }),

  downloadStudyPlansCourses: thunk(async (actions, payload) => {
    const { id } = payload;
    return await services.studyPlansService
      .downloadStudyPlansCourses({ id })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }),
};

export default studyPlansModel;
