import { useFormContext } from "react-hook-form";

function ExerciseForm({ type, children }) {
  const { register, watch } = useFormContext();

  const watchExercise = watch(`${type}Exercise`, "");
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h3 className="uppercase">{type} Exercise Type</h3>
        <select
          {...register(`${type}Exercise`, { required: true })}
          className="w-full rounded-lg p-5 text-stone-700 shadow-lg font-semibold text-center "
          defaultValue={""}
        >
          <option value="" disabled hidden>
            Select Exercise Type
          </option>
          {children}
        </select>
      </div>

      {type === "core" && (
        <div
          className={
            watchExercise === ""
              ? "opacity-0 transform -translate-y-4 transition-all duration-300"
              : "opacity-100 transform transition-all duration-300"
          }
        >
          <h3>Core {watchExercise === "plank" ? "Plank Time" : "Reps"}</h3>
          <input
            {...register("coreResults", { required: true })}
            className="w-full rounded-full p-5 text-stone-700 shadow-lg font-semibold text-center"
            type={watchExercise === "plank" ? "text" : "number"}
            placeholder={watchExercise === "plank" ? "mm:ss" : "Reps"}
          />
        </div>
      )}

      {type === "upperBody" && (
        <div
          className={
            watchExercise === ""
              ? "opacity-0 transform -translate-y-4 transition-all duration-300"
              : "opacity-100 transform transition-all duration-300"
          }
        >
          <h3>Upper Body Reps</h3>
          <input
            {...register("upperBodyResults", { required: true })}
            className="w-full rounded-full p-5 text-stone-700 shadow-lg font-semibold text-center"
            type="number"
            placeholder="Reps"
          />
        </div>
      )}

      {type === "run" && (
        <div
          className={
            watchExercise === ""
              ? "opacity-0 transform -translate-y-4 transition-all duration-300"
              : "opacity-100 transform transition-all duration-300"
          }
        >
          <h3>{watchExercise === "shuttles" ? "HAMR Reps" : "Run Time"}</h3>
          <input
            {...register("runResults", { required: true })}
            className="w-full rounded-full p-5 text-stone-700 shadow-lg font-semibold text-center"
            type={watchExercise === "shuttles" ? "number" : "text"}
            placeholder={watchExercise === "shuttles" ? "Reps" : "mm:ss"}
          />
        </div>
      )}
    </section>
  );
}

export default ExerciseForm;
