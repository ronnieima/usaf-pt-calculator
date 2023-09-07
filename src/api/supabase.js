import { createClient } from "@supabase/supabase-js";
import convertDurationToSeconds from "../util/convertDurationToSeconds";
const supabaseUrl = "https://hnnyotwjhikrytqynjyk.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getExerciseScore(gender, ageGroup, exercise, results) {
  if (exercise === "plank" || exercise === "mile") {
    results = convertDurationToSeconds(results);
    console.log(results);
  }
  const { data, error } = await supabase
    .from("scoringCriteria")
    .select("points")
    .eq("gender", gender)
    .eq("ageGroup", ageGroup)
    .eq("activityType", exercise)
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

export async function getScores(formData) {
  const {
    gender,
    ageGroup,
    upperBodyExercise,
    upperBodyResults,
    coreExercise,
    coreResults,
    runExercise,
    runResults,
  } = formData;
  const upperBodyScore = await getExerciseScore(
    gender,
    ageGroup,
    upperBodyExercise,
    upperBodyResults,
  );
  const coreScore = await getExerciseScore(
    gender,
    ageGroup,
    coreExercise,
    coreResults,
  );
  const runScore = await getExerciseScore(
    gender,
    ageGroup,
    runExercise,
    runResults,
  );
  console.log(`Upper Body: ${upperBodyScore}`);
  console.log(`Core: ${coreScore}`);
  console.log(`Run: ${runScore}`);

  if (upperBodyScore === 0 || coreScore === 0 || runScore === 0) {
    return "fail";
  } else {
    return upperBodyScore + coreScore + runScore;
  }
}
