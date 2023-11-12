import React from "react";
import { MoonLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <MoonLoader color="#4169e1" />
      <p className="text-foreground/70">Loading your score...</p>
    </div>
  );
};

export default Spinner;
