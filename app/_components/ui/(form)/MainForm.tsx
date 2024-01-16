"use client";
import AgeGroupSelect from "./(controls)/AgeGroupSelect";
import FormButtons from "./(controls)/FormButtons";
import { DevTool } from "@hookform/devtools";
import { getResults } from "@/app/_util/getScore";
import {
  CardioExercises,
  CoreExercises,
  UpperBodyExercises,
} from "@/app/content";
import { useFormStore } from "@/app/stores/store";
import { FormProvider, useForm } from "react-hook-form";
import ExerciseFields from "./(controls)/ExerciseFields";
import GenderRadio from "./(controls)/GenderRadioButtons";
import Score from "./(score)/Score";
import ScoreChartLink from "./ScoreChartLink";
import convertDurationToSeconds from "@/app/_util/convertDurationToSeconds";

export type FormType = {
  gender: string;
  ageGroup: string;
  upperBodyExercise: UpperBodyExercises;
  upperBodyInput: string;
  coreExercise: CoreExercises;
  coreInput: string;
  cardioExercise: CardioExercises;
  cardioInput: string;
};

const MainForm = () => {
  const methods = useForm<FormType>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const setComponentScores = useFormStore((state) => state.setComponentScores);
  const { minMaxValues, setMinimumMetStatus, setFinalScore } = useFormStore();
  const onSubmit = methods.handleSubmit(async (formData) => {
    const {
      cardioExercise,
      cardioInput,
      coreExercise,
      coreInput,
      upperBodyExercise,
      upperBodyInput,
    } = methods.getValues();
    const { upperBodyScore, coreScore, cardioScore } = getResults(formData);
    setComponentScores({
      upperBody: upperBodyScore,
      core: coreScore,
      cardio: cardioScore,
    });

    setMinimumMetStatus({
      upperBody:
        upperBodyExercise === "exempt" ||
        parseInt(upperBodyInput) >=
          minMaxValues.upperBody.minimumPerformanceValue,
      core:
        coreExercise === "exempt" ||
        (coreExercise === "forearm_plank" &&
          convertDurationToSeconds(coreInput) >=
            minMaxValues.core.minimumPerformanceValue) ||
        parseInt(coreInput) >= minMaxValues.core.minimumPerformanceValue,
      cardio:
        cardioExercise === "exempt" ||
        (cardioInput === "1.5_mile_run" &&
          convertDurationToSeconds(cardioInput) <=
            minMaxValues.cardio.maximumPerformanceValue) ||
        parseInt(cardioInput) <= minMaxValues.cardio.maximumPerformanceValue,
    });
    console.log(
      convertDurationToSeconds(cardioInput),
      minMaxValues.cardio.maximumPerformanceValue,
    );
    let total = 100;
    if (upperBodyExercise === "exempt") total -= 20;
    if (coreExercise === "exempt") total -= 20;
    if (cardioExercise === "exempt") total -= 60;
    setFinalScore(((upperBodyScore + coreScore + cardioScore) / total) * 100);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit}
        className=" flex flex-col gap-16 text-2xl tracking-wide text-foreground"
      >
        <GenderRadio />
        <AgeGroupSelect />
        <ScoreChartLink />
        <ExerciseFields />
        <FormButtons />
      </form>

      <Score />
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default MainForm;
