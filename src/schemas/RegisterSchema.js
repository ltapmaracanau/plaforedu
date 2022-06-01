import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup.string()
        .required('Obrigatório!')
        .max(40, '40 Caracteres no Máximo!'),
    username: yup.string()
        .required('Obrigatório!')
        .max(40, '40 Caracteres no Máximo!')
        .email("Digite um email válido!"),
    cargo: yup.string()
        .required('Obrigatório!'),
    password1: yup.string().required('Obrigatório!'),
    password2: yup.string().required('Obrigatório!')
        .oneOf([yup.ref('password1'), null], 'As senhas precisam ser iguais!')
})
