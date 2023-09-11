import { useFormState } from 'react-hook-form';
import Loader from './Loader';
import ScoreBreakdown from './ScoreBreakdown';
import { useScoreContext } from '../contexts/ScoreContext';
import AnimatedNumber from 'animated-number-react';

function Score() {
  const { isSubmitting, isSubmitSuccessful } = useFormState();
  const { totalScore, isMinimumNotMet } = useScoreContext();
  return (
    <section className="my-16 flex flex-col items-center justify-center gap-8 text-4xl uppercase text-stone-200">
      {isSubmitting && <Loader />}
      {isSubmitSuccessful && (
        <section
          className={`${
            isSubmitting && 'opacity-0'
          } flex flex-col gap-8 text-center`}
        >
          <p className={`  text-6xl tracking-widest   `}>
            Your Score is{' '}
            <AnimatedNumber
              value={totalScore}
              formatValue={(value) => value.toFixed(1)}
            />
          </p>
          {totalScore >= 90 && !isMinimumNotMet && (
            <p className="font-semibold text-green-500">Excellent</p>
          )}
          {totalScore >= 75.0 && totalScore <= 89.9 && !isMinimumNotMet && (
            <p className="font-semibold text-yellow-500">Satisfactory</p>
          )}
          {totalScore < 75 || isMinimumNotMet ? (
            <p className="text-6xl font-semibold text-red-500">Fail</p>
          ) : (
            <p className="text-6xl font-semibold text-green-500">Pass</p>
          )}
          {totalScore < 75 && (
            <p className="font-semibold text-red-500 		">Score below 75</p>
          )}
          {isMinimumNotMet && (
            <p className="font-semibold text-red-500">Minimum not met</p>
          )}

          <ScoreBreakdown />
        </section>
      )}
    </section>
  );
}

export default Score;
