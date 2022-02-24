import * as yup from "yup";

export const faleConoscoSchema = yup.object().shape({
    from_name: yup.string().required('Obrigatório!').max(50, '50 Caracteres no Máximo!'),
    type_message: yup.string().required("Obrigatório!"),
    from_email: yup.string().required('Obrigatório!').email("Digite um email válido!"),
    message: yup.string().required('Obrigatório!').max(100, '100 Caracteres no máximo!'),
})