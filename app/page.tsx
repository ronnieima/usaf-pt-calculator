import { toast } from "react-toastify";
import MainForm from "./_components/ui/(form)/MainForm";
import Header from "./_components/ui/Header";
import ScoreContextProvider from "./_contexts/ScoreContext";

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-r from-sky-800 to-indigo-800 p-5">
      <Header />
      <ScoreContextProvider>
        <MainForm />
      </ScoreContextProvider>
    </div>
  );
}
