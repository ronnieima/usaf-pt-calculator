import { FormProvider, useForm } from "react-hook-form";
import SubmitButton from "../../ui/SubmitButton";
import AgeSelect from "../userDetails/AgeSelect";
import GenderSelect from "../userDetails/GenderSelect";

import React from "react";
import ExerciseForm from "./ExerciseForm";
import { getScores } from "../../api/supabase";
import Score from "../../ui/Score";
import { useScoreContext } from "../../contexts/ScoreContext";

function Form() {
  const methods = useForm();
  const {
    setUpperScore,
    setCoreScore,
    setCardioScore,
    setTotalScore,
    setIsMinimumNotMet,
  } = useScoreContext();
  async function onSubmit(data) {
    setIsMinimumNotMet(false);
    const { upper, core, cardio } = await getScores(data);
    if (upper === 0 || core === 0 || cardio === 0) {
      setIsMinimumNotMet(true);
    }
    setUpperScore(upper);
    setCoreScore(core);
    setCardioScore(cardio);
    setTotalScore(upper + core + cardio);
  }

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
      <Score />
    </FormProvider>
  );
}

export default Form;
