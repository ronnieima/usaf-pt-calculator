import {
  FormControl,
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
import React from "react";
import { useFormContext } from "react-hook-form";

type AgeGroupSelectProps = {
  options: string[];
};

const AgeGroupSelect = ({ options }: AgeGroupSelectProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={`ageGroup`}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-2xl">
            <h2>Age Group</h2>
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl className=" p-8">
              <SelectTrigger className="text-xl text-slate-900">
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
