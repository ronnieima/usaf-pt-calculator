import { useFormContext } from "react-hook-form";
function RadioButton({ option, name }) {
  const { register } = useFormContext();
  return (
    <div>
      <input
        {...register(name)}
        type="radio"
        id={option}
        value={option}
        name={name}
        className="hidden peer"
      />
      <label
        htmlFor={option}
        className="text-white block bg-blue-600 py-5 rounded-md transition-colors peer-checked:bg-gray-700 hover:bg-gray-500 shadow-lg cursor-pointer uppercase duration-300 mt-2 peer-checked:ring peer-checked:ring-slate-200"
      >
        {option}
      </label>
    </div>
  );
}

export default RadioButton;
