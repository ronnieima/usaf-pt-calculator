function Score({ score }) {
  return (
    <>
      <p className="text-center text-white text-6xl my-24 uppercase">
        Your Score is <span className="font-bold">{score}</span>
      </p>
    </>
  );
}

export default Score;
