"use client";
import AgeGroupSelect from "./AgeGroupSelect";
import FormButtons from "./FormButtons";

import { calculateTotalScoresWithMinimumCheck } from "../../../_db/supabase";

import { useScoreContext } from "@/app/_contexts/ScoreContext";
import { FormProvider, useForm } from "react-hook-form";
import ExerciseFields from "./ExerciseFields";
import GenderRadio from "./GenderRadioButtons";
import Score from "./Score";
import { Separator } from "../(shadcn)/separator";

export type formType = {
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
  const methods = useForm<formType>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      gender: "",
      ageGroup: "",
      upperBodyExercise: "",
      upperBodyInput: "",
      coreExercise: "",
      coreInput: "",
      cardioExercise: "",
      cardioInput: "",
    },
  });
  const { setScores } = useScoreContext();

  async function onSubmit(data: formType) {
    const res = await calculateTotalScoresWithMinimumCheck(data);
    setScores(res);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className=" flex flex-col gap-16 text-2xl tracking-wide text-foreground"
      >
        <GenderRadio />
        <AgeGroupSelect />
        <ExerciseFields />
        <FormButtons />
      </form>
      <Score />
    </FormProvider>
  );
};

export default MainForm;
