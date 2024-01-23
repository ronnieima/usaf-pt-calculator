"use client";
import "next-cloudinary/dist/cld-video-player.css";

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
import { Exercise } from "@/app/content";
import { useFormContext } from "react-hook-form";
import ExerciseDemoVideosDialog from "./ExerciseDemoVideosDialog";

const ExerciseSelect = ({ exercise }: { exercise: Exercise }) => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();

  const { component, options } = exercise;

  return (
    <FormField
      rules={{ required: { value: true, message: "Select an exercise" } }}
      control={control}
      name={`${component.value}Exercise`}
      render={({ field }) => (
        <FormItem>
          {/* FORM LABEL */}
          <FormLabel className=" flex items-center justify-start gap-4 text-xl font-bold lg:text-2xl ">
            <h3>{component.label} Component</h3>
            <ExerciseDemoVideosDialog exercise={exercise} />
          </FormLabel>

          <Select
            disabled={isSubmitting}
            onValueChange={field.onChange}
            value={field.value}
          >
            <FormControl
              className="border-card-foreground/30 shadow-lg"
              aria-label={`Select ${component.label} Exercise`}
              {...field}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select exercise type" />
              </SelectTrigger>
            </FormControl>

            {/* OPTIONS DROPDOWN */}
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.label} value={option.value}>
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
