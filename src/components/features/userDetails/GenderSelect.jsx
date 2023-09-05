import React from "react";
import RadioButton from "../../ui/RadioButton";

function GenderSelect() {
  return (
    <section className=" uppercase">
      <label htmlFor="gender">Gender</label>

      <div className="grid sm:grid-cols-2 gap-4 text-center">
        <RadioButton option="male" name="gender" />
        <RadioButton option="female" name="gender" />
      </div>
    </section>
  );
}

export default GenderSelect;
