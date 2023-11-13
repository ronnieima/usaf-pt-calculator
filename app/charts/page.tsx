"use client";

import Link from "next/link";
import { ageGroups } from "../_components/ui/(form)/(controls)/AgeGroupSelect";
import { Card, CardHeader, CardTitle } from "../_components/ui/(shadcn)/card";

const genders = ["male", "female"];
const ages = ageGroups;

const ChartsPage = () => {
  function formatAgeGroup(ageGroup: string) {
    switch (ageGroup) {
      case "lt25":
        return "<25";
      case "gt60":
        return ">60";
      default:
        return ageGroup;
    }
  }
  return (
    <div className="p-16">
      <h1 className="flex items-center justify-center text-center text-6xl text-background">
        Score Charts
      </h1>
      <div className="grid min-h-screen gap-8 py-16 md:grid-cols-2 lg:grid-cols-3 lg:px-32 ">
        {genders.map((gender) =>
          ages.map((ageGroup) => {
            ageGroup = formatAgeGroup(ageGroup);
            return (
              <Link
                key={`${gender}-${ageGroup}`}
                href={`https://hnnyotwjhikrytqynjyk.supabase.co/storage/v1/object/public/usafptcalculator/scorechart_${gender}_${ageGroup}.pdf`}
                target="_blank"
              >
                <Card
                  className={`flex h-32 items-center justify-center rounded-none shadow-2xl hover:scale-105 active:translate-y-1 ${
                    gender === "male"
                      ? "bg-blue-100 hover:bg-blue-200"
                      : "bg-pink-100 hover:bg-pink-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="flex flex-col items-center justify-center text-xl capitalize">
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
