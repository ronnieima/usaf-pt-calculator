import { z } from "zod";

export const schema = z
  .object({
    gender: z.string(),
    ageGroup: z.string(),
    upperExercise: z.string(),
    upperInput: z.string(),
    coreExercise: z.string(),
    coreInput: z.string(),
    cardioExercise: z.string(),
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
