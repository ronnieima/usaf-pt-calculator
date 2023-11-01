"use client";

import { Radio } from "@mantine/core";
import React, { useState } from "react";

const GenderRadioButtons = () => {
  const [value, setValue] = useState("male");

  return (
    <Radio.Group
      value={value}
      onChange={setValue}
      name="gender"
      label="Gender"
      withAsterisk
      size="xl"
    >
      <div className="flex gap-16">
        <Radio value="male" label="Male" />
        <Radio value="female" label="Female" />
      </div>
    </Radio.Group>
  );
};

export default GenderRadioButtons;
