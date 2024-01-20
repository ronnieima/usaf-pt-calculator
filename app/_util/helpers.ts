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

// Prevents scroll affecting number inputs
export const numberInputOnWheelPreventChange: React.WheelEventHandler<
  HTMLInputElement
> = (e) => {
  // Prevent the input value change
  e.currentTarget?.blur();

  // Prevent the page/container scrolling
  e.stopPropagation();

  // Refocus immediately, on the next tick (after the current function is done)
  setTimeout(() => {
    e.currentTarget?.focus();
  }, 0);
};
