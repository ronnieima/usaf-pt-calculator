import React from "react";
import IndividualExerciseScore from "./IndividualExerciseScore";
import { useScoreContext } from "@/app/_contexts/ScoreContext";
import { GiMuscleUp, GiAbdominalArmor } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import PushupIcon from "./PushupIcon";
import SitupIcon from "./SitupIcon";

const ScoreIcons = () => {
  const {
    scores: { upper, core, cardio },
  } = useScoreContext();
  return (
    <div className="flex flex-col items-center">
      <IndividualExerciseScore icon={<PushupIcon />} score={`${upper}`} />
      <IndividualExerciseScore icon={<SitupIcon />} score={`${core}`} />
      <IndividualExerciseScore
        icon={<FaRunning size="3em" title="running icon" />}
        score={`${cardio}`}
      />
    </div>
  );
};

export default ScoreIcons;
