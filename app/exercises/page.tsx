'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/_components/ui/(shadcn)/accordion';
import UnderConstruction from '../_components/UnderConstruction';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/(shadcn)/card';

function ExercisesPage() {
  return (
    <UnderConstruction />
    // <section className="min-h-screen p-6">
    //   <Card className="h-64">
    //     <CardHeader>
    //       <CardTitle>
    //         <h2>Hand Release Pushup</h2>
    //       </CardTitle>
    //     </CardHeader>
    //     <CardContent>
    //       <iframe
    //         className="max-h-fit max-w-fit"
    //         src="https://www.dvidshub.net/video/embed/825278"
    //         width="800"
    //         height="450"
    //         frameBorder="0"
    //         allowTransparency
    //         allowFullScreen
    //       ></iframe>
    //     </CardContent>
    //   </Card>
    // </section>
  );
}

export default ExercisesPage;
