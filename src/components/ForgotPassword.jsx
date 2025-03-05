import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={handleBack} className="cursor-pointer">Back</button>
      <p>Please Reset your password</p>
    </div>
  );
};

export default ForgotPassword;
