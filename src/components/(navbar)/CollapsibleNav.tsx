import React, { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import { ChevronRight, ChevronDown, GanttChartSquare } from 'lucide-react';
import AgeGroupItems from '../AgeGroupItems';
import { Button, buttonVariants } from '../ui/button';
import { cn } from '@/src/lib/utils';

export default function CollapsibleNav() {
  const [isOpen, setIsOpen] = useState(false);
  console.log({ isOpen });
  return (
    <Collapsible open={isOpen} onOpenChange={(prevOpen) => setIsOpen(prevOpen)}>
      <CollapsibleTrigger asChild className="">
        <Button
          variant="ghost"
          className="h-24 w-full justify-between font-bold"
        >
          <div className="flex items-center gap-2">
            <GanttChartSquare />
            <span className="text-lg text-zinc-600">Charts</span>
          </div>
          <ChevronRight
            className={cn({
              'rotate-90 transition-transform': isOpen,
            })}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="transition-all">
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button
              variant={'outline'}
              className="h-14 w-full text-xl font-semibold"
            >
              Male <ChevronDown />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col  overflow-auto text-center transition-all">
            <AgeGroupItems
              gender="male"
              className={cn('my-2', buttonVariants({ variant: 'default' }))}
              inMenuBar={false}
            />
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button
              variant={'outline'}
              className="h-14 w-full text-xl font-semibold"
            >
              Female <ChevronDown />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col  overflow-auto text-center transition-all">
            <AgeGroupItems
              gender="female"
              inMenuBar={false}
              className={cn('my-2', buttonVariants({ variant: 'default' }))}
            />
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  );
}
