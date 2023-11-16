import React from "react";

import ExerciseSelect from "./ExerciseSelect";
import ExerciseInput from "./ExerciseInput";
import { Separator } from "../../(shadcn)/separator";

type ExerciseComponent = { label: string; value: string };

type ExerciseOptions = {
  label: string;
  value: string;
  videoSource?: string;
}[];

export type Exercise = {
  component: ExerciseComponent;
  options: ExerciseOptions;
};

const exercises: Exercise[] = [
  {
    component: {
      label: "Upper Body",
      value: "upperBody",
    },

    options: [
      {
        label: "Pushup",
        value: "pushup",
        videoSource: "https://www.youtube.com/watch?v=z6cNHsw-EWI",
      },
      {
        label: "Hand Release Pushup",
        value: "hand_release_pushup",
        videoSource:
          "https://www.dvidshub.net/video/825278/2-minute-hand-release-pushup",
      },
      {
        label: "Exempt (in progress)",
        value: "exempt",
      },
    ],
  },

  {
    component: {
      label: "Core",
      value: "core",
    },
    options: [
      {
        label: "Situp",
        value: "situp",
        videoSource: "https://www.youtube.com/watch?v=z6cNHsw-EWI",
      },
      {
        label: "Cross Leg Reverse Crunch",
        value: "cross_leg_reverse_crunch",
        videoSource:
          "https://www.dvidshub.net/video/825274/2-minute-cross-leg-reverse-crunch",
      },
      {
        label: "Forearm Plank",
        value: "forearm_plank",
        videoSource: "https://www.dvidshub.net/video/825280/forearm-plank",
      },
      {
        label: "Exempt (in progress)",
        value: "exempt",
      },
    ],
  },
  {
    component: {
      label: "Cardio",
      value: "cardio",
    },
    options: [
      {
        label: "1.5 Mile Run",
        value: "1.5_mile_run",
        videoSource: "https://www.youtube.com/watch?v=z6cNHsw-EWI",
      },
      {
        label: "20 Meter HAMR Shuttle",
        value: "20_meter_hamr_shuttle",
        videoSource:
          "https://www.dvidshub.net/video/825282/20m-high-aerobic-multi-shuttle-run",
      },
      {
        label: "2 Kilometer Walk (in progress)",
        value: "2km_walk",
        videoSource: "https://www.youtube.com/watch?v=z6cNHsw-EWI",
      },
      {
        label: "Exempt (in progress)",
        value: "exempt",
      },
    ],
  },
];

const ExerciseFields = () => {
  return (
    <>
      {exercises.map((exercise) => {
        return (
          <React.Fragment key={exercise.component.value}>
            <Separator />
            <section className="flex flex-col gap-4">
              <ExerciseSelect exercise={exercise} />
              <ExerciseInput exercise={exercise} />
            </section>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ExerciseFields;
