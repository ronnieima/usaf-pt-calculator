'use client';
import { useFormState } from 'react-hook-form';
import { Separator } from '../../ui/separator';
import Spinner from '../../Spinner';
import FailReasons from './FailReasons';
import ScoreMessage from './ScoreMessage';

function Score() {
  const { isSubmitting, isSubmitSuccessful } = useFormState();

  return (
    <section className="text-foreground my-16 flex  flex-col items-center justify-center gap-8  text-4xl">
      {isSubmitting && <Spinner />}
      {isSubmitSuccessful && (
        <section
          className={`${
            isSubmitting && 'opacity-0'
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
