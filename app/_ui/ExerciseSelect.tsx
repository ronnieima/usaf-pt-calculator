"use client";

import { Select } from "@mantine/core";
import React, { useState } from "react";
import formatExerciseName from "../_util/formatExerciseName";

type ExerciseSelectProps = {
  type: string;
  options: string[];
};

const ExerciseSelect = ({ type, options }: ExerciseSelectProps) => {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <Select
      label={`${formatExerciseName(type)} Exercise`}
      placeholder="Select exercise type"
      size="xl"
      radius="0.5rem"
      data={options}
      value={value}
      onChange={setValue}
    />
  );
};

export default ExerciseSelect;
