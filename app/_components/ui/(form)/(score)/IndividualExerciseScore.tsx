type IndividualExerciseScoreProps = {
  icon: React.ReactNode;
  score: string;
};

function IndividualExerciseScore({
  icon,
  score,
}: IndividualExerciseScoreProps) {
  return (
    <div className="flex items-center gap-4 ">
      {icon}
      <p className="block w-16">{score}pts</p>
    </div>
  );
}

export default IndividualExerciseScore;
