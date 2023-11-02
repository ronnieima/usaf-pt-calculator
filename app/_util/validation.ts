import { z } from "zod";

export const schema = z
  .object({
    gender: z.string({ required_error: "required " }),
    ageGroup: z.string({ required_error: "required " }),

    upperExercise: z.string({ required_error: "required " }),
    upperInput: z.string().or(z.number({ required_error: "required " })),

    coreExercise: z.string({ required_error: "required " }),
    coreInput: z.string({ required_error: "required " }).or(z.number()),

    cardioExercise: z.string(),
    cardioInput: z.string({ required_error: "required " }).or(z.number()),
  })
  .required();

export type FormValuesType = z.infer<typeof schema>;
