import { Button } from "@mantine/core";
import AgeGroupSelect from "./AgeGroupSelect";
import ExerciseSelect from "./ExerciseSelect";
import GenderRadioButtons from "./GenderRadioButtons";

const Form = () => {
  return (
    <form className="m-auto mb-3 flex max-w-2xl flex-col gap-16 text-2xl  uppercase tracking-widest text-stone-200 sm:max-w-3xl">
      {/* radio gender */}
      <GenderRadioButtons />
      {/* select age group */}
      <AgeGroupSelect />
      {/* select upper exercise  */}
      <ExerciseSelect type="upper" options={["Pushups", "Hand Releases"]} />
      {/* select core exercise */}
      <ExerciseSelect
        type="core"
        options={["Situps", "Cross Legged Reverse Crunches", "Forearm Plank"]}
      />
      {/* select cardio exercise */}
      <ExerciseSelect
        type="cardio"
        options={["1.5 Mile Run", "20 Meter HAMR Shuttles"]}
      />
      {/* reset/submit button */}
      <div className="flex flex-col gap-8">
        <Button
          variant="filled"
          color="rgba(9, 99, 28, 1)"
          size="xl"
          radius="lg"
        >
          Submit
        </Button>
        <Button variant="filled" color="gray" size="xl" radius="lg">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default Form;
