"use client";

import { NumberInput, TextInput } from "@mantine/core";

import { formatTypeName } from "../../../_util/helpers";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

type ExerciseSelectProps = {
  type: string;
  options: { value: string; label: string }[];
};

const ExerciseSelect = ({ type, options }: ExerciseSelectProps) => {
  const exerciseLabel = formatTypeName(type);
  const { control, watch } = useFormContext();
  const exerciseType = watch(`${type}Exercise`);
  const isVisibleInput = Boolean(exerciseType);
  const isTimeBased = exerciseType === "plank" || exerciseType === "mile";
  // useEffect(() => {
  //   // Unregister the field to remove old validation rules
  //   setValue(`${exerciseLabel} Input`, null);
  // }, [exerciseType, setValue, exerciseLabel]);

  return (
    <section className="flex flex-col gap-4 ">
      <FormField
        control={control}
        name={`${type}Exercise`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex justify-between text-2xl">
              <h2>{exerciseLabel}</h2>
              <span>MINmax</span>
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl className="p-8">
                <SelectTrigger className="text-xl text-slate-900">
                  <SelectValue placeholder="Select exercise type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>
              View the{" "}
              <Link href={`/exercises/#${type}`} className="hover:underline">
                {exerciseLabel} exercise demonstrations
              </Link>
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="relative ">
        <div
          className={
            isVisibleInput
              ? "transform opacity-100 transition-all duration-1000"
              : "invisible absolute h-0 w-0 -translate-y-4 transform opacity-0 transition-all duration-0"
          }
        >
          {isTimeBased ? (
            <TextInput
              name={`${type}Input`}
              size="lg"
              radius="md"
              label={`${exerciseType} Time`}
              placeholder="MM:SS"
            />
          ) : (
            <NumberInput
              name={`${type}Input`}
              size="xl"
              radius="lg"
              label={`${exerciseType} Reps`}
              placeholder="Reps"
              hideControls
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ExerciseSelect;
