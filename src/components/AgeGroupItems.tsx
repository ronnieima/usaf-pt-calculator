'use client';
import { MenubarItem } from '@/src/components/ui/menubar';
import { cn, formatAgeGroup } from '@/src/lib/utils';
import Link from 'next/link';
import { ageGroups } from '../config/content';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

export default function AgeGroupItems({
  gender,
  inMenuBar,
  className,
}: {
  gender: 'male' | 'female';
  inMenuBar: boolean;
  className?: string;
}) {
  return (
    <>
      {ageGroups.map((ageGroup) => {
        const formattedAgeGroup = formatAgeGroup(ageGroup);
        if (!inMenuBar)
          return (
            <Link
              href={`https://res.cloudinary.com/dfpbpun9z/image/upload/v1706012763/usaf-pt-calculator/score-charts/scorechart_${gender}_${formattedAgeGroup}.pdf`}
              target="_blank"
              className={cn('space-x-2', className)}
            >
              <span>{ageGroup}</span>
              <ExternalLink size={14} />
            </Link>
          );
        return (
          <MenubarItem asChild key={`${gender}-${ageGroup}`}>
            <Link
              href={`https://res.cloudinary.com/dfpbpun9z/image/upload/v1706012763/usaf-pt-calculator/score-charts/scorechart_${gender}_${formattedAgeGroup}.pdf`}
              target="_blank"
              className="space-x-2"
            >
              <span>{ageGroup}</span>
              <ExternalLink size={14} />
            </Link>
          </MenubarItem>
        );
      })}
    </>
  );
}
