import { useFormContext } from "react-hook-form";
import ErrorText from "./ErrorText";

function ExerciseInput({
  title,
  registerProps,
  inputType,
  placeholder,
  watchExercise,
}) {
  const { register } = useFormContext();
  const isVisible = watchExercise !== "";
  return (
    <div className="relative">
      <div
        className={
          isVisible
            ? "opacity-100 transform transition-all duration-300"
            : "opacity-0 transform -translate-y-4 transition-all duration-300 absolute h-0 w-0 invisible"
        }
      >
        <h3>{title}</h3>
        <input
          {...register(registerProps.name, registerProps.validation)}
          className="w-full rounded-full p-5 text-stone-700 shadow-lg font-semibold text-center"
          type={inputType}
          placeholder={placeholder}
        />
        <ErrorText inputName={registerProps.name} />
      </div>
    </div>
  );
}

export default ExerciseInput;
