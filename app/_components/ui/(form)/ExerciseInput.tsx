import { getValidationRules } from "@/app/_util/validation";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/(shadcn)/form";
import { Input } from "@/app/_components/ui/(shadcn)/input";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { formatExerciseName } from "@/app/_util/helpers";
import { watch } from "fs";
import { getExerciseMinMax } from "@/app/_db/supabase";

type ExerciseInputProps = {
  exerciseType: string;
  exerciseLabel: string;
  category: string;
};

const ExerciseInput = ({ exerciseType, category }: ExerciseInputProps) => {
  const {
    control,
    formState: { isSubmitting },
    watch,
  } = useFormContext();
  const isVisibleInput = Boolean(exerciseType);
  const isTimeBased = exerciseType === "plank" || exerciseType === "mile";
  const exerciseLabel = formatExerciseName(exerciseType);

  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const showMinMax = min || max;

  const gender = watch("gender");
  const ageGroup = watch("ageGroup");

  useEffect(() => {
    // if gender, age group, or exercise is not selected, the effect will not run
    if (!gender || !ageGroup || !exerciseType) return;

    async function fetchMinMax() {
      const { min, max } = await getExerciseMinMax(
        gender,
        ageGroup,
        exerciseType,
      );
      setMin(min);
      setMax(max);
    }

    fetchMinMax();
  }, [gender, ageGroup, exerciseType]);

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
          name={`${category}Input`}
          rules={getValidationRules(category, exerciseType)}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">{`${exerciseLabel} ${
                isTimeBased ? "Time" : "Reps"
              }`}</FormLabel>
              <FormControl className="border-card-foreground">
                <Input
                  disabled={isSubmitting}
                  inputMode={isTimeBased ? "text" : "numeric"}
                  className="focus:ring-primary"
                  min={0}
                  onWheel={numberInputOnWheelPreventChange}
                  placeholder={isTimeBased ? "MM:SS" : "Reps"}
                  type={isTimeBased ? "text" : "number"}
                  {...field}
                />
              </FormControl>
              {/* <p>{`Gender: ${gender} | Age: ${ageGroup} | Exercise: ${exerciseType}`}</p> */}
              {showMinMax && (
                <section className="flex justify-between">
                  <p className="text-red-700">
                    {`Min: ${min} ${isTimeBased ? "" : "reps"}`}
                  </p>
                  <p className="text-green-700">
                    {`Max: ${max} ${!isTimeBased ? "reps" : ""}`}
                  </p>
                </section>
              )}

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ExerciseInput;
