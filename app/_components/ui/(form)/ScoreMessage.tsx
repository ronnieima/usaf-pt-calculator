import { useScoreContext } from "@/app/_contexts/ScoreContext";
import { Separator } from "@/app/_components/ui/(shadcn)/separator";
import ScoreIcons from "./ScoreIcons";

function ScoreMessage() {
  const { scores } = useScoreContext();
  const { minimumMetStatus, totalScore } = scores;

  const anyMinNotMet = Object.values(minimumMetStatus).some(
    (value) => value === false,
  );

  return (
    <>
      <section className="space-y-16 sm:grid sm:grid-cols-2">
        <div
          className={`flex w-full flex-col items-center justify-center text-9xl `}
        >
          <p>Score</p>
          <p className="font-semibold text-blue-400">{totalScore}</p>
        </div>
        <div className="flex flex-col items-center">
          <ScoreIcons />
        </div>
      </section>
      <Separator />
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
    </>
  );
}

export default ScoreMessage;
