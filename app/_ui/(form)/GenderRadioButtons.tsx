"use client";

import {
  useCalculatorForm,
  useCalculatorFormContext,
} from "@/app/_context/form-context";
import React from "react";
import { Radio } from "@mantine/core";
const GenderRadioButtons = () => {
  return (
    <Radio.Group label="Gender">
      <div className="flex gap-16">
        <Radio value="male" label="Male" />
        <Radio value="female" label="Female" />
      </div>
    </Radio.Group>
  );
};

export default GenderRadioButtons;
