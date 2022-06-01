import * as yup from "yup";

export const forgetPasswordSchema = yup.object().shape({
    username: yup.string()
        .required('Obrigatório!')
        .max(40, '40 Caracteres no Máximo!')
        .email("Digite um email válido!")
})
