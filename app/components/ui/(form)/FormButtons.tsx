import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

const FormButtons = () => {
  const { reset } = useFormContext();
  function handleReset() {
    reset();
  }

  return (
    <div className="flex flex-col gap-8">
      <Button
        type="submit"
        className="bg-green-800 py-8 shadow-lg hover:bg-green-700"
      >
        Submit
      </Button>
      {/* <Button
        type="button"
        onClick={handleReset}
        className="bg-neutral-800 shadow-lg hover:bg-neutral-700"
      >
        Reset
      </Button> */}
    </div>
  );
};

export default FormButtons;
