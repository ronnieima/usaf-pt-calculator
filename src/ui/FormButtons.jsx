import { useFormContext } from 'react-hook-form';
function FormButtons() {
  const {
    reset,
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <div className="flex justify-end gap-2">
      <input
        type="button"
        onClick={() => reset()}
        value="Reset"
        className="w-[20%] cursor-pointer self-end rounded-full bg-slate-500 py-4 text-sm font-semibold uppercase tracking-wide shadow-lg transition-colors duration-300 hover:bg-slate-600 active:bg-slate-900 disabled:bg-gray-300  sm:text-lg"
        disabled={isSubmitting}
      />

      <input
        type="submit"
        value={isSubmitting ? 'Calculating...' : 'Calculate'}
        className="w-[40%] cursor-pointer self-end rounded-full bg-green-800 py-4 text-sm font-semibold uppercase tracking-wide shadow-lg transition-colors duration-300 hover:bg-green-700 active:bg-green-900 disabled:bg-gray-400  sm:text-lg"
        disabled={isSubmitting}
      />
    </div>
  );
}

export default FormButtons;
