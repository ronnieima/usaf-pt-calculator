import Form from "../features/testResults/Form";
import Score from "../ui/Score";

function Calculator() {
  return (
    <main className="bg-gradient-to-bl from-blue-700 via-blue-800 to-stone-500 p-5 min-h-screen">
      <h2 className=" text-3xl sm:text-6xl font-semibold  tracking-wider uppercase text-center text-stone-200 my-8">
        Calculate your Air Force
        <br /> PT Test Score
      </h2>
      <Form />
      <Score />
    </main>
  );
}

export default Calculator;
