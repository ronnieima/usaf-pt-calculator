import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import MainForm from "./_components/ui/(form)/MainForm";
import Header from "./_components/ui/Header";
import ScoreContextProvider from "./_contexts/ScoreContext";

export default function Home() {
  return (
    <main className="px-4 pb-16 text-background sm:px-8 md:px-16 lg:px-32">
      <Header />

      <Card
        className="rounded-2xl bg-card/90 shadow-2xl shadow-slate-500  sm:px-16"
        id="form-card"
      >
        <CardHeader className="pb-16 pt-8 text-center sm:pt-16">
          <CardTitle className="text-3xl sm:text-5xl">
            Get your PT score with ease.
          </CardTitle>
          <CardDescription className="text-xl sm:text-2xl">
            Just input your results and click submit!
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
    </main>
  );
}
