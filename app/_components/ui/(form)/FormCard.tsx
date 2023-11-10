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
      className="flex max-w-[95%] flex-col items-stretch  rounded-lg bg-card shadow-lg shadow-gray-700 lg:max-w-6xl"
      id="form-card"
    >
      <CardHeader className=" max-w-3xl pb-16 pt-8 text-center font-mono sm:pt-16">
        <CardTitle className=" text-3xl text-neutral-800 sm:text-5xl">
          <span className="">Effortless</span> PT score calculation.
        </CardTitle>
        <CardDescription className="text-sm sm:text-2xl">
          Simply enter your test results and click submit!
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
