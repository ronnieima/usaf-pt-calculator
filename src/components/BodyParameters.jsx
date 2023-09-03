import AgeSelect from "./AgeSelect";
import GenderSelect from "./GenderSelect";

function BodyParameters() {
  return (
    <div className="max-w-2xl m-auto">
      <h2 className="text-white text-3xl font-semibold mb-10 tracking-wider uppercase text-center">
        Calculate your PT Score
      </h2>
      <GenderSelect />
      <AgeSelect />
    </div>
  );
}

export default BodyParameters;
