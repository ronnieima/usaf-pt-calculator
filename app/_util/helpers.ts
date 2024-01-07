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
export const convertStringToCamelCase = (str: string): string => {
  if (str.split(" ").length > 1) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word, index) => {
        return index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("");
  } else {
    return str.toLowerCase();
  }
};

export function formatExerciseName(exercise: string) {
  switch (exercise) {
    case "pushup":
      return "Pushup";
    case "hand_release_pushup":
      return "Hand Release Pushup";
    case "situp":
      return "Situp";
    case "cross_leg_reverse_crunch":
      return "Cross Leg Reverse Crunch";
    case "forearm_plank":
      return "Forearm Plank";
    case "1.5_mile_run":
      return "1.5 Mile Run";
    case "20_meter_hamr_shuttle":
      return "20 Meter HAMR Shuttle";
  }
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatAgeGroup(ageGroup: string) {
  switch (ageGroup) {
    case "<25":
      return "lt25";
    case ">60":
      return "gt60";
    default:
      return ageGroup;
  }
}

export function secondsToMinutesAndSeconds(seconds: number) {
  const secondsNumber = Number(seconds);
  const minutes = Math.floor(secondsNumber / 60);
  const remainingSeconds = secondsNumber % 60;

  // Pad single-digit seconds with a leading zero
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

  return `${minutes}:${formattedSeconds}`;
}
