import { useFormState } from "react-hook-form";
import Loader from "./Loader";
import ScoreBreakdown from "./ScoreBreakdown";
import { useScoreContext } from "../contexts/ScoreContext";
import AnimatedNumber from "animated-number-react";

function Score() {
  const { isSubmitting, isSubmitSuccessful } = useFormState();
  const { totalScore } = useScoreContext();
  console.log(`${totalScore} in Score.jsx`);
  return (
    <section className="my-16 flex flex-col items-center justify-center gap-8 text-stone-200 text-4xl uppercase">
      {isSubmitting && <Loader />}
      {isSubmitSuccessful && (
        <section
          className={`${
            isSubmitting && "opacity-0"
          } text-center flex flex-col gap-8`}
        >
          <p className={`  text-6xl tracking-widest   `}>
            Your Score is{" "}
            <AnimatedNumber
              value={totalScore}
              formatValue={(value) => value.toFixed(1)}
            />
          </p>
          {totalScore >= 90 && (
            <p className="text-green-500 font-semibold">Excellent 🌟</p>
          )}
          {totalScore >= 75.0 && totalScore <= 89.9 && (
            <p className="text-yellow-500 font-semibold">Satisfactory 👌</p>
          )}
          {totalScore < 75 && (
            <p className="text-red-500 font-semibold 		">Unsatisfactory ❌</p>
          )}

          <ScoreBreakdown />
        </section>
      )}
    </section>
  );
}

export default Score;
