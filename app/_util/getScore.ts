import { FormType } from "../_components/ui/(form)/MainForm";
import { scoringCriteria } from "../criteria";
import { MinMaxValues } from "../stores/store";
import convertDurationToSeconds from "./convertDurationToSeconds";

export function getResults(formData: FormType) {
  const {
    gender,
    ageGroup,
    upperBodyExercise,
    upperBodyInput,
    coreExercise,
    coreInput,
    cardioExercise,
    cardioInput,
  } = formData;

  const upperBodyScore = getIndividualScore(
    upperBodyExercise,
    gender,
    ageGroup,
    upperBodyInput,
  );
  const coreScore = getIndividualScore(
    coreExercise,
    gender,
    ageGroup,
    coreInput,
  );
  const cardioScore = getIndividualScore(
    cardioExercise,
    gender,
    ageGroup,
    cardioInput,
  );

  return { upperBodyScore, coreScore, cardioScore };
}

function getIndividualScore(
  exercise: string,
  gender: string,
  ageGroup: string,
  performanceValue: string,
) {
  let results;
  if (exercise === "forearm_plank" || exercise === "1.5_mile_run") {
    results = convertDurationToSeconds(performanceValue);
  } else {
    results = parseInt(performanceValue);
  }
  // find the record
  for (let data of scoringCriteria) {
    if (
      data.exercise === exercise &&
      data.gender === gender &&
      data.ageGroup === ageGroup &&
      results >= data.minPerformanceValue &&
      results <= data.maxPerformanceValue
    ) {
      return data.points;
      // if results exceed max
    } else if (
      data.exercise === exercise &&
      data.gender === gender &&
      data.ageGroup === ageGroup &&
      results >= data.maxPerformanceValue
    ) {
      if (exercise === "1.5_mile_run" && results > data.maxPerformanceValue) {
        return 0;
      }
      const cardioExercises = [
        "exempt",
        "1.5_mile_run",
        "2km_walk",
        "20_meter_hamr_shuttle",
      ];
      return cardioExercises.includes(exercise) ? 60 : 20;
    }
  }
  return 0;
}

export function getMinimumPerformanceValue(
  gender: string,
  ageGroup: string,
  exercise: string,
) {
  const filteredCriteria = scoringCriteria
    .filter(
      (criteria) =>
        criteria.exercise === exercise &&
        criteria.gender === gender &&
        criteria.ageGroup === ageGroup,
    )
    .sort((a, b) => a.minPerformanceValue - b.minPerformanceValue);

  return filteredCriteria.length > 0
    ? filteredCriteria[0].minPerformanceValue
    : null;
}

export function getMaximumPerformanceValue(
  gender: string,
  ageGroup: string,
  exercise: string,
) {
  const filteredCriteria = scoringCriteria
    .filter(
      (criteria) =>
        criteria.exercise === exercise &&
        criteria.gender === gender &&
        criteria.ageGroup === ageGroup,
    )
    .sort((a, b) => b.maxPerformanceValue - a.maxPerformanceValue);

  return filteredCriteria.length > 0
    ? filteredCriteria[0].maxPerformanceValue
    : null;
}

export function calculateFinalScore(
  formData: FormType,
  {
    upperBodyScore,
    coreScore,
    cardioScore,
  }: { upperBodyScore: number; coreScore: number; cardioScore: number },
) {
  let total = 100;
  if (formData.upperBodyExercise === "exempt") total -= 20;
  if (formData.coreExercise === "exempt") total -= 20;
  if (formData.cardioExercise === "exempt") total -= 60;

  return ((upperBodyScore + coreScore + cardioScore) / total) * 100;
}

export function calculateMetMinimums(
  formData: FormType,
  minMaxValues: MinMaxValues,
) {
  const {
    cardioExercise,
    cardioInput,
    coreExercise,
    coreInput,
    upperBodyExercise,
    upperBodyInput,
  } = formData;
  return {
    upperBody:
      upperBodyExercise === "exempt" ||
      parseInt(upperBodyInput) >=
        minMaxValues.upperBody.minimumPerformanceValue,
    core:
      coreExercise === "exempt" ||
      (coreExercise === "forearm_plank" &&
        convertDurationToSeconds(coreInput) >=
          minMaxValues.core.minimumPerformanceValue) ||
      parseInt(coreInput) >= minMaxValues.core.minimumPerformanceValue,
    cardio:
      cardioExercise === "exempt" ||
      (cardioInput === "1.5_mile_run" &&
        convertDurationToSeconds(cardioInput) <=
          minMaxValues.cardio.maximumPerformanceValue) ||
      parseInt(cardioInput) <= minMaxValues.cardio.maximumPerformanceValue,
  };
}
