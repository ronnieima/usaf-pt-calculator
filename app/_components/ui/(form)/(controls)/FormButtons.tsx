import { Button } from "@/app/_components/ui/(shadcn)/button";
import { useFormContext } from "react-hook-form";

const FormButtons = () => {
  const {
    reset,
    formState: { isSubmitting, isValid },
  } = useFormContext();

  return (
    <div className="flex h-16 flex-col gap-4 lg:h-16 lg:flex-row lg:justify-end ">
      {/* <Button
        className="h-full bg-neutral-800 px-12 text-xl shadow-lg transition-all hover:scale-105 hover:bg-neutral-500 active:translate-y-1 active:bg-neutral-700"
        type="button"
        onClick={() =>
          reset({
            gender: "",
            ageGroup: "",
            upperBodyExercise: "",
            upperBodyInput: "",
            coreExercise: "",
            coreInput: "",
            cardioExercise: "",
            cardioInput: "",
          })
        }
      >
        Reset
      </Button> */}
      <Button
        data-umami-event="Submit button"
        disabled={isSubmitting}
        type="submit"
        className={`h-full bg-green-800 px-16 text-xl  shadow-lg transition-all hover:scale-105 hover:bg-green-600 active:translate-y-1 active:bg-green-700
        `}
      >
        {isSubmitting ? "Loading your score..." : "Submit"}
      </Button>
    </div>
  );
};

export default FormButtons;
