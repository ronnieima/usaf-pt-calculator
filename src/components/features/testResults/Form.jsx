import { useForm } from "react-hook-form";
import SubmitButton from "../../ui/SubmitButton";
import AgeSelect from "../userDetails/AgeSelect";
import GenderSelect from "../userDetails/GenderSelect";

import React from "react";
import ExerciseForm from "./ExerciseForm";

function Form() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    console.log(event);
  };
  const onError = () => console.log("error");
  return (
    <form
      className="flex flex-col gap-24 max-w-2xl sm:max-w-4xl m-auto text-stone-200  text-2xl tracking-widest uppercase mb-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <GenderSelect />
      <AgeSelect />

      <ExerciseForm type="upperBody">
        <option value="pushups">Pushups</option>
        <option value="handrelease">Hand Release</option>
      </ExerciseForm>

      <ExerciseForm type="core">
        <option value="situps">Situps</option>
        <option value="crunches">Cross Legged Reverse Crunch</option>
        <option value="plank">Forearm Plank</option>
      </ExerciseForm>

      <ExerciseForm type="run">
        <option value="mile">1.5 Mile Run</option>
        <option value="shuttle">20 Meter HAMR Shuttle</option>
      </ExerciseForm>

      <SubmitButton />
    </form>
  );
}

export default Form;
