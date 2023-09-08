import { useFormState } from "react-hook-form";
import Loader from "./Loader";

function Score({ score }) {
  const { isSubmitting, isSubmitSuccessful } = useFormState();
  return (
    <div className="my-16 flex flex-col items-center justify-center gap-8 text-stone-200 text-4xl uppercase">
      {isSubmitting && <Loader />}
      {isSubmitSuccessful && (
        <>
          <p
            className={`text-center  text-6xl tracking-widest   ${
              isSubmitting ? "opacity-0" : ""
            }`}
          >
            Your Score is <span className="font-bold">{score}</span>
          </p>
          {score >= 90 && (
            <p className="text-green-500 font-semibold">Excellent 🌟</p>
          )}
          {score >= 75.0 && score <= 89.9 && (
            <p className="text-yellow-500 font-semibold">Satisfactory 👌</p>
          )}
          {score < 75 && (
            <p className="text-red-500 font-semibold w-max		">
              Unsatisfactory ❌
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default Score;
