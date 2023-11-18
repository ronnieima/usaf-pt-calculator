import { useFormContext, useFormState } from "react-hook-form";
import FailReasons from "./FailReasons";
import ScoreMessage from "./ScoreMessage";
import Spinner from "../../Spinner";
import { Separator } from "../../(shadcn)/separator";
import Link from "next/link";
import { formatAgeGroup } from "@/app/_util/helpers";

function Score() {
  const { isSubmitting, isSubmitSuccessful } = useFormState();

  const { watch } = useFormContext();
  const gender = watch("gender");
  const ageGroup = watch("ageGroup");

  const formattedAgeGroup = formatAgeGroup(ageGroup);
  return (
    <section className="my-16 flex flex-col  items-center justify-center gap-8 text-4xl  text-foreground">
      {isSubmitting && <Spinner />}
      {isSubmitSuccessful && (
        <section
          className={`${
            isSubmitting && "opacity-0"
          } flex flex-col gap-4 text-center`}
        >
          <Separator className="mt-16" />

          <ScoreMessage />
          <p className="text-lg">
            View the {gender} / {ageGroup} score chart{" "}
            <Link
              href={`https://hnnyotwjhikrytqynjyk.supabase.co/storage/v1/object/public/usafptcalculator/scorechart_${gender}_${formattedAgeGroup}.pdf`}
              target="_blank"
              className="text-primary hover:text-primary/50"
            >
              here
            </Link>
          </p>
          <FailReasons />
        </section>
      )}
    </section>
  );
}

export default Score;
