import React from "react";
import ScoreStatus from "./ScoreStatus";
import { useFormStore } from "@/app/stores/store";
import { useFormContext } from "react-hook-form";

const ScoreText = () => {
  const { getValues } = useFormContext();
  const upperBodyExercise = getValues("upperBodyExercise");
  const coreExercise = getValues("coreExercise");
  const cardioExercise = getValues("cardioExercise");
  const finalScore = useFormStore((state) =>
    state.finalScore(upperBodyExercise, coreExercise, cardioExercise),
  );

  return (
    <div
      className={
        "flex w-full flex-col justify-center text-center text-9xl sm:items-end"
      }
    >
      <p>Score</p>
      <p className="font-semibold text-blue-400">{finalScore.toFixed(1)}</p>
      <ScoreStatus />
    </div>
  );
};

export default ScoreText;
