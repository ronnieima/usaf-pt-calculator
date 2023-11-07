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
import React from "react";
import { useFormContext } from "react-hook-form";

type ExerciseSelectProps = {
  options: { value: string; label: string }[];
  exerciseLabel: string;
  type: string;
};
const ExerciseSelect = ({
  options,
  exerciseLabel,
  type,
}: ExerciseSelectProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      rules={{ required: { value: true, message: "Select an exercise" } }}
      control={control}
      name={`${type}Exercise`}
      render={({ field }) => (
        <FormItem>
          <FormLabel className=" flex justify-between  text-2xl">
            <h2>{exerciseLabel} Exercise</h2>
            {/* <span>MINmax</span> */}
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
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
          {/* <FormDescription>
            View the{" "}
            <Link href={`/exercises#${type}`} className="hover:underline">
              {exerciseLabel} exercise demonstrations
            </Link>
          </FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ExerciseSelect;
