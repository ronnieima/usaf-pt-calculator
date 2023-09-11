import { useFormContext, useFormState } from 'react-hook-form';
import ErrorText from './ErrorText';

function ExerciseInput({
  title,
  registerProps,
  inputType,
  placeholder,
  watchExercise,
}) {
  const { register } = useFormContext();
  const { isSubmitting } = useFormState();
  const isVisible = watchExercise !== '';
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
    <div className="relative">
      <div
        className={
          isVisible
            ? 'opacity-100 transform transition-all duration-300'
            : 'opacity-0 transform -translate-y-4 transition-all duration-300 absolute h-0 w-0 invisible'
        }
      >
        <h3>{title}</h3>
        <input
          {...register(registerProps.name, registerProps.validation)}
          className="w-full rounded-full p-5 text-stone-700 shadow-lg font-semibold text-center"
          type={inputType}
          placeholder={placeholder}
          disabled={isSubmitting}
          onWheel={numberInputOnWheelPreventChange}
        />
        <ErrorText inputName={registerProps.name} />
      </div>
    </div>
  );
}

export default ExerciseInput;
