import React, { useState } from "react";
import hide from "../assets/hide.png";
import visible from "../assets/visible.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col items-center justify-center bg-white">
        <h1 className="font-bold text-xl">A.S.A.P</h1>
        <h2 className="font-bold">AI Powered Smart Action Planner</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-2 bg-gray-900">
        <form action="">
          <div className="w-full flex flex-col space-y-4">

            {/* Username Field */}
            <div className="flex flex-col relative w-full">
              <label htmlFor="username" className="font-bold absolute left-2 -top-6">
                Username:
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 w-full"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col relative w-full mt-2">
              <label htmlFor="password" className="font-bold absolute left-2 -top-6">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 w-full pr-10"
              />
              {/* { password.length>0 && ( */}
                  <img
                    src={showPassword ? visible : hide}
                    alt={showPassword ? "Hide Password" : "Show Password"}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-75 hover:scale-110 transition-all duration-200"
                    onClick={togglePasswordVisibility}
                  />
              {/* )
              } */}
            </div>
            <a href="#" className="text-gray-300 font-bold hover:text-gray-300 hover:scale-105 transition-all duration-200">
                Forgot Password
            </a>
          </div>

        </form>
    
        {/* Login and Sign Up Buttons */}
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="bg-gray-300 text-gray-900 rounded-full px-6 py-2 w-40 font-semibold shadow-md mt-4"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-900 rounded-full px-6 py-2 w-40 font-semibold shadow-md mt-4"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
