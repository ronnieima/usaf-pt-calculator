import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/(shadcn)/card";
import MainForm from "./MainForm";

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
        <MainForm />
      </CardContent>
    </Card>
  );
};

export default FormCard;
