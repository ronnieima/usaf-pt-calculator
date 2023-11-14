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
import { convertStringToCamelCase } from "@/app/_util/helpers";
import { useFormContext } from "react-hook-form";
import { Exercise } from "./ExerciseFields";

const ExerciseSelect = ({ options, category }: Exercise) => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();

  const categoryValue = convertStringToCamelCase(category);

  return (
    <FormField
      rules={{ required: { value: true, message: "Select an exercise" } }}
      control={control}
      name={`${categoryValue}Exercise`}
      render={({ field }) => (
        <FormItem>
          <FormLabel className=" flex justify-between text-2xl ">
            <h2>{category} Exercise</h2>
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
