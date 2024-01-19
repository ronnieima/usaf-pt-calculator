import dayjs from "dayjs";
import toObject from "dayjs/plugin/toObject";
dayjs.extend(toObject);

export default function convertDurationToSeconds(duration: string) {
  const dateObject = dayjs(duration).toObject();

  // Get minutes and seconds
  const minutes = dateObject.minutes;
  const seconds = dateObject.seconds;

  // Convert to seconds
  const totalSeconds = minutes * 60 + seconds;

  return totalSeconds;
}
