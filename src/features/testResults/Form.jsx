import { FormProvider, useForm } from "react-hook-form";
import SubmitButton from "../../ui/SubmitButton";
import AgeSelect from "../userDetails/AgeSelect";
import GenderSelect from "../userDetails/GenderSelect";
import { DevTool } from "@hookform/devtools";

import React, { useState } from "react";
import ExerciseForm from "./ExerciseForm";
import { getScores } from "../../api/supabase";
import Score from "../../ui/Score";

function Form() {
  const [score, setScore] = useState(0);

  const methods = useForm();

  async function onSubmit(data) {
    console.log(data);
    const totalScore = await getScores(data);
    console.log(score);
    setScore(totalScore);
  }

  const onError = () => console.log("error");

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-24 max-w-2xl sm:max-w-3xl m-auto text-stone-200  text-2xl tracking-widest uppercase mb-3"
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
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

        <ExerciseForm type="cardio">
          <option value="mile">1.5 Mile Run</option>
          <option value="shuttles">20 Meter HAMR Shuttle</option>
        </ExerciseForm>

        <SubmitButton />
      </form>
      <Score score={score} />
      <DevTool control={methods.control} />
    </FormProvider>
  );
}

export default Form;
