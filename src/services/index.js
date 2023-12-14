import compService from "./comp-service";
import courseService from "./course-service";
import institutionService from "./institution-service";
import themesService from "./themes-service";
import trailsService from "./trailsService";
import studyPlans from "./study-plans-service";

const services = {
  compService: compService,
  courseService: courseService,
  institutionService: institutionService,
  themesService: themesService,
  trailsService: trailsService,
  studyPlansService: studyPlans,
};

export default services;
