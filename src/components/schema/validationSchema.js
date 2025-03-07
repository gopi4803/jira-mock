import * as Yup from "yup";

// Login Validation Schema
export const loginValidationSchema = Yup.object({
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
    .matches(/[@$!%*?&_]/, "Must contain at least one special character (@$!%*?&)")
    .matches(/^\S*$/, "Password should not contain spaces")
    .notOneOf(["password123", "admin", "12345678"], "This password is too common"),
});

// Sign-Up Validation Schema
export const signUpValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must not exceed 20 characters")
    .required("Username is required"),
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
    .matches(/[@$!%*?&_]/, "Must contain at least one special character (@$!%*?&)")
    .matches(/^\S*$/, "Password should not contain spaces")
    .notOneOf(["password123", "admin", "12345678"], "This password is too common"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});
