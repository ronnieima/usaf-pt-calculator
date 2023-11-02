import MainForm from "./_ui/(form)/MainForm";
import Header from "./_ui/Header";

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-r from-sky-800 to-indigo-800 p-5">
      <Header />
      <MainForm />
    </div>
  );
}
