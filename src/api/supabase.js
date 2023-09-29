import { createClient } from '@supabase/supabase-js';
import convertDurationToSeconds from '../util/convertDurationToSeconds';
const supabaseUrl = 'https://hnnyotwjhikrytqynjyk.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getExerciseMinimum(gender, ageGroup, exercise) {
  //   SELECT "minPerformanceValue"
  // FROM "scoringCriteria"
  // WHERE gender = gender
  // AND "ageGroup" = ageGroup
  // AND "activityType" = activityType
  // ORDER BY "minPerformanceValue" ASC LIMIT

  const { data, error } = await supabase
    .from('scoringCriteria')
    .select('minPerformanceValue')
    .eq('gender', gender)
    .eq('ageGroup', ageGroup)
    .eq('activityType', exercise)
    .order('minPerformanceValue', { ascending: true })
    .limit(1);

  if (error) {
    return `Error fetching maximum value: ${error}`;
  } else if (data && data.length > 0) {
    return data[0];
  }
}

export async function getExerciseMaximum(gender, ageGroup, exercise) {
  const { data, error } = await supabase
    .from('scoringCriteria')
    .select('minPerformanceValue')
    .eq('gender', gender)
    .eq('ageGroup', ageGroup)
    .eq('activityType', exercise)
    .order('minPerformanceValue', { ascending: true })
    .limit(1);

  if (error) {
    return `Error fetching maximum value: ${error}`;
  } else if (data && data.length > 0) {
    return data[0];
  }
}

async function getExerciseScore(gender, ageGroup, exercise, results) {
  if (exercise === 'plank' || exercise === 'mile') {
    results = convertDurationToSeconds(results);
  }
  const { data, error } = await supabase
    .from('scoringCriteria')
    .select('points')
    .eq('gender', gender)
    .eq('ageGroup', ageGroup)
    .eq('activityType', exercise)
    .gte('maxPerformanceValue', results)
    .lte('minPerformanceValue', results);

  if (error) {
    return 'Error fetching points:', error;
  } else if (data && data.length > 0) {
    const points = data[0].points;
    return points;
  } else {
    return 0;
  }
}

export async function fetchExerciseScores(formData) {
  const {
    gender,
    ageGroup,
    upperBodyExercise,
    upperBodyResults,
    coreExercise,
    coreResults,
    cardioExercise,
    cardioResults,
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
  const cardioScore = await getExerciseScore(
    gender,
    ageGroup,
    cardioExercise,
    cardioResults,
  );

  return { upper: upperBodyScore, core: coreScore, cardio: cardioScore };
}
