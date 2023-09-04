function CoreForm() {
  return (
    <section className="sm:grid sm:grid-cols-2 flex flex-col gap-4">
      <div>
        <h3 className="mb-3">Core Exercise Type</h3>
        <select className="w-full rounded-lg p-5 text-stone-700 shadow-lg font-semibold text-center ">
          <option value="situps">Situps</option>
          <option value="crunches">Cross Legged Reverse Crunch</option>
          <option value="plank">Forearm Plank</option>
        </select>
      </div>

      <div>
        <h3 className="mb-3">Core Reps</h3>
        <input
          className="w-full rounded-full p-5 text-stone-700 shadow-lg font-semibold text-center"
          type="number"
          placeholder="Reps"
        />
      </div>
    </section>
  );
}

export default CoreForm;
