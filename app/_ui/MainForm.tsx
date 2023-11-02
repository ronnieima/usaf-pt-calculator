"use client";

import { FormProvider, useForm } from "react-hook-form";
import AgeGroupSelect from "./AgeGroupSelect";
import ExerciseSelect from "./ExerciseSelect";
import FormButtons from "./FormButtons";
import GenderRadioButtons from "./GenderRadioButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";

const schema = z.object({
  Gender: z.string({ required_error: "required " }),
  "Age Group": z.string({ required_error: "required " }),
  "Upper Body": z.string({ required_error: "required " }),
  "Upper Body Input": z.string().or(z.number({ required_error: "required " })),
  Core: z.string({ required_error: "required " }),
  "Core Input": z.string({ required_error: "required " }).or(z.number()),
  Cardio: z.string(),
  "Cardio Input": z.string({ required_error: "required " }).or(z.number()),
});

type FormValuesType = z.infer<typeof schema>;

const MainForm = () => {
  const methods = useForm({
    mode: "onChange", // Makes it easier to catch erros before a submit
    resolver: zodResolver(schema), // Set our validator
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    trigger,
    getValues,
  } = methods;

  function onSubmit(data: any) {
    console.log(data);
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
          <ExerciseSelect type="upper" options={["Pushup", "Hand Release"]} />
          {/* select core exercise */}
          <ExerciseSelect
            type="core"
            options={["Situp", "Cross Legged Reverse Crunch", "Forearm Plank"]}
          />
          {/* select cardio exercise */}
          <ExerciseSelect
            type="cardio"
            options={["1.5 Mile Run", "20 Meter HAMR Shuttle"]}
          />
          {/* reset/submit button */}
          <FormButtons />
        </form>
      </FormProvider>

      <DevTool control={control}></DevTool>
    </div>
  );
};

export default MainForm;
