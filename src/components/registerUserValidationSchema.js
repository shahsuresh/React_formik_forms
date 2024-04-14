import * as Yup from "yup";

export const registerUserValidationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "First name must be at least 3 characters.")
    .max(30, "First name must be at max 30 characters.")
    .trim()
    .required("First name is required."),
  lastName: Yup.string()
    .min(3, "Last name must be at least 3 characters.")
    .max(30, "Last name must be at max 30 characters.")
    .trim()
    .required("Last name is required."),

  email: Yup.string()
    .email("Must be a valid email address.")
    .required("Email is required.")
    .trim()
    .lowercase()
    .max(60, "Email must be at max 60 characters."),

  password: Yup.string()
    .required("Password is required.")
    .trim()
    .min(6, "Password must be at least 6 characters.")
    .max(25, "Password must be at max 25 characters."),

  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match."
  ),

  location: Yup.string()
    .required("Location is required.")
    .trim()
    .min(3, "Location must be at least 3 characters.")
    .max(55, "Location must be at max 55 characters."),

  gender: Yup.string()
    .oneOf(["male", "female", "preferNotToSay"])
    .required("Gender is required."),
});
