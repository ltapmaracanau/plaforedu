import AuthAxios from "./auth-axios";

export default {
  getStudyPlans: (payload) =>
    AuthAxios.post(`/study-plans/all?page=${payload.page || 0}`, {
      search: payload.search,
    }),

  getUniqueStudyPlan: (payload) => AuthAxios.get(`/study-plans/${payload.id}`),

  updateStudyPlan: (payload) =>
    AuthAxios.put(`/study-plans/${payload.id}/update`, {
      name: payload.name,
      description: payload.description,
    }),

  updateStudyPlanCourses: (payload) =>
    AuthAxios.patch(`/study-plans/${payload.id}/update-courses`, {
      courses: payload.courses,
    }),

  createStudyPlan: (payload) =>
    AuthAxios.post(`/study-plans/new`, {
      name: payload.name,
      description: payload.description,
      courses: payload.courses,
    }),

  deleteStudyPlan: (payload) => AuthAxios.delete(`/study-plans/${payload.id}`),

  downloadStudyPlansCourses: (payload) =>
    AuthAxios.get(`/study-plans/${payload.id}/export-csv`),
};
