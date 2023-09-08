import { useState } from "react";
import Form from "../features/testResults/Form";
import Score from "../ui/Score";
import Header from "./Header";

function Calculator() {
  return (
    <main className="bg-gradient-to-r from-sky-800 to-indigo-800 p-5 min-h-screen">
      <Header />
      <Form />
    </main>
  );
}

export default Calculator;
