import * as yup from "yup";

export const editUserSchema = yup.object().shape({
    name: yup.string()
        .required('Obrigatório!')
        .max(40, '40 Caracteres no Máximo!'),
    email: yup.string()
        .max(40, '40 Caracteres no Máximo!')
        .email("Digite um email válido!"),
    cpf: yup.string().required('Obrigatório!'),
    roles: yup.array().of(yup.string()).required('Obrigatório!'),
    institution: yup.string().required('Obrigatório!'),
    phone: yup.string()
        .required('Obrigatório!')
})