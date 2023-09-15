import { useFormContext } from 'react-hook-form';
import ErrorText from '../../ui/ErrorText';
import { cloneElement, createContext, useContext, useEffect } from 'react';

const ExerciseContext = createContext();

function DropdownHeader({ children }) {
  const { type } = useContext(ExerciseContext);

  return (
    <label className="uppercase" htmlFor={type}>
      {children}
    </label>
  );
}

// children will be the exercise selection options
function Dropdown({ children }) {
  const { type, selectedExercise, isSubmitting, register } =
    useContext(ExerciseContext);
  return (
    <>
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
        className="w-full cursor-pointer rounded-lg p-5 text-center font-semibold text-stone-700 shadow-lg"
        defaultValue={''}
        disabled={isSubmitting}
        id={type}
      >
        <option value="" disabled>
          Select Exercise Type
        </option>
        {children}
      </select>
      <ErrorText inputName={selectedExercise} />
    </>
  );
}

function InputHeader({ children }) {
  return <label>{children}</label>;
}

function Input({ children, title }) {
  const { errors, type, watchExercise, unregister, selectedExercise } =
    useContext(ExerciseContext);

  useEffect(() => {
    // Unregister the field to remove old validation rules
    unregister(`${type}Results`);
  }, [watchExercise]);

  const isVisible = watchExercise !== '';
  console.log(isVisible);
  console.log(children);

  const numberInputOnWheelPreventChange = (e) => {
    // Prevent the input value change
    e.target.blur();

    // Prevent the page/container scrolling
    e.stopPropagation();

    // Refocus immediately, on the next tick (after the current     function is done)
    setTimeout(() => {
      e.target.focus();
    }, 0);

    return (
      <div className="relative">
        <div
          className={
            isVisible
              ? 'transform opacity-100 transition-all duration-1000'
              : 'invisible absolute h-0 w-0 -translate-y-4 transform opacity-0 transition-all duration-0'
          }
        >
          {cloneElement(children, {
            onWheel: numberInputOnWheelPreventChange,
            disabled: isSubmitting,
          })}

          <ErrorText inputName={selectedExercise} />
        </div>
      </div>
    );
  };
}

function ExerciseForm({ children, type }) {
  const { register, watch, formState, unregister } = useFormContext();
  const { errors, isSubmitting } = formState;
  const selectedExercise = `${type}Exercise`;
  const watchExercise = watch(selectedExercise, '');

  return (
    <ExerciseContext.Provider
      value={{
        register,
        type,
        selectedExercise,
        watchExercise,
        isSubmitting,
        errors,
        unregister,
      }}
    >
      <section className="flex flex-col gap-4">{children}</section>
    </ExerciseContext.Provider>
  );
}

ExerciseForm.DropdownHeader = DropdownHeader;
ExerciseForm.Dropdown = Dropdown;

ExerciseForm.InputHeader = InputHeader;
ExerciseForm.Input = Input;

export default ExerciseForm;
