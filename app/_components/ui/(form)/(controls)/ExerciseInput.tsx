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
import React, { useEffect } from "react";
import { useController, useFormContext } from "react-hook-form";
import TimePicker from "react-time-picker";

import { Exercise } from "@/app/content";
import "react-time-picker/dist/TimePicker.css";
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
  const gender = watch("gender");
  const ageGroup = watch("ageGroup");
  const showMinMax = minimumPerformanceValue || maximumPerformanceValue;

  const isTimeBased =
    selectedExercise === "forearm_plank" || selectedExercise === "1.5_mile_run";

  const exerciseLabel = formatExerciseName(selectedExercise);
  // Compute the min and max values based on whether it's time-based
  const computeValue = isTimeBased
    ? secondsToMinutesAndSeconds
    : (value: any) => value;

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

    setComponentMinMaxValues(componentValue, {
      minimumPerformanceValue: minValue!,
      maximumPerformanceValue: maxValue!,
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
    console.log("field reset!");
    resetField(`${componentValue}Input`, { keepDirty: true });
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

  return (
    <>
      {selectedExercise === "exempt" && null}
      {isTimeBased ? (
        <FormField
          control={control}
          name={`${componentValue}Input`}
          rules={getValidationRules(componentLabel, selectedExercise)}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">
                <h3>{`${exerciseLabel} ${isTimeBased ? "Time" : "Reps"}`}</h3>
              </FormLabel>
              <FormControl className="w-full border border-card-foreground/30 shadow-lg">
                <TimePicker
                  className="h-16 w-full border-slate-100"
                  disableClock
                  maxDetail="second"
                  format="mm:ss"
                  locale="en-US"
                  minutePlaceholder="mm"
                  secondPlaceholder="ss"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ) : (
        <FormField
          control={control}
          name={`${componentValue}Input`}
          rules={getValidationRules(componentLabel, selectedExercise)}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">
                <h3>{`${exerciseLabel} ${isTimeBased ? "Time" : "Reps"}`}</h3>
              </FormLabel>
              <FormControl className="w-full border border-card-foreground/30 shadow-lg">
                <Input
                  disabled={isSubmitting}
                  inputMode="numeric"
                  className="focus:ring-primary"
                  min={0}
                  onWheel={numberInputOnWheelPreventChange}
                  placeholder="Reps"
                  type="number"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {showMinMax && (
        <section className="flex justify-between text-base sm:text-2xl">
          <p className="text-red-700">
            {`Min: ${computeValue(minimumPerformanceValue)} ${
              isTimeBased || NaN ? "" : "reps"
            }`}
          </p>
          <p className="text-green-700">
            {`Max: ${computeValue(maximumPerformanceValue)} ${
              isTimeBased || NaN ? "" : "reps"
            }`}
          </p>
        </section>
      )}
    </>
  );
};

export default ExerciseInput;
