import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ScoreContextProvider from "@/app/_contexts/ScoreContext";
import MainForm from "./MainForm";

const FormCard = () => {
  return (
    <Card
      className=" max-w-[95%] rounded-2xl bg-card/90 shadow-2xl  shadow-slate-500 lg:max-w-xl"
      id="form-card"
    >
      <CardHeader className="pb-16 pt-8 text-center sm:pt-16">
        <CardTitle className="text-3xl sm:text-5xl">
          <span className="underline">Effortless</span> PT score calculation.
        </CardTitle>
        <CardDescription className="text-sm sm:text-2xl">
          Simply enter your test results and click &quot;Submit&quot; to
          instantly compute your PT score!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScoreContextProvider>
          <MainForm />
        </ScoreContextProvider>
      </CardContent>
      {/* <CardFooter>
      <p>Card Footer</p>
    </CardFooter> */}
    </Card>
  );
};

export default FormCard;
