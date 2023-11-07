import React from "react";
import { MoonLoader } from "react-spinners";

const loading = () => {
  return (
    <main className="flex min-h-screen flex-col items-center  justify-center gap-4 py-36 text-center text-zinc-300">
      <MoonLoader size="50" color="white" />
      <p>Loading your page...</p>
    </main>
  );
};

export default loading;
