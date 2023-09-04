import Form from "../features/testResults/Form";
import Score from "../ui/Score";
import Header from "./Header";

function Calculator() {
  return (
    <main className="bg-gradient-to-bl from-blue-700 via-blue-800 to-stone-500 p-5 min-h-screen">
      <Header />
      <Form />
      <Score />
    </main>
  );
}

export default Calculator;
