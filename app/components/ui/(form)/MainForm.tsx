"use client";
import GenderSelect from "./GenderSelect";
import AgeGroupSelect from "./AgeGroupSelect";
import ExerciseField from "./ExerciseField";
import FormButtons from "./FormButtons";

import { FormValuesType, schema } from "../../../_util/validation";
import { calculateAndReturnScores } from "../../../_db/supabase";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import { useScoreContext } from "@/app/contexts/ScoreContext";
import Score from "./Score";

const MainForm = () => {
  const methods = useForm<FormValuesType>({
    reValidateMode: "onChange",
    defaultValues: {
      gender: "",
      ageGroup: "",
      upperExercise: "",
      upperInput: "",
      coreExercise: "",
      coreInput: "",
      cardioExercise: "",
      cardioInput: "",
    },
  });
  const { setScores } = useScoreContext();

  async function onSubmit(data: unknown) {
    console.log("submitting...");
    const res = await calculateAndReturnScores(data);
    console.log(res);
    setScores(res);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="m-auto mb-3 flex max-w-2xl flex-col gap-16 text-2xl  uppercase tracking-widest text-slate-200 sm:max-w-3xl"
      >
        {/* radio gender */}
        <GenderSelect />

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
  );
};

export default MainForm;
