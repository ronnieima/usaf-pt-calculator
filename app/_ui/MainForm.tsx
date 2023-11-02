"use client";
import { FormProvider, useForm } from "react-hook-form";
import AgeGroupSelect from "./AgeGroupSelect";
import ExerciseSelect from "./ExerciseSelect";
import FormButtons from "./FormButtons";
import GenderRadioButtons from "./GenderRadioButtons";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import { FormValuesType, schema } from "../_util/validation";
import { fetchExerciseScores } from "../_db/supabase";

const MainForm = () => {
  const methods = useForm<FormValuesType>({
    mode: "onChange", // Makes it easier to catch erros before a submit
    resolver: zodResolver(schema), // Set our validator
    defaultValues: {
      gender: undefined,
      ageGroup: undefined,
      upperExercise: undefined,
      upperInput: undefined,
      coreExercise: undefined,
      coreInput: undefined,
      cardioExercise: undefined,
      cardioInput: undefined,
    },
  });
  const { handleSubmit, control } = methods;

  async function onSubmit(data: any) {
    console.log(data);
    const res = await fetchExerciseScores(data);
    console.log(res);
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-auto mb-3 flex max-w-2xl flex-col gap-16 text-2xl  uppercase tracking-widest text-stone-200 sm:max-w-3xl"
        >
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

      <DevTool control={control}></DevTool>
    </div>
  );
};

export default MainForm;
