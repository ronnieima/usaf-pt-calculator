import { useScoreContext } from "@/app/contexts/ScoreContext";

function FailReasons() {
  const {
    scores: { minimumMetStatus, totalScore },
  } = useScoreContext();
  console.log(minimumMetStatus);
  return (
    <>
      {totalScore < 75 && <p className=" text-red-500">Score below 75</p>}
      {!minimumMetStatus.upper && (
        <p className=" text-red-500">Minimum not met for upper body category</p>
      )}
      {!minimumMetStatus.core && (
        <p className=" text-red-500">Minimum not met for core category</p>
      )}
      {!minimumMetStatus.cardio && (
        <p className=" text-red-500">Minimum not met for cardio category</p>
      )}
    </>
  );
}

export default FailReasons;
