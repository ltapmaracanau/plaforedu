import * as yup from "yup";

export const registerThemeSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório!")
    .max(256, "256 caracteres no máximo!"),
});
