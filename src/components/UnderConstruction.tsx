import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Card, CardDescription, CardTitle } from './ui/card';

const UnderConstruction = () => {
  return (
    <main className="  p-5 text-zinc-300">
      <section className="flex min-h-[100svh] flex-col items-center justify-center  gap-8 py-16 text-center">
        <h1 className="text-6xl">This page is under construction.</h1>
        <p>New pages will be coming very soon!</p>
        <Button asChild className="h-16 bg-indigo-500 px-16 shadow-lg">
          <Link href="/" className="flex justify-between">
            <ChevronLeft />
            Back home
          </Link>
        </Button>
        <Card className=" flex flex-col gap-2 p-8">
          <CardTitle>DAFMAN 36-2905</CardTitle>
          <CardDescription>Physical Fitness Program</CardDescription>
          <Button asChild>
            <Link
              className=""
              href="https://res.cloudinary.com/dfpbpun9z/image/upload/v1700294852/dafman36-2905.pdf"
            >
              DAFMAN 36-2905
            </Link>
          </Button>
        </Card>
      </section>
    </main>
  );
};

export default UnderConstruction;
