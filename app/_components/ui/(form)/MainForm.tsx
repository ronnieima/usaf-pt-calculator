"use client";
import AgeGroupSelect from "./AgeGroupSelect";
import FormButtons from "./FormButtons";

import { calculateAndReturnScores } from "../../../_db/supabase";

import { FormProvider, useForm } from "react-hook-form";
import { Separator } from "@/app/_components/ui/(shadcn)/separator";
import { useScoreContext } from "@/app/_contexts/ScoreContext";
import Score from "./Score";
import GenderRadio from "./GenderRadioButtons";
import ExerciseFields from "./ExerciseFields";

const MainForm = () => {
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    // defaultValues: {
    //   gender: "male",
    //   ageGroup: "<25",
    //   upperExercise: "pushups",
    //   upperInput: "60",
    //   coreExercise: "situps",
    //   coreInput: "42",
    //   cardioExercise: "shuttles",
    //   cardioInput: "23",
    // },
  });
  const { setScores, scores } = useScoreContext();

  async function onSubmit(data: unknown) {
    // console.log("submitting...");
    const res = await calculateAndReturnScores(data);
    // console.log(data);
    setScores(res);
    // console.log(scores);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="mb-3 flex max-w-2xl flex-col gap-16 text-2xl tracking-wide text-foreground sm:max-w-3xl"
      >
        {/* gender */}
        <GenderRadio />

        <Separator />

        {/* select age group */}
        <AgeGroupSelect
          options={[
            "<25",
            "25-29",
            "30-34",
            "35-39",
            "40-44",
            "45-49",
            "50-54",
            "55-59",
            ">60",
          ]}
        />

        <ExerciseFields />

        {/* reset/submit buttons */}
        <FormButtons />
      </form>
      <Score />
    </FormProvider>
  );
};

export default MainForm;
