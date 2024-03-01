import React from 'react';
import { formatAgeGroup } from '@/src/lib/utils';
import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '../../components/ui/card';
import { ageGroups } from '../../config/content';
import { Button } from '@/src/components/ui/button';
import { MenubarItem } from '@/src/components/ui/menubar';

export default function AgeGroupItems({
  gender,
}: {
  gender: 'male' | 'female';
}) {
  return (
    <>
      {ageGroups.map((ageGroup) => {
        const formattedAgeGroup = formatAgeGroup(ageGroup);
        return (
          <MenubarItem asChild key={`${gender}-${ageGroup}`}>
            <Link
              href={`https://res.cloudinary.com/dfpbpun9z/image/upload/v1706012763/usaf-pt-calculator/score-charts/scorechart_${gender}_${formattedAgeGroup}.pdf`}
              target="_blank"
            >
              {ageGroup}
            </Link>
          </MenubarItem>
        );
      })}
    </>
  );
}
