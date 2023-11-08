"use client";

import { formatTypeName } from "../../../_util/helpers";

import { useFormContext } from "react-hook-form";
import ExerciseSelect from "./ExerciseSelect";
import { watch } from "fs";
import ExerciseInput from "./ExerciseInput";

type ExerciseFieldProps = {
  type: string;
  options: { value: string; label: string }[];
};

const ExerciseField = ({ type, options }: ExerciseFieldProps) => {
  const exerciseLabel = formatTypeName(type);
  const { watch } = useFormContext();
  const exerciseType = watch(`${type}Exercise`);

  // useEffect(() => {
  //   // Unregister the field to remove old validation rules
  //   setValue(`${exerciseLabel} Input`, null);
  // }, [exerciseType, setValue, exerciseLabel]);

  return (
    <section className="flex flex-col gap-4">
      <ExerciseSelect
        options={options}
        exerciseLabel={exerciseLabel}
        type={type}
      />
      <ExerciseInput
        exerciseType={exerciseType}
        exerciseLabel={exerciseLabel}
        type={type}
      />
    </section>
  );
};

export default ExerciseField;
