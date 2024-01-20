import { Button } from "@/app/_components/ui/(shadcn)/button";
import { useFormContext } from "react-hook-form";

const FormButtons = () => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      data-umami-event="Submit button"
      disabled={isSubmitting}
      type="submit"
      className={`h-full bg-green-800 px-16 py-4 text-xl  shadow-lg transition-all hover:scale-[1.01] hover:bg-green-600 active:translate-y-1 active:bg-green-700
        `}
    >
      {isSubmitting ? "Loading your score..." : "Submit"}
    </Button>
  );
};

export default FormButtons;
