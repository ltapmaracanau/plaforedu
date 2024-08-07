import * as yup from "yup";

export const updatePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Obrigatório!"),
  password1: yup
    .string()
    .required("Obrigatório!")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Precisa ter: uma letra maiúscula; uma letra minúscula; um número; um caractere especial; no mínimo 8 caracteres"
    )
    .notOneOf(
      [yup.ref("oldPassword"), null],
      "A nova senha não pode ser igual a senha antiga!"
    ),
  password2: yup
    .string()
    .required("Obrigatório!")
    .oneOf([yup.ref("password1"), null], "As senhas precisam ser iguais!"),
});
