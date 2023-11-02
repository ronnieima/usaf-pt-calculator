import { createClient } from "@supabase/supabase-js";
import convertDurationToSeconds from "../_util/convertDurationToSeconds";
import { formatExerciseName } from "../_util/helpers";
const supabaseUrl = "https://hnnyotwjhikrytqynjyk.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getExerciseMinimum(gender, ageGroup, exercise) {
  //   SELECT "minPerformanceValue"
  // FROM "scoringCriteria"
  // WHERE gender = gender
  // AND "ageGroup" = ageGroup
  // AND "activityType" = activityType
  // ORDER BY "minPerformanceValue" ASC LIMIT

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
    return data[0];
  }
}

export async function getExerciseMaximum(gender, ageGroup, exercise) {
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
    const minPerformanceValue = data[0].minPerformanceValue;
    return minPerformanceValue;
  }
}

async function getExerciseScore(gender, ageGroup, exerciseType, results) {
  const exercise = formatExerciseName(exerciseType);
  console.log(exercise);
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
  console.log(data, error);

  if (error) {
    return "Error fetching points:", error;
  } else if (data && data.length > 0) {
    const points = data[0].points;
    return points;
  } else {
    console.log("returned 0");
    return 0;
  }
}

export async function fetchExerciseScores(formData) {
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
  const upperScore = await getExerciseScore(
    gender,
    ageGroup,
    upperExercise,
    upperInput,
  );
  const coreScore = await getExerciseScore(
    gender,
    ageGroup,
    coreExercise,
    coreInput,
  );
  const cardioScore = await getExerciseScore(
    gender,
    ageGroup,
    cardioExercise,
    cardioInput,
  );

  return { upper: upperScore, core: coreScore, cardio: cardioScore };
}
