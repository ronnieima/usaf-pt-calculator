import { useFormStore } from "@/app/stores/store";
import { FaRunning } from "react-icons/fa";
import IndividualExerciseScore from "./IndividualExerciseScore";
import PushupIcon from "./PushupIcon";
import SitupIcon from "./SitupIcon";

const ScoreIcons = () => {
  const upperBodyScore = useFormStore((state) => state.upperBody.score);
  const coreScore = useFormStore((state) => state.core.score);
  const cardioScore = useFormStore((state) => state.cardio.score);

  return (
    <div className="flex flex-col items-center">
      <IndividualExerciseScore
        icon={<PushupIcon />}
        score={`${upperBodyScore}`}
      />
      <IndividualExerciseScore icon={<SitupIcon />} score={`${coreScore}`} />
      <IndividualExerciseScore
        icon={<FaRunning size="3em" title="running icon" />}
        score={`${cardioScore}`}
      />
    </div>
  );
};

export default ScoreIcons;
