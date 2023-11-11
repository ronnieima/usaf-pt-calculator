import { createClient } from "@supabase/supabase-js";
import convertDurationToSeconds from "../_util/convertDurationToSeconds";
const supabaseUrl = "https://hnnyotwjhikrytqynjyk.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function calculateTotalScoresWithMinimumCheck(formData) {
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

  const [upperScore, coreScore, cardioScore] = await Promise.all([
    getIndividualExerciseScore(
      gender,
      ageGroup,
      upperBodyExercise,
      upperBodyInput,
    ),
    getIndividualExerciseScore(gender, ageGroup, coreExercise, coreInput),
    getIndividualExerciseScore(gender, ageGroup, cardioExercise, cardioInput),
  ]);

  const minimumMetStatus = checkIfMinimumIsNotMet(
    upperScore,
    coreScore,
    cardioScore,
  );

  return {
    upper: upperScore,
    core: coreScore,
    cardio: cardioScore,
    totalScore: upperScore + coreScore + cardioScore,
    minimumMetStatus,
  };
}
async function getIndividualExerciseScore(gender, ageGroup, exercise, results) {
  const isCardio =
    exercise === "1.5_mile_run" || exercise === "20_meter_hamr_shuttle";

  // returns early if minimum score is not met for the exercise
  const { min, max } = await getExerciseMinMax(gender, ageGroup, exercise);

  if (exercise === "forearm_plank" || exercise === "1.5_mile_run") {
    results = convertDurationToSeconds(results);
  }

  if (exercise === "forearm_plank" || exercise === "1.5_mile_run") {
    if (results > max) {
      return 0;
    }
  } else if (results < min) {
    return 0;
  }

  if (results > max) {
    return isCardio ? 60 : 20;
  }

  const { data, error } = await supabase
    .from("scoringCriteria")
    .select("points")
    .eq("gender", gender)
    .eq("ageGroup", ageGroup)
    .eq("exercise", exercise)
    .gte("maxPerformanceValue", results)
    .lte("minPerformanceValue", results);

  if (error) {
    return "Error fetching points:", error;
  } else if (data && data.length > 0) {
    const points = data[0].points;
    return points;
  } else {
    return 0;
  }
}

export async function getExerciseMinimum(gender, ageGroup, exercise) {
  const { data, error } = await supabase
    .from("scoringCriteria")
    .select("minPerformanceValue")
    .eq("gender", gender)
    .eq("ageGroup", ageGroup)
    .eq("exercise", exercise)
    .order("minPerformanceValue", { ascending: true })
    .limit(1);

  if (exercise)
    if (error) {
      return `Error fetching maximum value: ${error}`;
    } else if (data && data.length > 0) {
      return data[0].minPerformanceValue;
    }
}

async function getExerciseMaximum(gender, ageGroup, exercise) {
  const { data, error } = await supabase
    .from("scoringCriteria")
    .select("maxPerformanceValue")
    .eq("gender", gender)
    .eq("ageGroup", ageGroup)
    .eq("exercise", exercise)
    .order("maxPerformanceValue", { ascending: false })
    .limit(1);

  if (error) {
    return `Error fetching maximum value: ${error}`;
  } else if (data && data.length > 0) {
    return data[0].maxPerformanceValue;
  }
}

export async function getExerciseMinMax(gender, ageGroup, exercise) {
  const [min, max] = await Promise.all([
    getExerciseMinimum(gender, ageGroup, exercise),
    getExerciseMaximum(gender, ageGroup, exercise),
  ]);

  return { min, max };
}

function checkIfMinimumIsNotMet(upperScore, coreScore, cardioScore) {
  let minimumMetStatus = { upper: true, core: true, cardio: true };
  if (upperScore === 0) minimumMetStatus.upper = false;
  if (coreScore === 0) minimumMetStatus.core = false;
  if (cardioScore === 0) minimumMetStatus.cardio = false;
  return minimumMetStatus;
}
