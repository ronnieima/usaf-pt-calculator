import { useScoreContext } from "@/app/_contexts/ScoreContext";
import React from "react";

const ScoreStatus = () => {
  const {
    scores: { totalScore, minimumMetStatus },
  } = useScoreContext();

  const anyMinNotMet = Object.values(minimumMetStatus).some(
    (value) => value === false,
  );
  return (
    <div>
      {totalScore >= 90 && !anyMinNotMet && (
        <p className="font-semibold text-green-500">Excellent</p>
      )}
      {totalScore >= 75.0 && totalScore <= 89.9 && !anyMinNotMet && (
        <p className="font-semibold text-yellow-500">Satisfactory</p>
      )}
      {totalScore < 75 || anyMinNotMet ? (
        <p className="text-6xl font-semibold text-red-500">Fail</p>
      ) : (
        <p className="text-6xl font-semibold text-green-500">Pass</p>
      )}
    </div>
  );
};

export default ScoreStatus;
