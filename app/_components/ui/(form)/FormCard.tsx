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
import Score from "./Score";

const FormCard = () => {
  return (
    <Card
      className="flex max-w-3xl scroll-mt-16 flex-col items-center rounded-none bg-card shadow-lg  sm:rounded-md"
      id="form-card"
    >
      <CardHeader className=" max-w-3xl pb-16 pt-8 text-center font-mono  ">
        <CardTitle className=" text-3xl text-neutral-800 sm:text-5xl">
          <span className="">Effortless</span> PT score calculation.
        </CardTitle>
        <CardDescription className="text-sm sm:text-2xl">
          Simply enter your test results and click submit!
        </CardDescription>
      </CardHeader>
      <CardContent className="min-w-full">
        <ScoreContextProvider>
          <MainForm />
        </ScoreContextProvider>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default FormCard;
