import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("emailInvalid").required("required"),
  password: yup
    .string()
    .min(8, "passwordMinLength")
    .max(32, "passwordMaxLength")
    .required("passwordRequired"),
});
