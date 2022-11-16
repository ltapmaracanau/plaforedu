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
  competenciesCategoryIds: yup
    .array()
    .of(yup.string())
    .required("Obrigatório!"),
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
    .required("Obrigatório!")
    .min(0, "Obrigatório números positivos!"),
  link: yup.string().url("Link inválido!").required("Obrigatório!"),
  institutionId: yup.string().required("Obrigatório!"),
  accessibilities: yup.array().of(yup.string()).required("Obrigatório!"),
  itineraries: yup.array().of(yup.string()).required("Obrigatório!"),
});