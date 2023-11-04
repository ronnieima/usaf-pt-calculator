"use client";
import { NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";

function ExercisesPage() {
  const [value, setValue] = useState<string | number>("");
  console.log(typeof value);
  return <NumberInput value={value} onChange={setValue} />;
}

export default ExercisesPage;
