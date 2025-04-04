import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../schema/validationSchema";
import { useState } from "react";
import EmailSentImage from "../../assets/EmailSent.jpg";

const ForgotPassword = () => {
  // const dispatch=useDispatch();
  const form = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onTouched",
    resolver: yupResolver(loginValidationSchema),
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const { email } = useSelector((state) => state.auth);
  const [submitted, setSubmitted] = useState(false);

  const submit = (data) => {
    // dispatch(setEmail(data.email));
    // navigate("/home");
    console.log(data);
    console.log("submitting");
    setSubmitted(true);
  };
  const handleClick = () => {
    console.log("submitting");
    setSubmitted(true);
  };
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col items-center justify-center bg-white">
        <h1 className="font-bold text-xl">A.S.A.P</h1>
        <h2 className="font-bold">AI Powered Smart Action Planner</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-2 bg-gray-900">
        {submitted ? (
          <div className="text-center">
            <img
              src={EmailSentImage}
              alt="Email Sent"
              className="w-48 mx-auto"
            />
            <h2 className="text-white font-bold mt-4">Check Your Email!</h2>
            <p className="text-gray-400 font-bold mt-4">
              We have sent you temporary credentials. Please check your inbox.{" "}
            </p>
            <p className="text-gray-400 font-bold mt-4">
              Back to
              <Link
                to="/log-in"
                className="font-bold text-gray-300 ml-1 cursor-pointer hover:scale-110 transition-all duration-200 inline-block"
              >
                Login!
              </Link>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(submit)}>
            <div className="w-full flex flex-col space-y-4 gap-4">
              <h2 className="font-bold text-gray-300">FORGOT PASSWORD</h2>

              {/* Email Field */}
              <div className="flex flex-col relative w-full">
                <label
                  htmlFor="email"
                  className="font-bold absolute text-gray-300 left-2 -top-6"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  defaultValue={email}
                  {...register("email")}
                  className="bg-gray-300 rounded-lg placeholder-gray-900 text-center py-2 w-full"
                />
                <p className="text-red-500 text-sm mt-1 absolute left-1/2 -translate-x-1/2 -bottom-5 text-center w-full min-h-[20px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {errors.email?.message}
                </p>
              </div>
            </div>

            {/* Reset Password Button */}
            <div className="flex flex-col items-center">
              <p className="text-gray-400 font-bold mt-4">
                Remembered Password?
                <Link
                  to="/sign-up"
                  className="font-bold text-gray-300 ml-1 cursor-pointer hover:scale-110 transition-all duration-200 inline-block"
                >
                  Goto Login!
                </Link>
              </p>
              <button
                type="submit"
                onClick={handleClick}
                className="flex items-center justify-center bg-gray-300 text-gray-900 rounded-full px-6 py-3 w-full font-semibold shadow-md mt-6 space-x-3 cursor-pointer"
              >
                <span>Reset Password</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
