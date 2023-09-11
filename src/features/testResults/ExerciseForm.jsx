import { useFormContext } from 'react-hook-form';
import ExerciseInput from '../../ui/ExerciseInput';
import ErrorText from '../../ui/ErrorText';
import { useEffect } from 'react';

function ExerciseForm({ type, children }) {
  const { register, watch, formState, unregister } = useFormContext();
  const { errors, isSubmitting } = formState;
  const selectedExercise = `${type}Exercise`;
  const watchExercise = watch(selectedExercise, '');

  useEffect(() => {
    // Unregister the field to remove old validation rules
    unregister(`${type}Results`);
  }, [watchExercise]);

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h3 className="uppercase">
          {type === 'upperBody' ? 'upper body' : type} Exercise Type
        </h3>
        <select
          {...register(selectedExercise, {
            required: `${
              type === 'upperBody'
                ? 'Upper body'
                : type === 'core'
                ? 'Core'
                : 'Cardio'
            } exercise type is required`,
          })}
          className="w-full rounded-lg p-5 text-center font-semibold text-stone-700 shadow-lg "
          defaultValue={''}
          disabled={isSubmitting}
        >
          <option value="" disabled hidden>
            Select Exercise Type
          </option>
          {children}
        </select>
        <ErrorText inputName={selectedExercise} />
      </div>

      {type === 'upperBody' && (
        <ExerciseInput
          watchExercise={watchExercise}
          title="Upper Body Reps"
          registerProps={{
            name: 'upperBodyResults',
            validation: {
              required: 'Rep amount is required',
              min: { value: 0, message: 'Reps must be greater than 0' },
              max: { value: 125, message: 'Maximum amount exceeded' },
            },
          }}
          inputType="number"
          placeholder="Reps"
          error={errors.upperBodyResults}
        />
      )}
      {type === 'core' && (
        <ExerciseInput
          watchExercise={watchExercise}
          title={`Core ${watchExercise === 'plank' ? 'Plank Time' : 'Reps'}`}
          registerProps={{
            name: 'coreResults',
            validation: {
              required:
                watchExercise === 'plank'
                  ? 'Plank time is required'
                  : 'Rep amount is required',

              ...(watchExercise === 'plank'
                ? {
                    pattern: {
                      value: /^(([0]?[0-5][0-9]|[0-9]):([0-5][0-9]))$/,
                      message: 'Invalid time format. (mm:ss)',
                    },
                    min: {
                      value: 0,
                      message: 'Time must be greater than 0',
                    },
                  }
                : {
                    min: { value: 0, message: 'Reps must be greater than 0' },
                    max: { value: 125, message: 'Maximum amount exceeded' },
                  }),
            },
          }}
          inputType={watchExercise === 'plank' ? 'text' : 'number'}
          placeholder={watchExercise === 'plank' ? 'mm:ss' : 'Reps'}
          error={errors.coreResults}
        />
      )}

      {type === 'cardio' && (
        <ExerciseInput
          watchExercise={watchExercise}
          title={watchExercise === 'shuttles' ? 'HAMR Reps' : 'Run Time'}
          registerProps={{
            name: 'cardioResults',
            validation: {
              required: `${
                watchExercise === 'shuttles'
                  ? 'Rep amount is required'
                  : 'Time is required'
              }`,
              min: { value: 0, message: 'Reps must be greater than 0' },
              max: { value: 999, message: 'Maximum amount exceeded' },
              ...(watchExercise === 'mile' || watchExercise === 'walk'
                ? {
                    pattern: {
                      value: /^(([0]?[0-5][0-9]|[0-9]):([0-5][0-9]))$/,
                      message: 'Invalid time format (mm:ss)',
                    },
                    min: {
                      value: 0,
                      message: 'Time must be greater than 0',
                    },
                  }
                : {}),
            },
          }}
          inputType={watchExercise === 'shuttles' ? 'number' : 'text'}
          placeholder={watchExercise === 'shuttles' ? 'Reps' : 'mm:ss'}
          error={errors.cardioResults}
        />
      )}
    </section>
  );
}

export default ExerciseForm;
