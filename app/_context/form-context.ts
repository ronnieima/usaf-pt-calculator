import { createFormContext } from "@mantine/form";
import { FormValuesType } from "../_util/validation";

export const [
  CalculatorFormProvider,
  useCalculatorFormContext,
  useCalculatorForm,
] = createFormContext<FormValuesType>();
