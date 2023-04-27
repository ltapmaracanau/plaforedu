import AuthAxios from "./authAxios";

export default {
  getCursos: (
    payload = {
      query: "",
      showFiled: false,
      page: 0,
      search: "",
      hours: [],
      institutions: [],
      itineraries: [],
      accessibilities: [],
      competencies: [],
      subThemes: [],
      taxonomies: [],
    }
  ) =>
    AuthAxios.post(
      `/courses/all?page=${payload.page}&includeFiled=${payload.includeFiled}&registerLog=${payload.registerLog}`,
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
    )
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getUniqueCourse: (payload = { id: "" }) =>
    AuthAxios.get(`/courses/${payload.id}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

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

  updateCourseTaxonomies: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-taxonomies`, {
      taxonomies: payload.taxonomies,
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

  updateCourseEquivalents: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-equivalents`, {
      equivalents: payload.equivalents,
    })
      .then(() => ({}))
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourseTermPdf: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/upload-term`, payload.term, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => ({}))
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getTaxonomias: () =>
    AuthAxios.get("/taxonomies/all")
      .then((value) => value)
      .catch((error) => {
        throw new Error(
          error.response?.data?.message || "Não foi possível fazer o download!"
        );
      }),
};
