import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hnnyotwjhikrytqynjyk.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };

async function getExerciseScore(gender, ageGroups, exercise, results) {
  const { data, error } = await supabase
    .from("scoringCriteria")
    .select("points")
    .eq("gender", gender)
    .eq("ageGroup", ageGroups)
    .eq("activityType", exercise)
    .gte("maxPerformanceValue", results)
    .lte("minPerformanceValue", results);

  if (error) {
    return "Error fetching points:", error;
  } else if (data && data.length > 0) {
    const points = data[0].points;
    return points;
  } else {
    return "No matching points found for given input.";
  }
}

export async function getScores(formData) {
  const {
    gender,
    ageGroups,
    upperBodyExercise,
    upperBodyResults,
    coreExercise,
    coreResults,
    runExercise,
    runResults,
  } = formData;
  const upper = await getExerciseScore(
    gender,
    ageGroups,
    upperBodyExercise,
    upperBodyResults,
  );
  const core = await getExerciseScore(
    gender,
    ageGroups,
    coreExercise,
    coreResults,
  );
  const run = await getExerciseScore(
    gender,
    ageGroups,
    runExercise,
    runResults,
  );
  console.log(upper, core, run);
  return upper + core + run;
}
