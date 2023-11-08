"use client";
import AgeGroupSelect from "./AgeGroupSelect";
import ExerciseField from "./ExerciseField";
import FormButtons from "./FormButtons";

import { calculateAndReturnScores } from "../../../_db/supabase";

import { FormProvider, useForm } from "react-hook-form";
import { Separator } from "@/app/_components/ui/(shadcn)/separator";
import { useScoreContext } from "@/app/_contexts/ScoreContext";
import Score from "./Score";
import GenderRadio from "./GenderRadioButtons";

const MainForm = () => {
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      gender: "male",
      ageGroup: "<25",
      upperExercise: "pushups",
      upperInput: "50",
      coreExercise: "situps",
      coreInput: "23",
      cardioExercise: "shuttles",
      cardioInput: "44",
    },
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
    <section>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="m-auto flex max-w-2xl flex-col gap-16 text-2xl tracking-wide text-card-foreground opacity-100 sm:max-w-3xl"
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

          <Separator />

          {/* select upper exercise  */}
          <ExerciseField
            type="upper"
            options={[
              { value: "pushups", label: "Pushup" },
              { value: "handrelease", label: "Hand Release" },
            ]}
          />

          <Separator />

          {/* select core exercise */}
          <ExerciseField
            type="core"
            options={[
              { value: "situps", label: "Situp" },
              { value: "crunches", label: "Cross Legged Reverse Crunch" },
              { value: "plank", label: "Forearm Plank" },
            ]}
          />

          <Separator />

          {/* select cardio exercise */}
          <ExerciseField
            type="cardio"
            options={[
              { value: "mile", label: "1.5 Mile Run" },
              { value: "shuttles", label: "20 Meter HAMR Shuttle" },
            ]}
          />

          {/* reset/submit buttons */}
          <FormButtons />
        </form>
        <Score />
      </FormProvider>
    </section>
  );
};

export default MainForm;
