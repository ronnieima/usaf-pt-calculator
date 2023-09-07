import { useFormContext } from "react-hook-form";
function SubmitButton() {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <input
      type="submit"
      value={isSubmitting ? "Calculating..." : "Calculate"}
      className="bg-green-800 hover:bg-green-700 active:bg-green-900 disabled:bg-gray-400 rounded-full py-4 w-[50%] shadow-lg self-end transition-colors duration-300 font-semibold border-2 border-stone-800"
      disabled={isSubmitting}
    ></input>
  );
}

export default SubmitButton;
