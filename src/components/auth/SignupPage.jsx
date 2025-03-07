import React, { useState } from "react";
import hide from "../../assets/hide.png";
import visible from "../../assets/visible.png";
import google from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  togglePasswordVisibility,
} from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { signUpValidationSchema } from "../schema/validationSchema";

const SignupPage = () => {
  const dispatch = useDispatch();
  const { username, email, password, confirmPassword, showPassword } =
    useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleBlur = (field, value) => {
    switch (field) {
      case "username":
        dispatch(setUsername(value));
        break;
      case "email":
        dispatch(setEmail(value));
        break;
      case "password":
        dispatch(setPassword(value));
        break;
      case "confirmPassword":
        dispatch(setConfirmPassword(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col items-center justify-center bg-white">
        <h1 className="font-bold text-xl">A.S.A.P</h1>
        <h2 className="font-bold">AI Powered Smart Action Planner</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-2 bg-gray-900">
        <Formik
          initialValues={{ username, email, password, confirmPassword }}
          validationSchema={signUpValidationSchema}
          validateOnMount={true} 
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form submitted with values:", values);
            dispatch(setUsername(values.username));
            dispatch(setEmail(values.email));
            dispatch(setPassword(values.password));
            dispatch(setConfirmPassword(values.confirmPassword));
            setTimeout(() => {
              setSubmitting(false);
              navigate("/log-in");
            }, 500); 
          }}
        >
          {({
            isSubmitting,
            isValid,
            handleBlur: formikHandleBlur,
            handleSubmit
          }) => (
            console.log("is Valid", isValid),
            <Form className="" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col space-y-4 gap-4">
                <h2 className="font-bold text-gray-300">SIGN UP</h2>
                {/* username field  */}
                <div className="flex flex-col relative w-full mt-1">
                  <label
                    htmlFor="username"
                    className="font-bold absolute text-gray-300 left-2 -top-6"
                  >
                    Username
                  </label>
                  <Field
                    type="text"
                    placeholder="Enter Username"
                    id="username"
                    name="username"
                    className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 px-2 w-full"
                    onBlur={(e) => {
                      formikHandleBlur(e);
                      handleBlur("username", e.target.value);
                    }}
                  />
                  <ErrorMessage
                    name="username"
                    component="p"
                    className="text-red-500 text-sm mt-1 absolute left-1/2 -translate-x-1/2 -bottom-5 text-center w-full min-h-[20px] whitespace-nowrap"
                  />
                </div>

                {/* email field  */}
                <div className="flex flex-col relative w-full mt-1">
                  <label
                    htmlFor="email"
                    className="font-bold absolute text-gray-300 left-2 -top-6"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    placeholder="Enter Email"
                    id="email"
                    name="email"
                    className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 px-2 w-full"
                    onBlur={(e) => {
                      formikHandleBlur(e);
                      handleBlur("email", e.target.value);
                    }}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm mt-1 absolute left-1/2 -translate-x-1/2 -bottom-5 text-center w-full min-h-[20px] whitespace-nowrap"
                  />
                </div>

                {/* password field  */}
                <div className="flex flex-col relative w-full mt-1">
                  <label
                    htmlFor="password"
                    className="font-bold absolute text-gray-300 left-2 -top-6"
                  >
                    Password
                  </label>
                  <Field
                    type={showPassword.password ? "text" : "password"}
                    placeholder="Enter Password"
                    id="password"
                    name="password"
                    className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 px-2 w-full"
                    onBlur={(e) => {
                      formikHandleBlur(e);
                      handleBlur("password", e.target.value);
                    }}
                  />
                  <img
                    src={showPassword.password ? visible : hide}
                    alt=""
                    onClick={() =>
                      dispatch(togglePasswordVisibility("password"))
                    }
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-75 hover:scale-110 transition-all duration-200"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-sm mt-1 absolute left-1/2 -translate-x-1/2 -bottom-5 text-center w-full min-h-[20px] whitespace-nowrap"
                  />
                </div>

                {/* confirm password field  */}
                <div className="flex flex-col relative w-full mt-1">
                  <label
                    htmlFor="confirmPassword"
                    className="font-bold absolute text-gray-300 left-2 -top-6"
                  >
                    Confirm Password
                  </label>
                  <Field
                    type={showPassword.confirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 px-2 w-full"
                    onBlur={(e) => {
                      formikHandleBlur(e);
                      handleBlur("confirmPassword", e.target.value);
                    }}
                  />
                  <img
                    src={showPassword.confirmPassword ? visible : hide}
                    onClick={() =>
                      dispatch(togglePasswordVisibility("confirmPassword"))
                    }
                    alt=""
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-75 hover:scale-110 transition-all duration-200"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="text-red-500 text-sm mt-1 absolute left-1/2 -translate-x-1/2 -bottom-5 text-center w-full min-h-[20px] whitespace-nowrap"
                  />
                </div>
                {/* Login and Sign Up Buttons */}
                <div className="flex flex-col items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className={`rounded-full px-6 py-2 w-40 font-semibold shadow-md 
                      ${
                        isValid
                          ? "bg-gray-300 text-gray-900 cursor-pointer"
                          : "bg-gray-500 text-gray-700 cursor-not-allowed"
                      }`}
                      onClick={() => console.log("Submit button clicked")}
                  >
                    {isSubmitting ? "Signing Up" : "Signup"}
                  </button>
      
                  <div>
                    <p className="text-gray-400 font-bold mt-4">
                      Already have an account?
                      <Link
                        to="/log-in"
                        className="font-bold text-gray-300 ml-1 cursor-pointer hover:scale-110 transition-all duration-200 inline-block"
                      >
                        LogIn here!
                      </Link>
                    </p>
                  </div>
                  <div className="w-full">
                    <button
                      type="button"
                      className="flex items-center justify-center bg-gray-300 text-gray-900 rounded-full px-6 py-3 w-full font-semibold shadow-md mt-6 space-x-3 cursor-pointer"
                    >
                      <img src={google} alt="Google Logo" className="w-5 h-5" />
                      <span>Sign up with Google</span>
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupPage;
