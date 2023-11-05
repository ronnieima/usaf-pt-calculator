function IndividualExerciseScore({ icon, score }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {icon}
      <p>{score}</p>
    </div>
  );
}

export default IndividualExerciseScore;
