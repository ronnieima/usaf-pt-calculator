import { useFormState } from "react-hook-form";
import ScoreBreakdown from "./ScoreBreakdown";
import FailReasons from "./FailReasons";
import ScoreMessage from "./ScoreMessage";
import { MoonLoader } from "react-spinners";
import { Separator } from "@/components/ui/separator";
function Score() {
  const { isSubmitting, isSubmitSuccessful } = useFormState();

  return (
    <section className="my-16 flex flex-col items-center justify-center gap-8 text-4xl uppercase text-white">
      {isSubmitting && <MoonLoader color="#36d7b7" />}
      {isSubmitSuccessful && (
        <section
          className={`${
            isSubmitting && "opacity-0"
          } flex flex-col gap-4 text-center`}
        >
          <ScoreMessage />
          <Separator />
          <FailReasons />

          <ScoreBreakdown />
        </section>
      )}
    </section>
  );
}

export default Score;
