import { useFormStore } from "@/app/stores/store";
import { FaRunning } from "react-icons/fa";
import IndividualExerciseScore from "./IndividualExerciseScore";
import PushupIcon from "./PushupIcon";
import SitupIcon from "./SitupIcon";
import { useFormContext } from "react-hook-form";

const ScoreIcons = () => {
  const upperBodyScore = useFormStore((state) => state.upperBody.score);
  const coreScore = useFormStore((state) => state.core.score);
  const cardioScore = useFormStore((state) => state.cardio.score);
  const { getValues } = useFormContext();
  const formData = getValues();
  return (
    <div className="flex flex-col items-center">
      <IndividualExerciseScore
        icon={<PushupIcon />}
        score={
          formData.upperBodyExercise === "exempt"
            ? "Exempt"
            : `${upperBodyScore}`
        }
      />
      <IndividualExerciseScore
        icon={<SitupIcon />}
        score={formData.coreExercise === "exempt" ? "Exempt" : `${coreScore}`}
      />
      <IndividualExerciseScore
        icon={<FaRunning size="3em" title="running icon" />}
        score={
          formData.cardioExercise === "exempt" ? "Exempt" : `${cardioScore}`
        }
      />
    </div>
  );
};

export default ScoreIcons;
