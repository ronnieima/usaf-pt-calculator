import { useFormContext } from "react-hook-form";
import ErrorMessage from "../../ui/ErrorMessage";
import ExerciseInput from "../../ui/ExerciseInput";

function ExerciseForm({ type, children }) {
  const { register, watch, formState } = useFormContext();
  const { errors } = formState;

  const watchExercise = watch(`${type}Exercise`, "");
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h3 className="uppercase">{type} Exercise Type</h3>
        <select
          {...register(`${type}Exercise`, {
            required: `${
              type === "upperBody"
                ? "Upper body"
                : type === "core"
                ? "Core"
                : "Cardio"
            } exercise type is required.`,
          })}
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
        <ExerciseInput
          watchExercise={watchExercise}
          title={`Core ${watchExercise === "plank" ? "Plank Time" : "Reps"}`}
          registerProps={{
            name: "coreResults",
            validation: {
              required:
                watchExercise === "plank"
                  ? "Plank time is required"
                  : "Rep amount is required",
              ...(watchExercise === "plank"
                ? {
                    pattern: {
                      value: /^(([0]?[0-5][0-9]|[0-9]):([0-5][0-9]))$/,
                      message: "Invalid time format. (mm:ss)",
                    },
                  }
                : {}),
            },
          }}
          inputType={watchExercise === "plank" ? "text" : "number"}
          placeholder={watchExercise === "plank" ? "mm:ss" : "Reps"}
          error={errors.coreResults}
        />
      )}

      {type === "upperBody" && (
        <ExerciseInput
          title="Upper Body Reps"
          registerProps={{
            name: "upperBodyResults",
            validation: {
              required: "Rep amount is required.",
            },
          }}
          inputType="number"
          placeholder="Reps"
          error={errors.upperBodyResults}
        />
      )}

      {type === "run" && (
        <ExerciseInput
          title={watchExercise === "shuttles" ? "HAMR Reps" : "Run Time"}
          registerProps={{
            name: "runResults",
            validation: {
              required: `${
                watchExercise === "shuttles"
                  ? "Rep amount is required"
                  : "Time is required"
              }`,
              ...(watchExercise === "mile" || watchExercise === "walk"
                ? {
                    pattern: {
                      value: /^(([0]?[0-5][0-9]|[0-9]):([0-5][0-9]))$/,
                      message: "Invalid time format (mm:ss)",
                    },
                  }
                : {}),
            },
          }}
          inputType={watchExercise === "shuttles" ? "number" : "text"}
          placeholder={watchExercise === "shuttles" ? "Reps" : "mm:ss"}
          error={errors.runResults}
        />
      )}
    </section>
  );
}

export default ExerciseForm;
