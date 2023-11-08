import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/(shadcn)/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/(shadcn)/select";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Exercise } from "./ExerciseFields";

const ExerciseSelect = ({ options, category }: Exercise) => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <FormField
      rules={{ required: { value: true, message: "Select an exercise" } }}
      control={control}
      name={`${category}Exercise`}
      render={({ field }) => (
        <FormItem>
          <FormLabel className=" flex justify-between  text-2xl">
            <h2>{category} Exercise</h2>
          </FormLabel>
          <Select
            disabled={isSubmitting}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl className="border-card-foreground">
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
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ExerciseSelect;
