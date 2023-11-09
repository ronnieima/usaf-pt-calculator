import FormCard from "./_components/ui/(form)/FormCard";
import Header from "./_components/ui/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pb-16 text-background">
      <Header />
      <FormCard />
    </main>
  );
}
