import { useFormStore } from "@/app/stores/store";
import React from "react";

const ScoreStatus = ({ finalScore }: { finalScore: number }) => {
  const upperBody = useFormStore((state) => state.upperBody);
  const core = useFormStore((state) => state.core);
  const cardio = useFormStore((state) => state.cardio);

  const minimumMetStatus = {
    upperBody: upperBody.score >= upperBody.minimumPerformanceValue,
    core: core.score >= core.minimumPerformanceValue,
    cardio: cardio.score >= cardio.minimumPerformanceValue,
  };

  const anyMinNotMet = Object.values(minimumMetStatus).some(
    (value) => value === false,
  );
  return (
    <>
      <div>
        {finalScore < 75 || anyMinNotMet ? (
          <p className="text-6xl font-semibold text-red-700">Fail</p>
        ) : (
          <p className="text-6xl font-semibold text-green-700">Pass</p>
        )}
      </div>
      <div>
        {finalScore >= 90 && !anyMinNotMet && (
          <p className="text-lg font-semibold text-green-700">Excellent</p>
        )}
        {finalScore >= 75.0 && finalScore <= 89.9 && !anyMinNotMet && (
          <p className="text-lg font-semibold text-yellow-700">Satisfactory</p>
        )}
      </div>
    </>
  );
};

export default ScoreStatus;
