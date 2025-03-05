import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(16, "Password must not exceed 16 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter (A-Z)")
    .matches(/[a-z]/, "Must contain at least one lowercase letter (a-z)")
    .matches(/\d/, "Must contain at least one number (0-9)")
    .matches(
      /[@$!%*?&_]/,
      "Must contain at least one special character (@$!%*?&)"
    )
    .matches(/^\S*$/, "Password should not contain spaces")
    .notOneOf(
      ["password123", "admin", "12345678"],
      "This password is too common"
    )
    .required("Password is required"),
});
