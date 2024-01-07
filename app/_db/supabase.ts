import { createClient } from "@supabase/supabase-js";
import convertDurationToSeconds from "../_util/convertDurationToSeconds";
import { FormType } from "../_components/ui/(form)/MainForm";
import { useFormStore } from "../stores/store";
const supabaseUrl = "https://hnnyotwjhikrytqynjyk.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function calculateFinalScores(formData: FormType) {
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

  const upperScore = await getIndividualExerciseScore(
    gender,
    ageGroup,
    upperBodyExercise,
    upperBodyInput,
  );

  const coreScore = await getIndividualExerciseScore(
    gender,
    ageGroup,
    coreExercise,
    coreInput,
  );

  const cardioScore = await getIndividualExerciseScore(
    gender,
    ageGroup,
    cardioExercise,
    cardioInput,
  );

  return [upperScore, coreScore, cardioScore];
}

async function getIndividualExerciseScore(
  gender: string,
  ageGroup: string,
  exercise: string,
  inputResults: string,
) {
  if (exercise === "exempt") {
    return 0;
  }

  // returns early if minimum score is not met for the exercise
  const [minimumValue, maximumValue] = await getExerciseMinMax(
    gender,
    ageGroup,
    exercise,
  );

  let results = ["forearm_plank", "1.5_mile_run"].includes(exercise)
    ? convertDurationToSeconds(inputResults)
    : Number(inputResults);

  if (
    isNaN(results) ||
    results < minimumValue ||
    (exercise === "1.5_mile_run" && results > maximumValue)
  ) {
    return 0;
  }

  const isCardio = ["1.5_mile_run", "20_meter_hamr_shuttle"].includes(exercise);
  if (results > maximumValue) return isCardio ? 60 : 20;

  try {
    const { data, error } = await supabase
      .from("scoringCriteria")
      .select("points")
      .eq("gender", gender)
      .eq("ageGroup", ageGroup)
      .eq("exercise", exercise)
      .gte("maxPerformanceValue", results)
      .lte("minPerformanceValue", results);
    if (error) throw new Error("Error fetching points: " + error.message);

    if (data && data.length > 0) {
      return data[0].points as number;
    } else {
      return 0;
    }
  } catch (error) {
    throw new Error("Error fetching points:" + error);
  }
}

export async function getExerciseMinMax(
  gender: string,
  ageGroup: string,
  exercise: string,
) {
  try {
    const promises = [
      supabase
        .from("scoringCriteria")
        .select("minPerformanceValue")
        .eq("gender", gender)
        .eq("ageGroup", ageGroup)
        .eq("exercise", exercise)
        .order("minPerformanceValue", { ascending: true })
        .limit(1),

      supabase
        .from("scoringCriteria")
        .select("maxPerformanceValue")
        .eq("gender", gender)
        .eq("ageGroup", ageGroup)
        .eq("exercise", exercise)
        .order("maxPerformanceValue", { ascending: false })
        .limit(1),
    ];

    const [minResult, maxResult] = await Promise.allSettled(promises);

    if (minResult.status === "fulfilled" && maxResult.status === "fulfilled") {
      const minData = minResult.value.data?.[0] as {
        minPerformanceValue: number;
      };
      const maxData = maxResult.value.data?.[0] as {
        maxPerformanceValue: number;
      };

      const minPerformanceValue = minData?.minPerformanceValue;
      const maxPerformanceValue = maxData?.maxPerformanceValue;

      return [minPerformanceValue, maxPerformanceValue];
    } else return [0, 0];
  } catch (error) {
    throw new Error("Failed to retrieve min/max performance values");
  }
}

export function checkIfMinimumIsNotMet(
  upperScore: number,
  coreScore: number,
  cardioScore: number,
) {
  return {
    upper: upperScore !== 0,
    core: coreScore !== 0,
    cardio: cardioScore !== 0,
  };
}
