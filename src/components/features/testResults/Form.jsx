import SubmitButton from "../../ui/SubmitButton";
import AgeSelect from "../userDetails/AgeSelect";
import GenderSelect from "../userDetails/GenderSelect";
import CoreForm from "./CoreForm";
import RunForm from "./RunForm";
import UpperBodyForm from "./UpperBodyForm";

function Form() {
  return (
    <form
      className="flex flex-col gap-24 max-w-2xl m-auto text-stone-200  text-2xl tracking-widest uppercase mb-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <GenderSelect />
      <AgeSelect />

      <UpperBodyForm />
      <CoreForm />
      <RunForm />

      <SubmitButton />
    </form>
  );
}

export default Form;
