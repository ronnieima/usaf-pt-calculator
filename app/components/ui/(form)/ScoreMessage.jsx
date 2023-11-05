import AnimatedNumber from "animated-number-react";

function ScoreMessage({ isMinimumMetStatus }) {
  const anyMinNotMet = Object.values(isMinimumMetStatus).some(
    (value) => value === true,
  );

  return (
    <>
      <p className={`  text-6xl tracking-widest   `}>
        Your Score is{" "}
        <AnimatedNumber
          value={totalScore}
          formatValue={(value) => value.toFixed(1)}
        />
      </p>
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
    </>
  );
}

export default ScoreMessage;
