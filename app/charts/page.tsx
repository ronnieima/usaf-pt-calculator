import React from "react";

import UnderConstruction from "../_components/UnderConstruction";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../_components/ui/(shadcn)/card";

const ChartsPage = () => {
  return (
    <>
      <UnderConstruction />
      <Card>
        <CardHeader>
          <CardTitle>&gt;25</CardTitle>
        </CardHeader>
        <CardContent>
          {/* todo: add this pdf in a dialog */}
          <iframe src="https://hnnyotwjhikrytqynjyk.supabase.co/storage/v1/object/public/usafptcalculator/scorechart_male_lt25.pdf"></iframe>
        </CardContent>
      </Card>
    </>
  );
};

export default ChartsPage;
