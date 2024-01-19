import { useFormStore } from "@/app/stores/store";
import { FaRunning } from "react-icons/fa";
import IndividualExerciseScore from "./IndividualExerciseScore";
import PushupIcon from "./PushupIcon";
import SitupIcon from "./SitupIcon";
import { useFormContext } from "react-hook-form";

const ScoreIcons = () => {
  const scores = useFormStore((state) => state.scores);

  const { getValues } = useFormContext();
  const formData = getValues();
  return (
    <div className="flex flex-col items-center">
      <IndividualExerciseScore
        icon={<PushupIcon />}
        score={
          formData.upperBodyExercise === "exempt"
            ? "Exempt"
            : `${scores.upperBody}`
        }
      />
      <IndividualExerciseScore
        icon={<SitupIcon />}
        score={formData.coreExercise === "exempt" ? "Exempt" : `${scores.core}`}
      />
      <IndividualExerciseScore
        icon={<FaRunning size="3em" title="running icon" />}
        score={
          formData.cardioExercise === "exempt" ? "Exempt" : `${scores.cardio}`
        }
      />
    </div>
  );
};

export default ScoreIcons;
