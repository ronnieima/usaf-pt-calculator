import RadioButton from "./RadioButton";

function GenderSelect() {
  return (
    <div className="my-3 uppercase">
      <h3>Gender</h3>
      <ul className="grid sm:grid-cols-2 gap-4 text-center">
        <RadioButton id="male" name="gender" text="male" />
        <RadioButton id="female" name="gender" text="female" />
      </ul>
    </div>
  );
}

export default GenderSelect;
