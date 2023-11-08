import { toast } from "react-toastify";
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
    <main className="pb-16 text-background sm:px-8 md:px-16 lg:px-32">
      <Header />

      <Card className="bg-card/90 shadow-xl sm:px-16" id="form-card">
        <CardHeader className="py-16 text-center">
          <CardTitle className="text-4xl">
            Get your PT score with ease.
          </CardTitle>
          <CardDescription>
            Just input your results and click submit!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScoreContextProvider>
            <MainForm />
          </ScoreContextProvider>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
}
