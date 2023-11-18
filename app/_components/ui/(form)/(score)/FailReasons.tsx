import { useScoreContext } from "@/app/_contexts/ScoreContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/(shadcn)/accordion";
import React from "react";
import Link from "next/link";

function FailReasons() {
  const {
    scores: { minimumMetStatus, totalScore },
  } = useScoreContext();

  if (
    totalScore > 75 &&
    Object.values(minimumMetStatus).every((v) => v === true)
  )
    return null;

  return (
    <Accordion type="single" collapsible className="mt-16 w-full">
      <AccordionItem value="item-1" className=" bg-gray-100 px-4 text-xl">
        <AccordionTrigger>Why did I fail?</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 text-left text-2xl text-red-700">
            {totalScore < 75 && <p>Score is below 75.</p>}
            {Object.values(minimumMetStatus).some((v) => !v) && (
              <div>
                <h3>
                  You did not meet the minimum for the following categories:
                </h3>
                <ul>
                  {Object.entries(minimumMetStatus).map(([key, value]) => {
                    if (!value) {
                      return (
                        <li key={key} className="list-item capitalize">
                          - {key === "upper" ? "Upper Body" : key}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default FailReasons;
