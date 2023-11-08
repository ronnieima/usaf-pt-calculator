import React from "react";

import ExerciseSelect from "./ExerciseSelect";
import ExerciseInput from "./ExerciseInput";
import { Separator } from "../(shadcn)/separator";

type ExerciseCategory = "upper" | "core" | "cardio";

type ExerciseOptions = {
  value: string;
  label: string;
};

export type Exercise = {
  category: ExerciseCategory;
  options: ExerciseOptions[];
};

const exercises: Exercise[] = [
  {
    category: "upper",
    options: [
      { value: "pushups", label: "Pushup" },
      { value: "handrelease", label: "Hand Release" },
    ],
  },

  {
    category: "core",
    options: [
      { value: "situps", label: "Situp" },
      { value: "crunches", label: "Cross Legged Reverse Crunch" },
      { value: "plank", label: "Forearm Plank" },
    ],
  },
  {
    category: "cardio",
    options: [
      { value: "mile", label: "1.5 Mile Run" },
      { value: "shuttles", label: "20 Meter HAMR Shuttle" },
    ],
  },
];

const ExerciseFields = () => {
  return (
    <>
      {exercises.map(({ category, options }) => {
        return (
          <React.Fragment key={category}>
            <Separator />
            <section className="flex flex-col gap-4">
              <ExerciseSelect category={category} options={options} />
              <ExerciseInput category={category} />
            </section>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ExerciseFields;
