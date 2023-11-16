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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/(shadcn)/select";
import { Info } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { Separator } from "../../(shadcn)/separator";
import ExerciseVideos from "../ExerciseVideos";
import { Exercise } from "./ExerciseFields";

const ExerciseSelect = ({ exercise }: { exercise: Exercise }) => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();

  const {
    component: { label: componentLabel, value: componentValue },
    options,
  } = exercise;

  return (
    <FormField
      rules={{ required: { value: true, message: "Select an exercise" } }}
      control={control}
      name={`${componentValue}Exercise`}
      render={({ field }) => (
        <FormItem>
          {/* FORM LABEL */}
          <FormLabel className=" flex items-center justify-start gap-4 text-3xl ">
            <h2>{componentLabel} Component</h2>

            {/* DIALOG POPUP BOX */}
            <Dialog>
              <DialogTrigger
                title="Open video exercise demonstrations!"
                tabIndex={-1} // Prevents button from being focused with tab
                className="flex gap-1 text-primary hover:scale-110 active:scale-105"
              >
                <Info size={18} />
                <span className="hidden text-sm sm:inline">
                  View exercise demos
                </span>
              </DialogTrigger>
              <DialogContent className=" max-h-[50svh] max-w-[80svh] overflow-y-scroll sm:max-h-[80svh]">
                <DialogHeader>
                  <DialogTitle className="mb-2 text-2xl">
                    {componentLabel} Exercise Demonstrations
                  </DialogTitle>
                  <Separator />
                  <ExerciseVideos exercise={exercise} />
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
              aria-label={`Select ${componentLabel} Exercise`}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select exercise type" />
              </SelectTrigger>
            </FormControl>

            {/* OPTIONS DROPDOWN */}
            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  key={option.label}
                  value={option.value}
                  disabled={["2km_walk", "exempt"].includes(option.value)}
                >
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
