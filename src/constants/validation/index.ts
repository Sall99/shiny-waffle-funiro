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

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot be longer than 50 characters"),
  email: yup.string().email("emailInvalid").required("required"),
  subject: yup
    .string()
    .optional()
    .max(100, "Subject cannot be longer than 100 characters"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message cannot be longer than 1000 characters"),
});

export const checkoutSchema = yup.object().shape({
  lname: yup
    .string()
    .required("lNameRequired")
    .min(2, "lNameMin")
    .max(50, "lNameMax"),
  fname: yup
    .string()
    .required("fNameRequired")
    .min(2, "fNameMin")
    .max(50, "fNameMax"),
  companyName: yup.string().optional(),
  countryRegion: yup
    .string()
    .required("Country/RegionRequired")
    .min(2, "Country/RegionMin")
    .max(50, "Country/RegionMax"),
  street: yup
    .string()
    .required("streetRequired")
    .min(2, "streetMin")
    .max(40, "streetMax"),
  townCity: yup
    .string()
    .required("townCityRequired")
    .min(2, "townCityMin")
    .max(20, "townCityMax"),

  province: yup.string().optional(),
  zipCode: yup
    .number()
    .required("zipCodeRequired")
    .min(2, "zipCodeMin")
    .max(12, "zipCodeMax"),

  phone: yup
    .string()
    .required("phoneRequired")
    .min(2, "phoneMin")
    .max(12, "phoneMax"),

  email: yup.string().email("emailInvalid").required("required"),
  additionalInfo: yup.string().optional(),
});
