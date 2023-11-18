function muscularStrengthValidationRules(muscularStrengthExercise: string) {
  if (
    muscularStrengthExercise === "pushup" ||
    muscularStrengthExercise === "hand_release_pushup"
  ) {
    return {
      required: "Rep amount is required",
      min: { value: 0, message: "Reps must be greater than 0" },
      pattern: {
        value: /^\d*$/,
        message: "Must be a whole number",
      },
    };
  }
}

function coreEnduranceValidationRules(coreEnduranceExercise: string) {
  if (coreEnduranceExercise == "forearm_plank") {
    return {
      required: "Plank time is required",
      pattern: {
        value: /^(([0]?[0-5][0-9]|[0-9]):([0-5][0-9]))$/,
        message: "Invalid time format. (mm:ss)",
      },
      min: {
        value: 0,
        message: "Time must be greater than 0",
      },
    };
  } else if (
    coreEnduranceExercise === "situp" ||
    coreEnduranceExercise === "cross_leg_reverse_crunch"
  ) {
    return {
      required: "Rep amount is required",
      min: {
        value: 0,
        message: "Reps must be greater than 0",
      },
      pattern: {
        value: /^\d*$/,
        message: "Must be a whole number",
      },
    };
  }
}

function cardiorespiratoryFitnessValidationRules(
  cardiorespiratoryFitnessExercise: string,
) {
  if (
    cardiorespiratoryFitnessExercise === "1.5_mile_run" ||
    cardiorespiratoryFitnessExercise === "walk"
  ) {
    return {
      required: "Time is required",
      pattern: {
        value: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/,
        message: "Invalid time format (mm:ss)",
      },
      minLength: {
        value: 1,
        message: "Time must be greater than 0",
      },
    };
  } else if (cardiorespiratoryFitnessExercise === "20_meter_hamr_shuttle") {
    return {
      required: "Shuttle amount is required",
      min: { value: 0, message: "Reps must be greater than 0" },
      pattern: {
        value: /^\d*$/,
        message: "Must be a whole number",
      },
    };
  }
}

type ExerciseTypes = string;
type Exercises = string;

export function getValidationRules(
  exerciseType: ExerciseTypes,
  exercise: Exercises,
) {
  switch (exerciseType) {
    case "Muscular Strength":
      return muscularStrengthValidationRules(exercise);
    case "Core Endurance Endurance":
      return coreEnduranceValidationRules(exercise);
    case "Cardiorespiratory Fitness":
      return cardiorespiratoryFitnessValidationRules(exercise);
  }
}
