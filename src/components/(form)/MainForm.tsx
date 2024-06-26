'use client';
import {
  CardioExercises,
  CoreExercises,
  UpperBodyExercises,
} from '@/src/config/content';
import {
  calculateFinalScore,
  calculateMetMinimums,
  getResults,
} from '@/src/lib/getScore';
import { useFormStore } from '@/src/stores/store';
import { FormProvider, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import AgeGroupSelect from './(controls)/AgeGroupSelect';
import ExerciseFields from './(controls)/ExerciseFields';
import FormButtons from './(controls)/FormButtons';
import GenderRadio from './(controls)/GenderRadioButtons';
import Score from './(score)/Score';
import ScoreChartLink from './ScoreChartLink';

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
