"use client";

import { NumberInput, Select, TextInput } from "react-hook-form-mantine";

import React from "react";
import formatExerciseName from "../_util/formatExerciseName";
import { useFormContext } from "react-hook-form";

type ExerciseSelectProps = {
  type: string;
  options: string[];
};

const ExerciseSelect = ({ type, options }: ExerciseSelectProps) => {
  const exerciseLabel = formatExerciseName(type);
  const { control, watch } = useFormContext();
  const exerciseType = watch(exerciseLabel);
  const isVisibleInput = Boolean(exerciseType);

  return (
    <section className="flex flex-col gap-4">
      <Select
        name={exerciseLabel}
        control={control}
        size="xl"
        label={`${exerciseLabel} Exercise`}
        radius="0.5rem"
        placeholder="Select exercise type"
        data={options}
      />

      <div className="relative">
        <div
          className={
            isVisibleInput
              ? "transform opacity-100 transition-all duration-1000"
              : "invisible absolute h-0 w-0 -translate-y-4 transform opacity-0 transition-all duration-0"
          }
        >
          {exerciseType === "Forearm Plank" ||
          exerciseType === "1.5 Mile Run" ? (
            <TextInput
              control={control}
              name={`${exerciseLabel} Input`}
              size="lg"
              radius="md"
              label={`${exerciseType} Time`}
              placeholder="MM:SS"
            />
          ) : (
            <NumberInput
              control={control}
              name={`${exerciseLabel} Input`}
              size="xl"
              radius="lg"
              label={`${exerciseType} Reps`}
              placeholder="Reps"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ExerciseSelect;
