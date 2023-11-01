import { Select } from "react-hook-form-mantine";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

const AgeGroupSelect = () => {
  const { control } = useFormContext();
  return (
    <Select
      name="ageGroup"
      control={control}
      label="Age Group"
      placeholder="Select age group"
      size="xl"
      radius="0.5rem"
      data={[
        "<25",
        "25-29",
        "30-34",
        "35-39",
        "40-44",
        "45-49",
        "50-54",
        "55-59",
        ">=60",
      ]}
    />
  );
};

export default AgeGroupSelect;
