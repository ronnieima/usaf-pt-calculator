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
  numberInputOnWheelPreventChange,
  secondsToMinutesAndSeconds,
} from "@/app/_util/helpers";
import { getValidationRules } from "@/app/_util/validation";
import { Exercise, exercises } from "@/app/content";
import { useRealTimeInfo } from "@/app/hooks/useRealTimeInfo";
import { useFormStore } from "@/app/stores/store";
import { TimeField } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Separator } from "../../(shadcn)/separator";
import { cn } from "@/lib/utils";

const ExerciseInput = ({ exercise }: { exercise: Exercise }) => {
  const {
    control,
    formState: { isSubmitting },
    resetField,
  } = useFormContext();

  const {
    component: { label: componentLabel, value: componentValue },
  } = exercise;

  const { selectedExercise, currentInput } = useRealTimeInfo(componentValue);

  const { minimumPerformanceValue, maximumPerformanceValue } = useFormStore(
    (state) => state.minMaxValues[componentValue],
  );
  const score = useFormStore((state) => state.scores[componentValue]);

  const exerciseLabel = exercises
    .find((exercise) => exercise.component.value === componentValue)
    ?.options.find((opt) => opt.value === selectedExercise)?.label;

  const showMinMax = minimumPerformanceValue || maximumPerformanceValue;

  const isTimeBased = ["1.5_mile_run", "forearm_plank", "2km_walk"].includes(
    selectedExercise,
  );

  // Compute the min and max values based on whether it's time-based
  const computeValue = isTimeBased
    ? secondsToMinutesAndSeconds
    : (value: any) => value;

  useEffect(() => {
    resetField(`${componentValue}Input`, { defaultValue: "" });
  }, [selectedExercise, resetField, componentValue]);

  if (selectedExercise === "exempt") return null;
  return (
    <>
      <FormField
        control={control}
        name={`${componentValue}Input`}
        rules={getValidationRules(componentLabel, selectedExercise)}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xl font-bold lg:text-2xl">
              <h3>{`${exerciseLabel} ${isTimeBased ? "Time" : "Reps"}`}</h3>
            </FormLabel>
            <FormControl className="w-full border border-card-foreground/30 shadow-lg">
              {isTimeBased ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    className="w-full rounded-lg border-card-foreground/30 "
                    format="mm:ss"
                    slotProps={{
                      textField: {
                        error: false,
                      },
                    }}
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
        <section className="flex justify-start gap-16 text-base sm:text-2xl">
          <div className="flex items-start gap-4">
            {!isTimeBased && (
              <>
                <div className="flex flex-col items-center">
                  <p>
                    <span className="text-3xl font-bold text-red-500">
                      {computeValue(minimumPerformanceValue)}{" "}
                    </span>
                    {!isTimeBased && <span className="text-xs">reps</span>}
                  </p>
                  <span className="text-xs font-semibold">Min</span>
                </div>
                <Separator orientation="vertical" />
              </>
            )}

            {/* MAX */}
            <div className="flex flex-col items-center ">
              <p>
                <span
                  className={cn("text-3xl font-bold text-green-500", {
                    "text-red-500": isTimeBased,
                  })}
                >
                  {computeValue(maximumPerformanceValue)}{" "}
                </span>
                {!isTimeBased && <span className="text-xs">reps</span>}
              </p>
              <span className="text-xs font-semibold">Max</span>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col items-center ">
              <p>
                <span className="text-3xl font-bold text-blue-900">
                  {score}{" "}
                </span>
                <span className="text-xs">pts</span>
              </p>
              <span className="text-xs font-semibold">Score</span>
              {currentInput >= maximumPerformanceValue && !isTimeBased && (
                <span className="relative text-xs text-green-800">
                  Maxed out
                </span>
              )}
            </div>
          </div>
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
