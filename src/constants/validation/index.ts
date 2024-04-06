import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("emailInvalid").required("required"),
  password: yup
    .string()
    .min(8, "passwordMinLength")
    .max(32, "passwordMaxLength")
    .required("passwordRequired"),
});

export const createAccountSchema = yup.object().shape({
  name: yup.string().required("required").min(2).max(20),
  lname: yup.string().required("required").min(2).max(20),
  email: yup.string().email("emailInvalid").required("required"),
  password: yup
    .string()
    .min(8, "passwordMinLength")
    .max(32, "passwordMaxLength")
    .required("passwordRequired"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});
