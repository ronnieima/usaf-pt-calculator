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

const ExerciseInput = ({ exercise }: { exercise: Exercise }) => {
  const {
    control,
    formState: { isSubmitting },
    resetField,
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
          <FormItem>
            <FormLabel className="text-xl font-bold lg:text-2xl">
              <h3>{`${exerciseLabel} ${isTimeBased ? 'Time' : 'Reps'}`}</h3>
            </FormLabel>
            <FormControl className="border-card-foreground/30 w-full border shadow-lg">
              {isTimeBased ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    className="border-card-foreground/30 w-full rounded-lg "
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
                <Input
                  disabled={isSubmitting}
                  inputMode="numeric"
                  className="focus:ring-primary"
                  min={0}
                  onWheel={numberInputOnWheelPreventChange}
                  placeholder="Reps"
                  type="number"
                  {...field}
                />
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
                      {computeValue(minimumPerformanceValue)}{' '}
                    </span>
                    {!isTimeBased && <span className="text-xs">reps</span>}
                  </p>
                  <span className="text-xs font-semibold">Min</span>
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
            </div>
          </div>
        </section>
      ) : (
        <span
          className="
        text-muted-foreground text-center text-sm"
        >
          Select an age group and gender to get min/max values.
        </span>
      )}
      {componentValue === 'cardio' && (
        <>
          <ShowHamrAudioSwitch />
          {isCheckedShuttleAudio && (
            <iframe
              src="https://res.cloudinary.com/dfpbpun9z/video/upload/f_auto:video,q_auto/v1/usaf-pt-calculator/exercise-videos/hamr-audio"
              height={'400'}
              allowFullScreen
            />
          )}
        </>
      )}
    </>
  );
};

export default ExerciseInput;
