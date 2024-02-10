import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import toObject from 'dayjs/plugin/toObject';
import { hamrLevels } from '../config/hamr-levels';
dayjs.extend(toObject);
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDurationToSeconds(duration: string) {
  const dateObject = dayjs(duration).toObject();

  // Get minutes and seconds
  const minutes = dateObject.minutes;
  const seconds = dateObject.seconds;

  // Convert to seconds
  const totalSeconds = minutes * 60 + seconds;

  return totalSeconds;
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatAgeGroup(ageGroup: string) {
  switch (ageGroup) {
    case '<25':
      return 'lt25';
    case '>60':
      return 'gt60';
    default:
      return ageGroup;
  }
}

export function inferWalkAgeGroup(ageGroup: string) {
  switch (ageGroup) {
    case '<25':
    case '25-29':
      return '<30';
    case '30-34':
    case '35-39':
      return '30-39';
    case '40-44':
    case '45-49':
      return '40-49';
    case '50-54':
    case '55-59':
      return '50-59';
    case '>60':
      return '>60';
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

export function computeHamrLevelAndShuttle(repCount: number) {
  console.log(repCount);
  if (repCount > 155) return { level: 15, shuttle: 13, string: 'Max exceeded' };

  const hamrLevel = hamrLevels.find((hamrLevel) => hamrLevel.rep === repCount);

  if (!hamrLevel) {
    return { level: 0, shuttle: 0, string: 'Level not found' };
  }

  return {
    level: hamrLevel.level,
    shuttle: hamrLevel.shuttle,
    string: `Level ${hamrLevel.level} | Shuttle ${hamrLevel.shuttle}`,
  };
}
