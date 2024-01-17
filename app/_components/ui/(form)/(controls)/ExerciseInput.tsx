"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/(shadcn)/form";
import { Input } from "@/app/_components/ui/(shadcn)/input";

import {
  getMaximumPerformanceValue,
  getMinimumPerformanceValue,
} from "@/app/_util/getScore";
import {
  formatExerciseName,
  secondsToMinutesAndSeconds,
} from "@/app/_util/helpers";
import { getValidationRules } from "@/app/_util/validation";
import { useFormStore } from "@/app/stores/store";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Exercise } from "./ExerciseFields";

const ExerciseInput = ({ exercise }: { exercise: Exercise }) => {
  const {
    control,
    formState: { isSubmitting },
    watch,
    resetField,
  } = useFormContext();

  const {
    component: { label: componentLabel, value: componentValue },
  } = exercise;

  const { minimumPerformanceValue, maximumPerformanceValue } = useFormStore(
    (state) => state.minMaxValues[componentValue],
  );
  const setComponentMinMaxValues = useFormStore(
    (state) => state.setComponentMinMaxValues,
  );

  const selectedExercise = watch(`${componentValue}Exercise`);

  const isVisibleInput = Boolean(selectedExercise);
  const isTimeBased =
    selectedExercise === "forearm_plank" || selectedExercise === "1.5_mile_run";

  const exerciseLabel = formatExerciseName(selectedExercise);

  const showMinMax = minimumPerformanceValue || maximumPerformanceValue;

  const gender = watch("gender");
  const ageGroup = watch("ageGroup");

  useEffect(() => {
    // Early exit if the necessary data isn't available
    if (!gender || !ageGroup || !selectedExercise) return;

    const minValue = getMinimumPerformanceValue(
      gender,
      ageGroup,
      selectedExercise,
    );
    const maxValue = getMaximumPerformanceValue(
      gender,
      ageGroup,
      selectedExercise,
    );

    // Compute the min and max values based on whether it's time-based
    const computeValue = isTimeBased
      ? secondsToMinutesAndSeconds
      : (value: any) => value;

    setComponentMinMaxValues(componentValue, {
      minimumPerformanceValue: computeValue(minValue!),
      maximumPerformanceValue: computeValue(maxValue!),
    });
  }, [
    gender,
    ageGroup,
    selectedExercise,
    componentValue,
    isTimeBased,
    setComponentMinMaxValues,
  ]);

  useEffect(() => {
    resetField(`${componentValue}Input`);
  }, [selectedExercise, resetField, componentValue]);

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

  if (selectedExercise === "exempt") {
    return null;
  }

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
          name={`${componentValue}Input`}
          rules={getValidationRules(componentLabel, selectedExercise)}
          render={({ field: { onChange, ...field } }) => (
            <FormItem>
              <FormLabel className="text-2xl">
                <h3>{`${exerciseLabel} ${isTimeBased ? "Time" : "Reps"}`}</h3>
              </FormLabel>
              <FormControl className="border-card-foreground/30 shadow-lg">
                {isTimeBased ? (
                  // I had to pull an external TimePicker component from MUI
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        className="w-full rounded-lg border-card-foreground/30 "
                        format="mm:ss"
                        views={["minutes", "seconds"]}
                        onChange={onChange}
                        timeSteps={{ minutes: 1, seconds: 1 }}
                        {...field}
                      />
                    </LocalizationProvider>
                  </div>
                ) : (
                  <Input
                    disabled={isSubmitting}
                    inputMode="numeric"
                    className="focus:ring-primary"
                    min={0}
                    onWheel={numberInputOnWheelPreventChange}
                    placeholder="Reps"
                    type="number"
                    onChange={onChange}
                  />
                )}
              </FormControl>
              {showMinMax && (
                <section className="flex justify-between text-base sm:text-2xl">
                  <p className="text-red-700">
                    {`Min: ${minimumPerformanceValue} ${
                      isTimeBased || NaN ? "" : "reps"
                    }`}
                  </p>
                  <p className="text-green-700">
                    {`Max: ${maximumPerformanceValue} ${
                      isTimeBased || NaN ? "" : "reps"
                    }`}
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
