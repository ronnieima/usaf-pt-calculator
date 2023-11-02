import { Select } from "react-hook-form-mantine";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const AgeGroupSelect = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="Age Group"
      render={({ field }) => {
        return (
          <Select
            {...field}
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
              ">60",
            ]}
          />
        );
      }}
    />
  );
};

export default AgeGroupSelect;
