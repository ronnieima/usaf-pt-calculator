function UpperBodyForm() {
  return (
    <section className="sm:grid sm:grid-cols-2 flex flex-col gap-4">
      <div>
        <h3 className="mb-3">Upper Body Exercise Type</h3>
        <select className="w-full rounded-lg p-5 text-stone-700 shadow-lg font-semibold text-center ">
          <option value="pushups">Pushups</option>
          <option value="handrelease">Hand Release</option>
        </select>
      </div>

      <div>
        <h3 className="mb-3">Upper Body Reps</h3>
        <input
          className="w-full rounded-full p-5 text-stone-700 shadow-lg font-semibold text-center"
          type="number"
          placeholder="Reps"
        />
      </div>
    </section>
  );
}

export default UpperBodyForm;
