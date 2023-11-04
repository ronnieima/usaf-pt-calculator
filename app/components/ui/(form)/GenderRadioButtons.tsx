"use client";
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
const GenderSelect = () => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={`gender`}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-2xl">
            <h2>Gender</h2>
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem className="bg-sky-200 " key={"male"} value={"male"}>
                Male
              </SelectItem>
              <SelectItem
                className="bg-rose-200"
                key={"female"}
                value={"female"}
              >
                Female
              </SelectItem>
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default GenderSelect;
