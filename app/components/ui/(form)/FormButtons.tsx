import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

const FormButtons = () => {
  const {
    reset,
    formState: { isLoading },
  } = useFormContext();

  function handleReset() {
    reset();
  }

  return (
    <div className="flex flex-col gap-8">
      <Button
        disabled={isLoading}
        type="submit"
        className={`bg-green-800 py-8 text-2xl shadow-lg hover:bg-green-700`}
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
