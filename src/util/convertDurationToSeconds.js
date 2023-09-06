export default function convertDurationToSeconds(duration) {
  const parts = duration.split(":").map(Number);

  if (parts.length !== 2) {
    throw new Error("Invalid duration format. Expected mm:ss");
  }

  const [minutes, seconds] = parts;
  return minutes * 60 + seconds;
}
