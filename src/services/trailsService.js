import AuthAxios from "./authAxios";

export default {
  registerTrilha: (payload) =>
    AuthAxios.post(`/formative-trails/new`, {
      name: payload.name,
      description: payload.description,
      itineraries: payload.itineraries,
      courses: payload.courses,
      competencies: payload.competencies,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getTrilhas: (payload = { showFiled: false, query: "" }) =>
    AuthAxios.get(
      `/formative-trails/all?includeFiled=${payload.showFiled}&search=${payload.query}`
    )
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateTrilha: (payload) =>
    AuthAxios.put(`/formative-trails/${payload.id}/update`, {
      name: payload.name,
      description: payload.description,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateTrilhaItineraries: (payload) =>
    AuthAxios.patch(`/formative-trails/${payload.id}/update-itineraries`, {
      itineraries: payload.itineraries,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateTrilhaCourses: (payload) =>
    AuthAxios.patch(`/formative-trails/${payload.id}/update-courses`, {
      courses: payload.courses,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourseCompetencies: (payload) =>
    AuthAxios.patch(`/formative-trails/${payload.id}/update-competencies`, {
      competencies: payload.competencies,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  archiveTrilha: (payload) =>
    AuthAxios.patch(`/formative-trails/${payload.id}/archive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  unarchiveTrilha: (payload) =>
    AuthAxios.patch(`/formative-trails/${payload.id}/unarchive`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),
};
