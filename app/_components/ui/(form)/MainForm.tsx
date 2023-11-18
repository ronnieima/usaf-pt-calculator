"use client";
import AgeGroupSelect from "./(controls)/AgeGroupSelect";
import FormButtons from "./(controls)/FormButtons";

import { calculateTotalScoresWithMinimumCheck } from "../../../_db/supabase";

import { useScoreContext } from "@/app/_contexts/ScoreContext";
import { FormProvider, useForm } from "react-hook-form";
import ExerciseFields from "./(controls)/ExerciseFields";
import GenderRadio from "./(controls)/GenderRadioButtons";
import Score from "./(score)/Score";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "@/lib/redux/slices/formSlice";
import { useFormSelector } from "@/lib/redux/store";

export type FormType = {
  gender: string;
  ageGroup: string;
  muscularStrengthExercise: string;
  muscularStrengthResult: string;
  coreEnduranceExercise: string;
  coreEnduranceResult: string;
  cardiorespiratoryFitnessExercise: string;
  cardiorespiratoryFitnessResult: string;
};

export const initialValues = {
  gender: "",
  ageGroup: "",
  muscularStrengthExercise: "",
  muscularStrengthResult: "",
  coreEnduranceExercise: "",
  coreEnduranceResult: "",
  cardiorespiratoryFitnessExercise: "",
  cardiorespiratoryFitnessResult: "",
};

const MainForm = () => {
  const methods = useForm<FormType>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: initialValues,
  });
  const { setScores } = useScoreContext();
  const dispatch = useDispatch();
  const data = useFormSelector((state) => state.form.inputs);

  async function onSubmit(data: FormType) {
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
