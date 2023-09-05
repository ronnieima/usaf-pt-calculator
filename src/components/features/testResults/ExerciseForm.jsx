import { useForm } from "react-hook-form";

function ExerciseForm({ type, children }) {
  const { register, watch } = useForm();
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
        <div className={watchExercise === "" ? "hidden" : "block"}>
          <h3>Core {watchExercise === "plank" ? "Plank Time" : "Reps"}</h3>
          <input
            {...register("coreResults")}
            className="w-full rounded-full p-5 text-stone-700 shadow-lg font-semibold text-center"
            type={watchExercise === "plank" ? "text" : "number"}
            placeholder={watchExercise === "plank" ? "mm:ss" : "Reps"}
          />
        </div>
      )}

      {type === "upperBody" && (
        <div className={watchExercise === "" ? "hidden" : "block"}>
          <h3>Upper Body Reps</h3>
          <input
            {...register("upperBodyResults")}
            className="w-full rounded-full p-5 text-stone-700 shadow-lg font-semibold text-center"
            type="number"
            placeholder="Reps"
          />
        </div>
      )}

      {type === "run" && (
        <div className={watchExercise === "" ? "hidden" : "block"}>
          <h3>{watchExercise === "shuttle" ? "HAMR Reps" : "Run Time"}</h3>
          <input
            className="w-full rounded-full p-5 text-stone-700 shadow-lg font-semibold text-center"
            type={watchExercise === "shuttle" ? "number" : "text"}
            placeholder={watchExercise == "shuttle" ? "Reps" : "mm:ss"}
          />
        </div>
      )}
    </section>
  );
}

export default ExerciseForm;
