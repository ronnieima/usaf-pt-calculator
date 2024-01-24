import { ComponentScores, useFormStore } from '@/src/stores/store';
import { FaRunning } from 'react-icons/fa';
import IndividualExerciseScore from './IndividualExerciseScore';
import PushupIcon from './PushupIcon';
import SitupIcon from './SitupIcon';
import { FieldValues, useFormContext } from 'react-hook-form';
import { convertDurationToSeconds } from '@/src/lib/utils';

const ScoreIcons = () => {
  const scores = useFormStore((state) => state.scores);
  const cardioMax = useFormStore(
    (state) => state.minMaxValues.cardio.maximumPerformanceValue,
  );

  const { getValues } = useFormContext();
  const formData = getValues();
  return (
    <div className="flex flex-col items-center">
      <IndividualExerciseScore
        icon={<PushupIcon />}
        score={
          formData.upperBodyExercise === 'exempt'
            ? 'Exempt'
            : `${scores.upperBody}`
        }
      />
      <IndividualExerciseScore
        icon={<SitupIcon />}
        score={formData.coreExercise === 'exempt' ? 'Exempt' : `${scores.core}`}
      />
      <IndividualExerciseScore
        icon={<FaRunning size="3em" title="running icon" />}
        score={calculateScore(formData, scores, cardioMax)}
      />
    </div>
  );
};

export default ScoreIcons;

function calculateScore(
  formData: FieldValues,
  scores: ComponentScores,
  cardioMax: number,
) {
  if (formData.cardioExercise === 'exempt') {
    return 'Exempt';
  } else if (
    formData.cardioExercise === '2km_walk' &&
    convertDurationToSeconds(formData.cardioInput) <= cardioMax
  ) {
    return 'Pass';
  } else if (
    formData.cardioExercise === '2km_walk' &&
    convertDurationToSeconds(formData.cardioInput) > cardioMax
  ) {
    return 'Fail';
  } else {
    return scores.cardio;
  }
}
