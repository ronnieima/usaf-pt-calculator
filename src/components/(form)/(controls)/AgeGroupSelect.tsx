import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import { ageGroups } from '@/src/config/content';
import { Separator } from '@radix-ui/react-select';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const AgeGroupSelect = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <>
      <Separator />

      <FormField
        rules={{ required: { value: true, message: 'Select an age group' } }}
        control={control}
        name={`ageGroup`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xl font-bold lg:text-2xl">
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
