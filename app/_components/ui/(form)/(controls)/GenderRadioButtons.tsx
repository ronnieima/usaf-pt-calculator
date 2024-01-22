import { Button } from "@/app/_components/ui/(shadcn)/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/(shadcn)/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/app/_components/ui/(shadcn)/radio-group";
import { capitalizeFirstLetter } from "@/app/_util/helpers";
import { useFormContext } from "react-hook-form";

export const genders = ["male", "female"];

function GenderRadioButtons() {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <FormField
      control={control}
      name={"gender"}
      rules={{ required: { value: true, message: "Gender is required" } }}
      render={({ field }) => (
        <FormItem className="">
          <FormLabel className="text-xl font-bold lg:text-2xl">
            <h3>Gender</h3>
          </FormLabel>
          <FormControl>
            <RadioGroup
              disabled={isSubmitting}
              onValueChange={field.onChange}
              {...field}
            >
              <section className="grid gap-4 text-center sm:grid-cols-2">
                {genders.map((gender) => {
                  return (
                    <FormItem key={gender}>
                      <FormControl className="shadow-2xl">
                        <RadioGroupItem
                          className="peer hidden focus-visible:border-opacity-25"
                          value={gender}
                        />
                      </FormControl>
                      <Button
                        aria-label={gender}
                        asChild
                        className="w-full bg-gray-900 py-8 text-2xl shadow-lg transition-colors duration-300 hover:scale-[1.01] hover:cursor-pointer active:translate-y-1 active:bg-primary/70 peer-aria-checked:scale-105 peer-aria-checked:bg-blue-700  peer-aria-checked:ring-2
                        peer-aria-checked:ring-blue-950/70"
                      >
                        <FormLabel>{capitalizeFirstLetter(gender)}</FormLabel>
                      </Button>
                    </FormItem>
                  );
                })}
              </section>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default GenderRadioButtons;
