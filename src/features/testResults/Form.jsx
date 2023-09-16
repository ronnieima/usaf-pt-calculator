import { FormProvider, useForm } from 'react-hook-form';
import AgeSelect from '../userDetails/AgeSelect';
import GenderSelect from '../userDetails/GenderSelect';
import { DevTool } from '@hookform/devtools';

import React, { useContext } from 'react';
import ExerciseForm from './ExerciseFormRefactor';
import { getScores } from '../../api/supabase';
import Score from '../../ui/Score';
import { useScoreContext } from '../../contexts/ScoreContext';
import FormButtons from '../../ui/FormButtons';

const InputStyle =
  'w-full rounded-full p-5 text-center font-semibold text-stone-700 shadow-lg';

function Form() {
  const methods = useForm();
  const { register, watch } = methods;

  const {
    setUpperScore,
    setCoreScore,
    setCardioScore,
    setTotalScore,
    setIsMinimumNotMet,
  } = useScoreContext();

  async function onSubmit(data) {
    setIsMinimumNotMet(false);
    const { upper, core, cardio } = await getScores(data);
    if (upper === 0 || core === 0 || cardio === 0) {
      setIsMinimumNotMet(true);
    }
    setUpperScore(upper);
    setCoreScore(core);
    setCardioScore(cardio);
    setTotalScore(upper + core + cardio);
  }

  return (
    <FormProvider {...methods}>
      <form
        className="m-auto mb-3 flex max-w-2xl flex-col gap-24 text-2xl  uppercase tracking-widest text-stone-200 sm:max-w-3xl"
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
      >
        <GenderSelect />
        <AgeSelect />

        <ExerciseForm type="upperBody">
          <div>
            <ExerciseForm.DropdownHeader>
              Upper Body Exercise
            </ExerciseForm.DropdownHeader>
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
                {...register('upperBodyResults', {
                  required: 'Rep amount is required',
                  min: { value: 0, message: 'Reps must be greater than 0' },
                  max: { value: 125, message: 'Maximum amount exceeded' },
                  pattern: {
                    value: /^\d*$/,
                    message: 'Must be a whole number',
                  },
                })}
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

          {/* This wrapper makes it so that the input only appears when a dropdown option is selected */}
          <ExerciseForm.InputVisibilityWrapper>
            <ExerciseForm.InputHeader />
            <ExerciseForm.Input>
              <input
                {...register(
                  'coreResults',
                  watch('coreExercise', '') === 'plank'
                    ? {
                        required: 'Plank time is required',
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
                        required: 'Rep amount is required',
                        min: {
                          value: 0,
                          message: 'Reps must be greater than 0',
                        },
                        max: { value: 125, message: 'Maximum amount exceeded' },
                        pattern: {
                          value: /^\d*$/,
                          message: 'Must be a whole number',
                        },
                      },
                )}
                className={InputStyle}
                type="number"
                placeholder="Reps"
              />
            </ExerciseForm.Input>
          </ExerciseForm.InputVisibilityWrapper>
        </ExerciseForm>

        {/* <ExerciseForm type="core">
          <option value="situps">Situps</option>
          <option value="crunches">Cross Legged Reverse Crunch</option>
          <option value="plank">Forearm Plank</option>
        </ExerciseForm>

        <ExerciseForm type="cardio">
          <option value="mile">1.5 Mile Run</option>
          <option value="shuttles">20 Meter HAMR Shuttle</option>
        </ExerciseForm> */}

        <FormButtons />
      </form>
      <Score />
    </FormProvider>
  );
}

export default Form;
