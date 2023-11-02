import { z } from "zod";

export const schema = z
  .object({
    Gender: z.string({ required_error: "required " }),
    "Age Group": z.string({ required_error: "required " }),
    "Upper Body": z.string({ required_error: "required " }),
    "Upper Body Input": z
      .string()
      .or(z.number({ required_error: "required " })),
    Core: z.string({ required_error: "required " }),
    "Core Input": z.string({ required_error: "required " }).or(z.number()),
    Cardio: z.string(),
    "Cardio Input": z.string({ required_error: "required " }).or(z.number()),
  })
  .required();

export type FormValuesType = z.infer<typeof schema>;
