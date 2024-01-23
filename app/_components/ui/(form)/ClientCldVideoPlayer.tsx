"use client";

import { Exercises } from "@/app/content";
import { CldVideoPlayer } from "next-cloudinary";

export default function ClientCldVideoPlayer({
  exercise,
}: {
  exercise: Exercises;
}) {
  return (
    <CldVideoPlayer
      id={exercise}
      width=""
      height=""
      src={`usaf-pt-calculator/exercise-videos/${exercise}`}
      logo={false}
    />
  );
}
