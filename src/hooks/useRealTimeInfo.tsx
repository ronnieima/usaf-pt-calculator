import { useFormStore } from '@/src/stores/store';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  getIndividualScore,
  getMaximumPerformanceValue,
  getMinimumPerformanceValue,
} from '../lib/getScore';
import { inferWalkAgeGroup } from '../lib/utils';

export const useRealTimeInfo = (
  componentValue: 'upperBody' | 'core' | 'cardio',
) => {
  const { watch } = useFormContext();

  const setComponentMinMaxValues = useFormStore(
    (state) => state.setComponentMinMaxValues,
  );
  const setComponentScore = useFormStore((state) => state.setComponentScore);

  const selectedExercise = watch(`${componentValue}Exercise`);
  const currentInput = watch(`${componentValue}Input`);
  const gender = watch('gender');
  const ageGroup = watch('ageGroup');

  useEffect(() => {
    if (!gender || !ageGroup || !selectedExercise) return;
    const minValue = getMinimumPerformanceValue(
      gender,
      selectedExercise === '2km_walk' ? inferWalkAgeGroup(ageGroup) : ageGroup,
      selectedExercise,
    );
    const maxValue = getMaximumPerformanceValue(
      gender,
      selectedExercise === '2km_walk' ? inferWalkAgeGroup(ageGroup) : ageGroup,
      selectedExercise,
    );
    const componentScore = getIndividualScore(
      selectedExercise,
      gender,
      ageGroup,
      currentInput,
    );
    setComponentScore(componentValue, componentScore);
    setComponentMinMaxValues(componentValue, {
      minimumPerformanceValue: minValue!,
      maximumPerformanceValue: maxValue!,
    });
  }, [
    gender,
    ageGroup,
    selectedExercise,
    componentValue,
    setComponentMinMaxValues,
    setComponentScore,
    currentInput,
  ]);

  return {
    selectedExercise,
    currentInput,
  };
};
