import { setGender } from "../features/userDetails/userDetailsSlice";

function RadioButton({ id, name, text, dispatch, value }) {
  return (
    <li>
      <input
        type="radio"
        id={id}
        name={name}
        className="hidden peer"
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
          dispatch(setGender(e.target.value));
        }}
      />
      <label
        htmlFor={id}
        className="text-white block bg-blue-600 py-5 rounded-md transition-colors peer-checked:bg-stone-800 shadow-lg cursor-pointer uppercase  duration-300 hover:bg-stone-700 mt-2 "
      >
        {text}
      </label>
    </li>
  );
}

export default RadioButton;
