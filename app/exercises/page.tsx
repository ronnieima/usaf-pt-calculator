"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import UnderConstruction from "../_components/UnderConstruction";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ExercisesPage() {
  return (
    <section className="min-h-screen p-6">
      <Card className="h-64">
        <CardHeader>
          <CardTitle>
            <h2>Hand Release Pushup</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <iframe
            className="max-h-fit max-w-fit"
            src="https://www.dvidshub.net/video/embed/825278"
            width="800"
            height="450"
            frameborder="0"
            allowtransparency
            allowfullscreen
          ></iframe>
        </CardContent>
      </Card>
    </section>
  );
}

export default ExercisesPage;
