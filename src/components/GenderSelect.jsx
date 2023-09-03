import RadioButton from "./RadioButton";

function GenderSelect() {
  return (
    <div className="my-3 uppercase">
      <h3 className="text-white text-2xl tracking-widest">Gender</h3>
      <ul className="my-2 grid grid-cols-2 gap-2 text-center">
        <RadioButton id="male" name="gender" text="male" />
        <RadioButton id="female" name="gender" text="female" />
      </ul>
    </div>
  );
}

export default GenderSelect;
