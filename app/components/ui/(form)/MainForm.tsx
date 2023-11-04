"use client";
import GenderRadioButtons from "./GenderRadioButtons";
import AgeGroupSelect from "./AgeGroupSelect";
import ExerciseField from "./ExerciseField";
import FormButtons from "./FormButtons";

import { FormValuesType, schema } from "../../../_util/validation";
import { fetchExerciseScores } from "../../../_db/supabase";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";

const MainForm = () => {
  const methods = useForm<FormValuesType>({
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: any) {
    console.log("submitting...");
    console.log(data);
    const res = await fetchExerciseScores(data);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="m-auto mb-3 flex max-w-2xl flex-col gap-16 text-2xl  uppercase tracking-widest text-slate-200 sm:max-w-3xl"
      >
        {/* radio gender */}
        <GenderRadioButtons />

        <Separator className="bg-slate-500 opacity-70" />

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

        <Separator className="bg-slate-500 opacity-70" />

        {/* select upper exercise  */}
        <ExerciseField
          type="upper"
          options={[
            { value: "pushups", label: "Pushup" },
            { value: "handrelease", label: "Hand Release" },
          ]}
        />

        <Separator className="bg-slate-500 opacity-70" />

        {/* select core exercise */}
        <ExerciseField
          type="core"
          options={[
            { value: "situps", label: "Situp" },
            { value: "crunches", label: "Cross Legged Reverse Crunch" },
            { value: "plank", label: "Forearm Plank" },
          ]}
        />

        <Separator className="bg-slate-500 opacity-70" />

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
    </FormProvider>
  );
};

export default MainForm;
