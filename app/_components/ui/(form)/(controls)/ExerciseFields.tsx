import { exercises } from "@/app/content";
import React from "react";
import { Separator } from "../../(shadcn)/separator";
import ExerciseInput from "./ExerciseInput";
import ExerciseSelect from "./ExerciseSelect";

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
