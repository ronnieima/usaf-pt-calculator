"use client";
import AgeGroupSelect from "./(controls)/AgeGroupSelect";
import FormButtons from "./(controls)/FormButtons";

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

  const setFormData = useFormStore((state) => state.setFormData);
  async function onSubmit(formData: FormType) {
    setFormData(formData);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
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
