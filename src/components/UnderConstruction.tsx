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
      </section>
    </main>
  );
};

export default UnderConstruction;
