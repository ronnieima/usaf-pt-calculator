import { z } from "zod";

export const schema = z
  .object({
    gender: z.string().min(1, "Required boi"),
    ageGroup: z.string().min(1, "Required boi"),
    upperExercise: z.string().min(1, "Required boi"),
    upperInput: z.string().min(1, "Required boi"),
    coreExercise: z.string().min(1, "Required boi"),
    coreInput: z.string().min(1, "Required boi"),
    cardioExercise: z.string().min(1, "Required boi"),
    cardioInput: z
      .string()
      .min(0, "Must be a positive number")
      .regex(
        /^(([0]?[0-5][0-9]|[0-9]):([0-5][0-9]))$/,
        "Invalid time format (MM:SS)",
      ),
  })
  .required();

export type FormValuesType = z.infer<typeof schema>;
