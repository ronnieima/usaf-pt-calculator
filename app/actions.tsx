"use server";

import { FormType } from "./_components/ui/(form)/MainForm";
import {
  fetchPoints,
  getMaximumPerformanceValue,
  getMinimumPerformanceValue,
} from "./_db/supabase";
import convertDurationToSeconds from "./_util/convertDurationToSeconds";
import { ExerciseComponentValues } from "./content";
import { ComponentScores, MinMaxValues } from "./stores/store";

export async function handleSubmitAction(
  formData: FormType,
  minMaxValues: MinMaxValues,
) {
  const individualScores = await calculateIndividualScores(formData);
  const minimumMetStatus = calculateMinimumMetStatus(formData, minMaxValues);
  const finalScore = calculateFinalScore(formData, individualScores);
}

async function calculateIndividualScores(formData: FormType) {
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

    // convert the input into number
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
      // case: 0 points
      isNaN(result) ||
      result < minimumValue ||
      (exercise === "1.5_mile_run" && result > maximumValue) ||
      exercise === "exempt"
    ) {
      componentScores[component] = 0;
    } else if (result > maximumValue) {
      // case: max value
      componentScores[component] = [
        "1.5_mile_run",
        "20_meter_hamr_shuttle",
      ].includes(exercise)
        ? 60
        : 20;
    } else {
      // case: scored in between
      const finalScore = await fetchPoints(gender, ageGroup, exercise, result);
      componentScores[component] = finalScore;
    }
  }
  return componentScores;
}

function calculateMinimumMetStatus(
  formData: FormType,
  minMetStatus: MinMaxValues,
) {}

function calculateFinalScore(
  { upperBodyExercise, coreExercise, cardioExercise }: FormType,
  scores: ComponentScores,
) {
  let total = 100;
  if (upperBodyExercise === "exempt") total -= 20;
  if (coreExercise === "exempt") total -= 20;
  if (cardioExercise === "exempt") total -= 60;

  const finalScore =
    ((scores.upperBody + scores.core + scores.cardio) / total) * 100;

  return finalScore;
}
