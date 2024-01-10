import { useFormContext, useFormState } from "react-hook-form";
import { Separator } from "../../(shadcn)/separator";
import Spinner from "../../Spinner";
import FailReasons from "./FailReasons";
import ScoreMessage from "./ScoreMessage";
import { useFormStore } from "@/app/stores/store";
import { useEffect } from "react";

function Score() {
  const { isSubmitting, isSubmitSuccessful } = useFormState();
  const { getValues } = useFormContext();
  const {
    cardioExercise,
    cardioInput,
    coreExercise,
    coreInput,
    upperBodyExercise,
    upperBodyInput,
  } = getValues();
  const { upperBody, core, cardio, setMinimumMetStatus, setFinalScore } =
    useFormStore();

  useEffect(() => {
    setMinimumMetStatus({
      upperBody:
        upperBodyExercise === "exempt" ||
        upperBodyInput >= upperBody.minimumPerformanceValue,
      core:
        coreExercise === "exempt" || coreInput >= core.minimumPerformanceValue,
      cardio:
        cardioExercise === "exempt" ||
        cardioInput >= cardio.minimumPerformanceValue,
    });

    let total = 100;
    if (upperBodyExercise === "exempt") total -= 20;
    if (coreExercise === "exempt") total -= 20;
    if (cardioExercise === "exempt") total -= 60;

    setFinalScore(
      ((upperBody.score + core.score + cardio.score) / total) * 100,
    );
  }, [
    upperBodyExercise,
    upperBodyInput,
    coreExercise,
    coreInput,
    cardioExercise,
    cardioInput,
    upperBody,
    core,
    cardio,
    setFinalScore,
    setMinimumMetStatus,
  ]);

  return (
    <section className="my-16 flex flex-col  items-center justify-center gap-8 text-4xl  text-foreground">
      {isSubmitting && <Spinner />}
      {isSubmitSuccessful && (
        <section
          className={`${
            isSubmitting && "opacity-0"
          } flex flex-col gap-4 text-center`}
        >
          <Separator className="mt-16" />

          <ScoreMessage />

          <FailReasons />
        </section>
      )}
    </section>
  );
}

export default Score;
