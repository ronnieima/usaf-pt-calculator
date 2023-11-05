import { createClient } from "@supabase/supabase-js";
import convertDurationToSeconds from "../_util/convertDurationToSeconds";
const supabaseUrl = "https://hnnyotwjhikrytqynjyk.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getExerciseMinimum(gender, ageGroup, exercise) {
  const { data, error } = await supabase
    .from("scoringCriteria")
    .select("minPerformanceValue")
    .eq("gender", gender)
    .eq("ageGroup", ageGroup)
    .eq("activityType", exercise)
    .order("minPerformanceValue", { ascending: true })
    .limit(1);

  if (error) {
    return `Error fetching maximum value: ${error}`;
  } else if (data && data.length > 0) {
    return data[0].minPerformanceValue;
  }
}

export async function getExerciseMaximum(gender, ageGroup, exercise) {
  const { data, error } = await supabase
    .from("scoringCriteria")
    .select("maxPerformanceValue")
    .eq("gender", gender)
    .eq("ageGroup", ageGroup)
    .eq("activityType", exercise)
    .order("maxPerformanceValue", { ascending: false })
    .limit(1);

  if (error) {
    return `Error fetching maximum value: ${error}`;
  } else if (data && data.length > 0) {
    return data[0].maxPerformanceValue;
  }
}

async function getExerciseMinMax(gender, ageGroup, exercise) {
  const min = await getExerciseMinimum(gender, ageGroup, exercise);
  const max = await getExerciseMaximum(gender, ageGroup, exercise);

  return [min, max];
}

async function getIndividualExerciseScore(gender, ageGroup, exercise, results) {
  // returns early if minimum score is not met for the exercise
  const [minimumValue, maximumValue] = await getExerciseMinMax(
    gender,
    ageGroup,
    exercise,
  );

  if (results < minimumValue) return 0;
  if (results > maximumValue)
    return exercise === "mile" || exercise === "shuttles" ? 60 : 20;

  if (exercise === "plank" || exercise === "mile") {
    results = convertDurationToSeconds(results);
  }
  console.log(`${gender} / ${ageGroup} / ${exercise} / ${results}`);
  const { data, error } = await supabase
    .from("scoringCriteria")
    .select("points")
    .eq("gender", gender)
    .eq("ageGroup", ageGroup)
    .eq("activityType", exercise)
    .gte("maxPerformanceValue", results)
    .lte("minPerformanceValue", results);
  console.log(data.at(0));

  if (error) {
    return "Error fetching points:", error;
  } else if (data && data.length > 0) {
    const points = data[0].points;
    return points;
  } else {
    return 0;
  }
}

async function calculateTotalScoresWithMinimumCheck(formData) {
  const {
    gender,
    ageGroup,
    upperExercise,
    upperInput,
    coreExercise,
    coreInput,
    cardioExercise,
    cardioInput,
  } = formData;
  console.log(formData);
  const [upperScore, coreScore, cardioScore] = await Promise.all([
    getIndividualExerciseScore(gender, ageGroup, upperExercise, upperInput),
    getIndividualExerciseScore(gender, ageGroup, coreExercise, coreInput),
    getIndividualExerciseScore(gender, ageGroup, cardioExercise, cardioInput),
  ]);

  const isMinimumMet = checkIfMinimumIsNotMet(
    upperScore,
    coreScore,
    cardioScore,
  );

  return {
    upper: upperScore,
    core: coreScore,
    cardio: cardioScore,
    total: upperScore + coreScore + cardioScore,
    isMinimumMet,
  };
}

function checkIfMinimumIsNotMet(upperScore, coreScore, cardioScore) {
  let isMinimumMet = { upper: true, core: true, false: true };
  if (upperScore === 0) isMinimumMet.upper = false;
  if (coreScore === 0) isMinimumMet.core = false;
  if (cardioScore === 0) isMinimumMet.cardio = false;
  return isMinimumMet;
}

export async function calculateAndReturnScores(data) {
  const res = await calculateTotalScoresWithMinimumCheck(data);

  return res;
}
