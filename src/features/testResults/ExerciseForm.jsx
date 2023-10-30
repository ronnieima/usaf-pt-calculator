import { useFormContext } from 'react-hook-form';
import ErrorText from '../../ui/ErrorText';
import { cloneElement, createContext, useContext, useEffect } from 'react';
import { getExerciseMinimum } from '../../api/supabase';

const ExerciseContext = createContext();

function DropdownHeader({ children }) {
  const { type } = useContext(ExerciseContext);

  return (
    <label className="uppercase" htmlFor={`${type}Dropdown`}>
      {children}
    </label>
  );
}

// function MinMaxNumbers({ children }) {
//   const { watch } = useFormContext();
//   const { watchExercise } = useContext(ExerciseContext);
//   const gender = watch('gender');
//   const ageGroup = watch('ageGroup');
//   console.log(gender);
//   console.log(ageGroup);
//   console.log(watchExercise);
//   useEffect(() => {
//     const minPerformanceValue = getExerciseMinimum(
//       gender,
//       ageGroup,
//       watchExercise,
//     );
//   }, [gender, ageGroup, watchExercise]);

//   return (
//     <div>
//       <span>Min</span>
//       <span>Max</span>
//     </div>
//   );
// }

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
        id={`${type}Dropdown`}
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

function InputVisibilityWrapper({ children }) {
  const { isVisibleInput } = useContext(ExerciseContext);

  return (
    <div className="relative">
      <div
        className={
          isVisibleInput
            ? 'transform opacity-100 transition-all duration-1000'
            : 'invisible absolute h-0 w-0 -translate-y-4 transform opacity-0 transition-all duration-0'
        }
      >
        {children}
      </div>
    </div>
  );
}

function InputHeader({ children }) {
  const { type } = useContext(ExerciseContext);
  return <label htmlFor={`${type}Input`}>{children}</label>;
}

function Input({ children }) {
  const { isSubmitting, type, watchExercise, unregister } =
    useContext(ExerciseContext);

  useEffect(() => {
    // Unregister the field to remove old validation rules
    unregister(`${type}Results`);
  }, [watchExercise]);

  const numberInputOnWheelPreventChange = (e) => {
    // Prevent the input value change
    e.target.blur();

    // Prevent the page/container scrolling
    e.stopPropagation();

    // Refocus immediately, on the next tick (after the current     function is done)
    setTimeout(() => {
      e.target.focus();
    }, 0);
  };

  return (
    <>
      {cloneElement(children, {
        id: `${type}Input`,
        onWheel: numberInputOnWheelPreventChange,
        disabled: isSubmitting,
        // option for user to pass in their own className
        className: `${
          children.props.className || ''
        } w-full rounded-full p-5 text-center font-semibold text-stone-700 shadow-lg`,
      })}

      <ErrorText inputName={`${type}Results`} />
    </>
  );
}

function ExerciseForm({ children, type }) {
  const { register, watch, formState, unregister } = useFormContext();
  const { errors, isSubmitting } = formState;
  const selectedExercise = `${type}Exercise`;
  const watchExercise = watch(selectedExercise, '');
  const isVisibleInput = watchExercise !== '';

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
        isVisibleInput,
      }}
    >
      <section className="flex flex-col gap-4">{children}</section>
    </ExerciseContext.Provider>
  );
}

ExerciseForm.DropdownHeader = DropdownHeader;
// ExerciseForm.MinMaxNumbers = MinMaxNumbers;
ExerciseForm.Dropdown = Dropdown;

ExerciseForm.InputVisibilityWrapper = InputVisibilityWrapper;
ExerciseForm.InputHeader = InputHeader;
ExerciseForm.Input = Input;

export default ExerciseForm;
