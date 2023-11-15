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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CldVideoPlayer } from "next-cloudinary";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/(shadcn)/select";
import {
  convertStringToCamelCase,
  formatExerciseName,
} from "@/app/_util/helpers";
import { useFormContext } from "react-hook-form";
import { Exercise } from "./ExerciseFields";
import { Info } from "lucide-react";

const ExerciseSelect = ({ options, category }: Exercise) => {
  const {
    control,
    formState: { isSubmitting },
    watch,
  } = useFormContext();

  const categoryValue = convertStringToCamelCase(category);
  const selectedExercise = watch(`${categoryValue}Exercise`);
  const exerciseLabel = formatExerciseName(selectedExercise);
  console.log(exerciseLabel);
  return (
    <FormField
      rules={{ required: { value: true, message: "Select an exercise" } }}
      control={control}
      name={`${categoryValue}Exercise`}
      render={({ field }) => (
        <FormItem>
          <FormLabel className=" flex items-center justify-start gap-2 text-2xl ">
            <h2>{category} Exercise</h2>

            <Dialog>
              <DialogTrigger>
                <Info />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                  <DialogDescription></DialogDescription>
                  <h3>{exerciseLabel}</h3>
                  <CldVideoPlayer
                    width="500"
                    height="200"
                    src={`exercises/${selectedExercise}`}
                    logo={false}
                  />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </FormLabel>
          <Select
            disabled={isSubmitting}
            onValueChange={field.onChange}
            value={field.value}
          >
            <FormControl
              className="border-card-foreground/30 shadow-lg"
              aria-label={`Select ${category} Exercise`}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select exercise type" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => {
                // example: 1.5 Mile Run > 1.5_mile_run
                const optionValue = option.toLowerCase().split(" ").join("_");
                return (
                  <SelectItem key={option} value={optionValue}>
                    {option}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ExerciseSelect;
