"use client";
import AgeGroupSelect from "./AgeGroupSelect";
import ExerciseSelect from "./ExerciseSelect";
import FormButtons from "./FormButtons";
import GenderRadioButtons from "./GenderRadioButtons";
import { FormValuesType, schema } from "../../_util/validation";
import { fetchExerciseScores } from "../../_db/supabase";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

const MainForm = () => {
  const methods = useForm<FormValuesType>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: any) {
    console.log("submitting...");
    console.log(data);
    const res = await fetchExerciseScores(data);
  }

  return (
    <FormProvider {...methods}>
      <form className="m-auto mb-3 flex max-w-2xl flex-col gap-16 text-2xl  uppercase tracking-widest text-stone-200 sm:max-w-3xl">
        {/* radio gender */}
        <GenderRadioButtons />

        {/* select age group */}
        <AgeGroupSelect />

        {/* select upper exercise  */}
        <ExerciseSelect
          type="upper"
          options={[
            { value: "pushups", label: "Pushups" },
            { value: "handrelease", label: "Hand Release" },
          ]}
        />

        {/* select core exercise */}
        <ExerciseSelect
          type="core"
          options={[
            { value: "situps", label: "Situp" },
            { value: "crunches", label: "Cross Legged Reverse Crunch" },
            { value: "plank", label: "Forearm Plank" },
          ]}
        />

        {/* select cardio exercise */}
        <ExerciseSelect
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
