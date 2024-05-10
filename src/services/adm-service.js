import AuthAxios from "./auth-axios";

export const admService = {
  getStatistics: () => AuthAxios.get("/statistics/home"),

  setLastViewedCourses: (curso = { titulo: "", id: "", institution: "" }) => {
    const lastViewedCourses = admService.getLastViewedCourses();
    const index = lastViewedCourses.findIndex((item) => item.id === curso.id);
    if (index !== -1) {
      lastViewedCourses.splice(index, 1);
    }
    lastViewedCourses.unshift(curso);
    while (lastViewedCourses.length > 3) {
      lastViewedCourses.pop();
    }
    localStorage.setItem(
      "lastViewedCourses",
      JSON.stringify(lastViewedCourses)
    );
  },

  getLastViewedCourses: () => {
    if (!localStorage.getItem("lastViewedCourses")) return [];
    return JSON.parse(localStorage.getItem("lastViewedCourses"));
  },

  getRandomTrailsHomepage: () => AuthAxios.get("/statistics/trails"),

  getRoles: () => AuthAxios.get("/roles/list"),

  getItinerarios: () => AuthAxios.get("/itineraries/list"),

  getAcessibilidades: () => AuthAxios.get("/accessibilities/list"),

  getSearchLogs: (payload) =>
    AuthAxios.get(`/logs/course-search`, {
      params: {
        ...payload,
      },
    }),

  downloadListLogs: () => AuthAxios.get("/logs/course-search-export-csv"),
};
