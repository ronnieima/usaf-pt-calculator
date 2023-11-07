import {
  FormControl,
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

type AgeGroupSelectProps = {
  options: string[];
};

const AgeGroupSelect = ({ options }: AgeGroupSelectProps) => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <FormField
      rules={{ required: { value: true, message: "Select an age group" } }}
      control={control}
      name={`ageGroup`}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-2xl">
            <h2>Age Group</h2>
          </FormLabel>
          <Select
            disabled={isSubmitting}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select age group" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
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

export default AgeGroupSelect;
