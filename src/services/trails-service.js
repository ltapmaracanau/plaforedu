import AuthAxios from "./auth-axios";

export default {
  registerTrilha: (payload) =>
    AuthAxios.post(`/formative-trails/new`, {
      name: payload.name,
      description: payload.description,
      itineraries: payload.itineraries,
      courses: payload.courses,
      competencies: payload.competencies,
    }),

  getTrilhas: (payload) =>
    AuthAxios.post(
      `/formative-trails/all?includeFiled=${payload.includeFiled}&registerLog=${payload.registerLog}&page=${payload.page}&orderByCreated=${payload.sortByCreatedAt}&orderByUpdated=${payload.sortByUpdatedAt}`,
      {
        search: payload.search,
        itineraries: payload.itineraries,
        competencies: payload.competencies,
      }
    ),

  getUniqueTrail: (payload) => AuthAxios.get(`/formative-trails/${payload}`),

  updateTrilha: (payload) =>
    AuthAxios.put(`/formative-trails/${payload.id}/update`, {
      name: payload.name,
      description: payload.description,
    }),

  updateTrilhaItineraries: (payload) =>
    AuthAxios.patch(`/formative-trails/${payload.id}/update-itineraries`, {
      itineraries: payload.itineraries,
    }),

  updateTrilhaCourses: (payload) =>
    AuthAxios.patch(`/formative-trails/${payload.id}/update-courses`, {
      courses: payload.courses,
    }),

  updateCourseCompetencies: (payload) =>
    AuthAxios.patch(`/formative-trails/${payload.id}/update-competencies`, {
      competencies: payload.competencies,
    }),

  archiveTrilha: (payload) =>
    AuthAxios.patch(`/formative-trails/${payload.id}/archive`),

  unarchiveTrilha: (payload) =>
    AuthAxios.patch(`/formative-trails/${payload.id}/unarchive`),
};
