import AgeGroupSelect from "./AgeGroupSelect";
import ExerciseSelect from "./ExerciseSelect";
import FormButtons from "./FormButtons";
import GenderRadioButtons from "./GenderRadioButtons";

const Form = () => {
  return (
    <form className="m-auto mb-3 flex max-w-2xl flex-col gap-16 text-2xl  uppercase tracking-widest text-stone-200 sm:max-w-3xl">
      {/* radio gender */}
      <GenderRadioButtons />
      {/* select age group */}
      <AgeGroupSelect />
      {/* select upper exercise  */}
      <ExerciseSelect type="upper" options={["Pushup", "Hand Release"]} />
      {/* select core exercise */}
      <ExerciseSelect
        type="core"
        options={["Situp", "Cross Legged Reverse Crunch", "Forearm Plank"]}
      />
      {/* select cardio exercise */}
      <ExerciseSelect
        type="cardio"
        options={["1.5 Mile Run", "20 Meter HAMR Shuttle"]}
      />
      {/* reset/submit button */}
      <FormButtons />
    </form>
  );
};

export default Form;
