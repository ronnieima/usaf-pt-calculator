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

const ChartsPage = () => {
  return (
    <div>
      <UnderConstruction />
      <Card>
        <CardHeader>
          <CardTitle>&gt;25</CardTitle>
        </CardHeader>
        <CardContent>
          <Link
            href="https://hnnyotwjhikrytqynjyk.supabase.co/storage/v1/object/public/usafptcalculator/scorechart_male_lt25.pdf"
            target="_blank"
          >
            PDF HERE BOI
          </Link>
          <Dialog>
            {/* todo: add this pdf in a dialog */}
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className="min-w-none  min-h-[40rem] "></DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartsPage;
