import { useScoreContext } from "@/app/_contexts/ScoreContext";
import React from "react";
import ScoreStatus from "./ScoreStatus";

const ScoreText = () => {
  const {
    scores: { totalScore },
  } = useScoreContext();
  return (
    <div className={`flex w-full flex-col items-end justify-center   text-9xl`}>
      <p>Score</p>
      <p className="font-semibold text-blue-400">{totalScore}</p>
      <ScoreStatus />
    </div>
  );
};

export default ScoreText;
