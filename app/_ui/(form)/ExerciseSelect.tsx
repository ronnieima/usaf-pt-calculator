"use client";

import { NumberInput, Select, TextInput } from "react-hook-form-mantine";

import React, { Dispatch, SetStateAction, useEffect } from "react";
import { formatTypeName } from "../../_util/helpers";
import { Controller, useFormContext } from "react-hook-form";

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

      <Select
        control={control}
        name={`${type}Exercise`}
        size="xl"
        label={`${exerciseLabel} Exercise`}
        radius="0.5rem"
        placeholder="Select exercise type"
        data={options}
        allowDeselect={false}
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
            <TextInput
              name={`${type}Input`}
              control={control}
              size="lg"
              radius="md"
              label={`${exerciseType} Time`}
              placeholder="MM:SS"
            />
          ) : (
            <NumberInput
              name={`${type}Input`}
              decimalSeparator=":"
              control={control}
              size="xl"
              radius="lg"
              label={`${exerciseType} Reps`}
              placeholder="Reps"
              allowNegative={false}
              fixedDecimalScale
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ExerciseSelect;
