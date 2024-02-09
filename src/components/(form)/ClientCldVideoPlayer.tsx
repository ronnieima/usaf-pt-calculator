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
    <iframe
      id={exercise}
      className="h-72 w-full"
      src={`https://res.cloudinary.com/dfpbpun9z/video/upload/f_auto:video,q_auto/v1/exercises/${exercise}`}
    />
  );
}
