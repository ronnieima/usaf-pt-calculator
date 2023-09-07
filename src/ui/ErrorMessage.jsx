import React from "react";

const ErrorMessage = ({ error, className = "" }) => {
  if (!error || !error.message) return null; // Don't render if there's no error message.

  return (
    <p className={`text-red-500 font-semibold ${className}`}>
      *{error.message}
    </p>
  );
};

export default ErrorMessage;
