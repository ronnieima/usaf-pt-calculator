"use client";
import AgeGroupSelect from "./(controls)/AgeGroupSelect";
import FormButtons from "./(controls)/FormButtons";

import { calculateTotalScoresWithMinimumCheck } from "../../../_db/supabase";

import { useScoreContext } from "@/app/_contexts/ScoreContext";
import { FormProvider, useForm } from "react-hook-form";
import ExerciseFields from "./(controls)/ExerciseFields";
import GenderRadio from "./(controls)/GenderRadioButtons";
import Score from "./(score)/Score";
import { formatAgeGroup } from "@/app/_util/helpers";
import Link from "next/link";

export type formType = {
  gender: string;
  ageGroup: string;
  upperBodyExercise: string;
  upperBodyInput: string;
  coreExercise: string;
  coreInput: string;
  cardioExercise: string;
  cardioInput: string;
};

const MainForm = () => {
  const methods = useForm<formType>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      gender: "",
      ageGroup: "",
      upperBodyExercise: "",
      upperBodyInput: "",
      coreExercise: "",
      coreInput: "",
      cardioExercise: "",
      cardioInput: "",
    },
  });
  const { setScores } = useScoreContext();
  const gender = methods.watch("gender");
  const ageGroup = methods.watch("ageGroup");

  const formattedAgeGroup = formatAgeGroup(ageGroup);
  async function onSubmit(data: formType) {
    const res = await calculateTotalScoresWithMinimumCheck(data);
    setScores(res);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className=" flex flex-col gap-16 text-2xl tracking-wide text-foreground"
      >
        <GenderRadio />
        <AgeGroupSelect />
        {gender && ageGroup && (
          <p className="text-center text-lg">
            View the {gender} / {ageGroup} score chart{" "}
            <Link
              href={`https://hnnyotwjhikrytqynjyk.supabase.co/storage/v1/object/public/usafptcalculator/scorechart_${gender}_${formattedAgeGroup}.pdf`}
              target="_blank"
              className="text-primary hover:text-primary/50"
            >
              here
            </Link>
          </p>
        )}
        <ExerciseFields />
        <FormButtons />
      </form>
      <Score />
    </FormProvider>
  );
};

export default MainForm;
