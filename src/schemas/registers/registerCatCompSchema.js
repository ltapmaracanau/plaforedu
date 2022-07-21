import * as yup from "yup";

export const registerCatCompSchema = yup.object().shape({
    name: yup.string().required('Obrigatório!').max(256, "256 caracteres no máximo!"),
    description: yup.string().required('Obrigatório!'),
})