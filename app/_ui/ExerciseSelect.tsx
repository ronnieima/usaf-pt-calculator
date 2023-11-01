"use client";

import { NumberInput, Select, TextInput } from "@mantine/core";
import React, { useState } from "react";
import formatExerciseName from "../_util/formatExerciseName";

type ExerciseSelectProps = {
  type: string;
  options: string[];
};

const ExerciseSelect = ({ type, options }: ExerciseSelectProps) => {
  const [value, setValue] = useState("");
  const exerciseLabel = formatExerciseName(type);
  const isVisibleInput = Boolean(value);

  return (
    <section className="flex flex-col gap-4">
      <Select
        label={`${exerciseLabel} Exercise`}
        placeholder="Select exercise type"
        size="xl"
        radius="0.5rem"
        data={options}
        value={value}
        onChange={setValue}
      />

      <div className="relative">
        <div
          className={
            isVisibleInput
              ? "transform opacity-100 transition-all duration-1000"
              : "invisible absolute h-0 w-0 -translate-y-4 transform opacity-0 transition-all duration-0"
          }
        >
          {value === "Forearm Plank" || value === "1.5 Mile Run" ? (
            <TextInput
              size="lg"
              radius="md"
              label={`${value} Time`}
              placeholder="MM:SS"
            />
          ) : (
            <NumberInput
              size="xl"
              radius="lg"
              label={`${value} Reps`}
              placeholder="Reps"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ExerciseSelect;
