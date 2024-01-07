export type Exercises = UpperBodyExercises | CoreExercises | CardioExercises;

export type UpperBodyExercises =
  | "exempt"
  | "pushup"
  | "hand_release_pushup"
  | "situp";

export type CoreExercises =
  | "exempt"
  | "situp"
  | "cross_leg_reverse_crunch"
  | "forearm_plank";

export type CardioExercises =
  | "exempt"
  | "1.5_mile_run"
  | "2km_walk"
  | "20_meter_hamr_shuttle";

export type ExerciseComponentValues = "upperBody" | "core" | "cardio";
