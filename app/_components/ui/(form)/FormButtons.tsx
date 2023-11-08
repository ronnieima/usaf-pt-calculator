import { Button } from "@/app/_components/ui/(shadcn)/button";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

const FormButtons = () => {
  const {
    formState: { isSubmitting, isValid },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-8">
      <Button
        disabled={isSubmitting}
        type="submit"
        className={`bg-green-800 py-8 text-2xl shadow-2xl hover:bg-green-700
        `}
      >
        {isSubmitting ? "Loading your score..." : "Submit"}
      </Button>
      {/* <Button
        type="button"
        onClick={() => reset()}
        className="bg-neutral-800 shadow-lg hover:bg-neutral-700"
      >
        Reset
      </Button> */}
    </div>
  );
};

export default FormButtons;
