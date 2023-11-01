import { Select } from "@mantine/core";
import React from "react";

const AgeGroupSelect = () => {
  return (
    <Select
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
