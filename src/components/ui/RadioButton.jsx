function RadioButton({ id, name, text }) {
  return (
    <li>
      <input type="radio" id={id} name={name} className="hidden peer" />
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
