import { useFormStore } from "@/app/stores/store";
import React from "react";
import { useFormContext } from "react-hook-form";

const ScoreStatus = () => {
  const { getValues } = useFormContext();
  const upperBodyExercise = getValues("upperBodyExercise");
  const coreExercise = getValues("coreExercise");
  const cardioExercise = getValues("cardioExercise");
  const finalScore = useFormStore((state) =>
    state.finalScore(upperBodyExercise, coreExercise, cardioExercise),
  );
  const minimumMetStatus = useFormStore((state) =>
    state.minimumMetStatus(upperBodyExercise, coreExercise, cardioExercise),
  );
  console.log(minimumMetStatus);
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
