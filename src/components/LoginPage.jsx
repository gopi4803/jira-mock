import React, { useState } from "react";
import hide from "../assets/hide.png";
import visible from "../assets/visible.png";
import google from "../assets/google.png";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  setEmail,
  setPassword,
  togglePasswordVisibility,
} from "../redux/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password, showPassword } = useSelector((state) => state.auth);
  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col items-center justify-center bg-white">
        <h1 className="font-bold text-xl">A.S.A.P</h1>
        <h2 className="font-bold">AI Powered Smart Action Planner</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-2 bg-gray-900">
        <form action="">
          <div className="w-full flex flex-col space-y-4 gap-4">
            <h2 className="font-bold text-gray-300">LOG IN</h2>
            {/* Username Field */}
            <div className="flex flex-col relative w-full">
              <label
                htmlFor="email"
                className="font-bold absolute left-2 -top-6"
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 w-full"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col relative w-full mt-2">
              <label
                htmlFor="password"
                className="font-bold absolute left-2 -top-6"
              >
                Password:
              </label>
              <input
                type={showPassword.password ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 px-2 w-full pr-10"
              />
              {/* { password.length>0 && ( */}
              <img
                src={showPassword.password ? visible : hide}
                alt={showPassword.password ? "Hide Password" : "Show Password"}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-75 hover:scale-110 transition-all duration-200"
                onClick={() => dispatch(togglePasswordVisibility("password"))}
              />
              {/* )
              } */}
            </div>
            <Link
              to="/forgot-password"
              className="text-gray-400 font-bold hover:text-gray-300 hover:scale-105 transition-all duration-200"
            >
              Forgot Password
            </Link>
          </div>
        </form>

        {/* Login and Sign Up Buttons */}
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="bg-gray-300 text-gray-900 rounded-full px-6 py-2 w-40 font-semibold shadow-md mt-4 cursor-pointer"
            onClick={() => handleLogin()}
          >
            Login
          </button>
          <p className="text-gray-400 font-bold mt-4">
            Don't have an account?
            <Link
              to="/sign-up"
              className="font-bold text-gray-300 ml-1 cursor-pointer hover:scale-110 transition-all duration-200 inline-block"
            >
              SignUp here!
            </Link>
          </p>

          <div className="w-full">
            <button
              type="button"
              className="flex items-center justify-center bg-gray-300 text-gray-900 rounded-full px-6 py-3 w-full font-semibold shadow-md mt-6 space-x-3 cursor-pointer"
            >
              <img src={google} alt="Google Logo" className="w-5 h-5" />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
