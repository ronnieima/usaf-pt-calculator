import { useDispatch, useSelector } from "react-redux";
import RadioButton from "../../ui/RadioButton";
import { setGender } from "./userDetailsSlice";
import { useForm } from "react-hook-form";
import React from "react";

function GenderSelect() {
  const dispatch = useDispatch();

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
