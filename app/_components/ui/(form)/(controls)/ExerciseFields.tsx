import React from "react";

import ExerciseSelect from "./ExerciseSelect";
import ExerciseInput from "./ExerciseInput";
import { Separator } from "../../(shadcn)/separator";

export type ExerciseCategory = "Upper Body" | "Core" | "Cardio";

type ExerciseOptions = string[];

export type Exercise = {
  category: ExerciseCategory;
  options: ExerciseOptions;
};

const exercises: Exercise[] = [
  {
    category: "Upper Body",
    options: ["Pushup", "Hand Release Pushup"],
  },

  {
    category: "Core",
    options: ["Situp", "Cross Legged Reverse Crunch", "Forearm Plank"],
  },
  {
    category: "Cardio",
    options: ["1.5 Mile Run", "20 Meter HAMR Shuttle"],
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
