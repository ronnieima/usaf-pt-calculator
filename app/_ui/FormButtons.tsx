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
            gender: "male",
            ageGroup: "<25",
            upperExercise: "pushups",
            upperInput: "23",
            coreExercise: "situps",
            coreInput: "23",
            cardioExercise: "mile",
            cardioInput: "24",
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
