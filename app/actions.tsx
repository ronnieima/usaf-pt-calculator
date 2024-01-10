"use server";

import { FormType } from "./_components/ui/(form)/MainForm";
import {
  fetchPoints,
  getMaximumPerformanceValue,
  getMinimumPerformanceValue,
} from "./_db/supabase";
import convertDurationToSeconds from "./_util/convertDurationToSeconds";
import { ExerciseComponentValues } from "./content";

export async function getScores(formData: FormType) {
  const components: ExerciseComponentValues[] = ["upperBody", "core", "cardio"];

  const componentScores: { upperBody: number; core: number; cardio: number } = {
    upperBody: NaN,
    core: NaN,
    cardio: NaN,
  };

  for (const component of components) {
    const { gender, ageGroup } = formData;
    const exercise = formData[`${component}Exercise`];
    const input = formData[`${component}Input`];

    // convert the input into numbers
    let result = ["forearm_plank", "1.5_mile_run"].includes(exercise)
      ? convertDurationToSeconds(input)
      : Number(input);

    const minimumValue = await getMinimumPerformanceValue(
      gender,
      ageGroup,
      exercise,
    );
    const maximumValue = await getMaximumPerformanceValue(
      gender,
      ageGroup,
      exercise,
    );

    // Validation and calculation logic
    if (
      // case: fail
      isNaN(result) ||
      result < minimumValue ||
      (exercise === "1.5_mile_run" && result > maximumValue)
    ) {
      componentScores[component] = 0;
    } else if (result > maximumValue) {
      // case: exceeds max
      componentScores[component] = [
        "1.5_mile_run",
        "20_meter_hamr_shuttle",
      ].includes(exercise)
        ? 60
        : 20;
    } else {
      // case: scoredin between

      const finalScore = await fetchPoints(gender, ageGroup, exercise, result);
      componentScores[component] = finalScore;
    }
  }
  return componentScores;
}
