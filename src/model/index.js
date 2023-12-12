import accessibilitiesModel from "./accessibilities-model";
import admModel from "./adm-model";
import competenciesModel from "./competencies-model";
import coursesModel from "./courses-model";
import instituicoesModel from "./institutions-model";
import itinerariosModel from "./itineraries-model";
import rolesModel from "./roles-model";
import studyPlansModel from "./study-plans-model";
import themesModel from "./themes-model";
import trilhasModel from "./trilhas-model";
import usuariosModel from "./users-model";

const storeModel = {
  accessibilities: accessibilitiesModel,
  adm: admModel,
  competencies: competenciesModel,
  courses: coursesModel,
  institutions: instituicoesModel,
  itineraries: itinerariosModel,
  roles: rolesModel,
  themes: themesModel,
  users: usuariosModel,
  trilhas: trilhasModel,
  studyPlans: studyPlansModel,
};

export default storeModel;
