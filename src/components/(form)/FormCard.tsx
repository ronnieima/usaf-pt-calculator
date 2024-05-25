import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import MainForm from './MainForm';

const FormCard = () => {
  return (
    <Card
      className="flex max-w-4xl w-full scroll-mt-16 flex-col items-center rounded-none bg-card shadow-lg pt-8  sm:rounded-md"
      id="form-card"
    >
      <CardHeader className=" max-w-3xl pb-16 pt-8 text-center ">
        <CardTitle className=" text-3xl tracking-tighter text-neutral-800 sm:text-5xl">
          PT Scoring Made Simple.
        </CardTitle>
        <CardDescription className="text-sm tracking-tighter sm:text-2xl">
          Aim high, achieve higher. See what it takes to excel on test day.
        </CardDescription>
      </CardHeader>

      <CardContent className="min-w-full">
        <MainForm />
      </CardContent>
    </Card>
  );
};

export default FormCard;
