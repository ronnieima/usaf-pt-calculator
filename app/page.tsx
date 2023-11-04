import MainForm from "./components/ui/(form)/MainForm";
import Header from "./components/ui/Header";

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-r from-sky-800 to-indigo-800 p-5">
      <Header />
      <MainForm />
    </div>
  );
}
