import { useState } from "react";

function RadioButton({ option, name }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <input
        type="radio"
        id={option}
        value={option}
        name={name}
        className="hidden"
        onChange={() => setIsChecked(!isChecked)}
      />
      <label
        htmlFor={option}
        className={`text-white block bg-blue-600 py-5 rounded-md transition-colors shadow-lg cursor-pointer uppercase  duration-300 hover:bg-stone-700 mt-2 ${
          isChecked ? "bg-stone-800 ring ring-slate-200" : ""
        }`}
      >
        {option}
      </label>
    </>
  );
}

export default RadioButton;
