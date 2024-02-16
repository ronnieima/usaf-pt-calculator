import React from 'react';
import UnderConstruction from '../../components/UnderConstruction';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Card, CardDescription, CardTitle } from '../../components/ui/card';

const ResourcesPage = () => {
  return (
    <section className="h-[100svh] p-64">
      <Card className=" mx-auto flex max-w-sm flex-col gap-2 p-8">
        <CardTitle>DAFMAN 36-2905</CardTitle>
        <CardDescription>Physical Fitness Program</CardDescription>
        <Button asChild>
          <Link
            target="_blank"
            href="https://res.cloudinary.com/dfpbpun9z/image/upload/v1700294852/dafman36-2905.pdf"
          >
            DAFMAN 36-2905
          </Link>
        </Button>
      </Card>
    </section>
  );
};

export default ResourcesPage;
