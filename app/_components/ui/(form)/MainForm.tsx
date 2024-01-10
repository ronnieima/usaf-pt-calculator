"use client";
import AgeGroupSelect from "./(controls)/AgeGroupSelect";
import FormButtons from "./(controls)/FormButtons";

import { getScores } from "@/app/actions";
import { useFormStore } from "@/app/stores/store";
import { FormProvider, useForm } from "react-hook-form";
import ExerciseFields from "./(controls)/ExerciseFields";
import GenderRadio from "./(controls)/GenderRadioButtons";
import Score from "./(score)/Score";
import ScoreChartLink from "./ScoreChartLink";

export type FormType = {
  gender: string;
  ageGroup: string;
  upperBodyExercise: string;
  upperBodyInput: string;
  coreExercise: string;
  coreInput: string;
  cardioExercise: string;
  cardioInput: string;
};

const MainForm = () => {
  const methods = useForm<FormType>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const setScore = useFormStore((state) => state.setScore);

  const onSubmit = methods.handleSubmit(async (formData) => {
    const { upperBody, core, cardio } = await getScores(formData);
    setScore("upperBody", upperBody);
    setScore("core", core);
    setScore("cardio", cardio);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit}
        className=" flex flex-col gap-16 text-2xl tracking-wide text-foreground"
      >
        <GenderRadio />
        <AgeGroupSelect />
        <ScoreChartLink />
        <ExerciseFields />
        <FormButtons />
      </form>

      <Score />
    </FormProvider>
  );
};

export default MainForm;
