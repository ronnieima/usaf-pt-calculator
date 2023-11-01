export default function formatExerciseName(category: string) {
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
