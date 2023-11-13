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

const ChartsPage = () => {
  return (
    <div>
      <UnderConstruction />
      <Card>
        <CardHeader>
          <CardTitle>&gt;25</CardTitle>
        </CardHeader>
        <CardContent>
          <Dialog>
            {/* todo: add this pdf in a dialog */}
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className="min-w-none  min-h-[40rem] ">
              <iframe
                src="https://hnnyotwjhikrytqynjyk.supabase.co/storage/v1/object/public/usafptcalculator/scorechart_male_lt25.pdf"
                className="h-full w-full py-2"
              ></iframe>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartsPage;
