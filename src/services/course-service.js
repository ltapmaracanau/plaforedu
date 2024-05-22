import AuthAxios from "./auth-axios";

export default {
  getCursos: (payload) =>
    AuthAxios.post(
      `/courses/all?page=${payload.page}&includeFiled=${payload.includeFiled}&registerLog=${payload.registerLog}&orderByCreated=${payload.sortByCreatedAt}&orderByUpdated=${payload.sortByUpdatedAt}`,
      {
        search: payload.search,
        hours: payload.hours,
        institutions: payload.institutions,
        itineraries: payload.itineraries,
        accessibilities: payload.accessibilities,
        competencies: payload.competencies,
        subThemes: payload.subThemes,
        taxonomies: payload.taxonomies,
      }
    ),

  getUniqueCourse: (payload = { id: "" }) =>
    AuthAxios.get(`/courses/${payload.id}`),

  registerCourse: (payload) =>
    AuthAxios.post("/courses/new", {
      name: payload.name,
      description: payload.description,
      hours: payload.hours,
      institutions: payload.institutions,
      accessibilities: payload.accessibilities,
      itineraries: payload.itineraries,
      subThemes: payload.subThemes,
      competencies: payload.competencies,
      taxonomies: payload.taxonomies,
      equivalents: payload.equivalents,
    }),

  updateCourse: (payload) =>
    AuthAxios.put(`/courses/${payload.id}/update`, {
      name: payload.name,
      description: payload.description,
      hours: payload.hours,
      link: payload.link,
    }),

  archiveCourse: ({ coursesIds = [] }) =>
    AuthAxios.patch(`/courses/archive`, {
      courses: coursesIds,
    }),

  unarchiveCourse: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/unarchive`),

  updateCourseInstitutions: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-institutions`, {
      institutions: payload.institutions,
    }),

  updateCourseTaxonomies: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-taxonomies`, {
      taxonomies: payload.taxonomies,
    }),

  updateCourseAccessibilities: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-accessibilities`, {
      accessibilities: payload.accessibilities,
    }),

  updateCourseItineraries: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-itineraries`, {
      itineraries: payload.itineraries,
    }),

  updateCourseCompetencies: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-competencies`, {
      competencies: payload.competencies,
    }),

  updateCourseSubThemes: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-sub-themes`, {
      subThemes: payload.subThemes,
    }),

  updateCourseEquivalents: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-equivalents`, {
      equivalents: payload.equivalents,
    }),

  updateCourseTermPdf: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/upload-term`, payload.term, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),

  getTaxonomias: () => AuthAxios.get("/taxonomies/all"),
};
