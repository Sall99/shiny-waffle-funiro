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
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
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
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters long")
    .max(50, "Last Name cannot be longer than 15 characters"),
  fname: yup
    .string()
    .required("Firts Name is required")
    .min(2, "Firts Name must be at least 2 characters long")
    .max(50, "Firts Name cannot be longer than 20 characters"),
  companyName: yup.string().optional(),
  countryRegion: yup
    .string()
    .required("Country / Region is required")
    .min(2, "Country / Region must be at least 2 characters long")
    .max(50, "Country / Region cannot be longer than 30 characters"),
  street: yup
    .string()
    .required("Street is required")
    .min(2, "Street must be at least 2 characters long")
    .max(40, "Street cannot be longer than 30 characters"),
  townCity: yup
    .string()
    .required("Town / City is required")
    .min(2, "Town / City must be at least 2 characters long")
    .max(20, "Town / City cannot be longer than 30 characters"),

  province: yup.string().optional(),
  zipCode: yup
    .number()
    .required("Zip code is required")
    .min(2, "Zip code must be at least 2 characters long")
    .max(12, "Zip code cannot be longer than 12 characters"),

  phone: yup
    .string()
    .required("Phone is required")
    .min(2, "Phone must be at least 2 characters long")
    .max(12, "Phone cannot be longer than 30 characters"),

  email: yup.string().email("emailInvalid").required("required"),
  additionalInfo: yup.string().optional(),
});
