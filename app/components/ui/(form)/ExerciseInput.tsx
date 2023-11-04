import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

type ExerciseInputProps = {
  exerciseType: string;
  exerciseLabel: string;
  type: string;
};

const ExerciseInput = ({
  exerciseType,
  exerciseLabel,
  type,
}: ExerciseInputProps) => {
  const { control } = useFormContext();
  const isVisibleInput = Boolean(exerciseType);
  const isTimeBased = exerciseType === "plank" || exerciseType === "mile";

  return (
    <div className="relative ">
      <div
        className={
          isVisibleInput
            ? "transform opacity-100 transition-all duration-1000"
            : "invisible absolute h-0 w-0 -translate-y-4 transform opacity-0 transition-all duration-0"
        }
      >
        <FormField
          control={control}
          name={`${type}Input`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">{`${exerciseLabel} ${
                isTimeBased ? "Time" : "Reps"
              }`}</FormLabel>
              <FormControl>
                <Input
                  className=" text-zinc-800"
                  placeholder={isTimeBased ? "MM:SS" : "Reps"}
                  type={isTimeBased ? "text" : "number"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ExerciseInput;
