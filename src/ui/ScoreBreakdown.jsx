import { useScoreContext } from '../contexts/ScoreContext';
import IndividualExerciseScore from './IndividualExerciseScore';
import { GiAbdominalArmor, GiMuscleUp } from 'react-icons/gi';
import { FaRunning } from 'react-icons/fa';

function ScoreBreakdown() {
  const {
    scores: { upperScore, coreScore, cardioScore },
  } = useScoreContext();

  return (
    <aside className={`flex w-full max-w-screen-md flex-col gap-8 `}>
      <h2 className="my-8 text-center italic">Score Breakdown:</h2>
      <div className="grid grid-cols-3 justify-items-center ">
        <IndividualExerciseScore
          icon={<GiMuscleUp size="3em" title="flexing icon" />}
          score={`${upperScore} / 20`}
        />
        <IndividualExerciseScore
          type="core"
          icon={<GiAbdominalArmor size="3em" title="abs icon" />}
          score={`${coreScore} / 20`}
        />
        <IndividualExerciseScore
          type="cardio"
          icon={<FaRunning size="3em" title="running icon" />}
          score={`${cardioScore} / 60`}
        />
      </div>
    </aside>
  );
}

export default ScoreBreakdown;
