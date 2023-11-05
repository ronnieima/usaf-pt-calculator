import { useFormState } from "react-hook-form";
// import Loader from './Loader';
import ScoreBreakdown from "./ScoreBreakdown";
import FailReasons from "./FailReasons";
import ScoreMessage from "./ScoreMessage";
import { Loader2 } from "lucide-react";

function Score() {
  const { isSubmitting, isSubmitSuccessful } = useFormState();

  return (
    <section className="my-16 flex flex-col items-center justify-center gap-8 text-4xl uppercase text-stone-200">
      {isSubmitting && <Loader2 />}
      {isSubmitSuccessful && (
        <section
          className={`${
            isSubmitting && "opacity-0"
          } flex flex-col gap-4 text-center`}
        >
          <ScoreMessage />
          {/* <FailReasons /> */}
          {/* <ScoreBreakdown /> */}
        </section>
      )}
    </section>
  );
}

export default Score;
