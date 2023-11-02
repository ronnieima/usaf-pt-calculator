"use client";

import { NumberInput, Select, TextInput } from "react-hook-form-mantine";

import React, { useEffect } from "react";
import { formatTypeName } from "../_util/helpers";
import { Controller, useFormContext } from "react-hook-form";
import { rgba } from "@mantine/core";

type ExerciseSelectProps = {
  type: string;
  options: { value: string; label: string }[];
};

const ExerciseSelect = ({ type, options }: ExerciseSelectProps) => {
  const exerciseLabel = formatTypeName(type);
  const { control, watch } = useFormContext();
  const exerciseType = watch(`${type}Exercise`);
  const isVisibleInput = Boolean(exerciseType);
  const isTimeBased = exerciseType === "plank" || exerciseType === "mile";

  // useEffect(() => {
  //   // Unregister the field to remove old validation rules
  //   setValue(`${exerciseLabel} Input`, null);
  // }, [exerciseType, setValue, exerciseLabel]);

  return (
    <section className="flex flex-col gap-4 ">
      <span className="relative top-12 flex justify-end">
        TODO: add minmax here
      </span>

      <Controller
        control={control}
        name={`${type}Exercise`}
        render={({ field }) => {
          return (
            <>
              <Select
                styles={{
                  root: {},
                }}
                control={control}
                {...field}
                size="xl"
                label={`${exerciseLabel} Exercise`}
                radius="0.5rem"
                placeholder="Select exercise type"
                data={options}
                allowDeselect={false}
              />
            </>
          );
        }}
      />

      <div className="relative ">
        <div
          className={
            isVisibleInput
              ? "transform opacity-100 transition-all duration-1000"
              : "invisible absolute h-0 w-0 -translate-y-4 transform opacity-0 transition-all duration-0"
          }
        >
          {isTimeBased ? (
            <Controller
              name={`${type}Input`}
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
              name={`${type}Input`}
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
