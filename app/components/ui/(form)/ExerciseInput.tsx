import {
  FormControl,
  FormDescription,
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
};

const ExerciseInput = ({ exerciseType, exerciseLabel }: ExerciseInputProps) => {
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`${exerciseLabel} ${
                isTimeBased ? "Time" : "Reps"
              }`}</FormLabel>
              <FormControl>
                <Input
                  placeholder={isTimeBased ? "MM:SS" : "Reps"}
                  type={isTimeBased ? "text" : "number"}
                  {...field}
                />
              </FormControl>
              <FormDescription>SampleText </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* {isTimeBased ? (
          <Input type="text" placeholder={`${exerciseLabel} Time`} />
        ) : (
          <Input type="number" placeholder={`${exerciseLabel} Reps`} />
        )} */}
      </div>
    </div>
  );
};

export default ExerciseInput;

//   <TextInput
//     name={`${type}Input`}
//     size="lg"
//     radius="md"
//     label={`${exerciseType} Time`}
//     placeholder="MM:SS"
//   />

//   <NumberInput
//     name={`${type}Input`}
//     size="xl"
//     radius="lg"
//     label={`${exerciseType} Reps`}
//     placeholder="Reps"
//     hideControls
//   />
