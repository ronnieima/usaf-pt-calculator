import { useFormStore } from "@/app/stores/store";
import { useFormContext } from "react-hook-form";

const ScoreText = () => {
  const { getValues } = useFormContext();
  const exercises = getValues([
    "upperBodyExercise",
    "coreExercise",
    "cardioExercise",
  ]);
  const isAllExempt = exercises.every((exercise) => exercise === "exempt");

  const minimumMetStatus = useFormStore((state) => state.minimumMetStatus);
  const finalScore = useFormStore((state) => state.finalScore);

  const anyMinNotMet = Object.values(minimumMetStatus).some(
    (value) => value === false,
  );
  return (
    <div
      className={
        "flex w-full flex-col justify-center text-center text-9xl sm:items-end"
      }
    >
      <p>Score</p>
      <p className="font-semibold text-blue-400">
        {isAllExempt ? 100 : finalScore.toFixed(1)}
      </p>
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
    </div>
  );
};

export default ScoreText;
