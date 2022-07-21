import * as yup from "yup";

export const registerCompSchema = yup.object().shape({
    name: yup.string().required('Obrigatório!').max(256, "256 caracteres no máximo!"),
    competenciesCategoryIds: yup.array().of(yup.string()).required('Obrigatório!'),
})