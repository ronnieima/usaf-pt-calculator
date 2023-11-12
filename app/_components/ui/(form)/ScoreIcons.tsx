import React from "react";
import IndividualExerciseScore from "./IndividualExerciseScore";
import { useScoreContext } from "@/app/_contexts/ScoreContext";
import { GiMuscleUp, GiAbdominalArmor } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";

const ScoreIcons = () => {
  const {
    scores: { upper, core, cardio },
  } = useScoreContext();
  return (
    <>
      <IndividualExerciseScore
        icon={<GiMuscleUp size="3em" title="flexing icon" />}
        score={`${upper}`}
      />
      <IndividualExerciseScore
        icon={<GiAbdominalArmor size="3em" title="abs icon" />}
        score={`${core}`}
      />
      <IndividualExerciseScore
        icon={<FaRunning size="3em" title="running icon" />}
        score={`${cardio}`}
      />
    </>
  );
};

export default ScoreIcons;
