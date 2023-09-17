import { useScoreContext } from '../contexts/ScoreContext';

function FailReasons() {
  const {
    scores: { isMinimumNotMet, totalScore },
  } = useScoreContext();
  return (
    <>
      {totalScore < 75 && <p className=" text-red-500">Score below 75</p>}
      {isMinimumNotMet.upper && (
        <p className=" text-red-500">Minimum not met for upper body category</p>
      )}
      {isMinimumNotMet.core && (
        <p className=" text-red-500">Minimum not met for core category</p>
      )}
      {isMinimumNotMet.cardio && (
        <p className=" text-red-500">Minimum not met for cardio category</p>
      )}
    </>
  );
}

export default FailReasons;
