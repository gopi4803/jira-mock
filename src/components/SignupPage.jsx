import React, { useState } from "react";
import hide from "../assets/hide.png";
import visible from "../assets/visible.png";
import google from "../assets/google.png";
import {
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  togglePasswordVisibility,
} from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

const SignupPage = () => {
  const dispatch = useDispatch();
  const { username, email, password, confirmPassword, showPassword } =
    useSelector((state) => state.auth);

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col items-center justify-center bg-white">
        <h1 className="font-bold text-xl">A.S.A.P</h1>
        <h2 className="font-bold">AI Powered Smart Action Planner</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-2 bg-gray-900">
        <form action="">
          <div className="w-full flex flex-col space-y-4 gap-4">
            <h2 className="font-bold text-gray-300">SIGN UP</h2>
            {/* username field  */}
            <div className="flex flex-col relative w-full">
              <label
                htmlFor="username"
                className="font-bold absolute left-2 -top-6"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                id="username"
                value={username}
                onChange={(e) => dispatch(setUsername(e.target.value))}
                className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 px-2 w-full"
              />
            </div>

            {/* email field  */}
            <div className="flex flex-col relative w-full">
              <label
                htmlFor="email"
                className="font-bold absolute left-2 -top-6"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                id="email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 px-2 w-full"
              />
            </div>

            {/* password field  */}
            <div className="flex flex-col relative w-full">
              <label
                htmlFor="password"
                className="font-bold absolute left-2 -top-6"
              >
                Password
              </label>
              <input
                type={showPassword.password ? "text" : "password"}
                placeholder="Enter Password"
                id="password"
                value={password}
                onChange={(e) => {
                  dispatch(setPassword(e.target.value));
                }}
                className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 px-2 w-full"
              />
              <img
                src={showPassword.password ? visible : hide}
                alt=""
                onClick={() => dispatch(togglePasswordVisibility("password"))}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-75 hover:scale-110 transition-all duration-200"
              />
            </div>

            {/* confirm password field  */}
            <div className="flex flex-col relative w-full">
              <label
                htmlFor="confirmPassword"
                className="font-bold absolute left-2 -top-6"
              >
                Confirm Password
              </label>
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  dispatch(setConfirmPassword(e.target.value));
                }}
                className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 px-2 w-full"
              />
              <img
                src={showPassword.confirmPassword ? visible : hide}
                onClick={() =>
                  dispatch(togglePasswordVisibility("confirmPassword"))
                }
                alt=""
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-75 hover:scale-110 transition-all duration-200"
              />
            </div>
          </div>
        </form>

        {/* Login and Sign Up Buttons */}
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="bg-gray-300 text-gray-900 rounded-full px-6 py-2 w-40 font-semibold shadow-md mt-6 cursor-pointer"
          >
            Signup
          </button>
          <div>
            <p className="text-gray-400 font-bold mt-4">
              Already have an account?
              <a
                href=""
                className="font-bold text-gray-300 ml-1 cursor-pointer hover:scale-110 transition-all duration-200 inline-block"
              >
                LogIn here!
              </a>
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
    </div>
  );
};

export default SignupPage;
