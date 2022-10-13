import * as yup from "yup";

export const registerInstitutionSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(256, "256 caracteres no máximo!"),
  abbreviation: yup.string().required("Obrigatório!"),
});
