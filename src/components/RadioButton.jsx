function RadioButton({ id, name, text }) {
  return (
    <li>
      <input type="radio" id={id} name={name} className="hidden peer" />
      <label
        htmlFor={id}
        className="bg-blue-900 text-white block py-5 rounded-md peer-checked:bg-black shadow-md cursor-pointer uppercase transition-colors duration-300"
      >
        {text}
      </label>
    </li>
  );
}

export default RadioButton;
