import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

const FormButtons = () => {
  const { reset } = useFormContext();
  return (
    <div className="flex flex-col gap-8">
      <Button
        type="submit"
        className="bg-green-800 py-8 shadow-lg hover:bg-green-700"
      >
        Submit
      </Button>
      <Button
        onClick={() => reset}
        className="bg-neutral-800 shadow-lg hover:bg-neutral-700"
      >
        Reset
      </Button>
    </div>
  );
};

export default FormButtons;
