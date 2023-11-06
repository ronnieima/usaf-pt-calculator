import { useScoreContext } from "@/app/contexts/ScoreContext";
import { Separator } from "@/components/ui/separator";
import AnimatedNumber from "animated-number-react";

function ScoreMessage() {
  const { scores } = useScoreContext();
  const { minimumMetStatus, totalScore } = scores;

  const anyMinNotMet = Object.values(minimumMetStatus).some(
    (value) => value === false,
  );

  return (
    <>
      <p className={`  text-6xl tracking-widest     `}>
        Your Score is{" "}
        <AnimatedNumber
          value={totalScore}
          formatValue={(value: number) => value.toFixed(1)}
        />
      </p>
      <Separator />

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
