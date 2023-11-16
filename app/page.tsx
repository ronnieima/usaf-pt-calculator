import { CldVideoPlayer } from "next-cloudinary";
import FormCard from "./_components/ui/(form)/FormCard";
import Header from "./_components/ui/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-background sm:pb-16">
      <Header />
      <FormCard />

    </main>
  );
}
