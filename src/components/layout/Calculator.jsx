import { useState } from "react";
import Form from "../features/testResults/Form";
import Score from "../ui/Score";
import Header from "./Header";

function Calculator() {
  const [score, setScore] = useState(0);
  return (
    <main className="bg-gradient-to-bl from-blue-700 via-blue-800 to-stone-500 p-5 min-h-screen">
      <Header />
      <Form setScore={setScore} />
      <Score score={score} />
    </main>
  );
}

export default Calculator;
