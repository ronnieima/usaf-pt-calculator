import { getValidationRules } from "@/app/_util/validation";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/(shadcn)/form";
import { Input } from "@/app/_components/ui/(shadcn)/input";
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
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();
  const isVisibleInput = Boolean(exerciseType);
  const isTimeBased = exerciseType === "plank" || exerciseType === "mile";

  // Prevents scroll affecting number inputs
  const numberInputOnWheelPreventChange: React.WheelEventHandler<
    HTMLInputElement
  > = (e) => {
    // Prevent the input value change
    e.currentTarget?.blur();

    // Prevent the page/container scrolling
    e.stopPropagation();

    // Refocus immediately, on the next tick (after the current function is done)
    setTimeout(() => {
      e.currentTarget?.focus();
    }, 0);
  };

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
          rules={getValidationRules(type, exerciseType)}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">{`${exerciseLabel} ${
                isTimeBased ? "Time" : "Reps"
              }`}</FormLabel>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  inputMode={isTimeBased ? "text" : "numeric"}
                  min={0}
                  onWheel={numberInputOnWheelPreventChange}
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
