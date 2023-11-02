"use client";

import { RadioGroup } from "react-hook-form-mantine";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Group, Radio } from "@mantine/core";
const GenderRadioButtons = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="Gender"
      render={({ field }) => {
        return (
          <Radio.Group
            label="Gender"
            required
            {...field}
            error={errors.genders?.message as string}
          >
            <Group className="flex gap-16">
              <Radio value="male" label="Male" />
              <Radio value="female" label="Female" />
            </Group>
          </Radio.Group>
        );
      }}
    />
  );
};

export default GenderRadioButtons;
