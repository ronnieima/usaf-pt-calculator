import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://hnnyotwjhikrytqynjyk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhubnlvdHdqaGlrcnl0cXluanlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MjUxMTUsImV4cCI6MjAwOTUwMTExNX0.FeCoVdt_ZRnDREV207-AS3WX2E-mubw4XDSzK_FR3uc",
);

export { supabase };

async function getUpperScore(
  gender,
  ageGroups,
  upperBodyExercise,
  upperBodyResults,
) {
  const { data, error } = await supabase
    .from("scoringCriteria")
    .select("points")
    .eq("gender", gender)
    .eq("ageGroup", ageGroups)
    .eq("activityType", upperBodyExercise)
    .gte("maxPerformanceValue", upperBodyResults)
    .lte("minPerformanceValue", upperBodyResults);

  if (error) {
    return "Error fetching points:", error;
  } else if (data && data.length > 0) {
    const points = data[0].points;
    return points;
  } else {
    return "No matching points found for given input.";
  }
}

async function getCoreScore(gender, ageGroups, coreExercise, coreResults) {
  const { data, error } = await supabase
    .from("scoringCriteria")
    .select("points")
    .eq("gender", gender)
    .eq("ageGroup", ageGroups)
    .eq("activityType", coreExercise)
    .gte("maxPerformanceValue", coreResults)
    .lte("minPerformanceValue", coreResults);

  if (error) {
    return "Error fetching points:", error;
  } else if (data && data.length > 0) {
    const points = data[0].points;
    return points;
  } else {
    return "No matching points found for given input.";
  }
}
async function getRunScore(gender, ageGroups, runExercise, runResults) {
  const { data, error } = await supabase
    .from("scoringCriteria")
    .select("points")
    .eq("gender", gender)
    .eq("ageGroup", ageGroups)
    .eq("activityType", runExercise)
    .gte("maxPerformanceValue", runResults)
    .lte("minPerformanceValue", runResults);

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
  const upper = await getUpperScore(
    gender,
    ageGroups,
    upperBodyExercise,
    upperBodyResults,
  );
  const core = await getCoreScore(gender, ageGroups, coreExercise, coreResults);
  const run = await getRunScore(gender, ageGroups, runExercise, runResults);
  console.log(upper, core, run);
  return upper + core + run;
}
