import * as yup from "yup";

// TEMAS

export const registerSubthemeSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(256, "256 caracteres no máximo!"),
  themeIds: yup.array().of(yup.string()).required("Obrigatório!"),
});

export const registerThemeSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(256, "256 caracteres no máximo!"),
});

// COMPETÊNCIAS

export const registerCompSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(256, "256 caracteres no máximo!"),
  description: yup.string().required("Obrigatório!"),
  competenciesCategoryIds: yup.array().of(yup.string()).min(1, "Obrigatório!"),
  itinerariesIds: yup.array().of(yup.string()).required("Obrigatório!"),
});

export const registerCatCompSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(256, "256 caracteres no máximo!"),
  description: yup.string().required("Obrigatório!"),
});

// USUÁRIOS

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(40, "40 Caracteres no Máximo!"),
  email: yup
    .string()
    .required("Obrigatório!")
    .max(40, "40 Caracteres no Máximo!")
    .email("Digite um email válido!"),
  cpf: yup.string().required("Obrigatório!"),
  roles: yup.array().of(yup.string()).required("Obrigatório!"),
  institution: yup.string().required("Obrigatório!"),
  phone: yup.string().required("Obrigatório!"),
});

export const updateUserSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(40, "40 Caracteres no Máximo!"),
  email: yup
    .string()
    .max(40, "40 Caracteres no Máximo!")
    .email("Digite um email válido!"),
  cpf: yup.string().required("Obrigatório!"),
  roles: yup.array().of(yup.string()).required("Obrigatório!"),
  institution: yup.string().required("Obrigatório!"),
  phone: yup.string().required("Obrigatório!"),
});

// INSTITUIÇÕES

export const registerInstitutionSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(256, "256 caracteres no máximo!"),
  uf: yup.string().required("Obrigatório!").max(2, "2 caracteres no máximo!"),
  abbreviation: yup.string().required("Obrigatório!"),
});

// CURSOS

export const registerCourseSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(256, "256 caracteres no máximo!"),
  description: yup.string().required("Obrigatório!"),
  hours: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required("Obrigatório!")
    .min(0, "Obrigatório números positivos!")
    .max(9999, "9999 horas no máximo!"),
  //accessibilities: yup.array(yup.string()).min(1, "Obrigatório!"),
  itineraries: yup.array(yup.string()).min(1, "Obrigatório!"),
  competencies: yup.array(yup.string()).min(1, "Obrigatório!"),
  //taxonomies: yup.array(yup.string()).min(1, "Obrigatório!"),
  subThemes: yup.array(yup.string()).min(1, "Obrigatório!"),
});
// TRILHAS

export const registerTrilhaSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(256, "256 caracteres no máximo!"),
  description: yup.string().required("Obrigatório!"),
  itineraries: yup.string().required("Obrigatório!"),
  competencies: yup.string().required("Obrigatório!"),
});

// PLANOS DE ESTUDO

export const registerStudyPlanSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(256, "256 caracteres no máximo!"),
  description: yup.string().required("Obrigatório!"),
});

// DOCUMENTOS

export const registerDocumentSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(256, "256 caracteres no máximo!"),
  description: yup.string().required("Obrigatório!"),
  link: yup.string().required("Obrigatório!"),
  publicationDate: yup
    .string()
    .required("Obrigatório!")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Data inválida!"),
  documentTypeId: yup.string().required("Obrigatório!"),
  documentSubTypeId: yup.string().required("Obrigatório!"),
  authors: yup
    .array()
    .of(yup.string().max(256, "256 caracteres no máximo!"))
    .min(1, "Obrigatório!"),
});
