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
import { Separator } from "@radix-ui/react-select";
import React from "react";
import { useFormContext } from "react-hook-form";

export const ageGroups = [
  "<25",
  "25-29",
  "30-34",
  "35-39",
  "40-44",
  "45-49",
  "50-54",
  "55-59",
  ">60",
];

const AgeGroupSelect = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <>
      <Separator />

      <FormField
        rules={{ required: { value: true, message: "Select an age group" } }}
        control={control}
        name={`ageGroup`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-2xl">
              <h3>Age Group</h3>
            </FormLabel>
            <Select disabled={isSubmitting} onValueChange={field.onChange}>
              <FormControl
                className="border-card-foreground/30 shadow-lg"
                aria-label="Select age group"
                {...field}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select age group" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {ageGroups.map((ageGroup) => (
                  <SelectItem key={ageGroup} value={ageGroup}>
                    {ageGroup}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default AgeGroupSelect;
