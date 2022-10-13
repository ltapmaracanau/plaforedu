import * as yup from "yup";

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
