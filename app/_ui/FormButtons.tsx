import { Button } from "@mantine/core";
import React from "react";

const FormButtons = () => {
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
      <Button type="reset" variant="filled" color="gray" size="xl" radius="lg">
        Reset
      </Button>
    </div>
  );
};

export default FormButtons;
