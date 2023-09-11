import { useFormContext, useFormState } from "react-hook-form";

function RadioButton({ option, name }) {
  const { register } = useFormContext();
  const { isSubmitting } = useFormState();

  return (
    <div>
      <input
        {...register(name, { required: "Gender is required" })}
        type="radio"
        id={option}
        value={option}
        name={name}
        className="peer hidden"
        disabled={isSubmitting}
      />
      <label
        htmlFor={option}
        className="mt-2 block cursor-pointer rounded-md bg-blue-600 py-5 uppercase text-white shadow-lg transition-colors duration-300 hover:bg-gray-500 peer-checked:bg-gray-700 peer-checked:ring peer-checked:ring-slate-200"
      >
        {option}
      </label>
    </div>
  );
}

export default RadioButton;
