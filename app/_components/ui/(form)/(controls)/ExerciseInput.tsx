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
  numberInputOnWheelPreventChange,
  secondsToMinutesAndSeconds,
} from "@/app/_util/helpers";
import { getValidationRules } from "@/app/_util/validation";
import { Exercise, exercises, walkStandardsAgeGroups } from "@/app/content";
import { useFormStore } from "@/app/stores/store";
import { TimeField } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../(shadcn)/select";

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
  const exerciseLabel = exercises
    .find((exercise) => exercise.component.value === componentValue)
    ?.options.find((opt) => opt.value === selectedExercise)?.label;
  const gender = watch("gender");
  const ageGroup = watch("ageGroup");
  const showMinMax = minimumPerformanceValue || maximumPerformanceValue;

  const isTimeBased = ["1.5_mile_run", "forearm_plank", "2km_walk"].includes(
    selectedExercise,
  );

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
    resetField(`${componentValue}Input`, { defaultValue: "" });
  }, [selectedExercise, resetField, componentValue]);

  if (selectedExercise === "exempt") return null;
  return (
    <>
      {/* The 2KM walk has a different set of age groups */}
      {selectedExercise === "2km_walk" && (
        <FormField
          control={control}
          name="walkAgeInput"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">
                <h3>2 Kilometer Walk Age Group</h3>
              </FormLabel>
              <FormControl className="w-full border border-card-foreground/30 shadow-lg">
                <Select onValueChange={field.onChange} {...field}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                  <SelectContent>
                    {walkStandardsAgeGroups.map((ageGroup) => (
                      <SelectItem key={ageGroup} value={ageGroup}>
                        {ageGroup}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

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
              {isTimeBased ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    className="w-full rounded-lg border-card-foreground/30 "
                    format="mm:ss"
                    {...field}
                  />
                </LocalizationProvider>
              ) : (
                <Input
                  disabled={isSubmitting}
                  inputMode="numeric"
                  className="focus:ring-primary"
                  min={0}
                  onWheel={numberInputOnWheelPreventChange}
                  placeholder="Reps"
                  type="number"
                  {...field}
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {!!showMinMax ? (
        <section className="flex justify-between text-base sm:text-2xl">
          <p className="text-red-700">
            {`Min: ${computeValue(minimumPerformanceValue)} ${
              isTimeBased ? "" : "reps"
            }`}
          </p>
          <p className="text-green-700">
            {`Max: ${computeValue(maximumPerformanceValue)} ${
              isTimeBased ? "" : "reps"
            }`}
          </p>
        </section>
      ) : (
        <span
          className="
        text-center text-sm text-muted-foreground"
        >
          Select an age group and gender to get min/max values.
        </span>
      )}
    </>
  );
};

export default ExerciseInput;
