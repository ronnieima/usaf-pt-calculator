"use client";

import Link from "next/link";
import { ageGroups } from "../_components/ui/(form)/(controls)/AgeGroupSelect";
import { Card, CardHeader, CardTitle } from "../_components/ui/(shadcn)/card";

const genders = ["male", "female"];
const ages = ageGroups;
export function formatAgeGroup(ageGroup: string) {
  switch (ageGroup) {
    case "<25":
      return "lt25";
    case ">60":
      return "gt60";
    default:
      return ageGroup;
  }
}
const ChartsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-16">
      <header className=" justify-center py-16">
        <h1 className="text-center text-6xl text-background">Score Charts</h1>
        <p className="text-center text-slate-300">Links open in a new tab</p>
      </header>
      <div className="grid min-h-screen w-full max-w-[50rem] grid-cols-2 items-center justify-center gap-2 px-2 sm:gap-8 lg:grid-cols-3  ">
        {genders.map((gender) =>
          ages.map((ageGroup) => {
            console.log(ageGroup);
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
      </div>
    </div>
  );
};

export default ChartsPage;
