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
import { useFormContext } from "react-hook-form";

const buttonStyle =
  "w-full py-8 transition-colors duration-300 hover:cursor-pointer active:bg-primary/70 peer-aria-checked:bg-primary bg-primary/50 peer-aria-checked:ring-2 peer-aria-checked:ring-ring peer-aria-checked:ring-foreground/70 text-2xl shadow-lg active:translate-y-1 hover:scale-105";

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
          <FormLabel className="text-2xl">Gender</FormLabel>
          <FormControl>
            <RadioGroup
              disabled={isSubmitting}
              onValueChange={field.onChange}
              value={field.value}
              className="flex flex-col"
            >
              <div className="grid gap-4 text-center sm:grid-cols-2">
                <FormItem>
                  <FormControl className=" shadow-2xl">
                    <RadioGroupItem
                      className="peer hidden focus-visible:border-opacity-25"
                      value="male"
                    />
                  </FormControl>
                  <Button
                    asChild
                    // peer-aria-checked must be used with RadixUI components
                    className={buttonStyle}
                  >
                    <FormLabel>Male</FormLabel>
                  </Button>
                </FormItem>

                <FormItem>
                  <FormControl>
                    <RadioGroupItem className="peer hidden" value="female" />
                  </FormControl>
                  <Button asChild className={buttonStyle}>
                    <FormLabel className="font-normal">Female</FormLabel>
                  </Button>
                </FormItem>
              </div>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default GenderRadioButtons;
