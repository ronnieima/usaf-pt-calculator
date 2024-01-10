import React from "react";
import ScoreStatus from "./ScoreStatus";
import { useFormStore } from "@/app/stores/store";

const ScoreText = () => {
  const finalScore = useFormStore((state) => state.finalScore());

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
