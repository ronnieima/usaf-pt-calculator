type IndividualExerciseScoreProps = {
  icon: React.ReactNode;
  score: string;
};

function IndividualExerciseScore({
  icon,
  score,
}: IndividualExerciseScoreProps) {
  return (
    <div className="flex flex-col items-center gap-4 ">
      {icon}
      <p>{score}</p>
    </div>
  );
}

export default IndividualExerciseScore;