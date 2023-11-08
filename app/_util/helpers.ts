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
    case "pushups":
      return "Pushup";
    case "handrelease":
      return "Hand Release Pushup";
    case "situps":
      return "Situp";
    case "crunches":
      return "Cross Legged Reverse Crunch ";
    case "plank":
      return "Forearm Plank Time";
    case "mile":
      return "1.5 Mile Run";
    case "shuttles":
      return "20 Meter HAMR Shuttle";
  }
}
