import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/(shadcn)/form";
import { Input } from "@/app/_components/ui/(shadcn)/input";
import { getExerciseMinMax } from "@/app/_db/supabase";
import {
  convertStringToCamelCase,
  formatExerciseName,
  secondsToMinutesAndSeconds,
} from "@/app/_util/helpers";
import { getValidationRules } from "@/app/_util/validation";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
type ExerciseInputProps = {
  category: string;
};

const ExerciseInput = ({ category }: ExerciseInputProps) => {
  const {
    control,
    formState: { isSubmitting },
    watch,
    resetField,
  } = useFormContext();
  const categoryValue = convertStringToCamelCase(category);
  const selectedExercise = watch(`${categoryValue}Exercise`);
  const isVisibleInput = Boolean(selectedExercise);
  const isTimeBased =
    selectedExercise === "forearm_plank" || selectedExercise === "1.5_mile_run";

  const exerciseLabel = formatExerciseName(selectedExercise);

  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const showMinMax = min || max;

  const gender = watch("gender");
  const ageGroup = watch("ageGroup");

  useEffect(() => {
    // if gender, age group, or exercise is not selected, the effect will not run
    if (!gender || !ageGroup || !selectedExercise) return;

    async function fetchMinMax() {
      let { min, max } = await getExerciseMinMax(
        gender,
        ageGroup,
        selectedExercise,
      );

      if (isTimeBased) {
        min = secondsToMinutesAndSeconds(min);
        max = secondsToMinutesAndSeconds(max);
      }
      setMin(min);
      setMax(max);
    }

    fetchMinMax();
  }, [gender, ageGroup, selectedExercise, isTimeBased]);

  useEffect(() => {
    resetField(`${categoryValue}Input`);
  }, [selectedExercise, resetField, categoryValue]);

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
          name={`${categoryValue}Input`}
          rules={getValidationRules(category, selectedExercise)}
          render={({ field: { onChange, ...field } }) => (
            <FormItem>
              <FormLabel className="text-2xl ">{`${exerciseLabel} ${
                isTimeBased ? "Time" : "Reps"
              }`}</FormLabel>
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
