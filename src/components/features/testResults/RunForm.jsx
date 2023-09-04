import { useDispatch, useSelector } from "react-redux";
import { setRunExercise } from "./testResultsSlice";

function RunForm() {
  const { runExercise } = useSelector((state) => state.testResults);
  const dispatch = useDispatch();
  return (
    <section className="sm:grid sm:grid-cols-2 flex flex-col gap-4">
      <div>
        <h3 className="mb-3">Run Exercise Type</h3>
        <select
          className="w-full rounded-lg p-5 text-stone-700 shadow-lg font-semibold text-center "
          onChange={(e) => dispatch(setRunExercise(e.target.value))}
        >
          <option value="mile">1.5 Mile Run</option>
          <option value="shuttle">20 Meter HAMR Shuttle</option>
        </select>
      </div>

      <div>
        <h3 className="mb-3">{runExercise == "shuttle" ? "Reps" : "Time"}</h3>
        <input
          className="w-full rounded-full p-5 text-stone-700 shadow-lg font-semibold text-center"
          type="number"
          placeholder="Reps"
        />
      </div>
    </section>
  );
}

export default RunForm;
