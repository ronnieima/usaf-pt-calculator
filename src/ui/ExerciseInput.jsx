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
            ? 'transform opacity-100 transition-all duration-1000'
            : 'invisible absolute h-0 w-0 -translate-y-4 transform opacity-0 transition-all duration-1000'
        }
      >
        <h3>{title}</h3>
        <input
          {...register(registerProps.name, registerProps.validation)}
          className="w-full rounded-full p-5 text-center font-semibold text-stone-700 shadow-lg"
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
