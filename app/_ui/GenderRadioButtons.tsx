"use client";

import { RadioGroup } from "react-hook-form-mantine";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Radio } from "react-hook-form-mantine";
import { Group } from "@mantine/core";
const GenderRadioButtons = () => {
  const { control } = useFormContext();
  return (
    <Radio.Group name="gender" control={control} label="Gender" withAsterisk>
      <div className="flex gap-16">
        <Radio.Item value="male" label="Male" />
        <Radio.Item value="female" label="Female" />
      </div>
    </Radio.Group>
  );
};

export default GenderRadioButtons;
