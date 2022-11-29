import AuthAxios from "./authAxios";

export const dataService = {
  getToken: () => {
    return localStorage.getItem("token");
  },

  login: (payload = { username: "", password: "" }) =>
    AuthAxios.post("/sessions", {
      email: payload.username,
      password: payload.password,
    })
      .then((response) => response.data)
      .catch((error) => ({
        error: true,
        message: error.response.data
          ? error.response.data.message
          : "Usuário e/ou senha incorretos!",
      })),

  createUser: (payload) =>
    AuthAxios.post("/users/new", {
      cpf: payload.cpf,
      email: payload.email,
      institution: payload.institution,
      name: payload.name,
      phone: payload.phone,
      roles: payload.roles,
    })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  resendCredentials: (payload) =>
    AuthAxios.post(`/users/${payload.id}/resend-credentials`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateUser: (payload) =>
    AuthAxios.put(`/profile/${payload.id}/update`, {
      cpf: payload.cpf,
      email: payload.email,
      institution: payload.institution,
      name: payload.name,
      phone: payload.phone,
      roles: payload.roles,
    })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  blockUser: (payload) =>
    AuthAxios.patch(`/users/${payload.id}/block`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  archiveUser: (payload) =>
    AuthAxios.patch(`/users/${payload.id}/archive`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  activeUser: (payload) =>
    AuthAxios.patch(`/users/${payload.id}/active`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

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
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  registerCatComp: (payload) =>
    AuthAxios.post("/competencies-category/new", {
      name: payload.name,
      description: payload.description,
    })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCatComp: (payload) =>
    AuthAxios.put(`/competencies-category/${payload.id}/update`, {
      name: payload.name,
      description: payload.description,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  registerComp: (payload) =>
    AuthAxios.post("/competencies/new", {
      name: payload.name,
      competenciesCategoryIds: payload.competenciesCategoryIds,
    })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateComp: (payload) =>
    AuthAxios.put(`/competencies/${payload.id}/update`, {
      name: payload.name,
      competenciesCategoryIds: payload.competenciesCategoryIds,
      description: payload.description,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  registerTheme: (payload) =>
    AuthAxios.post("/themes/new", {
      name: payload.name,
    })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateTheme: (payload) =>
    AuthAxios.put(`/themes/${payload.id}/update`, {
      name: payload.name,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  registerSubtheme: (payload) =>
    AuthAxios.post("/sub-themes/new", {
      name: payload.name,
      themeIds: payload.themeIds,
    })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateSubtheme: (payload) =>
    AuthAxios.put(`/sub-themes/${payload.id}/update`, {
      name: payload.name,
      themeIds: payload.themeIds,
    })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
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
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  archiveCourse: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/archive`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  unarchiveCourse: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/unarchive`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourseInstitutions: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-institutions`, {
      institutions: payload.institutions,
    })
      .then(() => ({}))
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourseAccessibilities: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-accessibilities`, {
      accessibilities: payload.accessibilities,
    })
      .then(() => ({}))
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourseItineraries: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-itineraries`, {
      itineraries: payload.itineraries,
    })
      .then(() => ({}))
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourseCompetencies: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-competencies`, {
      competencies: payload.competencies,
    })
      .then(() => ({}))
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateCourseSubThemes: (payload) =>
    AuthAxios.patch(`/courses/${payload.id}/update-sub-themes`, {
      subThemes: payload.subThemes,
    })
      .then(() => ({}))
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  registerInstitution: (payload) =>
    AuthAxios.post("/institutions/new", {
      name: payload.name,
      abbreviation: payload.abbreviation,
    })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updateInstitution: (payload) =>
    AuthAxios.put(`/institutions/${payload.id}/update`, {
      name: payload.name,
      abbreviation: payload.abbreviation,
      uf: payload.uf,
    })
      .then(() => ({}))
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  forgetPassword: (payload = { username: "" }) =>
    AuthAxios.post("/password/forgot", {
      email: payload.username,
    })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  resetPassword: (payload = { token: "", password: "" }) =>
    AuthAxios.post("/password/reset", {
      token: payload.token,
      password: payload.password,
    })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  updatePassword: (payload = { oldPassword: "", newPassword: "" }) =>
    AuthAxios.patch("/password/update", {
      oldPassword: payload.oldPassword,
      newPassword: payload.newPassword,
    })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getRoles: () =>
    AuthAxios.get("/roles/list")
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getItinerarios: () =>
    AuthAxios.get("/itineraries/list")
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getAcessibilidades: () =>
    AuthAxios.get("/accessibilities/list")
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getInstituicoes: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/institutions/all?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getEstados: () =>
    AuthAxios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getThemes: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/themes/list?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),
  getSubthemes: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/sub-themes/list?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),
  getCompetencias: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/competencies/list?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getCatComp: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/competencies-category/list?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getCursos: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/courses/all?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getUsers: (payload = { query: "", showFiled: false }) =>
    AuthAxios.get(
      `/users/all?search=${payload.query}&includeFiled=${payload.showFiled}`
    )
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getUniqueUser: (payload) =>
    AuthAxios.get(`/profile/${payload.id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error.response?.data?.message || "Algo deu errado!");
      }),

  getMyProfile: () =>
    AuthAxios.get("/profile/me")
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      }),
};
