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
        <p className="mt-1 text-rose-500 ">*{message}</p>
      )}
    />
  );
}

export default ErrorText;
