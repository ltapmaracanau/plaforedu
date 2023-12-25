import compService from "./comp-service";
import courseService from "./course-service";
import institutionService from "./institution-service";
import themesService from "./themes-service";
import trailsService from "./trails-service";
import studyPlans from "./study-plans-service";
import { admService } from "./adm-service";
import loginService from "./login-service";
import usersService from "./users-service";

const services = {
  admService: admService,
  usersService: usersService,
  loginService: loginService,
  compService: compService,
  courseService: courseService,
  institutionService: institutionService,
  themesService: themesService,
  trailsService: trailsService,
  studyPlansService: studyPlans,
};

export default services;
