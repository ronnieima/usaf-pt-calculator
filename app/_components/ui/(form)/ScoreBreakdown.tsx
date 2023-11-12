import ScoreIcons from "./ScoreIcons";

function ScoreBreakdown() {
  return (
    <aside className={`flex w-full max-w-screen-md flex-col gap-8 `}>
      <h2 className="my-8 text-center italic">Score Breakdown:</h2>
      <div className="flex flex-col justify-center gap-16 sm:flex-row ">
        <ScoreIcons />
      </div>
    </aside>
  );
}

export default ScoreBreakdown;
