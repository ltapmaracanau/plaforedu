import * as yup from "yup";

export const resetPasswordSchema = yup.object().shape({
    passwordOld: yup.string().required('Obrigatório!'),
    password1: yup.string().required('Obrigatório!'),
    password2: yup.string().required('Obrigatório!')
        .oneOf([yup.ref('password1'), null], 'As senhas precisam ser iguais!')
})
