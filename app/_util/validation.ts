import { z } from "zod";

export const schema = z
  .object({
    gender: z.enum(["male", "female"]),
    ageGroup: z.enum([
      "<25",
      "25-29",
      "30-34",
      "35-39",
      "40-44",
      "45-49",
      "50-54",
      "55-59",
      ">60",
    ]),

    upperExercise: z.enum(["pushups", "handrelease"]),
    upperInput: z.coerce.number(),

    coreExercise: z.enum(["situps", "crunches", "plank"]),
    coreInput: z.coerce.number({ required_error: "required " }),

    cardioExercise: z.enum(["mile", "shuttles"]),
    cardioInput: z.string().refine(
      (value) => {
        if (typeof value === "number") {
          return true;
        } else if (/^\d+:\d+$/.test(value)) {
          console.log("Processing as MM:SS format:", value);

          return true;
        } else {
          // If it's neither a number nor "MM:SS" format, it's invalid
          console.log("Invalid input:", value);
          return false;
        }
      },
      { message: "Invalid input" },
    ),
  })
  .required();

export type FormValuesType = z.infer<typeof schema>;
