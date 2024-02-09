'use client';

import { ExerciseValues } from '@/src/config/content';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export default function ClientCldVideoPlayer({
  exercise,
}: {
  exercise: ExerciseValues;
}) {
  return (
    <CldVideoPlayer
      id={exercise}
      width="full"
      height="full"
      src={`usaf-pt-calculator/exercise-videos/${exercise}`}
      logo={false}
    />
  );
}
