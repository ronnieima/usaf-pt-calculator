"use client";

import { NumberInput, Select, TextInput } from "react-hook-form-mantine";

import React, { useEffect } from "react";
import formatExerciseName from "../_util/formatExerciseName";
import { Controller, useFormContext } from "react-hook-form";

type ExerciseSelectProps = {
  type: string;
  options: string[];
};

const ExerciseSelect = ({ type, options }: ExerciseSelectProps) => {
  const exerciseLabel = formatExerciseName(type);
  const { control, watch, setValue } = useFormContext();
  const exerciseType = watch(exerciseLabel);
  const isVisibleInput = Boolean(exerciseType);
  const isTimeBased =
    exerciseType === "Forearm Plank" || exerciseType === "1.5 Mile Run";

  // useEffect(() => {
  //   // Unregister the field to remove old validation rules
  //   setValue(`${exerciseLabel} Input`, null);
  // }, [exerciseType, setValue, exerciseLabel]);

  return (
    <section className="flex flex-col gap-4">
      <Controller
        control={control}
        name={exerciseLabel}
        render={({ field }) => {
          return (
            <Select
              control={control}
              {...field}
              size="xl"
              label={`${exerciseLabel} Exercise`}
              radius="0.5rem"
              placeholder="Select exercise type"
              data={options}
              required
              allowDeselect={false}
            />
          );
        }}
      />

      <div className="relative">
        <div
          className={
            isVisibleInput
              ? "transform opacity-100 transition-all duration-1000"
              : "invisible absolute h-0 w-0 -translate-y-4 transform opacity-0 transition-all duration-0"
          }
        >
          {isTimeBased ? (
            <Controller
              name={`${exerciseLabel} Input`}
              control={control}
              render={({ field }) => {
                return (
                  <TextInput
                    {...field}
                    size="lg"
                    radius="md"
                    label={`${exerciseType} Time`}
                    placeholder="MM:SS"
                  />
                );
              }}
            />
          ) : (
            <Controller
              name={`${exerciseLabel} Input`}
              control={control}
              render={({ field }) => {
                return (
                  <NumberInput
                    {...field}
                    size="xl"
                    radius="lg"
                    label={`${exerciseType} Reps`}
                    placeholder="Reps"
                  />
                );
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ExerciseSelect;
