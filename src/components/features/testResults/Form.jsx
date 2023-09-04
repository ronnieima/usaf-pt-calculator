import AgeSelect from "../userDetails/AgeSelect";
import GenderSelect from "../userDetails/GenderSelect";

function Form() {
  return (
    <form className="flex flex-col gap-8 max-w-2xl m-auto text-stone-200  text-2xl tracking-widest uppercase mb-3">
      <GenderSelect />
      <AgeSelect />
      <section className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="mb-3">Upper Body</h3>
          <select className="w-full rounded-lg p-5 text-stone-700 shadow-lg font-semibold text-center ">
            <option value="pushups">Pushups</option>
            <option value="handrelease">Hand Release</option>
          </select>
        </div>
        <div>
          <h3 className="mb-3">Reps</h3>
          <input
            type="number"
            className="w-full rounded-lg p-5 text-stone-700 shadow-lg font-semibold text-center"
          />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="mb-3">Core</h3>
          <select className="w-full rounded-lg p-5 text-stone-700 shadow-lg font-semibold text-center ">
            <option value="pushups">Situps</option>
            <option value="handrelease">Cross Leg Reverse Crunch</option>
            <option value="handrelease">Forearm Plank</option>
          </select>
        </div>
        <div>
          <h3 className="mb-3">Reps</h3>
          <input
            type="number"
            className="w-full rounded-lg p-5 text-stone-700 shadow-lg font-semibold text-center"
          />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="mb-3">Run</h3>
          <select className="w-full rounded-lg p-5 text-stone-700 shadow-lg font-semibold text-center ">
            <option value="pushups">1.5 Mile Run</option>
            <option value="handrelease">20m HAMR Shuttles</option>
          </select>
        </div>
        <div>
          <h3 className="mb-3">Reps</h3>
          <input
            type="number"
            className="w-full rounded-lg p-5 text-stone-700 shadow-lg font-semibold text-center"
          />
        </div>
      </section>
    </form>
  );
}

export default Form;
