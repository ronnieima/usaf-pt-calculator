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
