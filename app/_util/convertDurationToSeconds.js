export default function convertDurationToSeconds(duration) {
  const dateObject = new Date(duration);

  // Check if the timestamp is valid
  if (isNaN(dateObject.getTime())) {
    console.error("Invalid timestamp format");
  } else {
    // Get minutes and seconds
    const minutes = dateObject.getUTCMinutes();
    const seconds = dateObject.getUTCSeconds();

    // Check if minutes and seconds are valid
    if (!isNaN(minutes) && !isNaN(seconds)) {
      // Convert to MM:SS format
      const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;

      // Convert to seconds
      const totalSeconds = minutes * 60 + seconds;
      console.log(totalSeconds);

      return totalSeconds;
    } else {
      console.error("Invalid minutes or seconds");
    }
  }
}
