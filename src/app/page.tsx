import FormCard from '../components/(form)/FormCard';
import Header from '../components/Header';

export default function Home() {
  return (
    <main className="text-background flex flex-col items-center justify-center sm:pb-16">
      <Header />
      <FormCard />
    </main>
  );
}
