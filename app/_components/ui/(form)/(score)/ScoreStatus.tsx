import { useFormStore } from "@/app/stores/store";

const ScoreStatus = () => {
  const finalScore = useFormStore((state) => state.finalScore());
  const minimumMetStatus = useFormStore((state) => state.minimumMetStatus());
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
