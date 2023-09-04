function RadioButton({ id, name, text }) {
  return (
    <li>
      <input type="radio" id={id} name={name} className="hidden peer" />
      <label
        htmlFor={id}
        className="bg-blue-600 text-white block py-5 rounded-md peer-checked:bg-stone-800 shadow-lg cursor-pointer uppercase transition-colors duration-300 hover:bg-stone-700 mt-2"
      >
        {text}
      </label>
    </li>
  );
}

export default RadioButton;
