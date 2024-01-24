import Link from 'next/link';
import React from 'react';
import { Button } from '../components/ui/button';
import { ChevronRight } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start font-extrabold text-zinc-900">
      <h1 className="text-[12rem] ">404</h1>
      <p className="relative bottom-16 text-lg">Page not found.</p>
      <Button asChild className=" h-16 bg-indigo-500 px-16 shadow-lg">
        <Link href="/" className="flex justify-between">
          Back home <ChevronRight />
        </Link>
      </Button>
    </main>
  );
};

export default NotFoundPage;
