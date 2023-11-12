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
    <>
      <div>
        {totalScore < 75 || anyMinNotMet ? (
          <p className="text-6xl font-semibold text-red-700">Fail</p>
        ) : (
          <p className="text-6xl font-semibold text-green-700">Pass</p>
        )}
      </div>
      <div>
        {totalScore >= 90 && !anyMinNotMet && (
          <p className="text-lg font-semibold text-green-700">Excellent</p>
        )}
        {totalScore >= 75.0 && totalScore <= 89.9 && !anyMinNotMet && (
          <p className="text-lg font-semibold text-yellow-700">Satisfactory</p>
        )}
      </div>
    </>
  );
};

export default ScoreStatus;
