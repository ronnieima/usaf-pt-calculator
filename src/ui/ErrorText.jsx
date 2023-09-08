import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

function ErrorText({ inputName }) {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <ErrorMessage
      name={inputName}
      error={errors.inputName}
      render={({ message }) => (
        <p className="text-rose-500 mt-1 ">*{message}</p>
      )}
    />
  );
}

export default ErrorText;
