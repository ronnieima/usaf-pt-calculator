import { useFormState } from "react-hook-form";
import ScoreBreakdown from "./ScoreBreakdown";
import FailReasons from "./FailReasons";
import ScoreMessage from "./ScoreMessage";
import { MoonLoader } from "react-spinners";
function Score() {
  const { isSubmitting, isSubmitSuccessful } = useFormState();

  return (
    <section className="text-4xll my-16 flex flex-col items-center justify-center gap-8 uppercase text-stone-900">
      {isSubmitting && <MoonLoader color="#36d7b7" />}
      {isSubmitSuccessful && (
        <section
          className={`${
            isSubmitting && "opacity-0"
          } flex flex-col gap-4 text-center`}
        >
          <ScoreMessage />
          <FailReasons />
          <ScoreBreakdown />
        </section>
      )}
    </section>
  );
}

export default Score;
