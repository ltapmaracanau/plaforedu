import AuthAxios from "./authAxios";

export default {
  getCursos: (payload = { query: "", showFiled: false }) => {
    return payload.page
      ? AuthAxios.get(
          `/courses/all?search=${payload.query}&includeFiled=${payload.showFiled}&page=${payload.page}`
        )
          .then((response) => response.data)
          .catch((error) => {
            throw new Error(
              error.response?.data?.message || "Algo deu errado!"
            );
          })
      : AuthAxios.get(
          `/courses/all?search=${payload.query}&includeFiled=${payload.showFiled}`
        )
          .then((response) => response.data)
          .catch((error) => {
            throw new Error(
              error.response?.data?.message || "Algo deu errado!"
            );
          });
  },

  registerCourse: (payload) =>
    AuthAxios.post("/courses/new", {
      name: payload.name,
      description: payload.description,
      hours: payload.hours,
      link: payload.link,
      institutions: payload.institutions,
      accessibilities: payload.accessibilities,
      itineraries: payload.itineraries,
      subThemes: payload.subThemes,
      competencies: payload.competencies,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourse: (payload) =>
    AuthAxios.put(`/courses/${payload.id}/update`, {
      name: payload.name,
      description: payload.description,
      hours: payload.hours,
      link: payload.link,
    })
      .then(() => ({}))
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  archiveCourse: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/archive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  unarchiveCourse: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/unarchive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourseInstitutions: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-institutions`, {
      institutions: payload.institutions,
    })
      .then(() => ({}))
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourseAccessibilities: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-accessibilities`, {
      accessibilities: payload.accessibilities,
    })
      .then(() => ({}))
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourseItineraries: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-itineraries`, {
      itineraries: payload.itineraries,
    })
      .then(() => ({}))
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourseCompetencies: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-competencies`, {
      competencies: payload.competencies,
    })
      .then(() => ({}))
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourseSubThemes: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-sub-themes`, {
      subThemes: payload.subThemes,
    })
      .then(() => ({}))
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),
};
