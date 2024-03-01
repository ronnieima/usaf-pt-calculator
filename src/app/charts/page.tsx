import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import AgeGroupItems from './AgeGroupItems';
import { ageGroups } from '@/src/config/content';

const ChartsPage = () => {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-[80rem] px-4 py-8">
        <Card className="">
          <CardHeader className="pb-8">
            <h1 className="text-left text-4xl font-bold leading-8">
              Score Charts
            </h1>
            <p className="text-center text-muted-foreground sm:text-left">
              Select your age group
            </p>
          </CardHeader>
          <CardContent className="flex gap-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Male</h2>
              <div className="flex flex-col flex-wrap">
                <AgeGroupItems gender="male" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Female</h2>
              <div className="flex flex-col flex-wrap">
                <AgeGroupItems gender="female" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default ChartsPage;
