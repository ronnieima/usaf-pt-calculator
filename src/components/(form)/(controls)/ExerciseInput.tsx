'use client';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { Exercise, exercises } from '@/src/config/content';
import { getValidationRules } from '@/src/config/validation';
import { useRealTimeInfo } from '@/src/hooks/useRealTimeInfo';
import {
  cn,
  computeHamrLevelAndShuttle,
  numberInputOnWheelPreventChange,
  secondsToMinutesAndSeconds,
} from '@/src/lib/utils';
import { useFormStore } from '@/src/stores/store';
import { TimeField } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Separator } from '../../ui/separator';
import ShowHamrAudioSwitch from '../ShowHamrAudioSwitch';
import Link from 'next/link';

const ExerciseInput = ({ exercise }: { exercise: Exercise }) => {
  const {
    control,
    formState: { isSubmitting },
    resetField,
    watch,
  } = useFormContext();

  const {
    component: { label: componentLabel, value: componentValue },
  } = exercise;

  const { selectedExercise, currentInput } = useRealTimeInfo(componentValue);
  const isCheckedShuttleAudio = useFormStore(
    (state) => state.isCheckedShuttleAudio,
  );
  const { minimumPerformanceValue, maximumPerformanceValue } = useFormStore(
    (state) => state.minMaxValues[componentValue],
  );
  const score = useFormStore((state) => state.scores[componentValue]);

  const exerciseLabel = exercises
    .find((exercise) => exercise.component.value === componentValue)
    ?.options.find((opt) => opt.value === selectedExercise)?.label;

  const showMinMax = minimumPerformanceValue || maximumPerformanceValue;

  const isTimeBased = ['1.5_mile_run', 'forearm_plank', '2km_walk'].includes(
    selectedExercise,
  );

  // Compute the min and max values based on whether it's time-based
  const computeValue = isTimeBased
    ? secondsToMinutesAndSeconds
    : (value: any) => value;

  useEffect(() => {
    resetField(`${componentValue}Input`, { defaultValue: '' });
  }, [selectedExercise, resetField, componentValue]);

  if (selectedExercise === 'exempt') return null;
  return (
    <>
      <FormField
        control={control}
        name={`${componentValue}Input`}
        rules={getValidationRules(componentLabel, selectedExercise)}
        render={({ field }) => (
          <FormItem className="relative">
            <FormLabel className="text-xl font-bold lg:text-2xl">
              <h3>{`${exerciseLabel} ${isTimeBased ? 'Time' : 'Reps'}`}</h3>
            </FormLabel>
            <FormControl className=" w-full border border-card-foreground/30 shadow-lg ">
              {isTimeBased ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    className="w-full rounded-lg border-card-foreground/30 shadow-lg"
                    format="mm:ss"
                    slotProps={{
                      textField: {
                        error: false,
                      },
                    }}
                    {...field}
                  />
                </LocalizationProvider>
              ) : (
                <>
                  <Input
                    disabled={isSubmitting}
                    inputMode="numeric"
                    className="border-card-foreground/30 shadow-lg focus:ring-primary"
                    min={0}
                    max={155}
                    onWheel={numberInputOnWheelPreventChange}
                    placeholder="Reps"
                    type="number"
                    {...field}
                  />
                  <span className="absolute right-16 top-[3.2rem] text-sm">
                    {selectedExercise === '20_meter_hamr_shuttle' &&
                      watch('cardioInput') !== '' &&
                      watch('gender') &&
                      watch('ageGroup') &&
                      computeHamrLevelAndShuttle(Number(watch('cardioInput')))
                        .string}
                  </span>
                </>
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {!!showMinMax ? (
        <section className="flex justify-start gap-16 text-base sm:text-2xl">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center ">
              <p>
                <span className="text-3xl font-bold text-blue-900">
                  {score}{' '}
                </span>
                <span className="text-xs">pts</span>
              </p>
              <span className="text-xs font-semibold">Score</span>
              {currentInput >= maximumPerformanceValue && !isTimeBased && (
                <span className="relative text-xs text-green-800">
                  Max reached
                </span>
              )}
            </div>
            <Separator orientation="vertical" />
            {!isTimeBased && (
              <>
                <div className="flex flex-col items-center">
                  <p>
                    <span className="text-3xl font-bold text-red-800">
                      {`${computeValue(minimumPerformanceValue)} `}
                    </span>
                    {!isTimeBased && <span className="text-xs">reps</span>}
                  </p>
                  <span className="text-xs font-semibold">Min</span>
                  <span className="text-sm">
                    {selectedExercise === '20_meter_hamr_shuttle' &&
                      computeHamrLevelAndShuttle(minimumPerformanceValue)
                        .string}
                  </span>
                </div>
                <Separator orientation="vertical" />
              </>
            )}

            {/* MAX */}
            <div className="flex flex-col items-center ">
              <p>
                <span
                  className={cn('text-3xl font-bold text-green-800', {
                    'text-red-500': isTimeBased,
                  })}
                >
                  {computeValue(maximumPerformanceValue)}{' '}
                </span>
                {!isTimeBased && <span className="text-xs">reps</span>}
              </p>
              <span className="text-xs font-semibold">Max</span>
              <span className="text-sm">
                {selectedExercise === '20_meter_hamr_shuttle' &&
                  computeHamrLevelAndShuttle(maximumPerformanceValue).string}
              </span>
            </div>
          </div>
        </section>
      ) : (
        <span
          className="
        text-center text-sm text-muted-foreground"
        >
          Select an age group and gender to get min/max values.
        </span>
      )}
      {componentValue === 'cardio' && (
        <>
          <div className="flex items-center justify-between">
            <Link
              href={
                'https://res.cloudinary.com/dfpbpun9z/image/upload/v1707517246/usaf-pt-calculator/hamr_levels.pdf'
              }
              target="_blank"
              className="text-sm text-blue-950 hover:underline"
            >
              Go to HAMR Level Chart
            </Link>
            <ShowHamrAudioSwitch />
          </div>
          {isCheckedShuttleAudio && (
            <audio className="my-12 w-full" controls src="hamr-audio.mp3" />
          )}
        </>
      )}
    </>
  );
};

export default ExerciseInput;
