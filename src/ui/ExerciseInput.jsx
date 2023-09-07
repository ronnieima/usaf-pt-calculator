import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

function ExerciseInput({
  title,
  registerProps,
  inputType,
  placeholder,
  error,
  watchExercise,
}) {
  const { register } = useFormContext();
  return (
    <div
      className={
        watchExercise === ""
          ? "opacity-0 transform -translate-y-4 transition-all duration-300"
          : "opacity-100 transform transition-all duration-300"
      }
    >
      <h3>{title}</h3>
      <input
        {...register(registerProps.name, registerProps.validation)}
        className="w-full rounded-full p-5 text-stone-700 shadow-lg font-semibold text-center"
        type={inputType}
        placeholder={placeholder}
      />
      <ErrorMessage error={error} />
    </div>
  );
}

export default ExerciseInput;
