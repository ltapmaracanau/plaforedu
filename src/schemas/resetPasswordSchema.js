import * as yup from "yup";

export const resetPasswordSchema = yup.object().shape({
  password1: yup
    .string()
    .required("Obrigatório!")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Precisa ter: uma letra maiúscula; uma letra minúscula; um número; um caractere especial; no mínimo 8 caracteres"
    ),
  password2: yup
    .string()
    .required("Obrigatório!")
    .oneOf([yup.ref("password1"), null], "As senhas precisam ser iguais!"),
});
