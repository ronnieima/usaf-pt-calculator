import { useScoreContext } from "@/app/_contexts/ScoreContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FailReasons() {
  const {
    scores: { minimumMetStatus, totalScore },
  } = useScoreContext();

  if (
    totalScore > 75 &&
    Object.values(minimumMetStatus).every((v) => v === true)
  )
    return null;
  // console.log(minimumMetStatus);
  return (
    <Accordion type="single" collapsible className="s w-full">
      <AccordionItem value="item-1" className=" bg-gray-100 px-4 text-xl">
        <AccordionTrigger>Why did I fail?</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 text-left text-3xl">
            {totalScore < 75 && <p className=" text-red-500">Score below 75</p>}
            {!minimumMetStatus.upper && (
              <p className="  text-red-500">
                Minimum not met for upper body category
              </p>
            )}
            {!minimumMetStatus.core && (
              <p className=" text-red-500">Minimum not met for core category</p>
            )}
            {!minimumMetStatus.cardio && (
              <p className=" text-red-500">
                Minimum not met for cardio category
              </p>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default FailReasons;
