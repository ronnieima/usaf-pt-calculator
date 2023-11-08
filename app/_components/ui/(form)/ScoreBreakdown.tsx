import { GiAbdominalArmor, GiMuscleUp } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import IndividualExerciseScore from "./IndividualExerciseScore";
import { useScoreContext } from "@/app/_contexts/ScoreContext";

function ScoreBreakdown() {
  const {
    scores: { upper, core, cardio },
  } = useScoreContext();

  return (
    <aside className={`flex w-full max-w-screen-md flex-col gap-8 `}>
      <h2 className="my-8 text-center italic">Score Breakdown:</h2>
      <div className="flex flex-col justify-center gap-16 sm:flex-row ">
        <IndividualExerciseScore
          icon={<GiMuscleUp size="3em" title="flexing icon" />}
          score={`${upper}`}
        />
        <IndividualExerciseScore
          icon={<GiAbdominalArmor size="3em" title="abs icon" />}
          score={`${core}`}
        />
        <IndividualExerciseScore
          icon={<FaRunning size="3em" title="running icon" />}
          score={`${cardio}`}
        />
      </div>
    </aside>
  );
}

export default ScoreBreakdown;
