import { useScoreContext } from "@/app/_contexts/ScoreContext";
import React from "react";
import ScoreStatus from "./ScoreStatus";

const ScoreText = () => {
  const {
    scores: { totalScore },
  } = useScoreContext();
  return (
    <div
      className={`flex w-full flex-col justify-center text-center text-9xl   sm:items-end`}
    >
      <p>Score</p>
      <p className="font-semibold text-blue-400">{totalScore.toFixed(2)}</p>
      <ScoreStatus />
    </div>
  );
};

export default ScoreText;
