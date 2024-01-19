export default function convertDurationToSeconds(duration: string) {
  // Since the time picker returns a string of HH:mm:ss, the hours are sliced
  const minutesAndSeconds = duration.slice(3);

  // Get minutes and seconds
  const [minutesString, secondsString] = minutesAndSeconds.split(":");

  const minutes = parseInt(minutesString);
  const seconds = parseInt(secondsString);

  // Convert to seconds
  const totalSeconds = minutes * 60 + seconds;

  return totalSeconds;
}
