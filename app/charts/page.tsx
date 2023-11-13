"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import UnderConstruction from "../_components/UnderConstruction";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../_components/ui/(shadcn)/card";
import Link from "next/link";
import { ageGroups } from "../_components/ui/(form)/(controls)/AgeGroupSelect";

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
      <h1 className="flex items-center justify-center text-6xl text-background">
        PT Charts
      </h1>
      <div className="min-h-screen gap-8 px-32 py-16 md:grid md:grid-cols-2 lg:grid-cols-3 ">
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
                    <CardTitle className="capitalize">{`${gender} ${formatAgeGroup(
                      ageGroup,
                    )}`}</CardTitle>
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
