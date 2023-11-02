"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Radio } from "react-hook-form-mantine";
const GenderRadioButtons = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="gender"
      render={({ field }) => {
        return (
          <Radio.Group label="Gender" {...field}>
            <div className="flex gap-16">
              <Radio.Item value="male" label="Male" />
              <Radio.Item value="female" label="Female" />
            </div>
          </Radio.Group>
        );
      }}
    />
  );
};

export default GenderRadioButtons;
