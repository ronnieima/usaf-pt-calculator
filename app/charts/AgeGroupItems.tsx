import React from "react";
import { formatAgeGroup } from "../_util/helpers";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "../_components/ui/(shadcn)/card";
import { ageGroups } from "../content";

export default function AgeGroupItems() {
  const genders = ["male", "female"];

  return (
    <>
      {genders.map((gender) =>
        ageGroups.map((ageGroup) => {
          const ageGroupFormatted = formatAgeGroup(ageGroup);
          return (
            <Link
              key={`${gender}-${ageGroup}`}
              href={`https://hnnyotwjhikrytqynjyk.supabase.co/storage/v1/object/public/usafptcalculator/scorechart_${gender}_${ageGroupFormatted}.pdf`}
              target="_blank"
            >
              <Card
                className={`flex h-32 w-full items-center justify-center rounded-none shadow-2xl hover:scale-105 active:translate-y-1 ${
                  gender === "male"
                    ? "bg-blue-100 hover:bg-blue-200"
                    : "bg-pink-100 hover:bg-pink-200"
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex flex-col items-center justify-center text-3xl capitalize">
                    <p>{gender}</p>
                    <p>{ageGroup}</p>
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          );
        }),
      )}
      ;
    </>
  );
}
