import { Button } from "@mantine/core";
import React from "react";
import { useFormContext } from "react-hook-form";

const FormButtons = () => {
  const { reset } = useFormContext();
  return (
    <div className="flex flex-col gap-8">
      <Button
        type="submit"
        variant="filled"
        color="rgba(9, 99, 28, 1)"
        size="xl"
        radius="lg"
      >
        Submit
      </Button>
      <Button
        onClick={() =>
          reset({
            Gender: null,
            "Age Group": null,
            "Upper Body": null,
            "Upper Body Input": null,
            Core: null,
            "Core Input": null,
            Cardio: null,
            "Cardio Input": null,
          })
        }
        type="reset"
        variant="filled"
        color="gray"
        size="xl"
        radius="lg"
      >
        Reset
      </Button>
    </div>
  );
};

export default FormButtons;
