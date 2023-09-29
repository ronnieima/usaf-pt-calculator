import { FormProvider, useForm } from 'react-hook-form';
import { useScores } from './useScores';

import {
  cardioValidationRules,
  coreValidationRules,
  upperBodyValidationRules,
} from './validationRules';

import AgeSelect from '../userDetails/AgeSelect';
import GenderSelect from '../userDetails/GenderSelect';
import ExerciseForm from './ExerciseForm';
import FormButtons from '../../ui/FormButtons';
import Score from '../../ui/Score';

const InputStyle =
  'w-full rounded-full p-5 text-center font-semibold text-stone-700 shadow-lg';

function Form() {
  const methods = useForm();
  const { register, watch } = methods;
  const { fetchAndSetScores } = useScores();
  return (
    <FormProvider {...methods}>
      <form
        className="m-auto mb-3 flex max-w-2xl flex-col gap-24 text-2xl  uppercase tracking-widest text-stone-200 sm:max-w-3xl"
        onSubmit={methods.handleSubmit(fetchAndSetScores)}
        noValidate
      >
        <GenderSelect />
        <AgeSelect />

        <ExerciseForm type="upperBody">
          <div>
            <div className="flex justify-between">
              <ExerciseForm.DropdownHeader>
                Upper Body Exercise
              </ExerciseForm.DropdownHeader>
              <p>Test</p>
            </div>
            <ExerciseForm.Dropdown>
              <option value="pushups">Pushups</option>
              <option value="handrelease">Hand Release</option>
            </ExerciseForm.Dropdown>
          </div>

          {/* This wrapper makes it so that the input only appears when a dropdown option is selected */}
          <ExerciseForm.InputVisibilityWrapper>
            <ExerciseForm.InputHeader>Upper Body Reps</ExerciseForm.InputHeader>
            <ExerciseForm.Input>
              <input
                {...register(
                  'upperBodyResults',
                  upperBodyValidationRules(watch('upperBodyExercise', '')),
                )}
                className={InputStyle}
                type="number"
                placeholder="Reps"
              />
            </ExerciseForm.Input>
          </ExerciseForm.InputVisibilityWrapper>
        </ExerciseForm>

        <ExerciseForm type="core">
          <div>
            <ExerciseForm.DropdownHeader>
              Core Exercise
            </ExerciseForm.DropdownHeader>
            <ExerciseForm.Dropdown>
              <option value="situps">Situps</option>
              <option value="crunches">Cross Legged Reverse Crunch</option>
              <option value="plank">Forearm Plank</option>
            </ExerciseForm.Dropdown>
          </div>

          <ExerciseForm.InputVisibilityWrapper>
            <ExerciseForm.InputHeader>{`Core ${
              watch('coreExercise', '') === 'plank' ? 'Plank Time' : 'Reps'
            }`}</ExerciseForm.InputHeader>
            <ExerciseForm.Input>
              <input
                {...register(
                  'coreResults',
                  coreValidationRules(watch('coreExercise'), ''),
                )}
                className={InputStyle}
                type={watch('coreExercise') === 'plank' ? 'text' : 'number'}
                placeholder={
                  watch('coreExercise') === 'plank' ? 'mm:ss' : 'Reps'
                }
              />
            </ExerciseForm.Input>
          </ExerciseForm.InputVisibilityWrapper>
        </ExerciseForm>

        <ExerciseForm type="cardio">
          <div>
            <ExerciseForm.DropdownHeader>
              Cardio Exercise
            </ExerciseForm.DropdownHeader>
            <ExerciseForm.Dropdown>
              <option value="mile">1.5 Mile Run</option>
              <option value="shuttles">20 Meter HAMR Shuttle</option>
            </ExerciseForm.Dropdown>
          </div>

          <ExerciseForm.InputVisibilityWrapper>
            <ExerciseForm.InputHeader>
              {watch('cardioExercise') === 'shuttles'
                ? 'HAMR Reps'
                : 'Run Time'}
            </ExerciseForm.InputHeader>
            <ExerciseForm.Input>
              <input
                {...register(
                  'cardioResults',
                  cardioValidationRules(watch('cardioExercise')),
                )}
                className={InputStyle}
                type={
                  watch('cardioExercise') === 'shuttles' ? 'number' : 'text'
                }
                placeholder={
                  watch('cardioExercise') === 'shuttles' ? 'Reps' : 'mm:ss'
                }
              />
            </ExerciseForm.Input>
          </ExerciseForm.InputVisibilityWrapper>
        </ExerciseForm>

        <FormButtons />
      </form>
      <Score />
    </FormProvider>
  );
}

export default Form;
