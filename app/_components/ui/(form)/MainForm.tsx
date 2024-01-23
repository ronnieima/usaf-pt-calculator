'use client';
import {
  calculateFinalScore,
  calculateMetMinimums,
  getResults,
} from '@/app/_util/getScore';
import {
  CardioExercises,
  CoreExercises,
  UpperBodyExercises,
} from '@/app/content';
import { useFormStore } from '@/app/stores/store';
import { DevTool } from '@hookform/devtools';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AgeGroupSelect from './(controls)/AgeGroupSelect';
import ExerciseFields from './(controls)/ExerciseFields';
import FormButtons from './(controls)/FormButtons';
import GenderRadio from './(controls)/GenderRadioButtons';
import Score from './(score)/Score';
import ScoreChartLink from './ScoreChartLink';
import { useEffect } from 'react';

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

export default function MainForm() {
  useEffect(() => {
    const notify = () =>
      toast(
        '22 Jan 2024 Update: Real-time score indicator and many visual updates.',
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 6000,
        },
      );
    notify();
  }, []);

  const methods = useForm<FormType>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      gender: '',
      ageGroup: '',
      upperBodyExercise: 'pushup',
      upperBodyInput: '',
      coreExercise: 'situp',
      coreInput: '',
      cardioExercise: '1.5_mile_run',
      cardioInput: '',
    },
  });

  const minMaxValues = useFormStore((state) => state.minMaxValues);
  const setMinimumMetStatus = useFormStore(
    (state) => state.setMinimumMetStatus,
  );
  const setFinalScore = useFormStore((state) => state.setFinalScore);
  const setComponentScores = useFormStore((state) => state.setComponentScores);

  function onSubmit(formData: FormType) {
    const { upperBodyScore, coreScore, cardioScore } = getResults(formData);

    setComponentScores({
      upperBody: upperBodyScore,
      core: coreScore,
      cardio: cardioScore,
    });

    setMinimumMetStatus(calculateMetMinimums(formData, minMaxValues));

    setFinalScore(
      calculateFinalScore(formData, {
        upperBodyScore,
        coreScore,
        cardioScore,
      }),
    );
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 text-2xl tracking-wide text-foreground"
      >
        <GenderRadio />
        <AgeGroupSelect />
        <ScoreChartLink />
        <ExerciseFields />
        <FormButtons />
      </form>

      <Score />
      {/* <DevTool control={methods.control} /> */}
    </FormProvider>
  );
}
