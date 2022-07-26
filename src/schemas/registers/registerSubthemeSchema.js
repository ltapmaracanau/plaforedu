import * as yup from "yup";

export const registerSubthemeSchema = yup.object().shape({
    name: yup.string().required('Obrigatório!').max(256, "256 caracteres no máximo!"),
    themeIds: yup.array().of(yup.string()).required('Obrigatório!'),
})