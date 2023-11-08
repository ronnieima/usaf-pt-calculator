"use client";

import { formatTypeName } from "../../../_util/helpers";

import { useFormContext } from "react-hook-form";
import ExerciseSelect from "./ExerciseSelect";
import { watch } from "fs";
import ExerciseInput from "./ExerciseInput";

const exercises = [
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

type ExerciseFieldProps = {
  category: string;
  options: { value: string; label: string }[];
};

const ExerciseField = ({ category, options }: ExerciseFieldProps) => {
  const exerciseLabel = formatTypeName(category);
  const { watch } = useFormContext();
  const exerciseType = watch(`${category}Exercise`);

  return (
    <section className="flex flex-col gap-4">
      <ExerciseSelect
        options={options}
        exerciseLabel={exerciseLabel}
        category={category}
      />
      <ExerciseInput
        exerciseType={exerciseType}
        exerciseLabel={exerciseLabel}
        category={category}
      />
    </section>
  );
};

export default ExerciseField;
