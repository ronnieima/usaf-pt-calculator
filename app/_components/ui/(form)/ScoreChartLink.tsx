import { formatAgeGroup } from "@/app/_util/helpers";
import Link from "next/link";
import React from "react";
import { useFormContext } from "react-hook-form";

function ScoreChartLink() {
  const { watch } = useFormContext();
  const gender = watch("gender");
  const ageGroup = watch("ageGroup");

  const formattedAgeGroup = formatAgeGroup(ageGroup);
  return (
    <>
      {gender && ageGroup && (
        <p className="text-center text-lg">
          View the {gender} / {ageGroup} score chart{" "}
          <Link
            href={`https://hnnyotwjhikrytqynjyk.supabase.co/storage/v1/object/public/usafptcalculator/scorechart_${gender}_${formattedAgeGroup}.pdf`}
            target="_blank"
            className="text-primary hover:text-primary/50"
          >
            here
          </Link>
        </p>
      )}
    </>
  );
}

export default ScoreChartLink;
