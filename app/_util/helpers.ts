export function formatTypeName(category: string) {
  switch (category) {
    case "upper":
      return "Upper Body";
    case "core":
      return "Core";
    case "cardio":
      return "Cardio";
    default:
      return category;
  }
}

export function formatExerciseName(exercise: string) {
  switch (exercise) {
    case "Pushup":
      return "pushups";
    case "Hand Release":
      return "handrelease";
    case "Situp":
      return "situps";
    case "Cross Legged Reverse Crunch":
      return "crunches";
    case "Plank":
      return "plank";
    case "1.5 Mile Run":
      return "mile";
    case "20 Meter HAMR Shuttle":
      return "shuttles";
    default:
      return exercise;
  }
}
