type IndividualExerciseScoreProps = {
  icon: React.ReactNode;
  score: string | number;
};

function IndividualExerciseScore({
  icon,
  score,
}: IndividualExerciseScoreProps) {
  return (
    <div className="flex items-center gap-4 ">
      {icon}
      <p className="block w-16">{score}</p>
    </div>
  );
}

export default IndividualExerciseScore;
